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
const EMBEDDED_TRUCKS = [{"rank": 1, "rank_reason": "Longhorn; OTD $698/mo; 214 mi; 53,495 mi", "priorityFind": false, "year": 2022, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4", "miles": 53495, "price": 38970, "asking_price": 38970, "payment5_72": 697.8, "payment5_72_price_only": 627.61, "payment_includes_ttlr": true, "distance_mi": 214, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT0NN360525", "photos": [], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525", "carscom": "https://www.cars.com/vehicledetail/ea3dcb82-c729-42b1-b743-e25a85bc4372/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525", "carscom": "https://www.cars.com/vehicledetail/ea3dcb82-c729-42b1-b743-e25a85bc4372/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT0NN360525", "cargurus": null}, "dealer": {"name": "Helfman CDJR", "address": "Houston, TX 77024", "phone": null}, "dealer_name": "Helfman CDJR", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 40920, "kbbTradeIn": 36009, "book_purchase": 40920, "book_wholesale_proxy": 36009, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 0.952, "dealPill": "Fair", "deal_score": 1.6498, "id": "lh-360525", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 38970, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4169.79, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 43328.29, "apr": 0.05, "term_months": 72, "monthly_payment": 697.8, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip", "No photo CDN on SRP \u2014 open listing for photos"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 2, "rank_reason": "Longhorn; OTD $738/mo; 215 mi; 35,455 mi", "priorityFind": false, "year": 2022, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4", "miles": 35455, "price": 41225, "asking_price": 41225, "payment5_72": 738.0, "payment5_72_price_only": 663.93, "payment_includes_ttlr": true, "distance_mi": 215, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT2NN332032", "photos": ["https://platform.cstatic-images.com/in/v2/31af55aa-ac33-5cff-8bf9-0eade81083a9/e4441145-0b08-4f6a-bbd5-7f1bd0a6822d/6pyx6ZCoDIK_5U7OYIzWUgpzZCI.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032", "carscom": "https://www.cars.com/vehicledetail/6a5363c4-3dea-4e00-be0a-0383271a6611/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032", "carscom": "https://www.cars.com/vehicledetail/6a5363c4-3dea-4e00-be0a-0383271a6611/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT2NN332032", "cargurus": null}, "dealer": {"name": "Group 1 Toyota Southwest Houston", "address": "Houston, TX 77074", "phone": null}, "dealer_name": "Group 1 Toyota Southwest Houston", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 42363, "kbbTradeIn": 37279, "book_purchase": 42363, "book_wholesale_proxy": 37279, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 0.973, "dealPill": "Fair", "deal_score": 1.711, "id": "lh-332032", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "red", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 41225, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4411.07, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 45824.57, "apr": 0.05, "term_months": 72, "monthly_payment": 738.0, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": false}, {"rank": 3, "rank_reason": "Longhorn; OTD $756/mo; 61 mi; 57,753 mi", "priorityFind": false, "year": 2021, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4 CPO", "miles": 57753, "price": 42222, "asking_price": 42222, "payment5_72": 755.78, "payment5_72_price_only": 679.98, "payment_includes_ttlr": true, "distance_mi": 61, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT6MN666448", "photos": [], "listingUrls": {"dealer": "https://www.hixsonfordalex.com/used-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/b8cc07a3-4077-4029-b79a-b7030846e965/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT6MN666448", "cargurus": null}, "links": {"dealer": "https://www.hixsonfordalex.com/used-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/b8cc07a3-4077-4029-b79a-b7030846e965/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT6MN666448", "cargurus": null}, "dealer": {"name": "Hixson Ford of Alexandria", "address": "2506 South MacArthur Dr, Alexandria, LA 71301", "phone": "318-472-2723"}, "dealer_name": "Hixson Ford of Alexandria", "advertisedOptions": ["4x4", "CPO"], "options_highlighted": ["4x4"], "kbbFairPurchase": 38579, "kbbTradeIn": 33949, "book_purchase": 38579, "book_wholesale_proxy": 33949, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.094, "dealPill": "Stretch", "deal_score": 1.8498, "id": "lh-666448", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 42222, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4517.75, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 46928.25, "apr": 0.05, "term_months": 72, "monthly_payment": 755.78, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip", "No photo CDN on SRP \u2014 open listing for photos"], "availability_verify": "aggregator_instock", "audit_result": "PASS", "is_stretch": true}, {"rank": 4, "rank_reason": "Longhorn; OTD $787/mo; 229 mi; 34,976 mi", "priorityFind": false, "year": 2021, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4", "miles": 34976, "price": 43998, "asking_price": 43998, "payment5_72": 787.44, "payment5_72_price_only": 708.58, "payment_includes_ttlr": true, "distance_mi": 229, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT5MN547001", "photos": ["https://platform.cstatic-images.com/in/v2/dc2b6f88-0811-5afa-9ab0-1c34b0b7f4ff/677a1311-d50c-4791-b130-5f83773ffd5a/MT0m6fmGCNjam48Bxmm34M5o2mM.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT5MN547001", "carscom": "https://www.cars.com/vehicledetail/40a5c31c-92f0-4ec3-841b-279d0be285d7/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT5MN547001", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT5MN547001", "carscom": "https://www.cars.com/vehicledetail/40a5c31c-92f0-4ec3-841b-279d0be285d7/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT5MN547001", "cargurus": null}, "dealer": {"name": "CarMax Houston Katy Freeway", "address": "Katy, TX 77449", "phone": null}, "dealer_name": "CarMax Houston Katy Freeway", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 40401, "kbbTradeIn": 35552, "book_purchase": 40401, "book_wholesale_proxy": 35552, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.089, "dealPill": "Stretch", "deal_score": 1.8764, "id": "lh-547001", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "gray", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 43998, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4707.79, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 48894.29, "apr": 0.05, "term_months": 72, "monthly_payment": 787.44, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 5, "rank_reason": "Longhorn; OTD $920/mo; 228 mi; 12,360 mi", "priorityFind": false, "year": 2024, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4", "miles": 12360, "price": 51420, "asking_price": 51420, "payment5_72": 919.76, "payment5_72_price_only": 828.12, "payment_includes_ttlr": true, "distance_mi": 228, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT3RN172233", "photos": ["https://platform.cstatic-images.com/in/v2/6ae25e17-b187-5e43-9bfd-d63107bdb98d/6163c3d5-6ed5-4915-a96e-900391b0e8b2/tQ7akeU5JnSnnVzXk-BzFnRRxHQ.jpg"], "listingUrls": {"dealer": "https://www.toyotaofkaty.com/used-Katy-2024-RAM-1500-Longhorn-1C6SRFKT3RN172233", "carscom": "https://www.cars.com/vehicledetail/15e648be-2c27-4232-9405-5959bdcd87ce/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT3RN172233", "cargurus": null}, "links": {"dealer": "https://www.toyotaofkaty.com/used-Katy-2024-RAM-1500-Longhorn-1C6SRFKT3RN172233", "carscom": "https://www.cars.com/vehicledetail/15e648be-2c27-4232-9405-5959bdcd87ce/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT3RN172233", "cargurus": null}, "dealer": {"name": "Toyota of Katy", "address": "Katy, TX 77450", "phone": null}, "dealer_name": "Toyota of Katy", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 50211, "kbbTradeIn": 44185, "book_purchase": 50211, "book_wholesale_proxy": 44185, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.024, "dealPill": "Stretch", "deal_score": 1.9438, "id": "lh-172233", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "black", "notes": "Toyota of Katy dealer page HTTP 200, no sold signal. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 51420, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 5501.94, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 57110.44, "apr": 0.05, "term_months": 72, "monthly_payment": 919.76, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 6, "rank_reason": "Longhorn; OTD $1017/mo; 70 mi; 21,956 mi", "priorityFind": false, "year": 2026, "make": "Ram", "model": "1500", "trim": "Limited Longhorn Crew 4x4", "miles": 21956, "price": 56895, "asking_price": 56895, "payment5_72": 1017.37, "payment5_72_price_only": 916.29, "payment_includes_ttlr": true, "distance_mi": 70, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFHP3TN183380", "photos": [], "listingUrls": {"dealer": "https://www.cars.com/dealers/6021559/autoplex-sulphur/inventory/", "carscom": "https://www.cars.com/vehicledetail/40b4dc8d-c9ab-4c7e-a8f6-71856ae12018/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFHP3TN183380", "cargurus": null}, "links": {"dealer": "https://www.cars.com/dealers/6021559/autoplex-sulphur/inventory/", "carscom": "https://www.cars.com/vehicledetail/40b4dc8d-c9ab-4c7e-a8f6-71856ae12018/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFHP3TN183380", "cargurus": null}, "dealer": {"name": "Autoplex Sulphur", "address": "2910 East Napoleon St, Sulphur, LA 70663", "phone": "888-810-0816"}, "dealer_name": "Autoplex Sulphur", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 56443, "kbbTradeIn": 49669, "book_purchase": 56443, "book_wholesale_proxy": 49669, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.008, "dealPill": "Stretch", "deal_score": 2.0254, "id": "lh-183380", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "gray", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 56895, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6087.77, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 63171.26, "apr": 0.05, "term_months": 72, "monthly_payment": 1017.37, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip", "No photo CDN on SRP \u2014 open listing for photos"], "availability_verify": "aggregator_instock", "audit_result": "PASS", "is_stretch": true}, {"rank": 7, "rank_reason": "King Ranch; two-tone priority flag; OTD $989/mo; 201 mi; 34,364 mi", "priorityFind": false, "year": 2024, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 34364, "price": 55297, "asking_price": 55297, "payment5_72": 988.88, "payment5_72_price_only": 890.55, "payment_includes_ttlr": true, "distance_mi": 201, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD0RFA98354", "photos": ["https://platform.cstatic-images.com/in/v2/0f628b08-80d3-56dd-ba03-3842f3428f74/f152bc47-79d4-414a-a783-32c0139f4dc9/1MpGahCJiOGd19aE8yK27JEGJOk.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0RFA98354", "carscom": "https://www.cars.com/vehicledetail/a97f647c-6474-4632-a6fa-1c60abdb7c01/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0RFA98354", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0RFA98354", "carscom": "https://www.cars.com/vehicledetail/a97f647c-6474-4632-a6fa-1c60abdb7c01/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0RFA98354", "cargurus": null}, "dealer": {"name": "EchoPark Automotive Houston", "address": "Houston, TX 77090", "phone": null}, "dealer_name": "EchoPark Automotive Houston", "advertisedOptions": ["4x4", "Two-tone"], "options_highlighted": ["4x4", "Two-tone"], "kbbFairPurchase": 55450, "kbbTradeIn": 48796, "book_purchase": 55450, "book_wholesale_proxy": 48796, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 0.997, "dealPill": "Stretch", "deal_score": 1.9859, "id": "kr-a98354", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "blue", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. Two-tone priority flag. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 55297, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 5916.78, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 61402.28, "apr": 0.05, "term_months": 72, "monthly_payment": 988.88, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 8, "rank_reason": "King Ranch; two-tone priority flag; OTD $1107/mo; 201 mi; 5,681 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 5681, "price": 61910, "asking_price": 61910, "payment5_72": 1106.78, "payment5_72_price_only": 997.06, "payment_includes_ttlr": true, "distance_mi": 201, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD0SFB84981", "photos": ["https://platform.cstatic-images.com/in/v2/5996fd14-0a06-5cb6-a75f-275f99a95b85/5d929672-7bad-48ca-9e78-d9bfd8c76723/2SNUjRboGlM4jjULnd5HHnFf7Z0.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0SFB84981", "carscom": "https://www.cars.com/vehicledetail/a98238c1-c80c-40c0-8cb8-e12b447c9f69/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0SFB84981", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0SFB84981", "carscom": "https://www.cars.com/vehicledetail/a98238c1-c80c-40c0-8cb8-e12b447c9f69/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD0SFB84981", "cargurus": null}, "dealer": {"name": "Mercedes-Benz of Houston North", "address": "Houston, TX 77090", "phone": null}, "dealer_name": "Mercedes-Benz of Houston North", "advertisedOptions": ["4x4", "Two-tone"], "options_highlighted": ["4x4", "Two-tone"], "kbbFairPurchase": 62745, "kbbTradeIn": 55215, "book_purchase": 62745, "book_wholesale_proxy": 55215, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 0.987, "dealPill": "Stretch", "deal_score": 2.0938, "id": "kr-b84981", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "red", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. Two-tone priority flag. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 61910, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6624.37, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 68722.87, "apr": 0.05, "term_months": 72, "monthly_payment": 1106.78, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 9, "rank_reason": "King Ranch; two-tone priority flag; OTD $1160/mo; 22 mi; 9,487 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 9487, "price": 64895, "asking_price": 64895, "payment5_72": 1159.99, "payment5_72_price_only": 1045.13, "payment_includes_ttlr": true, "distance_mi": 22, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD4SFA33089", "photos": ["https://platform.cstatic-images.com/in/v2/8579bace-86bd-541f-a40d-8a5f0c75811c/ffcec165-3525-4fff-aeeb-d4cf3d712b42/hLlxyKbfJdKcy8ho_Rsf9BnX8Os.jpg"], "listingUrls": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2025-Ford-F+150-King+Ranch-1FTFW6LD4SFA33089", "carscom": "https://www.cars.com/vehicledetail/3dbab298-e7bf-420c-aebb-60660e166ece/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFA33089", "cargurus": null}, "links": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2025-Ford-F+150-King+Ranch-1FTFW6LD4SFA33089", "carscom": "https://www.cars.com/vehicledetail/3dbab298-e7bf-420c-aebb-60660e166ece/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFA33089", "cargurus": null}, "dealer": {"name": "Sterling Ford", "address": "5524 I-49 North Service Rd, Opelousas, LA 70570", "phone": "337-942-2686"}, "dealer_name": "Sterling Ford", "advertisedOptions": ["4x4", "Two-tone"], "options_highlighted": ["4x4", "Two-tone"], "kbbFairPurchase": 62441, "kbbTradeIn": 54948, "book_purchase": 62441, "book_wholesale_proxy": 54948, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.039, "dealPill": "Stretch", "deal_score": 2.199, "id": "kr-a33089", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "blue", "notes": "Sterling Ford dealer VDP verified. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. Two-tone priority flag. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64895, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6943.76, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 72027.26, "apr": 0.05, "term_months": 72, "monthly_payment": 1159.99, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 10, "rank_reason": "King Ranch; two-tone priority flag; OTD $1187/mo; 181 mi; 2,293 mi", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 2293, "price": 66435, "asking_price": 66435, "payment5_72": 1187.45, "payment5_72_price_only": 1069.93, "payment_includes_ttlr": true, "distance_mi": 181, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6L81TFA53708", "photos": ["https://platform.cstatic-images.com/in/v2/3f0e9192-b75d-5ead-8cc9-cb181aefbaed/3902413b-920d-45ef-bcf6-f603aadaf315/PpDsGPPmXg1KUeQVYbhOXnYjZ1E.jpg"], "listingUrls": {"dealer": "https://www.dealerrater.com/classifieds/2026-Ford-F_150-ad-1FTFW6L81TFA53708-38710/", "carscom": "https://www.cars.com/vehicledetail/fa629dc4-27ea-4cbb-a902-e181df8816e7/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L81TFA53708", "cargurus": null}, "links": {"dealer": "https://www.dealerrater.com/classifieds/2026-Ford-F_150-ad-1FTFW6L81TFA53708-38710/", "carscom": "https://www.cars.com/vehicledetail/fa629dc4-27ea-4cbb-a902-e181df8816e7/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L81TFA53708", "cargurus": null}, "dealer": {"name": "Community Honda", "address": "5700 East Freeway, Baytown, TX 77521", "phone": "832-572-5468"}, "dealer_name": "Community Honda", "advertisedOptions": ["4x4", "Two-tone"], "options_highlighted": ["4x4", "Two-tone"], "kbbFairPurchase": 68016, "kbbTradeIn": 59854, "book_purchase": 68016, "book_wholesale_proxy": 59854, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 0.977, "dealPill": "Stretch", "deal_score": 2.1644, "id": "kr-a53708", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "black", "notes": "DealerRater live from Community Honda; dealer site CF-blocked. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. Two-tone priority flag. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 66435, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7108.55, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 73732.04, "apr": 0.05, "term_months": 72, "monthly_payment": 1187.45, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 11, "rank_reason": "King Ranch; OTD $822/mo; 213 mi; 33,690 mi", "priorityFind": false, "year": 2020, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 33690, "price": 45958, "asking_price": 45958, "payment5_72": 822.38, "payment5_72_price_only": 740.15, "payment_includes_ttlr": true, "distance_mi": 213, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTEW1E56LFA81652", "photos": ["https://platform.cstatic-images.com/in/v2/5e345945-89ee-54fb-9497-658754061b05/ef5148c7-696c-4dd2-85cd-c4ce48bafd6d/GpOsMW4Ih-i55xpD-zooPur8bwI.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E56LFA81652", "carscom": "https://www.cars.com/vehicledetail/2f2c27c2-0ada-43cc-9e4d-0fe19962890e/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E56LFA81652", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E56LFA81652", "carscom": "https://www.cars.com/vehicledetail/2f2c27c2-0ada-43cc-9e4d-0fe19962890e/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTEW1E56LFA81652", "cargurus": null}, "dealer": {"name": "TX Auto Group Houston", "address": "Houston, TX 77057", "phone": null}, "dealer_name": "TX Auto Group Houston", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 38504, "kbbTradeIn": 33883, "book_purchase": 38504, "book_wholesale_proxy": 33883, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.194, "dealPill": "Stretch", "deal_score": 2.0164, "id": "kr-a81652", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 45958, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4917.51, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 51064.01, "apr": 0.05, "term_months": 72, "monthly_payment": 822.38, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 12, "rank_reason": "King Ranch; OTD $1091/mo; 201 mi; 25,170 mi", "priorityFind": false, "year": 2024, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 25170, "price": 61019, "asking_price": 61019, "payment5_72": 1090.89, "payment5_72_price_only": 982.71, "payment_includes_ttlr": true, "distance_mi": 201, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6L84RFA81365", "photos": ["https://platform.cstatic-images.com/in/v2/5c7bf20c-bc5a-55c6-aeed-1a2894d36348/b91ba70e-9f97-4301-bfe1-a02bfc6cb5df/SFtzNMWOZIyOkFwQ6jZhk55X5tM.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L84RFA81365", "carscom": "https://www.cars.com/vehicledetail/7271169f-3faf-476d-ac98-4cef4da462f2/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L84RFA81365", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L84RFA81365", "carscom": "https://www.cars.com/vehicledetail/7271169f-3faf-476d-ac98-4cef4da462f2/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L84RFA81365", "cargurus": null}, "dealer": {"name": "Group 1 Chevrolet Spring", "address": "Houston/Spring, TX 77090", "phone": null}, "dealer_name": "Group 1 Chevrolet Spring", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 56186, "kbbTradeIn": 49443, "book_purchase": 56186, "book_wholesale_proxy": 49443, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.086, "dealPill": "Stretch", "deal_score": 2.1769, "id": "kr-a81365", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 61019, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6529.03, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 67736.53, "apr": 0.05, "term_months": 72, "monthly_payment": 1090.89, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 13, "rank_reason": "King Ranch; OTD $1117/mo; 47 mi; 34,915 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 34915, "price": 62460, "asking_price": 62460, "payment5_72": 1116.58, "payment5_72_price_only": 1005.91, "payment_includes_ttlr": true, "distance_mi": 47, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD5SFA30797", "photos": ["https://platform.cstatic-images.com/in/v2/cdbb93ff-746e-5f8c-b0f0-94050be0134b/e9dfd3ac-0ca3-4457-8b6b-b16d229b384b/voEBxBCSDeO93Wah4HWsMs06gfY.jpg"], "listingUrls": {"dealer": "https://www.mendozaford.com/all-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/61060bd1-a768-4853-bcec-96da57ffd30d/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD5SFA30797", "cargurus": null}, "links": {"dealer": "https://www.mendozaford.com/all-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/61060bd1-a768-4853-bcec-96da57ffd30d/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD5SFA30797", "cargurus": null}, "dealer": {"name": "Mendoza Ford", "address": "7951 Maurice Ave, Maurice, LA 70555", "phone": "337-740-1000"}, "dealer_name": "Mendoza Ford", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 60406, "kbbTradeIn": 53157, "book_purchase": 60406, "book_wholesale_proxy": 53157, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.034, "dealPill": "Stretch", "deal_score": 2.1506, "id": "kr-a30797", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 62460, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6683.22, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 69331.72, "apr": 0.05, "term_months": 72, "monthly_payment": 1116.58, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "aggregator_instock", "audit_result": "PASS", "is_stretch": true}, {"rank": 14, "rank_reason": "King Ranch; OTD $1130/mo; 217 mi; 20,568 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4 CPO", "miles": 20568, "price": 63216, "asking_price": 63216, "payment5_72": 1130.06, "payment5_72_price_only": 1018.09, "payment_includes_ttlr": true, "distance_mi": 217, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6L83SFB42114", "photos": ["https://platform.cstatic-images.com/in/v2/a8a8d4bf-cce8-5073-b3d5-001266b4c36b/abb87363-9c97-44bd-a807-9fe48885f5e0/wYlyLU8g6bvwoA8LBoyZFOQdwXc.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L83SFB42114", "carscom": "https://www.cars.com/vehicledetail/e2f66b14-1313-4b93-98dc-96dcf2ba06f1/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L83SFB42114", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L83SFB42114", "carscom": "https://www.cars.com/vehicledetail/e2f66b14-1313-4b93-98dc-96dcf2ba06f1/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L83SFB42114", "cargurus": null}, "dealer": {"name": "Joe Myers Ford", "address": "Houston, TX 77040", "phone": null}, "dealer_name": "Joe Myers Ford", "advertisedOptions": ["4x4", "CPO"], "options_highlighted": ["4x4"], "kbbFairPurchase": 61554, "kbbTradeIn": 54167, "book_purchase": 61554, "book_wholesale_proxy": 54167, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.027, "dealPill": "Stretch", "deal_score": 2.1571, "id": "kr-b42114", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "white", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 63216, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6764.11, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 70168.61, "apr": 0.05, "term_months": 72, "monthly_payment": 1130.06, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 15, "rank_reason": "King Ranch; OTD $1151/mo; 97 mi; 24,625 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 24625, "price": 64378, "asking_price": 64378, "payment5_72": 1150.78, "payment5_72_price_only": 1036.8, "payment_includes_ttlr": true, "distance_mi": 97, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD2SFA92500", "photos": ["https://platform.cstatic-images.com/in/v2/4497031f-652a-423f-b070-22562b4666c5/4ca84c30-eb1d-4816-9198-f8a0a2213315/EaiDoV-488w2uCbRYZeIqn8mKjU.jpg"], "listingUrls": {"dealer": "https://www.geauxcdjr.com/inventory/", "carscom": "https://www.cars.com/vehicledetail/7f4071d4-3cf3-48b8-9a35-d5a3352a944e/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD2SFA92500", "cargurus": null}, "links": {"dealer": "https://www.geauxcdjr.com/inventory/", "carscom": "https://www.cars.com/vehicledetail/7f4071d4-3cf3-48b8-9a35-d5a3352a944e/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD2SFA92500", "cargurus": null}, "dealer": {"name": "Geaux CDJR Denham Springs", "address": "Denham Springs, LA 70726", "phone": null}, "dealer_name": "Geaux CDJR Denham Springs", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 61230, "kbbTradeIn": 53882, "book_purchase": 61230, "book_wholesale_proxy": 53882, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.051, "dealPill": "Stretch", "deal_score": 2.2018, "id": "kr-a92500", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "brown", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64378, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6888.45, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 71454.95, "apr": 0.05, "term_months": 72, "monthly_payment": 1150.78, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "aggregator_instock", "audit_result": "PASS", "is_stretch": true}, {"rank": 16, "rank_reason": "King Ranch; OTD $1156/mo; 191 mi; 23,607 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 23607, "price": 64650, "asking_price": 64650, "payment5_72": 1155.63, "payment5_72_price_only": 1041.18, "payment_includes_ttlr": true, "distance_mi": 191, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD7SFA57161", "photos": ["https://platform.cstatic-images.com/in/v2/68c2ba79-384c-55a5-a826-757b61b5bc93/d0a57c79-6f89-4caa-abd8-d54c51c3a673/f8OwDFoec5Blx9IyBoGPjkFInDc.jpg"], "listingUrls": {"dealer": "https://www.randallreedsplanetford.com/vehicle/1FTFW6LD7SFA57161/Used--2025--Ford--F--150--Truck_Hybrid----Humble--TX/", "carscom": "https://www.cars.com/vehicledetail/3f8d35a6-0286-4be6-b1c9-e0d9cd4f1b91/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD7SFA57161", "cargurus": null}, "links": {"dealer": "https://www.randallreedsplanetford.com/vehicle/1FTFW6LD7SFA57161/Used--2025--Ford--F--150--Truck_Hybrid----Humble--TX/", "carscom": "https://www.cars.com/vehicledetail/3f8d35a6-0286-4be6-b1c9-e0d9cd4f1b91/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD7SFA57161", "cargurus": null}, "dealer": {"name": "Randall Reed's Planet Ford", "address": "19000 Eastex Frwy, Humble, TX 77338", "phone": "281-319-9600"}, "dealer_name": "Randall Reed's Planet Ford", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 61311, "kbbTradeIn": 53953, "book_purchase": 61311, "book_wholesale_proxy": 53953, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.054, "dealPill": "Stretch", "deal_score": 2.2096, "id": "kr-a57161", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "black", "notes": "Dealer VDP live with VIN+price; sold-text was inventory boilerplate only (FALSE POSITIVE overridden). Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64650, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6917.55, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 71756.05, "apr": 0.05, "term_months": 72, "monthly_payment": 1155.63, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 17, "rank_reason": "King Ranch; OTD $1214/mo; 223 mi; 15,878 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 15878, "price": 67920, "asking_price": 67920, "payment5_72": 1213.92, "payment5_72_price_only": 1093.85, "payment_includes_ttlr": true, "distance_mi": 223, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD4SFB59386", "photos": ["https://platform.cstatic-images.com/in/v2/60aae495-15c4-56be-b980-6e8d70f29b02/e29f70eb-c16a-4f2e-bd41-b8113da86678/f6bNfL1woz9EZ74-qfkVET0k1NA.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFB59386", "carscom": "https://www.cars.com/vehicledetail/e8f6a0fc-cc7f-4f29-99f4-ea33f6437c0b/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFB59386", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFB59386", "carscom": "https://www.cars.com/vehicledetail/e8f6a0fc-cc7f-4f29-99f4-ea33f6437c0b/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD4SFB59386", "cargurus": null}, "dealer": {"name": "Astro Ford", "address": "D'Iberville, MS 39540", "phone": null}, "dealer_name": "Astro Ford", "advertisedOptions": ["4x4", "CPO"], "options_highlighted": ["4x4"], "kbbFairPurchase": 61929, "kbbTradeIn": 54497, "book_purchase": 61929, "book_wholesale_proxy": 54497, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.097, "dealPill": "Stretch", "deal_score": 2.3109, "id": "kr-b59386", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "See listing", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 67920, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7267.44, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 75375.94, "apr": 0.05, "term_months": 72, "monthly_payment": 1213.92, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 18, "rank_reason": "King Ranch; OTD $1215/mo; 245 mi; 13,047 mi", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 13047, "price": 67995, "asking_price": 67995, "payment5_72": 1215.26, "payment5_72_price_only": 1095.05, "payment_includes_ttlr": true, "distance_mi": 245, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6L82SFB56277", "photos": ["https://platform.cstatic-images.com/in/v2/61da04d6-ec77-52c3-85e0-bf513a8a35b3/a211c7b9-3075-4c10-89f9-d0eed872eab7/pXGMiUguXXCZuKIhR8YpvhUjPeU.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L82SFB56277", "carscom": "https://www.cars.com/vehicledetail/980488fe-2338-4dca-9fe1-69a8ffaf35b0/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L82SFB56277", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L82SFB56277", "carscom": "https://www.cars.com/vehicledetail/980488fe-2338-4dca-9fe1-69a8ffaf35b0/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6L82SFB56277", "cargurus": null}, "dealer": {"name": "Peters Chevrolet", "address": "Longview, TX 75605", "phone": null}, "dealer_name": "Peters Chevrolet", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 62156, "kbbTradeIn": 54697, "book_purchase": 62156, "book_wholesale_proxy": 54697, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.094, "dealPill": "Stretch", "deal_score": 2.3093, "id": "kr-b56277", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "blue", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 67995, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7275.47, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 75458.96, "apr": 0.05, "term_months": 72, "monthly_payment": 1215.26, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 19, "rank_reason": "King Ranch; OTD $1259/mo; 171 mi; 3,970 mi", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4 CPO", "miles": 3970, "price": 70469, "asking_price": 70469, "payment5_72": 1259.37, "payment5_72_price_only": 1134.9, "payment_includes_ttlr": true, "distance_mi": 171, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LDXTFA43272", "photos": ["https://platform.cstatic-images.com/in/v2/b1775084-c3c3-594b-80a5-0d120c5c0876/997f9952-ae95-49fa-8bc1-b07390a02763/SiWcmHcfUEGdtqJnlitS_6K8Guo.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "carscom": "https://www.cars.com/vehicledetail/7daaa5b9-4ebd-46af-8eca-16cbfe1d45dc/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "cargurus": null}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "carscom": "https://www.cars.com/vehicledetail/7daaa5b9-4ebd-46af-8eca-16cbfe1d45dc/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "cargurus": null}, "dealer": {"name": "Marketplace Chevrolet", "address": "Stonewall, LA 71078", "phone": null}, "dealer_name": "Marketplace Chevrolet", "advertisedOptions": ["4x4", "CPO"], "options_highlighted": ["4x4"], "kbbFairPurchase": 67882, "kbbTradeIn": 59736, "book_purchase": 67882, "book_wholesale_proxy": 59736, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.038, "dealPill": "Stretch", "deal_score": 2.2974, "id": "kr-a43272", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "red", "notes": "Live AutosToday InStock; Cars.com often 403 from box. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 70469, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7540.18, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 78197.68, "apr": 0.05, "term_months": 72, "monthly_payment": 1259.37, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked/403 from audit box \u2014 confirm by phone before trip"], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}, {"rank": 20, "rank_reason": "King Ranch; OTD $1286/mo; 22 mi; 2,248 mi", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 2248, "price": 71979, "asking_price": 71979, "payment5_72": 1286.29, "payment5_72_price_only": 1159.22, "payment_includes_ttlr": true, "distance_mi": 22, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD9TFB07494", "photos": ["https://platform.cstatic-images.com/in/v2/8579bace-86bd-541f-a40d-8a5f0c75811c/1a2d2b5c-f10f-46e3-b0bd-6bfb17eff0a3/BB0Ok5eo8N2qM7Pk2saISbOqom8.jpg"], "listingUrls": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2026-Ford-F+150-King+Ranch-1FTFW6LD9TFB07494", "carscom": "https://www.cars.com/vehicledetail/ee3d12c2-9a7d-4535-8cd3-733a26c21d84/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD9TFB07494", "cargurus": null}, "links": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2026-Ford-F+150-King+Ranch-1FTFW6LD9TFB07494", "carscom": "https://www.cars.com/vehicledetail/ee3d12c2-9a7d-4535-8cd3-733a26c21d84/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD9TFB07494", "cargurus": null}, "dealer": {"name": "Sterling Ford", "address": "5524 I-49 North Service Rd, Opelousas, LA 70570", "phone": "337-942-2686"}, "dealer_name": "Sterling Ford", "advertisedOptions": ["4x4"], "options_highlighted": ["4x4"], "kbbFairPurchase": 68020, "kbbTradeIn": 59857, "book_purchase": 68020, "book_wholesale_proxy": 59857, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.058, "dealPill": "Stretch", "deal_score": 2.3443, "id": "kr-b07494", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "white", "notes": "Sterling Ford dealer VDP verified. Audit PASS. Bound \u2264250 mi (prefer \u2264200). STRETCH. ", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 71979, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7701.75, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 79869.25, "apr": 0.05, "term_months": 72, "monthly_payment": 1286.29, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "audit_result": "PASS", "is_stretch": true}];

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
