module.exports = [
"[project]/frontend/src/no-side/Loading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Progress/Progress.mjs [app-ssr] (ecmascript)");
;
;
const Loading = (props)=>{
    let { overlay, text = 'درحال بارگذاری' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${!props.overlay ? "min-h-[200px] relative" : "absolute left-0 top-0 h-full"} w-full center flex-col`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingOverlay"], {
                visible: true,
                overlayProps: {
                    radius: 'sm',
                    blur: 2,
                    zIndex: 2
                },
                loaderProps: {
                    color: 'primary',
                    type: 'bars',
                    top: "-45px"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/no-side/Loading.tsx",
                lineNumber: 10,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'absolute top-0 mt-5 bottom-0 m-auto w-full center  flex-col max-w-[300px]',
                style: {
                    zIndex: "400"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: 'mb-1',
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/no-side/Loading.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                        radius: "xl",
                        size: "md",
                        value: 100,
                        className: 'w-full',
                        color: 'primary',
                        striped: true,
                        animated: true
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/no-side/Loading.tsx",
                        lineNumber: 19,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/no-side/Loading.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/no-side/Loading.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Loading;
}),
"[project]/frontend/src/app/(main)/design/test/Configurator.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Configurator-module__XHtkWW__container",
  "controls": "Configurator-module__XHtkWW__controls",
  "iframe": "Configurator-module__XHtkWW__iframe",
});
}),
"[project]/frontend/src/app/(main)/design/test/help.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"overalWidthRange\",\"title\":\"انتخاب عرض\",\"description\":\"عرض کلی %type% خود را با استفاده از کشیدن نوار یا دکمه‌های جهت‌نما تعیین کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"overalHeightRange\",\"title\":\"انتخاب ارتفاع\",\"description\":\"ارتفاع %type% را بدون در نظر گیری پایه با کشیدن نوار یا دکمه‌های کیبورد تنظیم کنید\",\"related\":\"overalHeightRange\"},{\"id\":\"overalDepthRange\",\"title\":\"انتخاب عمق\",\"description\":\"عمق %type% را از میان گزینه‌های موجود انتخاب کنید تا متناسب با فضای شما باشد\",\"related\":\"overalDepthRange\"},{\"id\":\"sectionCountDropDown\",\"title\":\"تعداد ستون\",\"description\":\"تعداد ستون‌های %type% را انتخاب کنید. سیستم بر اساس عرض کلی گزینه‌های مناسب را نمایش می‌دهد\",\"related\":\"sectionCountDropDown\"},{\"id\":\"color\",\"title\":\"انتخاب رنگ\",\"description\":\"از میان رنگ‌های متنوع شامل طرح‌های چوبی، رنگ‌های ساده و جذاب، رنگ مورد نظر %type% را انتخاب کنید\",\"related\":\"color\"},{\"id\":\"column_click\",\"title\":\"تنظیمات ستون\",\"description\":\"برای تغییر عرض، ارتفاع و تعداد طبقات هر ستون به صورت جداگانه، روی قسمت زیرین ستون کلیک کنید\",\"related\":\"sectionCountDropDown\"},{\"id\":\"shelf_click\",\"title\":\"تنظیمات طبقه\",\"description\":\"برای اضافه کردن درب، کشو یا فلپ به طبقه، تغییر ارتفاع طبقه یا تنظیم یراق آلات داخلی، روی طبقه مورد نظر کلیک کنید\",\"related\":\"overalHeightRange\"},{\"id\":\"multi_select\",\"title\":\"انتخاب چندگانه\",\"description\":\"برای ایجاد درب مشترک و یکپارچه روی چند طبقه، کلیک چپ را نگه دارید و روی طبقات مورد نظر بکشید تا همزمان انتخاب شوند\",\"related\":\"overalHeightRange\"},{\"id\":\"fpInput\",\"title\":\"موقعیت درب/کشو\",\"description\":\"تعیین کنید که درب یا کشوها درون چارچوب طبقه قرار بگیرند یا روی چارچوب نصب شوند\",\"related\":\"fpInput\"},{\"id\":\"handleInput\",\"title\":\"تنظیمات دستگیره\",\"description\":\"مشخص کنید که آیا تمام درب و کشوهای %type% مجهز به دستگیره باشند یا بدون دستگیره طراحی شوند\",\"related\":\"handleInput\"},{\"id\":\"handleModeInput\",\"title\":\"نوع دستگیره\",\"description\":\"در صورت داشتن دستگیره، نوع آن را روکار (ظاهر) یا مخفی (فشاری) انتخاب کنید\",\"related\":\"handleModeInput\"},{\"id\":\"closetModeInput\",\"title\":\"نوع کمد\",\"description\":\"نوع کمد را ساده یا پله‌ای انتخاب کنید. کمد پله‌ای دارای طبقات با عمق متفاوت است\",\"related\":\"closetModeInput\"},{\"id\":\"bptInput\",\"title\":\"ضخامت پشت محصول\",\"description\":\"انتخاب کنید که پشت %type% از ورق 3 میلی‌متری استاندارد یا ورق 16 میلی‌متری مقاوم‌تر ساخته شود\",\"related\":\"bptInput\"},{\"id\":\"feetInput\",\"title\":\"تنظیمات پایه\",\"description\":\"تعیین کنید که آیا %type% مجهز به پایه تراز کننده باشد یا مستقیماً روی زمین قرار گیرد. پایه به ارتفاع کلی اضافه می‌شود\",\"related\":\"feetInput\"},{\"id\":\"price_display\",\"title\":\"قیمت\",\"description\":\"قیمت نهایی %type% بر اساس تمام تنظیمات و ویژگی‌های انتخابی محاسبه و نمایش داده می‌شود\",\"related\":\"color\"},{\"id\":\"reset_button\",\"title\":\"شروع مجدد\",\"description\":\"تمام تنظیمات و طراحی انجام شده را پاک کرده و فرآیند طراحی %type% را از ابتدا شروع کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"undo_button\",\"title\":\"بازگشت\",\"description\":\"آخرین تغییر اعمال شده در طراحی را لغو کرده و به حالت قبلی بازگردید\",\"related\":\"overalWidthRange\"},{\"id\":\"dimension_display\",\"title\":\"نمایش ابعاد\",\"description\":\"ابعاد دقیق و کامل %type% طراحی شده را مشاهده کنید. برای بازگشت به حالت عادی مجدداً کلیک کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"save_design\",\"title\":\"ذخیره طراحی\",\"description\":\"طراحی کامل %type% خود را ذخیره کنید تا در آینده بتوانید به آن دسترسی داشته باشید و تغییرات اعمال کنید\",\"related\":\"color\"},{\"id\":\"add_to_cart\",\"title\":\"افزودن به سبد\",\"description\":\"پس از تکمیل طراحی، %type% سفارشی خود را با تمام ویژگی‌های انتخابی به سبد خرید اضافه کنید\",\"related\":\"color\"},{\"id\":\"hoodInput\",\"title\":\"هود\",\"description\":\"تعیین کنید که آیا %type% مجهز به هود باشد یا خیر\",\"related\":\"hoodInput\"},{\"id\":\"hoodModeInput\",\"title\":\"نوع هود\",\"description\":\"در صورت داشتن هود، نوع آن را مخفی (درون کار) یا روکار انتخاب کنید\",\"related\":\"hoodInput\"},{\"id\":\"microwaveInput\",\"title\":\"فر/ماکروفر\",\"description\":\"تعیین کنید که آیا %type% مجهز به فر یا ماکروفر باشد یا خیر\",\"related\":\"microwaveInput\"},{\"id\":\"microwaveModeInput\",\"title\":\"نوع فر/ماکروفر\",\"description\":\"در صورت داشتن فر یا ماکروفر، نوع آن را توکار (درون کار) یا روکار انتخاب کنید\",\"related\":\"microwaveInput\"}]"));}),
"[project]/frontend/src/app/(main)/design/test/Configurator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2f$Slider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider/Slider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/Configurator.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBack$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowBack.mjs [app-ssr] (ecmascript) <export default as IconArrowBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconRefresh.mjs [app-ssr] (ecmascript) <export default as IconRefresh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconSwitchHorizontal.mjs [app-ssr] (ecmascript) <export default as IconSwitchHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$help$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/help.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/page.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const Configurator = (props)=>{
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [controls, setControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeControl, setActiveControl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoriesLabels"].find((o)=>o.id === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoriesReverse"][props.category])?.name;
    //@ts-ignore
    window['D_T'] = type;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMessage = (event)=>{
            if (event.data.code === 100) {
                setLoading(false);
                setControls(event.data.data);
            } else if (event.data.code === 101) {
                const { id, value } = event.data.data || {};
                setData((prev)=>({
                        ...prev,
                        [id]: value
                    }));
            } else if (event.data.code === 105) {
                setPrice(+event.data.data || 0);
            } else if (event.data.code === 200) {
                props?.onSave?.(event.data.data);
            }
        };
        window.addEventListener('message', handleMessage);
        return ()=>window.removeEventListener('message', handleMessage);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.data) {
            window.localStorage.setItem("InitObject", JSON.stringify({
                Configurator: JSON.stringify(props.data)
            }));
        }
    }, [
        props
    ]);
    const sendCommand = (command, data)=>{
        console.log(command, data);
        if (command === "setControlValue") {
            setData((prev)=>({
                    ...prev,
                    [data.id + ""]: data.value
                }));
        }
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage({
                command,
                data
            }, '*');
        }
    };
    const renderControl = (control)=>{
        if (control.id === "sectionCountDropDown") {
            control.type = "range";
            control.tag = "input";
            const options = [
                ...control.options || []
            ];
            if (!!options.length) {
                const nums = options.map((o)=>+o.value);
                control.min = Math.min(...nums);
                control.max = Math.max(...nums);
                control.marks = options.map((o)=>({
                        value: +o.value,
                        label: `${o.value}`
                    }));
                control.prefix = "ستون";
                delete control.options;
            }
        }
        if (control.tag === "select" || control.type === "button-list") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        fw: 500,
                        mb: 5,
                        children: control.label
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: data[control.id]?.toString?.() || String(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: parseInt(value) || value
                            }),
                        data: control.options || [],
                        ...control?.options?.[0]?.extra && {
                            renderOption: ({ checked, option })=>{
                                const item = control.options?.find((o)=>o.value === option.value);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: 'flex items-center gap-2',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "100%",
                                                objectFit: "cover"
                                            },
                                            src: item?.extra,
                                            alt: option.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 163,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: option.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 169,
                                            columnNumber: 41
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 162,
                                    columnNumber: 37
                                }, void 0);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, control.id, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (control.options && control.tag !== "select") {
            const currentValue = data[control.id] !== undefined ? data[control.id] : control.value;
            const stringValue = typeof currentValue === "boolean" ? String(currentValue) : String(currentValue || "");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: control.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                data: control.options,
                                onChange: (e)=>sendCommand('setControlValue', {
                                        id: control.id,
                                        value: e
                                    }),
                                value: stringValue
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 186,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    control.id === "handleInput" && data[control.id] === "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: 'flex items-center justify-end gap-3 mt-2',
                        children: [
                            'dot',
                            'line'
                        ].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    sendCommand("Click", {
                                        path: `[data-handleobject-id="${i + 1}"]`
                                    });
                                    setData((prev)=>({
                                            ...prev,
                                            ol: i + ""
                                        }));
                                },
                                style: {
                                    width: "40px",
                                    height: "40px"
                                },
                                className: `rounded-xl overflow-hidden border ${data['ol'] === i + "" ? "border-primary" : "border-gray-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `/design/configure/door-${o}.png`,
                                    alt: o,
                                    className: 'w-full j-full object-cover'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 212,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, o + i, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 193,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        }
        if (control.type === "range") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        fw: 500,
                        mb: 5,
                        children: control.label
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 227,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2f$Slider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                        min: +control.min,
                        max: +control.max,
                        marks: control.marks,
                        value: data[control.id] || Number(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value
                            }),
                        label: (value)=>`${control.marks?.find((o)=>o.value === value)?.label || value} ${control.prefix || "cm"}`
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    control.marks?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        size: "xs",
                        className: "mt-5",
                        data: control.marks.map((o)=>({
                                ...o,
                                value: o.value + "",
                                label: o.label + ` ${control.prefix || "cm"}`
                            })),
                        value: data[control.id]?.toString() || Number(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: +(value || control.min)
                            })
                    }, data[control.id]?.toString() || Number(control.value), false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 239,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberInput"], {
                        size: "xs",
                        className: "mt-1",
                        min: +control.min,
                        max: +control.max,
                        defaultValue: data[control.id] || Number(control.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") {
                                sendCommand('setControlValue', {
                                    id: control.id,
                                    value: Math.max(control.min, Math.min(e.target.value, control.max))
                                });
                            }
                        },
                        onBlur: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: value.target.value
                            })
                    }, data[control.id] || Number(control.value), false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 255,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, control.id, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 226,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container + " my-10 relative flex flex-col lg:flex-row gap-3",
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[3-vh] center mx-auto absolute left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 285,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 284,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                className: 'min-w-[300px]',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col gap-4 hidden md:flex",
                    children: [
                        controls.map((e, i)=>{
                            const node = renderControl(e);
                            if (!node) return;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: e.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: node
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 296,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 295,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                            id: 'price_display',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                color: "secondary",
                                size: "xl",
                                fullWidth: true,
                                children: [
                                    price.toLocaleString("fa"),
                                    " تومان"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 303,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 302,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                            id: 'save_design',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>sendCommand('Save', {}),
                                children: "ذخیره"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 306,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 305,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs opacity-70",
                            children: "زمان تحویل 3 الی 6 هفته"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 310,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 290,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 289,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow flex flex-col items-end min-h-[70vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'reset_button',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>{
                                        setData({});
                                        sendCommand("Eval", {
                                            value: "reset()"
                                        });
                                    },
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__["IconRefresh"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 326,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 318,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'undo_button',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>sendCommand("Eval", {
                                            value: "undo()"
                                        }),
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBack$3e$__["IconArrowBack"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 329,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'dimension_display',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>sendCommand("Eval", {
                                            value: "changeView()"
                                        }),
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__["IconSwitchHorizontal"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 339,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        ref: iframeRef,
                        src: `/idero-2/index.html?category=${props.category}`,
                        className: "min-h-[550px] w-full overflow-none",
                        scrolling: 'none',
                        onLoad: ()=>sendCommand('getControls', {})
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:hidden w-full gap-5 min-h-50 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-auto grow flex flex-nowrap gap-5 p-1",
                                    style: {
                                        minWidth: "100%",
                                        width: 0
                                    },
                                    children: controls.filter((o)=>!!o.label).map((o)=>{
                                        const selected = activeControl?.id === o.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: selected ? "filled" : 'outline',
                                            onClick: ()=>{
                                                setActiveControl(o);
                                            },
                                            classNames: {
                                                root: "min-w-30"
                                            },
                                            children: o.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 364,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 357,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeControl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: activeControl.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: renderControl(activeControl)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 375,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 374,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 355,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 bg-white relative -top-10",
                        dir: "rtl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg max-w-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800 mb-6",
                                    children: [
                                        "راهنمای طراحی ",
                                        type
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 383,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700 leading-relaxed space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "در این محیط می‌توانید ",
                                                type,
                                                " دلخواه خود را به صورت کاملاً سفارشی طراحی کنید. ابتدا ابعاد کلی شامل عرض، ارتفاع و عمق را تعیین کنید. سپس تعداد ستون‌هایی که می‌خواهید ",
                                                type,
                                                " شما داشته باشد را انتخاب کنید. توجه داشته باشید که سیستم بر اساس عرض انتخابی شما، محدودیت‌های منطقی برای تعداد ستون‌ها اعمال می‌کند."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "رنگ و نمای ظاهری ",
                                                type,
                                                " را از میان گزینه‌های متنوعی که شامل طرح‌های چوبی، رنگ‌های ساده و رنگ‌های جذاب است انتخاب کنید. هر رنگ با کیفیت بالا و مقاوم در برابر استفاده روزانه طراحی شده است."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "برای تنظیمات دقیق‌تر، روی هر ستون کلیک کنید تا بتوانید عرض، ارتفاع و تعداد طبقات آن را به صورت جداگانه تنظیم کنید. همچنین با کلیک روی هر طبقه، امکان اضافه کردن درب، کشو یا فلپ و تغییر ارتفاع طبقه فراهم است. اگر می‌خواهید چندین طبقه دارای درب مشترک باشند، کلیک چپ را نگه داشته و روی طبقات مورد نظر بکشید."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 400,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "در تنظیمات عملکردی مشخص کنید که درب‌ها و کشوها درون چارچوب طبقه قرار گیرند یا روی چارچوب نصب شوند. همچنین تعیین کنید که آیا تمام قسمت‌ها مجهز به دستگیره باشند یا از سیستم فشاری استفاده کنید."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 407,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "ضخامت پشت محصول را بر اساس نیاز خود انتخاب کنید. ورق نازک برای استفاده معمولی و صرفه‌جویی در قیمت مناسب است، در حالی که ورق ضخیم مقاومت و دوام بیشتری دارد."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 413,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "در نهایت تصمیم بگیرید که آیا ",
                                                type,
                                                " شما مجهز به پایه‌های تنظیم‌کننده باشد یا خیر. این پایه‌ها امکان تراز کردن روی سطوح ناهموار را فراهم می‌کنند و ارتفاع آن‌ها به ارتفاع کلی محصول اضافه خواهد شد."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 418,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "قیمت نهایی ",
                                                type,
                                                " بر اساس تمام انتخاب‌ها و تنظیمات شما به صورت لحظه‌ای محاسبه و نمایش داده می‌شود. پس از اتمام طراحی، می‌توانید آن را ذخیره کرده و سپس به سبد خرید اضافه کنید."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 424,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 386,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 382,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 381,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 314,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
        lineNumber: 282,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function Help(props) {
    //@ts-ignore
    const type = window['D_T'];
    const help = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$help$2e$json__$28$json$29$__["default"].find((o)=>o.id === props.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        position: 'left',
        radius: 'sm',
        bg: 'white',
        color: 'black',
        classNames: {
            tooltip: "drop-shadow"
        },
        label: help ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: 'text-black',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    children: help.title
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 455,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: 'text-xs word-breaks ',
                    children: help.description.replaceAll("%type%", type)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 456,
                    columnNumber: 21
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 454,
            columnNumber: 17
        }, void 0) : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: props.className,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 460,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
        lineNumber: 445,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>Promise.resolve(Configurator), {
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 467,
            columnNumber: 90
        }, ("TURBOPACK compile-time value", void 0))
});
}),
"[project]/frontend/src/style-stuff/StyledDiv.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function StyledDiv(props) {
    const className = props.base || "div-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const finalBase = props.base ? className : "." + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: styleToString(finalBase, props.important, props.style || {})
            }, Math.random(), false, {
                fileName: "[project]/frontend/src/style-stuff/StyledDiv.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])(className, props.className)
            }, void 0, false, {
                fileName: "[project]/frontend/src/style-stuff/StyledDiv.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
const toKebabCase = (str)=>{
    return str.replace(/[A-Z]/g, (letter)=>`-${letter.toLowerCase()}`);
};
// Function to escape special characters in class names
const escapeClassName = (className)=>{
    return className.replace(/[^a-z0-9\-_]/gi, '-');
};
function styleToString(baseName, important = false, style = undefined) {
    const list = Object.entries(style);
    let body = ``;
    let after = "";
    for (const [key, value] of list){
        if (typeof value === 'object') {
            const kStr = `${key}`;
            after += styleToString(kStr.startsWith(":") ? `${baseName}${kStr}` : baseName + " " + kStr, important, value) + "\n";
        } else {
            body += `${toKebabCase(key)}: ${value || (typeof value === 'string' ? "''" : "") || value} ${important ? "!important" : ""};`;
        }
    }
    return `${baseName} { ${body} }\n${after}`;
}
const __TURBOPACK__default__export__ = StyledDiv;
}),
"[project]/frontend/src/app/(main)/design/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoriesLabels",
    ()=>CategoriesLabels,
    "CategoriesReverse",
    ()=>CategoriesReverse,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/Configurator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$StyledDiv$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/style-stuff/StyledDiv.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const Categories = {
    Library: 1,
    TvStand: 2,
    Console: 3,
    Closet: 4,
    ShoesBox: 5,
    Drawer: 6,
    Open: 7,
    BedSideTable: 9
};
const CategoriesReverse = Object.fromEntries(Object.entries(Categories).map(([key, value])=>[
        value,
        key
    ]));
const CategoriesLabels = [
    {
        "name": "کتابخانه",
        "image": "//cdn.idero.ir/file/product/3/3BO6KKP2_icon.jpg",
        "id": "Library"
    },
    {
        "name": "میز تلویزیون",
        "image": "//cdn.idero.ir/file/product/E/EQ1XFU38_icon.jpg",
        "id": "TvStand"
    },
    {
        "name": "میز کنسول",
        "image": "//cdn.idero.ir/file/product/0/099GTI1E_icon.jpg",
        "id": "Console"
    },
    {
        "name": "کمد",
        "image": "//cdn.idero.ir/file/product/E/E5ZCDVSK_icon.jpg",
        "id": "Closet"
    },
    {
        "name": "جاکفشی",
        "image": "//cdn.idero.ir/file/product/6/6YHE99E2_icon.jpg",
        "id": "ShoesBox"
    },
    {
        "name": "دراور",
        "image": "//cdn.idero.ir/file/product/2/2IEFVA5F_icon.jpg",
        "id": "Drawer"
    },
    {
        "name": "اپن",
        "image": "https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "id": "Open"
    }
];
const CategoryCard = ({ name, image })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$StyledDiv$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        base: "c",
        className: "relative cursor-pointer transition-all w-full max-w-64 h-48 sm:h-56 md:h-64 bg-cover border-1 border-primary bg-center rounded-lg overflow-hidden shadow-lg",
        style: {
            backgroundImage: `url('${image}')`,
            ",.c:hover *,.c:hover": {
                background: "var(--accent)",
                borderColor: "var(--accent)"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 w-full text-center bg-primary bg-opacity-50 text-white p-2 text-lg font-semibold rounded-b-lg",
            children: [
                name,
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function Page(props) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>params.get("category"), [
        params
    ]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [design, setDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (params.has('id')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])("/public/design/" + params.get('id')).then((e)=>{
                if (!e.ok) {
                    window.location.href = "/design";
                    window.throw("خطا در دریافت اطلاعات");
                }
                setDesign(e?.data);
                router.push("?category=" + e?.data?.slug);
                window.localStorage.setItem("InitObject", JSON.stringify({
                    Configurator: JSON.stringify(e.data?.data)
                }));
            }).finally(()=>{
                setLoading(false);
            });
        } else if (params.has("category")) {
            setLoading(false);
        } else setLoading(false);
    }, [
        params
    ]);
    if (loading && !params.has('id')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 101,
        columnNumber: 46
    }, this);
    return category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            category: Categories[category] || window.throw("خطا در بررسی اطلاعات"),
            data: design?.data,
            onSave: (data)=>{
                const { finalPrice, content, imageData: image, categoryId } = data;
                const category = CategoriesReverse[categoryId];
                const obj = JSON.parse(content);
                const id = params.get('id');
                setLoading(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])("/user/design" + (!!id ? "/" + id : ""), !!id ? "PUT" : "POST", {
                    slug: category,
                    price: finalPrice,
                    data: obj,
                    image,
                    name: !!id ? undefined : `طراحی ${CategoriesLabels.find((o)=>o.id === category)?.name} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()}`
                }).then((e)=>{
                    if (!e.ok) window.throw(e.message || "خطا");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])("/user/cart", "POST", {
                        customDesignId: e?.data?.id
                    }).finally(()=>{
                        window.location.href = "/user/cart";
                    });
                });
            }
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
            lineNumber: 105,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'flex flex-col gap-3 my-10 container mx-auto',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center mb-3',
                children: "دسته بندی ها"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'grid-items gap-3 gap-y-10',
                children: CategoriesLabels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            window.localStorage.removeItem("InitObject");
                            router.push("?category=" + l.id);
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                            ...l
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                            lineNumber: 141,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Page;
}),
"[project]/frontend/src/utils/hooks/useIsMobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$viewport$2d$size$2f$use$2d$viewport$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-viewport-size/use-viewport-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/GlobalContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function useIsMobile(maxWidth) {
    const { width } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$viewport$2d$size$2f$use$2d$viewport$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useViewportSize"])();
    const { device } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (width === 0) return device !== "desktop";
        return width <= (maxWidth || 756);
    }, [
        width,
        device
    ]);
}
const __TURBOPACK__default__export__ = useIsMobile;
}),
"[project]/frontend/src/components/EmptyList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const IconHeartSun = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 78,
        height: 78,
        viewBox: "0 0 78 78",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.9505 22.9134C21.425 23.3879 22.049 23.6284 22.673 23.6284C23.297 23.6284 23.921 23.3879 24.3988 22.9134C25.351 21.9612 25.351 20.4174 24.3988 19.4652L21.1488 16.2152C20.1965 15.2629 18.6528 15.2629 17.7005 16.2152C16.7483 17.1674 16.7483 18.7112 17.7005 19.6634L20.9505 22.9134Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M58.4245 23.5649C59.0485 23.5649 59.6725 23.3276 60.147 22.8499L63.4002 19.5999C64.3525 18.6476 64.3525 17.1071 63.4002 16.1549C62.448 15.2026 60.9042 15.2026 59.952 16.1549L56.702 19.4049C55.7497 20.3571 55.7497 21.8976 56.702 22.8499C57.1765 23.3276 57.8005 23.5649 58.4245 23.5649Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.0252 55.2152L17.7752 58.4652C16.823 59.4174 16.823 60.9612 17.7752 61.9134C18.2497 62.3879 18.8737 62.6252 19.4977 62.6252C20.1217 62.6252 20.7457 62.3879 21.2235 61.9134L24.4735 58.6634C25.4257 57.7112 25.4257 56.1674 24.4735 55.2152C23.5212 54.2629 21.9775 54.2629 21.0252 55.2152Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60.2186 55.1517C59.2663 54.1994 57.7226 54.1994 56.7703 55.1517C55.8181 56.1039 55.8181 57.6477 56.7703 58.5999L60.0203 61.8499C60.4981 62.3244 61.1221 62.5617 61.7461 62.5617C62.3701 62.5617 62.9941 62.3244 63.4686 61.8499C64.4208 60.8977 64.4208 59.3539 63.4686 58.4017L60.2186 55.1517Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.6951 36.5625H11.2988C9.95333 36.5625 8.86133 37.6545 8.86133 39C8.86133 40.3455 9.95333 41.4375 11.2988 41.4375H14.6951C16.0406 41.4375 17.1326 40.3455 17.1326 39C17.1326 37.6545 16.0406 36.5625 14.6951 36.5625Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40.5479 15.4375C41.8934 15.4375 42.9854 14.3455 42.9854 13V9.75C42.9854 8.4045 41.8934 7.3125 40.5479 7.3125C39.2024 7.3125 38.1104 8.4045 38.1104 9.75V13C38.1104 14.3455 39.2024 15.4375 40.5479 15.4375Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M69.7991 36.5625H66.4028C65.0573 36.5625 63.9653 37.6545 63.9653 39C63.9653 40.3455 65.0573 41.4375 66.4028 41.4375H69.7991C71.1446 41.4375 72.2366 40.3455 72.2366 39C72.2366 37.6545 71.1446 36.5625 69.7991 36.5625Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40.5479 62.5625C39.2024 62.5625 38.1104 63.6545 38.1104 65V68.25C38.1104 69.5955 39.2024 70.6875 40.5479 70.6875C41.8934 70.6875 42.9854 69.5955 42.9854 68.25V65C42.9854 63.6545 41.8934 62.5625 40.5479 62.5625Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M47.2477 28.9673C45.0052 28.2783 42.5872 28.5383 40.5625 29.6563C38.5312 28.5025 36.0905 28.236 33.8252 28.9738C29.2556 30.4428 26.9351 35.5355 28.5374 40.5697C30.6954 47.2583 39.4055 52.0553 39.776 52.26C40.0165 52.39 40.2862 52.4583 40.5527 52.4583C40.8192 52.4583 41.089 52.39 41.3327 52.2568C41.7032 52.0553 50.4847 47.1835 52.568 40.5633C54.167 35.5355 51.84 30.4428 47.2477 28.9673Z",
                fill: props.fill || "var(--primary)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/EmptyList.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
