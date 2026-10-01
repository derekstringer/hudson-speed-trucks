/**
 * Hudson Speed — payment-capped truck deals (live inventory)
 * Loads inventory.json; falls back to EMBEDDED_TRUCKS.
 * HARD CAP: OTD payment ≤ $755/mo @ 5%/72 incl Acadia TTL&R. Prefer ≤$700–$723.
 * Fewer than 20 is OK — never pad with over-budget trucks.
 * RamBox = PRIORITY FIND because rare (not required). Two-tone scarce on both makes.
 * History flags (AutoCheck accidents / multi-owner) shown clearly on cards.
 */

const MAX_DEALS = 20;
const TARGET_PAYMENT = 700;
const OK_STRETCH_PAYMENT = 723;
const STRETCH_PAYMENT_CAP = 755;

/** Real Top-20 inventory embedded so the site works even if inventory.json fetch fails. */
const EMBEDDED_TRUCKS = [{"rank":1,"rank_reason":"PRIORITY A restored; two-tone white/camel Lariat; OTD $754/mo <=$755; 355 mi (<=400); 9,717 mi","priorityFind":true,"year":2020,"make":"Ford","model":"F-150","trim":"Lariat SuperCrew 4x4","miles":9717,"price":42121,"payment5_72":753.98,"distance_mi":355,"twoTone":true,"hasRamBox":false,"vin":"1FTEW1E42LFA68436","photos":["https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/1.jpg","https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/2.jpg","https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/3.jpg","https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/4.jpg","https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/5.jpg","https://cdn.dealeron.com/inventoryphotos/8184/1ftew1e42lfa68436/ip/6.jpg"],"listingUrls":{"dealer":"https://www.crainhyundailittlerock.com/used-Little+Rock-2020-Ford-F+150-Lariat-1FTEW1E42LFA68436","carscom":null,"autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E42LFA68436","cargurus":null},"dealer":{"name":"Crain Hyundai of Little Rock","address":"11715 Colonel Glenn Rd, Little Rock, AR 72210","phone":"501-438-0582"},"advertisedOptions":["Equipment Group 502A Luxury","FX4 Off-Road Package","Power-Deployable Running Boards","Adaptive Cruise Control","Max Trailer Tow Package","B&O Sound System","Tailgate Step w/ Lift Assist","Tough Bed Spray-In Bedliner","20\" Chrome-Like PVD Wheels","Extended Range 36 Gallon Fuel Tank","Quad Beam LED Headlamps"],"kbbFairPurchase":40500,"kbbTradeIn":36200,"ltv":1.04,"dealPill":"Fair","id":"lr-lariat-68436","asking_price":42121,"two_tone":true,"rambox":false,"options_highlighted":["Two-Tone","FX4","502A Luxury","Adaptive Cruise","Max Trailer Tow","B&O Sound"],"links":{"dealer":"https://www.crainhyundailittlerock.com/used-Little+Rock-2020-Ford-F+150-Lariat-1FTEW1E42LFA68436","carscom":null,"autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E42LFA68436","cargurus":null},"book_purchase":40500,"book_wholesale_proxy":36200,"book_source":"Estimated from market comps + KBB method (live KBB/Cars.com blocked 2026-10-01; re-verify on kbb.com)","condition":"Excellent","stock_number":"CS0189","drivetrain":"4x4","cab":"SuperCrew","bed":"5.5 ft","color":"Star White Metallic Tri-Coat / Medium Light Camel","notes":"PRIORITY A RESTORED under 400-mi radius. Dealer VDP live 2026-10-01 Crain Price $42,121 (Retail $41,992 + $129 doc). Star White / Medium Light Camel TWO-TONE. Autostoday also InStock. Trim is LARIAT fill (two-tone only rule). Confirm by phone before trip.","still_for_sale":true,"date_seen":"2026-10-01","deal_score":1.46,"dealer_name":"Crain Hyundai of Little Rock","payment5_72_price_only":678.36,"payment_includes_ttlr":true,"is_stretch":true,"availability_verify":"dealer_vdp_live","audit_result":"PASS","ttlr":{"asking_price":42121,"sales_tax_rate":0.107,"sales_tax_rate_pct":"10.70%","sales_tax_amount":4506.95,"title_fee":68.5,"license_fee":112.0,"registration_fee":8.0,"amount_financed":46816.45,"apr":0.05,"term_months":72,"monthly_payment":753.98,"jurisdiction":"Eunice city limits inside Acadia Parish, LA (ZIP 70535)"},"missingDataNotes":["KBB Fair Purchase ESTIMATE \u2014 re-verify on kbb.com before offer","Distance 355 mi from 70535 (allowed under new 400-mi bound; prefer <=200)"]},{"rank":2,"rank_reason":"Longhorn core; OTD $698/mo; at target; 214 mi; 53,495 mi; AutoCheck accident+multi-owner FLAG","priorityFind":false,"year":2022,"make":"Ram","model":"1500","trim":"Longhorn Crew 4x4","miles":53495,"price":38970,"asking_price":38970,"payment5_72":697.8,"payment5_72_price_only":627.61,"payment_includes_ttlr":true,"distance_mi":214,"twoTone":false,"two_tone":false,"hasRamBox":false,"rambox":false,"vin":"1C6SRFKT0NN360525","photos":[],"listingUrls":{"dealer":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525","carscom":"https://www.cars.com/vehicledetail/ea3dcb82-c729-42b1-b743-e25a85bc4372/","autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525","cargurus":null},"links":{"dealer":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525","carscom":"https://www.cars.com/vehicledetail/ea3dcb82-c729-42b1-b743-e25a85bc4372/","autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525","cargurus":null},"dealer":{"name":"Helfman CDJR","address":"Houston, TX 77024","phone":null},"dealer_name":"Helfman CDJR","advertisedOptions":["4x4"],"options_highlighted":["4x4"],"kbbFairPurchase":40920,"kbbTradeIn":36009,"book_purchase":40920,"book_wholesale_proxy":36009,"book_source":"Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)","ltv":0.952,"dealPill":"Good","deal_score":1.6498,"id":"lh-360525","condition":"Good","stock_number":null,"drivetrain":"4x4","cab":"Crew","bed":"5.7 ft","color":"white","notes":"Live AutosToday InStock audit PASS. Bound <=400 mi (prefer <=200; this unit 214 mi). CAUTION: AutoCheck accidents + multi-owner \u2014 confirm report before trip.","still_for_sale":true,"date_seen":"2026-10-01","ttlr":{"asking_price":38970,"sales_tax_rate":0.107,"sales_tax_rate_pct":"10.70%","sales_tax_amount":4169.79,"title_fee":68.5,"license_fee":112.0,"registration_fee":8.0,"amount_financed":43328.29,"apr":0.05,"term_months":72,"monthly_payment":697.8,"jurisdiction":"Eunice city limits inside Acadia Parish, LA (ZIP 70535)"},"missingDataNotes":["AutoCheck: accident(s) + multi-owner history \u2014 open AutoCheck/Carfax before offer","Dealer site blocked/403 from audit box \u2014 confirm by phone before trip","No photo CDN on SRP \u2014 open listing for photos"],"availability_verify":"aggregator_instock","audit_result":"PASS","is_stretch":false,"vehicle_history":{"autocheck_accidents":true,"multi_owner":true,"source":"AutoCheck (Derek review)","note":"AutoCheck shows accident(s) + multi-owner. Kept under payment cap with clear card flag (not silently demoted)."},"historyFlags":["accident","multi-owner"],"history_caution":true},{"rank":3,"rank_reason":"Longhorn core; OTD $738/mo; near $755 cap; 215 mi; 35,455 mi","priorityFind":false,"year":2022,"make":"Ram","model":"1500","trim":"Longhorn Crew 4x4","miles":35455,"price":41225,"asking_price":41225,"payment5_72":738.0,"payment5_72_price_only":663.93,"payment_includes_ttlr":true,"distance_mi":215,"twoTone":false,"two_tone":false,"hasRamBox":false,"rambox":false,"vin":"1C6SRFKT2NN332032","photos":["https://platform.cstatic-images.com/in/v2/31af55aa-ac33-5cff-8bf9-0eade81083a9/e4441145-0b08-4f6a-bbd5-7f1bd0a6822d/6pyx6ZCoDIK_5U7OYIzWUgpzZCI.jpg"],"listingUrls":{"dealer":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032","carscom":"https://www.cars.com/vehicledetail/6a5363c4-3dea-4e00-be0a-0383271a6611/","autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032","cargurus":null},"links":{"dealer":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032","carscom":"https://www.cars.com/vehicledetail/6a5363c4-3dea-4e00-be0a-0383271a6611/","autostoday":"https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032","cargurus":null},"dealer":{"name":"Group 1 Toyota Southwest Houston","address":"Houston, TX 77074","phone":null},"dealer_name":"Group 1 Toyota Southwest Houston","advertisedOptions":["4x4"],"options_highlighted":["4x4"],"kbbFairPurchase":42363,"kbbTradeIn":37279,"book_purchase":42363,"book_wholesale_proxy":37279,"book_source":"Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)","ltv":0.973,"dealPill":"Good","deal_score":1.711,"id":"lh-332032","condition":"Good","stock_number":null,"drivetrain":"4x4","cab":"Crew","bed":"5.7 ft","color":"red","notes":"Live AutosToday InStock audit PASS. Bound <=400 mi (prefer <=200).","still_for_sale":true,"date_seen":"2026-10-01","ttlr":{"asking_price":41225,"sales_tax_rate":0.107,"sales_tax_rate_pct":"10.70%","sales_tax_amount":4411.07,"title_fee":68.5,"license_fee":112.0,"registration_fee":8.0,"amount_financed":45824.57,"apr":0.05,"term_months":72,"monthly_payment":738.0,"jurisdiction":"Eunice city limits inside Acadia Parish, LA (ZIP 70535)"},"missingDataNotes":["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"],"availability_verify":"aggregator_instock","audit_result":"PASS","is_stretch":false}];
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

function historyFlags(t) {
  if (Array.isArray(t.historyFlags) && t.historyFlags.length) return t.historyFlags;
  const vh = t.vehicle_history || t.vehicleHistory || null;
  if (!vh) return [];
  const flags = [];
  if (vh.autocheck_accidents || vh.accidents) flags.push("accident");
  if (vh.multi_owner || vh.multiOwner) flags.push("multi-owner");
  return flags;
}

function hasHistoryCaution(t) {
  return !!(t.history_caution || historyFlags(t).length);
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
    historyFlags: historyFlags(raw),
    history_caution: hasHistoryCaution(raw),
    vehicle_history: raw.vehicle_history || raw.vehicleHistory || null,
  };
}

function extractTrucks(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.trucks)) return data.trucks;
  return [];
}

