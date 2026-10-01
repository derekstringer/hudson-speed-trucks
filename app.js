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
const EMBEDDED_TRUCKS = [{"rank": 1, "rank_reason": "Longhorn rank priority; CPO; OTD pay $756; 61 mi; 57,753 mi; STRETCH", "priorityFind": false, "year": 2021, "make": "Ram", "model": "1500", "trim": "Longhorn Crew 4x4 CPO", "miles": 57753, "price": 42222, "asking_price": 42222, "payment5_72": 755.78, "payment5_72_price_only": 679.98, "payment_includes_ttlr": true, "distance_mi": 61, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFKT6MN666448", "photos": [], "listingUrls": {"dealer": "https://www.hixsonfordalex.com/used-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/b8cc07a3-4077-4029-b79a-b7030846e965/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT6MN666448"}, "links": {"dealer": "https://www.hixsonfordalex.com/used-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/b8cc07a3-4077-4029-b79a-b7030846e965/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFKT6MN666448"}, "dealer": {"name": "Hixson Ford of Alexandria", "address": "2506 South MacArthur Dr, Alexandria, LA 71301", "phone": "318-472-2723"}, "dealer_name": "Hixson Ford of Alexandria", "advertisedOptions": ["CPO", "4x4", "Crew Cab", "5.7 ft bed"], "options_highlighted": ["CPO", "4x4", "Crew Cab", "5.7 ft bed"], "kbbFairPurchase": 40500, "kbbTradeIn": 35500, "book_purchase": 40500, "book_wholesale_proxy": 35500, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.043, "dealPill": "Stretch", "deal_score": 1.7988, "id": "alex-lh-666448", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "White", "notes": "CPO Longhorn within 200 mi. Dealer site Cloudflare-blocked on refresh; Cars.com+AutosToday InStock 2026-10-01 \u2014 call to confirm. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 42222, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 4517.75, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 46928.25, "apr": 0.05, "term_months": 72, "monthly_payment": 755.78, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer VDP Cloudflare-blocked \u2014 confirm still for sale with Hixson Ford Alexandria before trip", "Photos not on Cars.com SRP thumb"], "availability_verify": "aggregator_instock", "is_stretch": true}, {"rank": 2, "rank_reason": "Longhorn rank priority; OTD pay $1017; 70 mi; 21,956 mi; STRETCH", "priorityFind": false, "year": 2026, "make": "Ram", "model": "1500", "trim": "Limited Longhorn Crew 4x4", "miles": 21956, "price": 56895, "asking_price": 56895, "payment5_72": 1017.37, "payment5_72_price_only": 916.29, "payment_includes_ttlr": true, "distance_mi": 70, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1C6SRFHP3TN183380", "photos": [], "listingUrls": {"dealer": "https://www.cars.com/dealers/6021559/autoplex-sulphur/inventory/", "carscom": "https://www.cars.com/vehicledetail/40b4dc8d-c9ab-4c7e-a8f6-71856ae12018/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFHP3TN183380"}, "links": {"dealer": "https://www.cars.com/dealers/6021559/autoplex-sulphur/inventory/", "carscom": "https://www.cars.com/vehicledetail/40b4dc8d-c9ab-4c7e-a8f6-71856ae12018/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1C6SRFHP3TN183380"}, "dealer": {"name": "Autoplex Sulphur (Autoplex 2000)", "address": "2910 East Napoleon St, Sulphur, LA 70663", "phone": "888-810-0816"}, "dealer_name": "Autoplex Sulphur", "advertisedOptions": ["4x4", "Crew Cab", "Limited Longhorn"], "options_highlighted": ["4x4", "Crew Cab", "Limited Longhorn"], "kbbFairPurchase": 55000, "kbbTradeIn": 50000, "book_purchase": 55000, "book_wholesale_proxy": 50000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.034, "dealPill": "Stretch", "deal_score": 2.0514, "id": "sulphur-lh-183380", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "Crew", "bed": "5.7 ft", "color": "Gray", "notes": "Used 2026 Limited Longhorn. RamBox not confirmed on aggregator options. Dealer site blocked; AT InStock \u2014 call Autoplex. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 56895, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6087.77, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 63171.26, "apr": 0.05, "term_months": 72, "monthly_payment": 1017.37, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["RamBox not confirmed \u2014 hunt on dealer photos", "Dealer site blocked from box; confirm availability by phone"], "availability_verify": "aggregator_instock", "is_stretch": true}, {"rank": 3, "rank_reason": "two-tone; OTD pay $1160; 22 mi; 9,487 mi; STRETCH", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 9487, "price": 64895, "asking_price": 64895, "payment5_72": 1159.99, "payment5_72_price_only": 1045.13, "payment_includes_ttlr": true, "distance_mi": 22, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD4SFA33089", "photos": ["https://platform.cstatic-images.com/in/v2/8579bace-86bd-541f-a40d-8a5f0c75811c/ffcec165-3525-4fff-aeeb-d4cf3d712b42/hLlxyKbfJdKcy8ho_Rsf9BnX8Os.jpg"], "listingUrls": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2025-Ford-F+150-King+Ranch-1FTFW6LD4SFA33089", "carscom": "https://www.cars.com/vehicledetail/3dbab298-e7bf-420c-aebb-60660e166ece/", "autostoday": null}, "links": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2025-Ford-F+150-King+Ranch-1FTFW6LD4SFA33089", "carscom": "https://www.cars.com/vehicledetail/3dbab298-e7bf-420c-aebb-60660e166ece/", "autostoday": null}, "dealer": {"name": "Sterling Ford", "address": "5524 I-49 North Service Rd, Opelousas, LA 70570", "phone": "337-942-2686"}, "dealer_name": "Sterling Ford", "advertisedOptions": ["PowerBoost Hybrid", "FX4 Off-Road", "B&O Unleashed", "Panoramic roof", "Tough Bed", "4x4"], "options_highlighted": ["PowerBoost Hybrid", "FX4 Off-Road", "B&O Unleashed", "Panoramic roof", "Tough Bed", "4x4"], "kbbFairPurchase": 62000, "kbbTradeIn": 57500, "book_purchase": 62000, "book_wholesale_proxy": 57500, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.047, "dealPill": "Stretch", "deal_score": 2.207, "id": "opelousas-kr-33089", "condition": "Good", "stock_number": "F10773", "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Antimatter Blue / Marsh Gray", "notes": "DEALER VERIFIED available. Two-tone Antimatter Blue/Marsh Gray. PowerBoost hybrid. FX4. Closest KR. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64895, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6943.76, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 72027.26, "apr": 0.05, "term_months": 72, "monthly_payment": 1159.99, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "is_stretch": true}, {"rank": 4, "rank_reason": "OTD pay $1117; 47 mi; 34,915 mi; STRETCH", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 34915, "price": 62460, "asking_price": 62460, "payment5_72": 1116.58, "payment5_72_price_only": 1005.91, "payment_includes_ttlr": true, "distance_mi": 47, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD5SFA30797", "photos": ["https://platform.cstatic-images.com/in/v2/cdbb93ff-746e-5f8c-b0f0-94050be0134b/e9dfd3ac-0ca3-4457-8b6b-b16d229b384b/voEBxBCSDeO93Wah4HWsMs06gfY.jpg"], "listingUrls": {"dealer": "https://www.mendozaford.com/all-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/61060bd1-a768-4853-bcec-96da57ffd30d/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD5SFA30797"}, "links": {"dealer": "https://www.mendozaford.com/all-inventory/index.htm", "carscom": "https://www.cars.com/vehicledetail/61060bd1-a768-4853-bcec-96da57ffd30d/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD5SFA30797"}, "dealer": {"name": "Mendoza Ford", "address": "7951 Maurice Ave, Maurice, LA 70555", "phone": "337-740-1000"}, "dealer_name": "Mendoza Ford", "advertisedOptions": ["4x4", "King Ranch", "SuperCrew"], "options_highlighted": ["4x4", "King Ranch", "SuperCrew"], "kbbFairPurchase": 59000, "kbbTradeIn": 54000, "book_purchase": 59000, "book_wholesale_proxy": 54000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.059, "dealPill": "Stretch", "deal_score": 2.1756, "id": "maurice-kr-30797", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "White", "notes": "AT InStock @ Mendoza Ford Maurice. Dealer VDP Cloudflare-blocked \u2014 call to confirm. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 62460, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6683.22, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 69331.72, "apr": 0.05, "term_months": 72, "monthly_payment": 1116.58, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer VDP blocked \u2014 call Mendoza Ford before trip"], "availability_verify": "aggregator_instock", "is_stretch": true}, {"rank": 5, "rank_reason": "OTD pay $1151; 97 mi; 24,625 mi; STRETCH", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 24625, "price": 64378, "asking_price": 64378, "payment5_72": 1150.78, "payment5_72_price_only": 1036.8, "payment_includes_ttlr": true, "distance_mi": 97, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD2SFA92500", "photos": ["https://platform.cstatic-images.com/in/v2/4497031f-652a-423f-b070-22562b4666c5/4ca84c30-eb1d-4816-9198-f8a0a2213315/EaiDoV-488w2uCbRYZeIqn8mKjU.jpg"], "listingUrls": {"dealer": "https://www.geauxcdjr.com/inventory/", "carscom": "https://www.cars.com/vehicledetail/60c8772d-d9c6-4adc-b082-8e1436cd02b6/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD2SFA92500"}, "links": {"dealer": "https://www.geauxcdjr.com/inventory/", "carscom": "https://www.cars.com/vehicledetail/60c8772d-d9c6-4adc-b082-8e1436cd02b6/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LD2SFA92500"}, "dealer": {"name": "Geaux CDJR Denham Springs", "address": "2590 Range Park Drive, Denham Springs, LA 70726", "phone": null}, "dealer_name": "Geaux CDJR Denham Springs", "advertisedOptions": ["PowerBoost Hybrid", "FX4", "601A High", "4x4"], "options_highlighted": ["PowerBoost Hybrid", "FX4", "601A High", "4x4"], "kbbFairPurchase": 60000, "kbbTradeIn": 55000, "book_purchase": 60000, "book_wholesale_proxy": 55000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.073, "dealPill": "Stretch", "deal_score": 2.2238, "id": "denham-kr-92500", "condition": "Good", "stock_number": "P22202", "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Star White", "notes": "AT InStock Denham Springs. Geaux dealer site Cloudflare-blocked. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64378, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6888.45, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 71454.95, "apr": 0.05, "term_months": 72, "monthly_payment": 1150.78, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site Cloudflare-blocked \u2014 call Geaux CDJR to confirm"], "availability_verify": "aggregator_instock", "is_stretch": true}, {"rank": 6, "rank_reason": "OTD pay $1156; 191 mi; 23,607 mi; STRETCH", "priorityFind": false, "year": 2025, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 23607, "price": 64650, "asking_price": 64650, "payment5_72": 1155.63, "payment5_72_price_only": 1041.18, "payment_includes_ttlr": true, "distance_mi": 191, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD7SFA57161", "photos": ["https://platform.cstatic-images.com/in/v2/68c2ba79-384c-55a5-a826-757b61b5bc93/d0a57c79-6f89-4caa-abd8-d54c51c3a673/f8OwDFoec5Blx9IyBoGPjkFInDc.jpg"], "listingUrls": {"dealer": "https://www.randallreedsplanetford.com/vehicle/1FTFW6LD7SFA57161/Used--2025--Ford--F--150--Truck_Hybrid----Humble--TX/", "carscom": "https://www.cars.com/vehicledetail/3f8d35a6-0286-4be6-b1c9-e0d9cd4f1b91/", "autostoday": null}, "links": {"dealer": "https://www.randallreedsplanetford.com/vehicle/1FTFW6LD7SFA57161/Used--2025--Ford--F--150--Truck_Hybrid----Humble--TX/", "carscom": "https://www.cars.com/vehicledetail/3f8d35a6-0286-4be6-b1c9-e0d9cd4f1b91/", "autostoday": null}, "dealer": {"name": "Randall Reed's Planet Ford", "address": "19000 Eastex Frwy, Humble, TX 77338", "phone": "281-319-9600"}, "dealer_name": "Randall Reed's Planet Ford", "advertisedOptions": ["PowerBoost Hybrid", "FX4 Off-Road", "B&O 14-speaker", "Moonroof", "4x4"], "options_highlighted": ["PowerBoost Hybrid", "FX4 Off-Road", "B&O 14-speaker", "Moonroof", "4x4"], "kbbFairPurchase": 60000, "kbbTradeIn": 55000, "book_purchase": 60000, "book_wholesale_proxy": 55000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.077, "dealPill": "Stretch", "deal_score": 2.2326, "id": "humble-kr-57161", "condition": "Good", "stock_number": "T5923A", "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Agate Black Metallic", "notes": "DEALER VERIFIED available @ Planet Ford Humble. PowerBoost hybrid FX4. OSRM 191 mi \u2264200 hard bound. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 64650, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 6917.55, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 71756.05, "apr": 0.05, "term_months": 72, "monthly_payment": 1155.63, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "is_stretch": true}, {"rank": 7, "rank_reason": "two-tone; OTD pay $1187; 181 mi; 2,293 mi; STRETCH", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 2293, "price": 66435, "asking_price": 66435, "payment5_72": 1187.45, "payment5_72_price_only": 1069.93, "payment_includes_ttlr": true, "distance_mi": 181, "twoTone": true, "two_tone": true, "hasRamBox": false, "rambox": false, "vin": "1FTFW6L81TFA53708", "photos": ["https://platform.cstatic-images.com/in/v2/3f0e9192-b75d-5ead-8cc9-cb181aefbaed/3902413b-920d-45ef-bcf6-f603aadaf315/PpDsGPPmXg1KUeQVYbhOXnYjZ1E.jpg"], "listingUrls": {"dealer": "https://www.dealerrater.com/classifieds/2026-Ford-F_150-ad-1FTFW6L81TFA53708-38710/", "carscom": "https://www.cars.com/vehicledetail/fa629dc4-27ea-4cbb-a902-e181df8816e7/", "autostoday": null}, "links": {"dealer": "https://www.dealerrater.com/classifieds/2026-Ford-F_150-ad-1FTFW6L81TFA53708-38710/", "carscom": "https://www.cars.com/vehicledetail/fa629dc4-27ea-4cbb-a902-e181df8816e7/", "autostoday": null}, "dealer": {"name": "Community Honda", "address": "5700 East Freeway, Baytown, TX 77521", "phone": "832-572-5468"}, "dealer_name": "Community Honda Baytown", "advertisedOptions": ["FX4 Off-Road", "EcoBoost 3.5", "B&O Unleashed", "Power-deployable boards", "4x4", "Two-tone accent"], "options_highlighted": ["FX4 Off-Road", "EcoBoost 3.5", "B&O Unleashed", "Power-deployable boards", "4x4", "Two-tone accent"], "kbbFairPurchase": 64000, "kbbTradeIn": 59000, "book_purchase": 64000, "book_wholesale_proxy": 59000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.038, "dealPill": "Stretch", "deal_score": 2.2255, "id": "baytown-kr-53708", "condition": "Good", "stock_number": "TE018339A", "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Agate Black Metallic / Marsh Gray accent", "notes": "Live on DealerRater from Community Honda Baytown ($66,435). Dealer site CF-blocked. Special paint lower accent two-tone noted. FX4. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 66435, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7108.55, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 73732.04, "apr": 0.05, "term_months": 72, "monthly_payment": 1187.45, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer mycommunityhonda.com VDP 404/CF \u2014 confirm with Community Honda Baytown before trip"], "availability_verify": "dealer_secondary", "is_stretch": true}, {"rank": 8, "rank_reason": "CPO; OTD pay $1259; 171 mi; 3,970 mi; STRETCH", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4 CPO", "miles": 3970, "price": 70469, "asking_price": 70469, "payment5_72": 1259.37, "payment5_72_price_only": 1134.9, "payment_includes_ttlr": true, "distance_mi": 171, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LDXTFA43272", "photos": ["https://platform.cstatic-images.com/in/v2/b1775084-c3c3-594b-80a5-0d120c5c0876/997f9952-ae95-49fa-8bc1-b07390a02763/SiWcmHcfUEGdtqJnlitS_6K8Guo.jpg"], "listingUrls": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "carscom": "https://www.cars.com/vehicledetail/7daaa5b9-4ebd-46af-8eca-16cbfe1d45dc/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272"}, "links": {"dealer": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272", "carscom": "https://www.cars.com/vehicledetail/7daaa5b9-4ebd-46af-8eca-16cbfe1d45dc/", "autostoday": "https://www.autostoday.com/cars-for-sale/used-cars/listing/1FTFW6LDXTFA43272"}, "dealer": {"name": "Marketplace Chevrolet Buick", "address": "Stonewall, LA 71078", "phone": null}, "dealer_name": "Marketplace Chevrolet", "advertisedOptions": ["CPO", "4x4", "King Ranch", "SuperCrew"], "options_highlighted": ["CPO", "4x4", "King Ranch", "SuperCrew"], "kbbFairPurchase": 66000, "kbbTradeIn": 61000, "book_purchase": 66000, "book_wholesale_proxy": 61000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.068, "dealPill": "Stretch", "deal_score": 2.3274, "id": "stonewall-kr-43272", "condition": "Good", "stock_number": null, "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Red", "notes": "AT InStock CPO @ Marketplace Chevrolet Stonewall. Dealer site blocked. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 70469, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7540.18, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 78197.68, "apr": 0.05, "term_months": 72, "monthly_payment": 1259.37, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": ["Dealer site blocked \u2014 call Marketplace Chevrolet Stonewall to confirm"], "availability_verify": "aggregator_instock", "is_stretch": true}, {"rank": 9, "rank_reason": "OTD pay $1286; 22 mi; 2,248 mi; STRETCH", "priorityFind": false, "year": 2026, "make": "Ford", "model": "F-150", "trim": "King Ranch SuperCrew 4x4", "miles": 2248, "price": 71979, "asking_price": 71979, "payment5_72": 1286.29, "payment5_72_price_only": 1159.22, "payment_includes_ttlr": true, "distance_mi": 22, "twoTone": false, "two_tone": false, "hasRamBox": false, "rambox": false, "vin": "1FTFW6LD9TFB07494", "photos": ["https://platform.cstatic-images.com/in/v2/8579bace-86bd-541f-a40d-8a5f0c75811c/1a2d2b5c-f10f-46e3-b0bd-6bfb17eff0a3/BB0Ok5eo8N2qM7Pk2saISbOqom8.jpg"], "listingUrls": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2026-Ford-F+150-King+Ranch-1FTFW6LD9TFB07494", "carscom": "https://www.cars.com/vehicledetail/ee3d12c2-9a7d-4535-8cd3-733a26c21d84/", "autostoday": null}, "links": {"dealer": "https://www.sterlingfordopelousas.com/used-Opelousas-2026-Ford-F+150-King+Ranch-1FTFW6LD9TFB07494", "carscom": "https://www.cars.com/vehicledetail/ee3d12c2-9a7d-4535-8cd3-733a26c21d84/", "autostoday": null}, "dealer": {"name": "Sterling Ford", "address": "5524 I-49 North Service Rd, Opelousas, LA 70570", "phone": "337-942-2686"}, "dealer_name": "Sterling Ford", "advertisedOptions": ["PowerBoost Hybrid", "601A High", "B&O Unleashed", "Power-deployable boards", "4x4"], "options_highlighted": ["PowerBoost Hybrid", "601A High", "B&O Unleashed", "Power-deployable boards", "4x4"], "kbbFairPurchase": 68000, "kbbTradeIn": 63000, "book_purchase": 68000, "book_wholesale_proxy": 63000, "book_source": "Estimated from market comps + KBB method (live KBB blocked 2026-10-01; re-verify on kbb.com)", "ltv": 1.059, "dealPill": "Stretch", "deal_score": 2.3453, "id": "opelousas-kr-07494", "condition": "Good", "stock_number": "26T1033A", "drivetrain": "4x4", "cab": "SuperCrew", "bed": "5.5 ft", "color": "Star White Metallic Tri-Coat", "notes": "DEALER VERIFIED available. Low miles stretch on price/payment. PowerBoost hybrid 601A. | STRETCH (price/miles/payment).", "still_for_sale": true, "date_seen": "2026-10-01", "ttlr": {"asking_price": 71979, "sales_tax_rate": 0.107, "sales_tax_rate_pct": "10.70%", "sales_tax_amount": 7701.75, "title_fee": 68.5, "license_fee": 112.0, "registration_fee": 8.0, "amount_financed": 79869.25, "apr": 0.05, "term_months": 72, "monthly_payment": 1286.29, "jurisdiction": "Eunice city limits inside Acadia Parish, LA (ZIP 70535)"}, "missingDataNotes": [], "availability_verify": "dealer_ok", "is_stretch": true}];

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
