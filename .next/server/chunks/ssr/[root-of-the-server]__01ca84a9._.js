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
"[project]/frontend/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
;
}),
"[project]/frontend/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00765d2dd7f0bf57a7b85d268c3b5c7028e855a0e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/frontend/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$ssr$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/ssr/actions/user.ts [app-rsc] (ecmascript)");
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
"[project]/frontend/src/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const AppConfig = {
    title: "Kabinoo",
    logo: "logo.png"
};
const __TURBOPACK__default__export__ = AppConfig;
}),
"[project]/frontend/src/app/(main)/EmailBanner.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "EmailBanner-module__B_STiq__body",
  "control": "EmailBanner-module__B_STiq__control",
  "controls": "EmailBanner-module__B_STiq__controls",
  "image": "EmailBanner-module__B_STiq__image",
  "input": "EmailBanner-module__B_STiq__input",
  "inputWrapper": "EmailBanner-module__B_STiq__inputWrapper",
  "title": "EmailBanner-module__B_STiq__title",
  "wrapper": "EmailBanner-module__B_STiq__wrapper",
});
}),
"[project]/frontend/src/app/(main)/TextCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Image/Image.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$EmailBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/EmailBanner.module.css [app-rsc] (css module)");
;
;
;
function TextCard(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$EmailBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrapper + ` gap-3 ${props.reverse && "flex-row-reverse block! md:flex!"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$EmailBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].body + " w-full! pr-0! md:pr-28!",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Title"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$EmailBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title + " moraba font-semibold! text-xl! lg:text-4xl!",
                        children: props?.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        fw: 500,
                        fz: "lg",
                        mb: 5,
                        children: props.subtitle
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        fz: "sm",
                        c: "dimmed",
                        children: props.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    props?.footer
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Image"], {
                src: props?.image || "/design/image1.png",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$EmailBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].image + " rounded-4xl! object-contain! hidden! md:block!"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/TextCard.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/components/Carousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/components/Carousel.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/Carousel.tsx <module evaluation>", "default");
}),
"[project]/frontend/src/components/Carousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/components/Carousel.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/Carousel.tsx", "default");
}),
"[project]/frontend/src/components/Carousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/src/components/Carousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Carousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/src/app/(main)/CommentHtml.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "CommentHtml-module__m7RHBa__body",
  "comment": "CommentHtml-module__m7RHBa__comment",
  "content": "CommentHtml-module__m7RHBa__content",
});
}),
"[project]/frontend/src/app/(main)/Comment.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Rating$2f$Rating$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Rating/Rating.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TypographyStylesProvider$2f$TypographyStylesProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TypographyStylesProvider/TypographyStylesProvider.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$CommentHtml$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/CommentHtml.module.css [app-rsc] (css module)");
;
;
;
function Comment(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Paper"], {
        dir: 'rtl',
        withBorder: true,
        radius: "md",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$CommentHtml$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].comment + " h-44",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Group"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Avatar"], {
                        src: props.avatar || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
                        alt: props.author,
                        radius: "xl"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                fz: "sm",
                                children: props.author
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Rating$2f$Rating$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Rating"], {
                                value: props.rate,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TypographyStylesProvider$2f$TypographyStylesProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypographyStylesProvider"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$CommentHtml$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].body,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$CommentHtml$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                    children: props.content
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/Comment.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Comment;
}),
"[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/app/(main)/HSticky.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/app/(main)/HSticky.tsx <module evaluation>", "default");
}),
"[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/app/(main)/HSticky.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/app/(main)/HSticky.tsx", "default");
}),
"[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$HSticky$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$HSticky$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$HSticky$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "GlobalAddToCard",
    ()=>GlobalAddToCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GlobalAddToCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GlobalAddToCard() from the server but GlobalAddToCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/FullProductCard.tsx <module evaluation>", "GlobalAddToCard");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/components/FullProductCard.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/FullProductCard.tsx <module evaluation>", "default");
}),
"[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "GlobalAddToCard",
    ()=>GlobalAddToCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GlobalAddToCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GlobalAddToCard() from the server but GlobalAddToCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/FullProductCard.tsx", "GlobalAddToCard");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/src/components/FullProductCard.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/FullProductCard.tsx", "default");
}),
"[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FullProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FullProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FullProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/src/hard-code.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comments",
    ()=>comments,
    "ideroCategories",
    ()=>ideroCategories,
    "ideroColors",
    ()=>ideroColors,
    "products",
    ()=>products,
    "questions",
    ()=>questions
]);
const products = [
    {
        "id": 1,
        "title": "کابینت آشپزخانه مدرن سفید",
        "description": "این کابینت آشپزخانه مدرن با رنگ سفید براق، فضایی روشن و دلباز را برای آشپزخانه شما به ارمغان می‌آورد. طراحی مینیمال و خطوط صاف آن، به سادگی با هر دکوراسیونی هماهنگ می‌شود. جنس بدنه‌ها از MDF با کیفیت بالا بوده و روکش ملامینه ضدخش و ضدآب، دوام و طول عمر بالایی را تضمین می‌کند. این مجموعه شامل کابینت‌های زمینی و دیواری با فضای ذخیره‌سازی عالی است.",
        "price": 12500000,
        "image": "https://placehold.co/300x300/D1987B/637570?text=Kitchen+Cabinet",
        "category": "کابینت آشپزخانه"
    },
    {
        "id": 2,
        "title": "میز ناهارخوری چوبی روستیک",
        "description": "میز ناهارخوری روستیک با طراحی خاص و استفاده از چوب طبیعی، گرما و صمیمیت را به فضای غذاخوری شما می‌بخشد. سطح میز با پرداخت ویژه، مقاومت بالایی در برابر خط و خش و لکه دارد. پایه‌های مستحکم و طراحی ارگونومیک، راحتی و پایداری را هنگام استفاده تضمین می‌کند. این میز برای 6 تا 8 نفر مناسب است و نقطه کانونی زیبایی در دکوراسیون شما خواهد بود.",
        "price": 7800000,
        "image": "https://placehold.co/300x300/637570/D1987B?text=Dining+Table",
        "category": "میز ناهارخوری"
    },
    {
        "id": 3,
        "title": "کابینت حمام آینه‌دار",
        "description": "کابینت حمام با آینه یکپارچه، راه حلی هوشمندانه برای بهینه‌سازی فضای سرویس بهداشتی شماست. این کابینت علاوه بر فضای ذخیره‌سازی برای لوازم بهداشتی، آینه‌ای بزرگ و کاربردی را نیز ارائه می‌دهد. جنس ضدآب و مقاوم در برابر رطوبت، آن را برای محیط حمام ایده‌آل می‌سازد. طراحی شیک و مدرن، به زیبایی فضای شما می‌افزاید.",
        "price": 3200000,
        "image": "https://placehold.co/300x300/D1987B/637570?text=Bathroom+Cabinet",
        "category": "کابینت حمام"
    },
    {
        "id": 4,
        "title": "میز جلو مبلی گرد شیشه‌ای",
        "description": "میز جلو مبلی گرد با صفحه شیشه‌ای و پایه فلزی، انتخابی ایده‌آل برای دکوراسیون‌های مدرن و مینیمال است. صفحه شیشه‌ای سکوریت، علاوه بر زیبایی، مقاومت بالایی در برابر ضربه و حرارت دارد. پایه‌های فلزی با آبکاری کروم، جلوه‌ای براق و لوکس به میز می‌بخشند. این میز با ابعاد مناسب خود، فضای زیادی را اشغال نمی‌کند و به راحتی با مبلمان شما هماهنگ می‌شود.",
        "price": 4500000,
        "image": "https://placehold.co/300x300/637570/D1987B?text=Coffee+Table",
        "category": "میز جلو مبلی"
    },
    {
        "id": 5,
        "title": "کابینت لباسشویی و خشکشویی",
        "description": "این کابینت کاربردی، فضایی مرتب و سازمان‌یافته برای ماشین لباسشویی و خشکشویی شما فراهم می‌کند. با طراحی هوشمندانه، امکان قرارگیری مواد شوینده و لوازم جانبی در کنار دستگاه‌ها وجود دارد. جنس مقاوم در برابر رطوبت و طراحی ارگونومیک، استفاده از آن را در فضاهای محدود آسان می‌سازد. این کابینت به حفظ نظافت و زیبایی فضای لباسشویی کمک می‌کند.",
        "price": 6000000,
        "image": "https://placehold.co/300x300/D1987B/637570?text=Laundry+Cabinet",
        "category": "کابینت لباسشویی"
    },
    {
        "id": 6,
        "title": "میز کار اداری با کشو",
        "description": "میز کار اداری با طراحی ارگونومیک و فضای کافی، محیطی مناسب برای کار و مطالعه فراهم می‌کند. این میز دارای کشوهای جادار برای نگهداری اسناد و لوازم اداری است که به سازماندهی بهتر کمک می‌کند. سطح مقاوم در برابر خط و خش و پایه های محکم، دوام و پایداری آن را تضمین می‌کند. این میز مناسب برای دفاتر کار خانگی یا محیط‌های اداری است.",
        "price": 5200000,
        "image": "https://placehold.co/300x300/637570/D1987B?text=Office+Desk",
        "category": "میز اداری"
    },
    {
        "id": 7,
        "title": "کابینت ویترین چوبی کلاسیک",
        "description": "کابینت ویترین چوبی با سبک کلاسیک، فضایی شیک و لوکس برای نمایش ظروف و اشیاء دکوری شما ایجاد می‌کند. درب‌های شیشه‌ای و نورپردازی داخلی (اختیاری)، زیبایی محصولات شما را دوچندان می‌کند. این کابینت با جزئیات کنده‌کاری شده و رنگ‌بندی گرم، به دکوراسیون منزل شما اصالت می‌بخشد. جنس چوب با کیفیت بالا، دوام و زیبایی ماندگاری را تضمین می‌کند.",
        "price": 9500000,
        "image": "https://placehold.co/300x300/D1987B/637570?text=Display+Cabinet",
        "category": "کابینت ویترین"
    },
    {
        "id": 8,
        "title": "میز کامپیوتر گیمینگ",
        "description": "میز کامپیوتر گیمینگ با طراحی اختصاصی برای گیمرها، فضای کافی برای مانیتور، کیبورد، موس و سایر لوازم جانبی را فراهم می‌کند. این میز دارای جایگاه‌های مدیریت کابل و پورت‌های USB داخلی برای راحتی بیشتر است. ساختار محکم و سطح مقاوم در برابر خط و خش، مناسب برای استفاده طولانی مدت در جلسات بازی است. طراحی ارگونومیک آن، راحتی کاربر را در طول بازی تضمین می‌کند.",
        "price": 6800000,
        "image": "https://placehold.co/300x300/637570/D1987B?text=Gaming+Desk",
        "category": "میز کامپیوتر"
    },
    {
        "id": 9,
        "title": "کابینت کفش جاکفشی",
        "description": "کابینت کفش جاکفشی با طراحی کم‌جا و کاربردی، راه حلی ایده‌آل برای نظم بخشیدن به کفش‌های شما در ورودی منزل است. این کابینت با قفسه‌های شیب‌دار، امکان دسترسی آسان به کفش‌ها را فراهم می‌کند. جنس مقاوم و طراحی زیبا، آن را به عنصری دکوری نیز تبدیل می‌کند. این جاکفشی در ابعاد مختلف برای تعداد متفاوتی از کفش‌ها موجود است.",
        "price": 2800000,
        "image": "https://placehold.co/300x300/D1987B/637570?text=Shoe+Cabinet",
        "category": "کابینت کفش"
    },
    {
        "id": 10,
        "title": "میز تحریر تاشو",
        "description": "میز تحریر تاشو، راه حلی عالی برای فضاهای کوچک و آپارتمان‌ها است. این میز در زمان عدم نیاز به راحتی جمع می‌شود و فضای کمی را اشغال می‌کند. سطح صاف و مناسب برای مطالعه و کار، آن را به گزینه‌ای کاربردی تبدیل می‌کند. جنس سبک و مقاوم، حمل و نقل و استفاده از آن را آسان می‌سازد. این میز برای دانشجویان و کسانی که فضای محدودی دارند بسیار مناسب است.",
        "price": 3500000,
        "image": "https://placehold.co/300x300/637570/D1987B?text=Folding+Desk",
        "category": "میز تحریر"
    }
];
const comments = [
    {
        "username": "فرهاد",
        "product": "میز ناهارخوری",
        "review text": "طراحی‌های میز و کابینت‌های آشپزخانه بی‌نظیرند و کیفیت چوب به کار رفته عالی به نظر می‌رسد. به راحتی می‌توانم محصولات مورد نظرم را پیدا کنم و اطلاعات کاملی درباره هر کدام وجود دارد.",
        "star": 5
    },
    {
        "username": "مریم",
        "product": "کابینت آشپزخانه",
        "review text": "از تنوع محصولات موجود در وبسایت بسیار راضی بودم. از میزهای ناهارخوری گرفته تا کابینت‌های سفارشی، همه چیز به خوبی دسته‌بندی شده است. فرآیند سفارش هم بسیار ساده و کاربرپسند است.",
        "star": 5
    },
    {
        "username": "علی",
        "product": "میز تلویزیون",
        "review text": "وبسایت صنایع چوبی برای هر محصول جزئیات دقیق و تصاویر با کیفیت بالا ارائه می‌دهد که به من کمک کرد تا تصمیم‌گیری بهتری داشته باشم. امکان زوم روی تصاویر هم بسیار مفید بود.",
        "star": 4
    },
    {
        "username": "سارا",
        "product": "سرویس خواب",
        "review text": "سؤالی در مورد یکی از محصولات داشتم و از طریق فرم تماس وبسایت با آنها ارتباط برقرار کردم. پاسخ آنها بسیار سریع و جامع بود که نشان‌دهنده پشتیبانی عالی است.",
        "star": 4
    },
    {
        "username": "رضا",
        "product": "دکوراسیون چوبی",
        "review text": "این وبسایت نه تنها محلی برای خرید است، بلکه منابع الهام‌بخش زیادی برای طراحی دکوراسیون داخلی آشپزخانه و منزل ارائه می‌دهد. بخش گالری تصاویر بسیار کاربردی است.",
        "star": 5
    },
    {
        "username": "نازنین",
        "product": "قفسه کتاب",
        "review text": "وبسایت صنایع چوبی بسیار سریع بارگذاری می‌شود و ناوبری در آن بسیار آسان است. به راحتی می‌توان بین صفحات مختلف جابجا شد و به اطلاعات مورد نیاز دسترسی پیدا کرد.",
        "star": 4
    },
    {
        "username": "محمد",
        "product": "دراور",
        "review text": "نکته مثبت دیگری که به چشم می‌آید، به‌روزرسانی منظم محصولات و طرح‌های جدید است. همیشه چیزهای جدیدی برای دیدن وجود دارد که باعث می‌شود دوباره به این وبسایت سر بزنم.",
        "star": 4
    },
    {
        "username": "لیلا",
        "product": "صندلی",
        "review text": "بخش‌هایی از وبسایت که به توضیح درباره انواع چوب و مواد اولیه مورد استفاده می‌پردازد، بسیار مفید بود. این اطلاعات به من کمک کرد تا انتخابی آگاهانه داشته باشم.",
        "star": 3
    },
    {
        "username": "احمد",
        "product": "پارتیشن چوبی",
        "review text": "وجود بخش نظرات مشتریان و امکان مشاهده تجربه دیگران، اعتماد بیشتری به من داد. این شفافیت در ارائه بازخوردها بسیار ارزشمند است.",
        "star": 5
    },
    {
        "username": "فاطمه",
        "product": "کنسول",
        "review text": "طراحی کلی وبسایت بسیار حرفه‌ای و چشم‌نواز است. ترکیب رنگ‌ها و فونت‌ها به خوبی انتخاب شده‌اند که تجربه کاربری دلپذیری را فراهم می‌کند.",
        "star": 4
    }
];
const questions = [
    {
        "q": "آیا امکان سفارش محصولات صنایع چوبی به صورت سفارشی و با ابعاد دلخواه مشتری وجود دارد؟",
        "answer": "بله، در صنایع چوبی، ما این امکان را برای مشتریان عزیز فراهم کرده‌ایم که محصولات مورد نیاز خود را، اعم از میز، کابینت، کمد، و سایر مصنوعات چوبی، با ابعاد، طرح، رنگ، و جنس چوب دلخواه سفارش دهند. تیم طراحی و ساخت ما آماده همکاری با شماست تا رؤیاهایتان را به واقعیت تبدیل کند و محصولی منحصر به فرد و متناسب با فضای شما خلق نماید. برای این منظور، کافیست با کارشناسان ما تماس بگیرید و جزئیات سفارش خود را مطرح کنید. ما در اسرع وقت، طرح اولیه و پیش‌فاکتور را برای شما ارسال خواهیم کرد."
    },
    {
        "q": "مدت زمان تحویل سفارشات پس از ثبت نهایی چقدر است و آیا امکان پیگیری وضعیت سفارش وجود دارد؟",
        "answer": "مدت زمان تحویل سفارشات بسته به نوع و پیچیدگی محصول، و همچنین حجم کاری موجود در کارگاه، متغیر است. اما به طور معمول، برای محصولات استاندارد، بین ۷ تا ۱۴ روز کاری زمان لازم است. برای سفارشات سفارشی، این زمان ممکن است تا ۲۵ روز کاری نیز افزایش یابد. پس از ثبت نهایی سفارش، کد پیگیری به شما ارائه خواهد شد و می‌توانید از طریق وبسایت یا تماس با واحد پشتیبانی، به صورت لحظه‌ای از وضعیت سفارش خود مطلع شوید. ما تمام تلاش خود را می‌کنیم تا سفارش شما در سریع‌ترین زمان ممکن و با بالاترین کیفیت به دستتان برسد."
    },
    {
        "q": "چه نوع چوب‌هایی در ساخت محصولات صنایع چوبی مورد استفاده قرار می‌گیرد و تفاوت آن‌ها در چیست؟",
        "answer": "در صنایع چوبی، ما از طیف وسیعی از چوب‌های با کیفیت بالا برای ساخت محصولات خود استفاده می‌کنیم تا پاسخگوی نیازها و سلیقه‌های مختلف مشتریان باشیم. از جمله چوب‌های پرکاربرد می‌توان به **چوب راش** (با دوام و مقاوم در برابر رطوبت)، **چوب گردو** (دارای رگه‌های زیبا و استحکام بالا)، **چوب افرا** (روشن و با بافت یکنواخت)، **چوب بلوط** (بسیار سخت و مقاوم) و **MDF** (اقتصادی و با قابلیت روکش‌کاری متنوع) اشاره کرد. هر کدام از این چوب‌ها ویژگی‌ها، رنگ‌بندی، و قیمت متفاوتی دارند. در بخش مقالات وبسایت، می‌توانید اطلاعات جامع‌تری در مورد ویژگی‌های هر نوع چوب و کاربردهای آن مطالعه کنید تا انتخابی آگاهانه داشته باشید."
    },
    {
        "q": "آیا خدمات نصب و مونتاژ محصولات نیز توسط صنایع چوبی ارائه می‌شود و هزینه آن چگونه محاسبه می‌گردد؟",
        "answer": "بله، صنایع چوبی برای راحتی هرچه بیشتر مشتریان خود، خدمات نصب و مونتاژ محصولات را نیز ارائه می‌دهد. تیم متخصص و باتجربه ما، مسئولیت نصب صحیح و اصولی محصولات شما را در محل بر عهده خواهند گرفت. هزینه نصب و مونتاژ بسته به نوع و اندازه محصول و همچنین پیچیدگی فرآیند نصب، متفاوت است. در زمان ثبت سفارش یا هنگام مشاوره با کارشناسان ما، می‌توانید از جزئیات دقیق هزینه‌ها مطلع شوید. هدف ما ارائه خدماتی جامع و بی‌نقص از مرحله انتخاب محصول تا نصب نهایی آن است تا تجربه خریدی دلپذیر برای شما رقم بخورد."
    },
    {
        "q": "ضمانت و خدمات پس از فروش محصولات صنایع چوبی شامل چه مواردی است و مدت زمان آن چقدر می‌باشد؟",
        "answer": "تمامی محصولات صنایع چوبی دارای ضمانت کیفیت و خدمات پس از فروش می‌باشند. این ضمانت شامل هرگونه نقص فنی یا ایراد در ساخت محصول است که ناشی از فرآیند تولید باشد. مدت زمان ضمانت برای اکثر محصولات، **۱ سال** از تاریخ تحویل می‌باشد. خدمات پس از فروش نیز شامل تعمیرات احتمالی، تامین قطعات یدکی (در صورت موجود بودن) و مشاوره برای نگهداری صحیح از محصولات است. برای استفاده از خدمات ضمانت و پس از فروش، کافیست با واحد پشتیبانی ما تماس حاصل فرمایید و شماره فاکتور خود را اعلام کنید. رضایت شما اولویت اصلی ماست."
    },
    {
        "q": "چگونه می‌توانم از جدیدترین طرح‌ها و محصولات صنایع چوبی مطلع شوم؟",
        "answer": "برای اطلاع از جدیدترین طرح‌ها و محصولات، می‌توانید به طور منظم از وبسایت ما بازدید کنید، در خبرنامه ایمیلی ما عضو شوید، یا صفحات ما را در شبکه‌های اجتماعی دنبال کنید. ما به صورت دوره‌ای، کاتالوگ‌های جدید و نمونه کارهای اخیر را منتشر می‌کنیم تا مشتریان عزیز همیشه در جریان آخرین روندها و مدل‌ها باشند."
    }
];
const ideroCategories = [
    {
        "name": "همه محصول ها",
        "english_name": null,
        "url": "/store",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/3/3BO6KKP2_icon.jpg",
        "data_cat_reload": null,
        "data_min_width": null,
        "data_max_width": null
    },
    {
        "name": "کتابخانه",
        "english_name": "Library",
        "url": "/store/Library",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/3/3BO6KKP2_icon.jpg",
        "data_cat_reload": "1",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "میز تلویزیون",
        "english_name": "TvStand",
        "url": "/store/TvStand",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/E/EQ1XFU38_icon.jpg",
        "data_cat_reload": "2",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "میز کنسول",
        "english_name": "Console",
        "url": "/store/Console",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/0/099GTI1E_icon.jpg",
        "data_cat_reload": "3",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "کمد",
        "english_name": "Closet",
        "url": "/store/Closet",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/E/E5ZCDVSK_icon.jpg",
        "data_cat_reload": "4",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "جاکفشی",
        "english_name": "ShoesBox",
        "url": "/store/ShoesBox",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/6/6YHE99E2_icon.jpg",
        "data_cat_reload": "5",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "دراور",
        "english_name": "Drawer",
        "url": "/store/Drawer",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/2/2IEFVA5F_icon.jpg",
        "data_cat_reload": "6",
        "data_min_width": "85",
        "data_max_width": "290"
    },
    {
        "name": "سرویس خواب",
        "english_name": "Bed",
        "url": "/store/Bed",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/1/1k2zz810_icon.jpg",
        "data_cat_reload": "7",
        "data_min_width": "0",
        "data_max_width": "0"
    },
    {
        "name": "میز تحریر",
        "english_name": "Desk",
        "url": "/store/Desk",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/z/zpct7pca_icon.jpg",
        "data_cat_reload": "8",
        "data_min_width": "0",
        "data_max_width": "0"
    },
    {
        "name": "پاتختی",
        "english_name": "BedSideTable",
        "url": "/store/BedSideTable",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/k/k7pr0xdg_icon.jpg",
        "data_cat_reload": "9",
        "data_min_width": "0",
        "data_max_width": "0"
    },
    {
        "name": "میز جلو مبلی",
        "english_name": "Coffeetable",
        "url": "/store/Coffeetable",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/t/te2ykvvt_icon.jpg",
        "data_cat_reload": "10",
        "data_min_width": "0",
        "data_max_width": "0"
    },
    {
        "name": "اکسسوری",
        "english_name": "Accessories",
        "url": "/store/Accessories",
        "image_url": "//idero.73577.ir.cdn.ir/file/product/s/smqia9m9_icon.jpg",
        "data_cat_reload": "11",
        "data_min_width": "0",
        "data_max_width": "0"
    }
];
const ideroColors = [
    {
        id: 1559,
        name: "طرح چوب تیره",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/8/8hfx9158dger8618_200.jpg",
        active: false
    },
    {
        id: 1556,
        name: "گردویی",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/1/1hu14w51kuz5064c_200.jpg",
        active: false
    },
    {
        id: 1554,
        name: "طرح چوب روشن",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/a/allvw00z9f5b5dfy_200.jpg",
        active: false
    },
    {
        id: 1550,
        name: "سبز تیره",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/j/jkl51kqnixv3vimq_200.jpg",
        active: false
    },
    {
        id: 1549,
        name: "طوسی روشن",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/0/0pasm6cm9r4lgdtd_200.jpg",
        active: true
    },
    {
        id: 1548,
        name: "طوسی تیره",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/2/27vaijaxmtj3q3zi_200.jpg",
        active: false
    },
    {
        id: 1547,
        name: "آبی اقیانوس",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/w/wjl8m5c2kj3jykkm_200.jpg",
        active: false
    },
    {
        id: 1546,
        name: "سفید برفی",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/i/ibjeuanintwe2nkz_200.jpg",
        active: false
    },
    {
        id: 1544,
        name: "زرد جذاب",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/6/6j0pl48caxm4bsnu_200.jpg",
        active: false
    },
    {
        id: 1543,
        name: "قرمز شیک",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/c/cmwx2fhmia48yetp_200.jpg",
        active: false
    },
    {
        id: 1541,
        name: "مشکی",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/9/9wvkpv5u7yztgl3q_200.jpg",
        active: false
    },
    {
        id: 1540,
        name: "کاپوچینو",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/5/5oue62al5u65mllm_200.jpg",
        active: false
    },
    {
        id: 1539,
        name: "سبز سیب",
        backgroundImage: "//idero.73577.ir.cdn.ir/file/configurator/5/5xdp5ekkm3kxa5kq_200.jpg",
        active: false
    }
];
}),
"[project]/frontend/src/app/(main)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$TextCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/TextCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$Accordion$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionControl$2f$AccordionControl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionItem$2f$AccordionItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionPanel$2f$AccordionPanel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Carousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$Comment$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/Comment.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$HSticky$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/HSticky.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FullProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/FullProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hard$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hard-code.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const fallbackContent = [
    {
        key: "hero",
        title: "Kabinoo",
        subtitle: "همراه شما هستیم",
        description: "تا فضایی شیک و کاربردی خلق کنیم!",
        image: "/design/sliders/lg-00.jpg",
        buttonLabel: "شروع طراحی",
        buttonHref: "/design",
        enabled: true
    },
    {
        key: "about",
        title: "کابینو",
        subtitle: "فراتر از طراحی",
        description: "با تجربه و دقت، فضای کاربردی و زیبایی برای خانه شما می‌سازیم.",
        image: "/design/image1.png",
        buttonLabel: "آشنایی بیشتر",
        buttonHref: "/about",
        enabled: true
    },
    {
        key: "design",
        title: "خودت طراحی کن!",
        subtitle: "قابلیت سفارشی‌سازی سفارش",
        description: "از ایده تا اجرا، جزئیات فضای اختصاصی خود را انتخاب کنید.",
        image: "/design/sliders/sm-02.jpg",
        buttonLabel: "طراحی کن",
        buttonHref: "/design",
        enabled: true
    },
    {
        key: "calculator",
        title: "قبل از تصمیم، حسابش کن",
        subtitle: "برآورد هوشمند هزینه",
        description: "با چند انتخاب ساده، دید اولیه‌ای از هزینه پروژه‌تان به دست آورید.",
        image: "/design/calc-bg.png",
        buttonLabel: "محاسبه قیمت",
        buttonHref: "/calc",
        enabled: true
    },
    {
        key: "shop",
        title: "برای خانه‌ات انتخاب کن",
        subtitle: "فروشگاه محصولات چوبی",
        description: "مدل‌های آماده را ببینید و برای فضای خودتان سفارش دهید.",
        image: "/design/image2.png",
        buttonLabel: "ورود به فروشگاه",
        buttonHref: "/shop",
        enabled: true
    },
    {
        key: "counseling",
        title: "شروع یک فضای خوب با یک گفت‌وگو",
        subtitle: "مشاوره رایگان طراحی",
        description: "کارشناسان کابینو برای انتخاب بهتر کنار شما هستند.",
        image: "/design/sliders/sm-04.jpg",
        buttonLabel: "دریافت مشاوره",
        buttonHref: "/counseling",
        enabled: true
    }
];
async function Page(props) {
    const [products = [], categories = [], comments = [], homepageResponse] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])("/public/products?_include=category,color,detail,material").then((e)=>e.data),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])("/public/categories?count=products").then((e)=>e.data),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])('/public/products/comments').then((e)=>e.data),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backend"])('/public/homepage')
    ]);
    const content = homepageResponse.ok && homepageResponse.data?.length ? homepageResponse.data : fallbackContent;
    const byKey = (key)=>content.find((item)=>item.key === key && item.enabled) || fallbackContent.find((item)=>item.key === key);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'container mx-auto',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$HSticky$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'relative mt-2',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: byKey("hero").image,
                        className: 'w-full rounded-2xl md:rounded-3xl min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[60vh] object-cover',
                        alt: 'خانه'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: 'overlay center lg:justify-start! p-2 md:p-0',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: 'bg-secondary/70 backdrop-blur-lg rounded-2xl md:rounded-4xl lg:rounded-r-none! p-3 md:p-6 w-full md:min-w-md',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: ' flex items-end flex-col mb-2 md:mb-4',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "center items-end! gap-2 md:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl md:text-4xl",
                                                children: "Kabinoo"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].title,
                                                width: 50,
                                                height: 50,
                                                src: '/logo.png',
                                                className: "md:!w-[70px] md:!h-[70px]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg md:text-2xl",
                                            children: byKey("hero").subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: 'text-base md:text-xl',
                                            children: byKey("hero").description
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$TextCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: byKey("about").title,
                subtitle: byKey("about").subtitle,
                description: byKey("about").description,
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        className: 'mt-5!',
                        children: byKey("about").buttonLabel
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 87,
                        columnNumber: 25
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                    lineNumber: 86,
                    columnNumber: 21
                }, void 0),
                reverse: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$TextCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: byKey("design").title,
                subtitle: byKey("design").subtitle,
                description: byKey("design").description,
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/design",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        className: 'mt-5!',
                        children: byKey("design").buttonLabel
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 100,
                        columnNumber: 25
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                    lineNumber: 99,
                    columnNumber: 21
                }, void 0),
                image: byKey("design").image
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-10"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                "aria-label": "خدمات کابینو",
                children: [
                    "calculator",
                    "shop",
                    "counseling"
                ].map((key)=>{
                    const item = byKey(key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: item.buttonHref,
                        className: "kabinoo-service-card group relative min-h-56 overflow-hidden rounded-3xl bg-primary text-white shadow-md transition-transform hover:-translate-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: "",
                                className: "absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                lineNumber: 117,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-full min-h-56 flex-col justify-end gap-2 bg-black/35 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-white/85",
                                        children: item.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-6 text-white/90",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 font-bold text-white kabinoo-service-arrow",
                                        children: [
                                            item.buttonLabel,
                                            " ←"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 112,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-10"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-4',
                children: "محبوب ترین محصولات"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FullProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            ...p
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this)
                    }, i, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-12"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-4',
                children: "دسته بندی ها"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                slidePerView: 4,
                children: categories.map((o, i)=>{
                    const image = o?.image || `/design/sliders/sm-0${i % 8}.jpg`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselSlide"], {
                        className: 'relative my-5 mb-10',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/shop?category=${o?.id}`,
                            className: `relative ${i % 2 === 0 ? "bg-accent/50" : "bg-primary/50"} block rounded-2xl shadow overflow-hidden`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image,
                                    alt: 'Image',
                                    className: 'h-full w-full absolute left-0 -z-10'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: 'backdrop-blur w-full  center flex-col gap-5  p-3',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: image,
                                                alt: 'Image',
                                                className: 'object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mx-auto'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: '',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: 'text-center text-white text-2xl!',
                                                children: o?.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                            lineNumber: 147,
                            columnNumber: 29
                        }, this)
                    }, o?.id, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 143,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-12"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-5',
                children: "نظرات کاربران"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: comments.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$Comment$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            ...o,
                            avatar: i % 2 === 0 ? "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                        }, this)
                    }, i, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 176,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 md:mt-12"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-5',
                children: "سوالات متداول"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$Accordion$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accordion"], {
                variant: "separated",
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-5',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionItem$2f$AccordionItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: `q-`,
                        className: 'hidden'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hard$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["questions"].map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionItem$2f$AccordionItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                className: 'bg-accent! text-white!',
                                value: `q-${i}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionControl$2f$AccordionControl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionControl"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: 'line-clamp-1 truncate text-white!',
                                            children: q.q
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionPanel$2f$AccordionPanel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionPanel"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: 'font-bold mb-3',
                                                children: q.q
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this),
                                            q.answer
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/page.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/page.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/page.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Page;
}),
"[project]/frontend/src/app/(main)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/(main)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01ca84a9._.js.map