function top20Deals(raw) {
  // HARD CAP: never show over-budget trucks, even if inventory.json is stale
  const list = extractTrucks(raw)
    .map(normalizeTruck)
    .filter((t) => t.payment != null && t.payment <= STRETCH_PAYMENT_CAP)
    .slice(0, MAX_DEALS);
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
  const hist = historyFlags(t);
  if (hist.includes("accident")) {
    badges.push(`<span class="badge history-accident" title="AutoCheck reports accident history — verify full report before trip">AutoCheck accident</span>`);
  }
  if (hist.includes("multi-owner")) {
    badges.push(`<span class="badge history-owners" title="AutoCheck reports multi-owner history">Multi-owner</span>`);
  }
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

  const historyBanner = hasHistoryCaution(t)
    ? `<div class="history-banner" role="note">
        <strong>Vehicle history caution:</strong> AutoCheck indicates
        ${hist.includes("accident") ? "<em>accident(s)</em>" : ""}
        ${hist.includes("accident") && hist.includes("multi-owner") ? " and " : ""}
        ${hist.includes("multi-owner") ? "<em>multi-owner</em> history" : ""}.
        Kept on the board only because OTD payment is within the $${STRETCH_PAYMENT_CAP} cap — pull the full AutoCheck/Carfax before any trip or offer.
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
      ${historyBanner}
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
      ? `${TOP20.length} deal${TOP20.length === 1 ? "" : "s"} ≤$${STRETCH_PAYMENT_CAP}/mo OTD`
      : `${list.length} of ${TOP20.length} deals ≤$${STRETCH_PAYMENT_CAP}/mo OTD`;

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
  console.info(`Hudson Speed: ${TOP20.length} payment-capped deals from ${source} (${rb} rare RamBox priority finds).`);
  const sub = document.querySelector(".results-sub");
  if (sub) {
    const gen = META.generated ? ` · inventory ${META.generated}` : "";
    sub.textContent = `Expand a card for VIN, dealer, book breakdown & links. Payment-capped board (≤$${STRETCH_PAYMENT_CAP}/mo OTD)${gen}.`;
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