function EmptyList(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'w-full flex items-center justify-center min-h-50 flex-col gap-3 h-3/4',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconHeartSun, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: 'font-medium text-xl',
                children: props.text || "موردی یافت نشد!"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/EmptyList.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/EmptyList.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = EmptyList;
}),
"[project]/frontend/src/components/responsive/CustomTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useIsMobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Table/Table.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$EmptyList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/EmptyList.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TableToCard(props) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return props.data?.body?.map((items)=>{
            return items.map((item, i)=>{
                const rowName = props?.data?.head?.[i];
                return [
                    rowName,
                    item
                ];
            });
        }) || [];
    }, [
        props
    ]);
    console.log(items);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: items.map((cardItems, i)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-between gap-x-10 gap-2 border border-primary rounded-xl p-3 shadow",
                children: cardItems.map(([key, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `min-w-25 flex flex-col ${i % 2 == 0 ? "items-start" : "items-end"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start w-full opacity-70 font-normal",
                                children: key
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
                                lineNumber: 28,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
                                lineNumber: 31,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
                        lineNumber: 27,
                        columnNumber: 29
                    }, this))
            }, i, false, {
                fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, this);
        })
    }, items.length, false, {
        fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
function CustomTable(props) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    if (!props.data?.body?.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$EmptyList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
    return isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableToCard, {
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/responsive/CustomTable.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = CustomTable;
}),
"[project]/frontend/src/utils/hooks/useBackend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useBackend(...args) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new URL("http://test.com"), [
        args
    ]);
    const preId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const [R, setR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [skip, setSkip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const take = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>+(url.searchParams.get("_take") || "") || 10, [
        url
    ]);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.ceil(skip / take) + 1, [
        take,
        skip
    ]);
    const maxPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.ceil((R?.total || 0) / take), [
        take,
        R
    ]);
    const fetch = (..._args)=>{
        const targetArgs = _args?.length ? _args : args;
        if (!_args.length) {
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectToId"])(targetArgs);
            if (preId.current === id) return;
            preId.current = id;
            setSkip(0);
        }
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])(...targetArgs).then((e)=>{
            setR(e);
        }).finally(()=>{
            setLoading(false);
        });
    };
    const doSkip = (n, increase = true)=>{
        if (increase && (R?.total || 0) - skip < take) return;
        const target = increase ? skip + n : n;
        setSkip(target);
        url.searchParams.set("_skip", target + "");
        url.searchParams.set("_pagination", "true");
        const c = [
            ...args
        ];
        c[0] = url.pathname + url.search;
        fetch(...c);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch();
    }, [
        args
    ]);
    return {
        ...R,
        loading,
        refetch: ()=>fetch(...args),
        next: ()=>doSkip(take),
        prev: ()=>doSkip(-take),
        gotoPage: (page)=>doSkip((page - 1) * take, false),
        page,
        maxPage,
        take,
        get Pagination () {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
                total: this.maxPage,
                value: this.page,
                onChange: this.gotoPage
            }, void 0, false, {
                fileName: "[project]/frontend/src/utils/hooks/useBackend.tsx",
                lineNumber: 70,
                columnNumber: 20
            }, this);
        }
    };
}
const __TURBOPACK__default__export__ = useBackend;
}),
"[project]/frontend/src/utils/designSpecs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryNames",
    ()=>CategoryNames,
    "DesignSpecsTable",
    ()=>DesignSpecsTable,
    "parseDesignData",
    ()=>parseDesignData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CategoryNames = {
    1: "کتابخانه",
    2: "میز تلویزیون",
    3: "کنسول",
    4: "کمد",
    5: "جاکفشی",
    6: "دراور",
    7: "اپن",
    9: "پاتختی"
};
const FurnitureNames = {
    1: "خالی",
    2: "درب تک",
    3: "درب دوتایی",
    4: "کشو",
    5: "فلپ"
};
const InteriorNames = {
    1: "خالی",
    2: "آویز لباس",
    3: "کشوی داخلی",
    4: "رجال",
    5: "پره عمودی"
};
const BackPanelThicknessNames = {
    0: "نامشخص",
    1: "۳ میلی‌متر",
    2: "۱۶ میلی‌متر"
};
const FurniturePositionNames = {
    1: "درون چارچوب",
    2: "روی چارچوب"
};
const BoolNames = {
    0: "خیر",
    1: "بله"
};
const HoodModeNames = {
    1: "توکار",
    2: "روکار"
};
const MicrowaveModeNames = {
    1: "توکار",
    2: "روکار"
};
function parseDesignData(data) {
    if (!data || typeof data !== "object") return null;
    const dim = data.Dimension || {};
    const prop = data.Property || {};
    const sections = data.SectionList || [];
    const categoryId = data.CategoryId;
    const width = dim.OveralWidth || 0;
    const height = dim.OveralHeight || 0;
    const depth = dim.OveralDepth || 0;
    const categoryName = CategoryNames[categoryId] || "نامشخص";
    const specs = [];
    specs.push({
        label: "نوع محصول",
        value: categoryName
    });
    specs.push({
        label: "عرض",
        value: `${width} سانتی‌متر`
    });
    specs.push({
        label: "ارتفاع",
        value: `${height} سانتی‌متر`
    });
    specs.push({
        label: "عمق",
        value: `${depth} سانتی‌متر`
    });
    specs.push({
        label: "تعداد ستون",
        value: String(sections.length)
    });
    const compartmentCount = sections.reduce((sum, s)=>sum + (s.ComaprtmentList?.length || 0), 0);
    specs.push({
        label: "تعداد طبقه",
        value: String(compartmentCount)
    });
    if (prop.BackPanelThicknessId !== undefined) {
        specs.push({
            label: "ضخامت پشت",
            value: BackPanelThicknessNames[prop.BackPanelThicknessId] || "نامشخص"
        });
    }
    if (prop.FeetId !== undefined) {
        specs.push({
            label: "پایه تراز",
            value: BoolNames[prop.FeetId] || "نامشخص"
        });
    }
    if (prop.FurniturePositionId !== undefined) {
        specs.push({
            label: "محل قرارگیری درب/کشو",
            value: FurniturePositionNames[prop.FurniturePositionId] || "نامشخص"
        });
    }
    if (prop.HoodId !== undefined && prop.HoodId === 1) {
        specs.push({
            label: "هود",
            value: "بله"
        });
        if (prop.HoodModeId !== undefined) {
            specs.push({
                label: "نوع هود",
                value: HoodModeNames[prop.HoodModeId] || "نامشخص"
            });
        }
    }
    if (prop.MicrowaveId !== undefined && prop.MicrowaveId === 1) {
        specs.push({
            label: "مایکروویو",
            value: "بله"
        });
        if (prop.MicrowaveModeId !== undefined) {
            specs.push({
                label: "نوع مایکروویو",
                value: MicrowaveModeNames[prop.MicrowaveModeId] || "نامشخص"
            });
        }
    }
    if (prop.ClosetMode) {
        specs.push({
            label: "نوع کمد",
            value: prop.ClosetMode === "stepped" ? "پله‌ای" : "ساده"
        });
    }
    const furnitureTypes = new Set();
    const interiorTypes = new Set();
    for (const section of sections){
        for (const comp of section.ComaprtmentList || []){
            if (comp.FurnitureId && comp.FurnitureId !== 1) {
                furnitureTypes.add(FurnitureNames[comp.FurnitureId] || "نامشخص");
            }
            if (comp.InteriorId && comp.InteriorId !== 1) {
                interiorTypes.add(InteriorNames[comp.InteriorId] || "نامشخص");
            }
        }
    }
    if (furnitureTypes.size > 0) {
        specs.push({
            label: "انواع درب/کشو",
            value: Array.from(furnitureTypes).join("، ")
        });
    }
    if (interiorTypes.size > 0) {
        specs.push({
            label: "یراق داخلی",
            value: Array.from(interiorTypes).join("، ")
        });
    }
    return {
        width,
        height,
        depth,
        categoryName,
        sectionCount: sections.length,
        specs
    };
}
function DesignSpecsTable({ specs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-2",
        children: specs.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between border-b border-gray-100 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500",
                        children: [
                            s.label,
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/utils/designSpecs.tsx",
                        lineNumber: 169,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: s.value
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/utils/designSpecs.tsx",
                        lineNumber: 170,
                        columnNumber: 21
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/frontend/src/utils/designSpecs.tsx",
                lineNumber: 168,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/src/utils/designSpecs.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/components/DesignDetailsModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Image/Image.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$designSpecs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/designSpecs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/page.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DesignDetailsModal({ design, opened, onClose, user }) {
    if (!design) return null;
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$designSpecs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDesignData"])(design.data);
    const categoryName = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoriesLabels"].find((o)=>o.id === design.slug)?.name || spec?.categoryName || design.slug;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
        opened: opened,
        onClose: onClose,
        title: `جزئیات طراحی: ${design.name}`,
        size: "lg",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                design.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Image$2f$Image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                    src: design.image,
                    alt: design.name,
                    fit: "contain",
                    className: "rounded-lg border border-gray-200",
                    h: 240
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                    lineNumber: 27,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-x-4 gap-y-1 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-gray-100 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "نام طراحی:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: design.name
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-gray-100 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "دسته‌بندی:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: categoryName
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-gray-100 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "قیمت:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: [
                                        design.price?.toLocaleString?.('fa') || '-',
                                        " تومان"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-gray-100 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "تاریخ ثبت:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: new Date(design.created_at).toLocaleDateString('fa-IR')
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b border-gray-100 py-1 col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "کاربر:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: [
                                        user.name,
                                        " - ",
                                        user.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                spec && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {
                            my: "xs",
                            label: "مشخصات فنی",
                            labelPosition: "center"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 63,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$designSpecs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DesignSpecsTable"], {
                            specs: spec.specs
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                    justify: "flex-end",
                    mt: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "light",
                        component: "a",
                        href: `/design?id=${design.id}`,
                        children: "مشاهده در طراحی کن"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/DesignDetailsModal.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/app/(landing)/admin/design/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$responsive$2f$CustomTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/responsive/CustomTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useBackend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/confirm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DesignDetailsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/DesignDetailsModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Page() {
    const { data: designs = [], refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/design?_include=user");
    const [loadingId, setLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleDelete = async (id)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["askConfirm"])("آیا میخواهید این طراحی را حذف کنید؟");
        setLoadingId(id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])("/admin/design/" + id, "DELETE");
        setLoadingId(null);
        refetch();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto my-10",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                size: "xl",
                fw: 600,
                mb: "md",
                children: "مدیریت طراحی‌های کاربران"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$responsive$2f$CustomTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                striped: true,
                highlightOnHover: true,
                data: {
                    head: [
                        "تصویر",
                        "نام طراحی",
                        "کاربر",
                        "تاریخ ثبت",
                        "قیمت",
                        "دسته‌بندی",
                        "عملیات"
                    ],
                    body: designs.map((design)=>[
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                src: design.image,
                                alt: design.name,
                                radius: "md",
                                size: "xl"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        fw: 500,
                                        lineClamp: 1,
                                        children: design.name
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "xs",
                                        c: "dimmed",
                                        children: [
                                            "ID: ",
                                            design.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                size: "sm",
                                children: [
                                    design.user?.name || '-',
                                    design.user?.phone ? ` - ${design.user.phone}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, void 0),
                            new Date(design.created_at).toLocaleDateString('fa-IR'),
                            design.price ? `${design.price.toLocaleString('fa')} تومان` : "-",
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoriesLabels"].find((o)=>o.id === design.slug)?.name || design.slug,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "xs",
                                        color: "primary",
                                        onClick: ()=>setSelected(design),
                                        children: "جزئیات"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "xs",
                                        color: "blue",
                                        component: "a",
                                        href: `/design?id=${design.id}`,
                                        children: "مشاهده"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "xs",
                                        color: "red",
                                        loading: loadingId === design.id,
                                        onClick: ()=>handleDelete(design.id),
                                        children: "حذف"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, void 0)
                                ]
                            }, design.id, true, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, void 0)
                        ])
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DesignDetailsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                design: selected,
                opened: !!selected,
                onClose: ()=>setSelected(null),
                user: selected?.user
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(landing)/admin/design/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_c8ac3c2b._.js.map