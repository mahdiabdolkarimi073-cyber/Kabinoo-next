module.exports = [
"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00765d2dd7f0bf57a7b85d268c3b5c7028e855a0e2":"logout"},"",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function logout() {
    const c = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    c.delete("token");
    c.delete("user");
    return true;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00765d2dd7f0bf57a7b85d268c3b5c7028e855a0e2", null);
}),
"[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40cc0d28c3852e87071e6901b4bb299a2ed731a9ea":"getCalculateResult"},"",""] */ __turbopack_context__.s([
    "getCalculateResult",
    ()=>getCalculateResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getPriceSettings() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])('/public/calcPrice', 'GET');
    if (!res.ok || !res.data) return null;
    return res.data;
}
async function calculatePrice(params, prices) {
    const alength = Number(params.alength) || 100;
    const blength = Number(params.blength) || 100;
    const clength = Number(params.clength) || 100;
    const islandlength = Number(params.islandlength) || 0;
    const openlength = Number(params.openlength) || 0;
    const openDepth = Number(params.openDepth) || 60;
    const tallWidth = Number(params.tallWidth) || 0;
    const ceilHeight = Number(params.ceilHeight) || 70;
    const refrigeratorWidth = Number(params.refrigeratorWidth) || 0;
    const hasDishwasher = params.hasDishwasher === '1' || params.hasDishwasher === true;
    const hasLaundry = params.hasLaundry === '1' || params.hasLaundry === true;
    const layoutno = Number(params.layoutno) || 1;
    const wallCabinetType = params.wallCabinetType || 'none';
    const hoodType = params.hoodType || 'none';
    const ovenType = params.ovenType || 'none';
    const totalWallLength = (alength + blength + clength) / 100;
    const islandMeter = islandlength / 100;
    const openMeter = openlength / 100;
    let totalCabinetMeter = totalWallLength;
    totalCabinetMeter += islandMeter * 0.8;
    totalCabinetMeter += openMeter * (openDepth / 100);
    const heightFactor = ceilHeight / 70;
    const widthFactor = 1 + tallWidth / 1000;
    let mdfPrice = totalCabinetMeter * prices.mdfPrice * heightFactor * widthFactor;
    let highGlassPrice = totalCabinetMeter * prices.highglassPrice * heightFactor * widthFactor;
    let vacuumPrice = totalCabinetMeter * prices.vacuumPrice * heightFactor * widthFactor;
    let colorPrice = totalCabinetMeter * prices.colorPrice * heightFactor * widthFactor;
    if (refrigeratorWidth > 0) {
        const fridgeCost = refrigeratorWidth / 80 * prices.fridgeCost;
        mdfPrice += fridgeCost * 0.5;
        highGlassPrice += fridgeCost * 0.5;
        vacuumPrice += fridgeCost * 0.5;
        colorPrice += fridgeCost * 0.5;
    }
    if (hasDishwasher) {
        mdfPrice += prices.dishwasherCost * 0.3;
        highGlassPrice += prices.dishwasherCost * 0.3;
        vacuumPrice += prices.dishwasherCost * 0.3;
        colorPrice += prices.dishwasherCost * 0.3;
    }
    if (hasLaundry) {
        mdfPrice += prices.laundryCost * 0.3;
        highGlassPrice += prices.laundryCost * 0.3;
        vacuumPrice += prices.laundryCost * 0.3;
        colorPrice += prices.laundryCost * 0.3;
    }
    if (wallCabinetType === 'simple') {
        const cost = prices.wallCabinetCost;
        mdfPrice += cost * 0.35;
        highGlassPrice += cost * 0.4;
        vacuumPrice += cost * 0.4;
        colorPrice += cost * 0.45;
    } else if (wallCabinetType === 'stepped') {
        const cost = prices.wallCabinetSteppedCost;
        mdfPrice += cost * 0.35;
        highGlassPrice += cost * 0.4;
        vacuumPrice += cost * 0.4;
        colorPrice += cost * 0.45;
    }
    if (hoodType === 'exposed') {
        const cost = prices.hoodCost;
        mdfPrice += cost * 0.3;
        highGlassPrice += cost * 0.35;
        vacuumPrice += cost * 0.35;
        colorPrice += cost * 0.4;
    } else if (hoodType === 'hidden') {
        const cost = prices.hoodHiddenCost;
        mdfPrice += cost * 0.3;
        highGlassPrice += cost * 0.35;
        vacuumPrice += cost * 0.35;
        colorPrice += cost * 0.4;
    }
    if (ovenType === 'surface') {
        const cost = prices.ovenCost;
        mdfPrice += cost * 0.3;
        highGlassPrice += cost * 0.35;
        vacuumPrice += cost * 0.35;
        colorPrice += cost * 0.4;
    } else if (ovenType === 'builtIn') {
        const cost = prices.ovenBuiltInCost;
        mdfPrice += cost * 0.3;
        highGlassPrice += cost * 0.35;
        vacuumPrice += cost * 0.35;
        colorPrice += cost * 0.4;
    }
    const layoutComplexity = {
        1: 1.0,
        2: 1.1,
        3: 1.1,
        4: 1.2,
        5: 1.0,
        6: 1.2,
        7: 1.2,
        8: 1.3,
        9: 1.2,
        10: 1.4,
        11: 1.3,
        12: 1.5
    };
    const complexityFactor = layoutComplexity[layoutno] || 1.0;
    mdfPrice *= complexityFactor;
    highGlassPrice *= complexityFactor;
    vacuumPrice *= complexityFactor;
    colorPrice *= complexityFactor;
    return {
        Mdf: Math.round(mdfPrice),
        HighGlass: Math.round(highGlassPrice),
        Vacuum: Math.round(vacuumPrice),
        Color: Math.round(colorPrice)
    };
}
async function getCalculateResult(params) {
    const requiredParams = [
        'alength',
        'blength',
        'clength',
        'islandlength',
        'openlength',
        'tallWidth',
        'ceilHeight',
        'refrigeratorWidth',
        'openDepth',
        'hasDishwasher',
        'hasLaundry',
        'layoutno',
        'wallCabinetType',
        'hoodType',
        'ovenType'
    ];
    const defaultValues = {
        'alength': 100,
        'blength': 100,
        'clength': 100,
        'islandlength': 0,
        'openlength': 0,
        'tallWidth': 0,
        'ceilHeight': 70,
        'refrigeratorWidth': 0,
        'openDepth': 60,
        'hasDishwasher': false,
        'hasLaundry': false,
        'layoutno': 1,
        'wallCabinetType': 'none',
        'hoodType': 'none',
        'ovenType': 'none'
    };
    requiredParams.forEach((param)=>{
        if (!(param in params) || params[param] === undefined || params[param] === null) {
            params[param] = defaultValues[param];
        }
    });
    const form = new FormData();
    for (const [key, value] of Object.entries(params)){
        let stringValue;
        if (typeof value === 'boolean') {
            stringValue = value ? '1' : '0';
        } else {
            stringValue = String(value);
        }
        form.append(key, stringValue);
    }
    try {
        const response = await fetch("https://idero.ir/cabinet/getprice", {
            body: form,
            method: "POST",
            headers: {
                'Accept': 'application/json'
            }
        });
        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch  {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }
        if (data.Code && data.Code !== 0) {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }
        if (data.Mdf === 0 && data.HighGlass === 0 && data.Vacuum === 0 && data.Color === 0) {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }
        if (data.Mdf && data.HighGlass && data.Vacuum && data.Color) {
            return {
                Mdf: data.Mdf,
                HighGlass: data.HighGlass,
                Vacuum: data.Vacuum,
                Color: data.Color
            };
        }
        const prices = await getPriceSettings();
        if (!prices) return null;
        return calculatePrice(params, prices);
    } catch (error) {
        console.error('Error fetching from API, using local calculation:', error);
        const prices = await getPriceSettings();
        if (!prices) return null;
        return calculatePrice(params, prices);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCalculateResult
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCalculateResult, "40cc0d28c3852e87071e6901b4bb299a2ed731a9ea", null);
}),
"[project]/frontend/.next-internal/server/app/(main)/calc/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/frontend/.next-internal/server/app/(main)/calc/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00765d2dd7f0bf57a7b85d268c3b5c7028e855a0e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "40cc0d28c3852e87071e6901b4bb299a2ed731a9ea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCalculateResult"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$calc$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/(main)/calc/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/calc/action.ts [app-rsc] (ecmascript)");
}),
"[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/app/(main)/calc/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/app/(main)/calc/page.tsx <module evaluation>", "default");
}),
"[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/app/(main)/calc/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/app/(main)/calc/page.tsx", "default");
}),
"[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$calc$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/(main)/calc/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12c7028f._.js.map