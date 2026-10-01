# Hudson Speed — Truck Inventory Summary

**Generated:** 2026-10-01T10:45:00-05:00 (America/Chicago)
**Buyer ZIP:** 70535 (Eunice, LA) · **hard bound 200 mi** (no 250 stretch)
**Payment model:** 5% APR / 72 mo on **OTD (price + TTL&R)** · target ≤$700 · OK $723 · max $755
**TTL&R primary:** Eunice / Acadia Parish · combined sales tax **10.70%** · title $68.50 · license $112 · reg $8
**Count:** 9 trucks (cap 20; pool thin after ≤60k + Longhorn/KR + hard 200 mi + availability) — **9 stretches**

## Hard filters applied
1. DROP miles > 60,000
2. DROP missing miles OR missing price
3. **Hard DROP dealer >200 mi from 70535** (OSRM road miles)
4. DROP sold / no longer available after dealer link check
5. Rank: two-tone Longhorn → Longhorn → King Ranch

## Availability link-check failures (dropped)
| VIN | Vehicle | Reason |
|-----|---------|--------|
| `1FTEW1E43LFA06575` | 2020 Ford King Ranch SuperCrew 4x4 | Caller confirmed Terrebonne Ford / dealer page no longer available — DROP |
| `1FTFW1E59PFB18543` | 2023 Ford King Ranch SuperCrew 4x4 | Link check FAIL: VIN not on Ford of Harvey used inventory — treat as sold/removed |
| `1FTFW1E82PFA54257` | 2023 Ford King Ranch SuperCrew 4x4 | Link check FAIL: VIN not on Ford of Harvey used inventory — treat as sold/removed |
| `1FTFW6LD2SFB11515` | 2025 Ford King Ranch SuperCrew 4x4 | Link check FAIL: Greg LeBlanc Toyota dealer VDP returns 404 Page Not Found |
| `1FTFW6L89TFA80770` | 2026 Ford King Ranch SuperCrew 4x4 | AutosToday Price N/A + notfound.jpg; Classic Chevy Beaumont dealer AccessDenied — DROP missing price |

## Distance cuts from prior Top 6
- Little Rock Lariat 355 mi → `watch_outside_radius` (Priority A)
- Austin / New Braunfels RamBox / Corpus / Jacksonville AR — all >200 → dropped from cards
- Houma KR was only prior in-radius unit — **availability FAIL** (caller)

## Survivors (ranked)

| Rank | Year | Vehicle | Mi | Price | Dist | OTD$/mo | Pill | Verify | Flags |
|-----:|-----:|---------|---:|------:|-----:|--------:|------|--------|-------|
| 1 | 2021 | Ram Longhorn Crew 4x4 CPO | 57,753 | $42,222 | 61 | $756 | Stretch | aggregator_instock | CPO, STRETCH |
| 2 | 2026 | Ram Limited Longhorn Crew 4x4 | 21,956 | $56,895 | 70 | $1017 | Stretch | aggregator_instock | STRETCH |
| 3 | 2025 | Ford King Ranch SuperCrew 4x4 | 9,487 | $64,895 | 22 | $1160 | Stretch | dealer_ok | two-tone, STRETCH |
| 4 | 2025 | Ford King Ranch SuperCrew 4x4 | 34,915 | $62,460 | 47 | $1117 | Stretch | aggregator_instock | STRETCH |
| 5 | 2025 | Ford King Ranch SuperCrew 4x4 | 24,625 | $64,378 | 97 | $1151 | Stretch | aggregator_instock | STRETCH |
| 6 | 2025 | Ford King Ranch SuperCrew 4x4 | 23,607 | $64,650 | 191 | $1156 | Stretch | dealer_ok | STRETCH |
| 7 | 2026 | Ford King Ranch SuperCrew 4x4 | 2,293 | $66,435 | 181 | $1187 | Stretch | dealer_secondary | two-tone, STRETCH |
| 8 | 2026 | Ford King Ranch SuperCrew 4x4 CPO | 3,970 | $70,469 | 171 | $1259 | Stretch | aggregator_instock | CPO, STRETCH |
| 9 | 2026 | Ford King Ranch SuperCrew 4x4 | 2,248 | $71,979 | 22 | $1286 | Stretch | dealer_ok | STRETCH |

## RamBox hunt
- Confirmed RamBox in list: **0**
- No RamBox confirmed among ≤200 mi Longhorn survivors. Prior New Braunfels RamBox outside radius.

## Watch outside radius (NOT in Top 20)
- `1FTEW1E42LFA68436` (355 mi): PRIORITY A Little Rock Lariat 9,717 mi $42,121 — 355 mi OVER hard 200 bound; watch only
- `1C6SRFKT8PN656931` (377 mi): New Braunfels Longhorn RamBox — 377 mi OVER hard 200; only confirmed RamBox in prior pool
- `1C6SRFKT2NN332032` (215 mi): 2022 Longhorn Group 1 Toyota SW Houston $41,225 / 35,455 mi — OSRM 215 mi just over 200
- `1C6SRFKT0NN360525` (214 mi): 2022 Longhorn Helfman Houston $38,970 / 53,495 mi — OSRM 214 mi over 200

## Caveats
- Hard distance bound 200 mi (OSRM) from 70535 — no 250 stretch.
- Pool thin: used/CPO Longhorn+King Ranch ≤60k within 200 mi of Eunice is scarce; Top 9 not 20.
- Several dealer sites Cloudflare/403 — those cards use Cars.com/AutosToday InStock + call-to-confirm notes.
- Houma 2020 KR 1FTEW1E43LFA06575 DROPPED — caller confirmed unavailable.
- Harvey KRs and Greg LeBlanc Houma KR DROPPED after dealer link checks failed.
- KBB Fair Purchase / Trade-In are ESTIMATES — re-check live on kbb.com.
- Payments include LA TTL&R Eunice Acadia Parish 10.70% + title $68.50 + license $112 + reg $8.
- No RamBox confirmed in-radius.
