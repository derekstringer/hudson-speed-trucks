/**
 * Hudson Speed — Top 20 truck deals (live inventory)
 * Loads inventory.json; falls back to EMBEDDED_TRUCKS.
 * Max 20 cards. Filters only reorder / narrow within Top 20.
 * RamBox = PRIORITY FIND because rare (not required). Two-tone scarce on both makes.
 */

const MAX_DEALS = 20;
const TARGET_PAYMENT = 700;
const STRETCH_PAYMENT_CAP = 755;

/** Real Top-20 inventory embedded so the site works even if inventory.json fetch fails. */
const EMBEDDED_TRUCKS = [];

function paymentAt5Pct72(principal) {
  const r = 0.05 / 12;
  const n = 72;
  if (principal == null || principal <= 0) return 0;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function hasRamBox(t) {
  return !!(t.hasRamBox || t.rambox || t.priorityFind);
}

function dealerLabel(t) {
  if (typeof t.dealer === "string" && t.dealer) return t.dealer;
  if (t.dealer && typeof t.dealer === "object" && t.dealer.name) return t.dealer.name;
  if (t.dealer_name) return t.dealer_name;
  return "—";
}

function dealerPhone(t) {
  if (t.dealer && typeof t.dealer === "object" && t.dealer.phone) return t.dealer.phone;
  return t.phone || null;
}

function dealerAddress(t) {
  if (t.dealer && typeof t.dealer === "object" && t.dealer.address) return t.dealer.address;
  return null;
}

function linkMap(t) {
  const links = t.links || t.listingUrls || {};
  return {
    dealer: links.dealer || null,
    carscom: links.carscom || null,
    cargurus: links.cargurus || null,
  };
}

function optionsList(t) {
  return t.options_highlighted || t.advertisedOptions || [];
}

function bookPurchase(t) {
  return t.book_purchase ?? t.kbbFairPurchase ?? null;
}

function bookWholesale(t) {
  return t.book_wholesale_proxy ?? t.kbbTradeIn ?? null;
}

function askingPrice(t) {
  return t.asking_price ?? t.price ?? 0;
}

function isTwoTone(t) {
  return !!(t.two_tone || t.twoTone);
}

function ltvPurchase(t) {
  if (t.ltv != null && t.ltv > 0) return t.ltv;
  const book = bookPurchase(t);
  const ask = askingPrice(t);
  if (book == null || book <= 0 || ask <= 0) return null;
  return ask / book;
}

function ltvWholesale(t) {
  const book = bookWholesale(t);
  const ask = askingPrice(t);
  if (book == null || book <= 0 || ask <= 0) return null;
  return ask / book;
}

function pillFromLtv(ltv) {
  if (ltv == null) return { key: "tbd", label: "TBD" };
  if (ltv <= 0.9) return { key: "great", label: "Great" };
  if (ltv <= 1.0) return { key: "good", label: "Good" };
  if (ltv <= 1.1) return { key: "fair", label: "Fair" };
  return { key: "stretch", label: "Stretch" };
}

function dealPill(t) {
  if (t.dealPill) {
    const label = String(t.dealPill);
    const key = label.toLowerCase();
    if (["great", "good", "fair", "stretch", "tbd"].includes(key)) {
      return { key, label: label.charAt(0).toUpperCase() + label.slice(1).toLowerCase() };
    }
  }
  if (t.pill && t.pill.key) return t.pill;
  return pillFromLtv(ltvPurchase(t));
}

function normalizeTruck(raw) {
  const ask = askingPrice(raw);
  const pay = raw.payment5_72 != null ? Number(raw.payment5_72) : paymentAt5Pct72(ask);
  const rambox = hasRamBox(raw);
  const twoTone = isTwoTone(raw);
  const links = linkMap(raw);
  const ltvP = ltvPurchase(raw);
  const ltvW = ltvWholesale(raw);
  const bookP = bookPurchase(raw);
  const bookW = bookWholesale(raw);
  const bookSource =
    raw.book_source ||
    "KBB Fair Purchase + Trade-In proxy (estimate — re-verify on kbb.com)";

  return {
    ...raw,
    id: raw.id || raw.vin || `truck-${raw.rank || Math.random()}`,
    asking_price: ask,
    price: ask,
    two_tone: twoTone,
    twoTone,
    rambox,
    hasRamBox: rambox,
    priorityFind: !!(raw.priorityFind || rambox),
    payment: pay,
    payment5_72: pay,
    ltv_purchase: ltvP,
    ltv_wholesale: ltvW,
    ltv: ltvP,
    book_purchase: bookP,
    book_wholesale_proxy: bookW,
    book_purchase_low: raw.book_purchase_low ?? null,
    book_purchase_high: raw.book_purchase_high ?? null,
    book_source: bookSource,
    pill: dealPill(raw),
    dealer_label: dealerLabel(raw),
    dealer_phone: dealerPhone(raw),
    dealer_address: dealerAddress(raw),
    options_highlighted: optionsList(raw),
    links,
    condition: raw.condition || "Good",
    notes: raw.notes || raw.rank_reason || "",
    photos: Array.isArray(raw.photos) ? raw.photos : [],
    rank: raw.rank != null ? Number(raw.rank) : null,
    missingDataNotes: Array.isArray(raw.missingDataNotes) ? raw.missingDataNotes : [],
    ttlr: raw.ttlr || null,
    payment5_72_price_only: raw.payment5_72_price_only != null ? Number(raw.payment5_72_price_only) : null,
  };
}

function extractTrucks(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.trucks)) return data.trucks;
  return [];
}

