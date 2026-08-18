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
"[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"605a05bde50344f715c5a208e54836d0a05f6d8992":"$$RSC_SERVER_ACTION_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function action($$ACTION_CLOSURE_BOUND, e) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("605a05bde50344f715c5a208e54836d0a05f6d8992", $$ACTION_CLOSURE_BOUND);
    const R = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])("/admin/global/variable", typeof $$ACTION_ARG_0 !== 'undefined' ? "PUT" : "POST", {
        key: $$ACTION_ARG_1,
        value: +(e.get('value') + "")
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("./");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "605a05bde50344f715c5a208e54836d0a05f6d8992", null);
async function Page() {
    const [Enum = [], all = []] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])("/public/enum?id=VariableKey").then((e)=>e.data),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])("/admin/global/variable").then((e)=>e.data)
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gap-3 flex flex-col",
        children: Enum.map((item)=>{
            const v = all.find((o)=>o.key === item.key)?.value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "flex flex-col gap-1",
                action: $$RSC_SERVER_ACTION_0.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("605a05bde50344f715c5a208e54836d0a05f6d8992", v, item.key)),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: item.name,
                        defaultValue: v,
                        name: "value"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/variable/page.tsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            type: "submit",
                            children: "ذخیره"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/variable/page.tsx",
                            lineNumber: 32,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/variable/page.tsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/variable/page.tsx",
                lineNumber: 17,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(landing)/admin/variable/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/.next-internal/server/app/(landing)/admin/variable/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$variable$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/frontend/.next-internal/server/app/(landing)/admin/variable/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00765d2dd7f0bf57a7b85d268c3b5c7028e855a0e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "605a05bde50344f715c5a208e54836d0a05f6d8992",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$variable$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f28$landing$292f$admin$2f$variable$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$variable$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/(landing)/admin/variable/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$variable$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)");
}),
"[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/(landing)/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/(landing)/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/(landing)/admin/variable/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c8e903ea._.js.map