function top20Deals(raw) {
  const list = extractTrucks(raw).map(normalizeTruck).slice(0, MAX_DEALS);
  // Prefer inventory rank order when present
  const hasRanks = list.every((t) => t.rank != null);
  if (hasRanks) {
    return list.sort((a, b) => a.rank - b.rank);
  }
  return list.map((t, i) => ({ ...t, rank: i + 1 }));
}

let TOP20 = top20Deals(EMBEDDED_TRUCKS);
let META = {};

function money(n) {
  if (n == null || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function pct(x) {
  if (x == null) return "—";
  return (x * 100).toFixed(0) + "%";
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sortList(list, key) {
  const arr = [...list];
  switch (key) {
    case "payment": return arr.sort((a, b) => a.payment - b.payment);
    case "ltv": return arr.sort((a, b) => (a.ltv_purchase ?? 99) - (b.ltv_purchase ?? 99));
    case "miles": return arr.sort((a, b) => a.miles - b.miles);
    case "year": return arr.sort((a, b) => b.year - a.year);
    case "price": return arr.sort((a, b) => a.asking_price - b.asking_price);
    case "distance": return arr.sort((a, b) => a.distance_mi - b.distance_mi);
    case "rank":
    default: return arr.sort((a, b) => a.rank - b.rank);
  }
}

function getFilters() {
  const makes = [...document.querySelectorAll('input[name="make"]:checked')].map((el) => el.value);
  return {
    makes,
    requireTwoTone: document.getElementById("requireTwoTone").checked,
    requireRamBox: document.getElementById("requireRamBox").checked,
    sortBy: document.getElementById("sortBy").value,
  };
}

function applyFilters(base) {
  const f = getFilters();
  let list = base.filter((t) => f.makes.includes(t.make));
  if (f.requireTwoTone) list = list.filter((t) => t.two_tone);
  if (f.requireRamBox) list = list.filter((t) => hasRamBox(t));
  return sortList(list, f.sortBy);
}

function linkOrSpan(href, label) {
  if (href) {
    return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>`;
  }
  return `<span class="link-disabled" title="No listing URL">${escapeHtml(label)}</span>`;
}


function money2(n) {
  if (n == null || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderPaymentBreakdown(t) {
  const bd = t.ttlr;
  if (!bd) {
    return `<div class="pay-breakdown"><h3>How this payment was calculated</h3><p class="pay-breakdown-missing">TTL&amp;R breakdown not on this card — payment may be price-only.</p></div>`;
  }
  const ratePct = bd.sales_tax_rate_pct || ((bd.sales_tax_rate != null) ? ((bd.sales_tax_rate * 100).toFixed(2) + "%") : "—");
  return `
    <div class="pay-breakdown">
      <h3>How this payment was calculated</h3>
      <table class="pay-table">
        <tbody>
          <tr><th>Asking price</th><td>${money(bd.asking_price ?? t.asking_price)}</td></tr>
          <tr><th>Sales tax (${escapeHtml(ratePct)}) · ${escapeHtml(bd.jurisdiction || "Eunice / Acadia Parish LA")}</th><td>${money2(bd.sales_tax_amount)}</td></tr>
          <tr><th>Title fee</th><td>${money2(bd.title_fee)}</td></tr>
          <tr><th>License fee (truck plate)</th><td>${money2(bd.license_fee)}</td></tr>
          <tr><th>Registration (OMV handling)</th><td>${money2(bd.registration_fee)}</td></tr>
          <tr class="pay-total"><th>Amount financed (OTD)</th><td>${money2(bd.amount_financed)}</td></tr>
          <tr><th>APR / term</th><td>5% / 72 mo</td></tr>
          <tr class="pay-total"><th>Monthly payment</th><td>${money(Math.round(bd.monthly_payment ?? t.payment))}/mo</td></tr>
        </tbody>
      </table>
      <p class="pay-footnote">No trade-in assumed. LTV pills still use asking vs KBB Fair Purchase / Trade-In (not OTD).</p>
    </div>`;
}

function renderMissingNotes(t) {
  const notes = t.missingDataNotes || [];
  if (!notes.length) return "";
  const lis = notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("");
  return `<div class="missing-notes" role="note"><strong>Data gaps:</strong><ul>${lis}</ul></div>`;
}

function renderCard(t) {
  const title = `${t.year} ${t.make} ${t.model} ${t.trim}`;
  const rambox = hasRamBox(t);
  const stretchCaution =
    t.pill.key === "stretch"
      ? `<div class="caution">Caution: LTV above 110%. Only consider if payment ≤ $${STRETCH_PAYMENT_CAP} and LTV is still compelling.</div>`
      : "";

  const badges = [];
  if (rambox || t.priorityFind) {
    badges.push(`<span class="priority-badge" title="RamBox is rare — priority find, not required">PRIORITY FIND · RamBox</span>`);
  }
  if (t.two_tone) badges.push(`<span class="badge two-tone" title="Two-tone is scarce on Ram and Ford">Two-tone</span>`);
  badges.push(`<span class="deal-pill ${t.pill.key}">${escapeHtml(t.pill.label)}</span>`);

  const options = (t.options_highlighted || [])
    .map((o) => {
      const hot = /rambox|two-?tone/i.test(o);
      return `<li class="${hot ? "hot" : ""}">${escapeHtml(o)}</li>`;
    })
    .join("");

  const morePhotos = (t.photos || [])
    .map((src) => `<img src="${escapeHtml(src)}" alt="" loading="lazy" />`)
    .join("");

  const priorityBanner = rambox
    ? `<div class="priority-banner">
        <span class="priority-badge large">PRIORITY FIND</span>
        <p><strong>RamBox</strong> is rare — priority find, not a hard requirement. Still prefer scarce <strong>two-tone</strong> first when choosing what to sacrifice.</p>
      </div>`
    : "";

  const bookPurchaseHtml =
    t.book_purchase != null
      ? `${money(t.book_purchase)}${
          t.book_purchase_low != null
            ? ` <span style="color:var(--text-muted)">(range ${money(t.book_purchase_low)}–${money(t.book_purchase_high)})</span>`
            : ""
        } <span style="color:var(--accent-warn, #e8b84a);font-size:0.75rem">est.</span>`
      : "Book TBD";

  const bookWholesaleHtml =
    t.book_wholesale_proxy != null
      ? `${money(t.book_wholesale_proxy)} <span style="color:var(--text-muted)">(trade-in proxy · est.)</span>`
      : "—";

  const dealerLine = escapeHtml(t.dealer_label || "—");
  const phoneLine = t.dealer_phone
    ? `<dt>Phone</dt><dd><a href="tel:${escapeHtml(t.dealer_phone)}">${escapeHtml(t.dealer_phone)}</a></dd>`
    : "";
  const addrLine = t.dealer_address
    ? `<dt>Address</dt><dd>${escapeHtml(t.dealer_address)}</dd>`
    : "";

  const photoSrc = t.photos?.[0] || "";

  return `
  <article class="truck-card ${rambox ? "has-rambox" : ""}" data-id="${escapeHtml(t.id)}">
    <button type="button" class="card-summary" aria-expanded="false" aria-controls="detail-${escapeHtml(t.id)}">
      <img class="card-photo" src="${escapeHtml(photoSrc)}" alt="" loading="lazy" />
      <div class="card-main">
        <div class="card-title-row">
          <span class="card-rank">#${t.rank}</span>
          <h3 class="card-title">${escapeHtml(title)}</h3>
          <span class="chevron" aria-hidden="true">▼</span>
        </div>
        <div class="card-meta">
          <span><strong>${(t.miles!=null?Number(t.miles).toLocaleString():"—")}</strong> mi</span>
          <span><strong>${t.distance_mi!=null?t.distance_mi:"—"}</strong> mi away</span>
          <span>${escapeHtml(t.condition)}</span>
        </div>
        <div class="card-badges">${badges.join("")}</div>
        ${renderMissingNotes(t)}
      </div>
      <div class="card-stats">
        <div class="stat-price">${money(t.asking_price)}</div>
        <div class="stat-pay">~${money((t.payment!=null?Math.round(t.payment):0))}/mo OTD @ 5%/72</div>
        <div class="stat-ltv">LTV ${pct(t.ltv_purchase)}</div>
      </div>
    </button>
    <div class="card-detail" id="detail-${escapeHtml(t.id)}" hidden>
      ${priorityBanner}
      <div class="photo-strip">${morePhotos}</div>
      <div class="detail-grid">
        <div class="detail-block">
          <h3>Vehicle</h3>
          <dl>
            <dt>VIN</dt><dd>${escapeHtml(t.vin || "—")}</dd>
            <dt>Dealer</dt><dd>${dealerLine}</dd>
            ${phoneLine}
            ${addrLine}
            <dt>Condition</dt><dd>${escapeHtml(t.condition)}</dd>
            <dt>Distance</dt><dd>${t.distance_mi} mi</dd>
          </dl>
          <h3 style="margin-top:1rem">Advertised options</h3>
          <ul class="options-list">${options || "<li>None listed</li>"}</ul>
          <div class="links-row">
            ${linkOrSpan(t.links?.carscom, "Cars.com")}
            ${linkOrSpan(t.links?.cargurus, "CarGurus")}
            ${linkOrSpan(t.links?.dealer, "Dealer")}
          </div>
        </div>
        <div class="detail-block">
          <h3>Book &amp; payment</h3>
          <dl>
            <dt>Asking</dt><dd>${money(t.asking_price)}</dd>
            <dt>Payment 5%/72 (OTD+TTL&amp;R)</dt><dd>${money((t.payment!=null?Math.round(t.payment):0))}/mo</dd>
            <dt>KBB purchase</dt><dd>${bookPurchaseHtml}</dd>
            <dt>LTV purchase</dt><dd>${pct(t.ltv_purchase)}</dd>
            <dt>Wholesale proxy</dt><dd>${bookWholesaleHtml}</dd>
            <dt>LTV wholesale</dt><dd>${pct(t.ltv_wholesale)}</dd>
            <dt>Source</dt><dd style="font-family:var(--sans);font-size:0.78rem">${escapeHtml(t.book_source || "—")}</dd>
            <dt>Pill</dt><dd><span class="deal-pill ${t.pill.key}">${escapeHtml(t.pill.label)}</span></dd>
          </dl>
          ${stretchCaution}
        </div>
      </div>
      ${renderPaymentBreakdown(t)}
      <div class="notes">
        <strong>Sacrifice rank:</strong> prefer scarce two-tone first, then rare RamBox (priority find — not required).
        ${t.two_tone ? " Two-tone: yes." : " Two-tone: no."}
        ${rambox ? " RamBox: yes (PRIORITY FIND — rare)." : " RamBox: no."}
        ${t.notes ? `<br /><strong>Notes:</strong> ${escapeHtml(t.notes)}` : ""}
        ${t.rank_reason ? `<br /><strong>Why #${t.rank}:</strong> ${escapeHtml(t.rank_reason)}` : ""}
        ${(t.missingDataNotes && t.missingDataNotes.length) ? `<br /><strong>Missing data:</strong> ${t.missingDataNotes.map(escapeHtml).join("; ")}` : ""}
      </div>
    </div>
  </article>`;
}

function render() {
  const list = applyFilters(TOP20);
  const el = document.getElementById("truckList");
  const empty = document.getElementById("emptyState");
  const hunt = document.getElementById("noRamboxNote");
  const count = document.getElementById("resultsCount");

  count.textContent =
    list.length === TOP20.length
      ? `Top ${TOP20.length} deals`
      : `${list.length} of Top ${TOP20.length} deals`;

  const anyRamBoxInView = list.some(hasRamBox);
  const anyRamBoxInTop20 = TOP20.some(hasRamBox);

  if (!list.length) {
    el.innerHTML = "";
    empty.classList.remove("hidden");
    hunt.classList.add("hidden");
    return;
  }
  empty.classList.add("hidden");
  el.innerHTML = list.map(renderCard).join("");

  if (!anyRamBoxInView || !anyRamBoxInTop20) {
    hunt.classList.remove("hidden");
  } else {
    hunt.classList.add("hidden");
  }
}

function toggleCard(card) {
  const open = card.classList.toggle("open");
  const btn = card.querySelector(".card-summary");
  const detail = card.querySelector(".card-detail");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  if (detail) detail.hidden = !open;
}

document.getElementById("truckList").addEventListener("click", (e) => {
  const btn = e.target.closest(".card-summary");
  if (!btn) return;
  const card = btn.closest(".truck-card");
  if (card) toggleCard(card);
});

["sortBy", "requireTwoTone", "requireRamBox"].forEach((id) => {
  document.getElementById(id).addEventListener("change", render);
});
document.querySelectorAll('input[name="make"]').forEach((el) => {
  el.addEventListener("change", render);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  document.querySelectorAll('input[name="make"]').forEach((el) => { el.checked = true; });
  document.getElementById("requireTwoTone").checked = false;
  document.getElementById("requireRamBox").checked = false;
  document.getElementById("sortBy").value = "rank";
  render();
});

function applyInventory(data, source) {
  META = Array.isArray(data) ? {} : (data || {});
  TOP20 = top20Deals(data);
  render();
  const rb = TOP20.filter(hasRamBox).length;
  console.info(`Hudson Speed: Top ${TOP20.length} deals from ${source} (${rb} rare RamBox priority finds).`);
  const sub = document.querySelector(".results-sub");
  if (sub) {
    const gen = META.generated ? ` · inventory ${META.generated}` : "";
    sub.textContent = `Expand a card for VIN, dealer, book breakdown & links. Live Top 20${gen}.`;
  }
}

// Prefer inventory.json; embedded trucks already rendered as fallback
render();
fetch("inventory.json", { cache: "no-store" })
  .then((r) => {
    if (!r.ok) throw new Error("inventory.json " + r.status);
    return r.json();
  })
  .then((data) => applyInventory(data, "inventory.json"))
  .catch((err) => {
    console.warn("inventory.json fetch failed; using embedded trucks", err);
    applyInventory(EMBEDDED_TRUCKS, "embedded");
  });

async function boot() {
  try {
    const r = await fetch("inventory.json", { cache: "no-store" });
    if (!r.ok) throw new Error(String(r.status));
    const data = await r.json();
    const n = Array.isArray(data) ? data.length : (data && data.trucks ? data.trucks.length : 0);
    if (!n && EMBEDDED_TRUCKS.length) throw new Error("empty inventory");
    window.__HUDSON_INV__ = data;
    document.dispatchEvent(new Event("hudson-inv"));
  } catch (e) {
    console.warn("inventory fetch failed; using embedded", e);
    window.__HUDSON_INV__ = { trucks: EMBEDDED_TRUCKS };
    document.dispatchEvent(new Event("hudson-inv"));
  }
}
boot();
