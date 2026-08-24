module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/frontend/src/style-stuff/mantine-theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-ssr] (ecmascript)");
'use client';
;
const mantineTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])({
    primaryColor: "primary",
    colors: {
        primary: Array.from({
            length: 10
        }).map(()=>"var(--primary)"),
        secondary: Array.from({
            length: 10
        }).map(()=>"var(--secondary)"),
        accent: Array.from({
            length: 10
        }).map(()=>"var(--accent)")
    },
    radius: {
        "sm": "16px"
    },
    black: "var(--text)",
    fontFamily: "var(--yekanBakh)"
});
const __TURBOPACK__default__export__ = mantineTheme;
}),
"[project]/frontend/src/utils/built-in.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Throw",
    ()=>Throw,
    "entries",
    ()=>entries,
    "fromEntries",
    ()=>fromEntries
]);
function entries(object) {
    return Object.entries(object);
}
function fromEntries(entries) {
    // @ts-ignore
    return Object.fromEntries(entries);
}
function Throw(msg = "Something missing") {
    if (typeof msg === "string" && msg.split(" ").length === 1) {
        msg = `${msg} وارد نشده است`;
    }
    throw msg;
}
}),
"[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateRandomString,
    "objectToId",
    ()=>objectToId
]);
function generateRandomString(length = 6) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while(counter < length){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function objectToId(obj) {
    const values = Object.keys(obj).sort().map((key)=>obj[key]);
    const str = JSON.stringify(values);
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        hash = hash * 33 ^ str.charCodeAt(i);
    }
    return (hash >>> 0).toString(16); // Convert to hex
}
}),
"[project]/frontend/src/utils/ui/modals.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPENED_MODAL",
    ()=>OPENED_MODAL,
    "closeLastModal",
    ()=>closeLastModal,
    "showModal",
    ()=>showModal,
    "showModalInit",
    ()=>showModalInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/modals/esm/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/built-in.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
let OPENED_MODAL = null;
const showModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromEntries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entries"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modals"]).map(([key, func])=>[
        key,
        (arg)=>{
            //@ts-ignore0
            const id = arg.modalId || arg.modal || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            arg.modalId = id;
            //@ts-ignore
            arg.modal = id;
            arg.scrollAreaComponent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"].Autosize;
            arg.radius = 'lg';
            OPENED_MODAL = id;
            const params = new URLSearchParams(window.location.search);
            if (!params.has("modalRollback")) {
                params.set("modalRollback", id);
                window.history.pushState({}, id, "?" + params.toString());
            }
            return func(arg);
        }
    ]));
function closeLastModal() {
    const e = Array.from(window.document.querySelectorAll(".mantine-Modal-close"))?.at?.(-1);
    if (e) e.click();
    else console.log("MISS CLICK");
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function showModalInit() {} // JUST FOR IMPORT FILE IN STARTUP
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/frontend/src/utils/time.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomDateFormat",
    ()=>CustomDateFormat,
    "echoDate",
    ()=>echoDate,
    "echoDateAsShortTime",
    ()=>echoDateAsShortTime,
    "echoDateAsWeekDay",
    ()=>echoDateAsWeekDay,
    "newDate",
    ()=>newDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
;
const echoDateAsShortTime = (d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(d, 'HH:mm');
function CustomDateFormat(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy/MM/dd-H:mm:ss');
}
const echoDateAsWeekDay = (dayDate)=>dayDate?.toLocaleString('fa-ir', {
        weekday: "long"
    });
const echoDate = (date)=>{
    date = typeof date.getFullYear === 'function' ? date : new Date(date);
    return date.toLocaleString('fa-ir', {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: 'numeric',
        ...new Date().getFullYear() !== date.getFullYear() && {
            year: "numeric"
        }
    }).split(",").reverse()?.join(" ").trim();
};
function newDate() {
    return new Date();
}
}),
"[project]/frontend/src/utils/shared/prototype.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>initPrototypeFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/time.ts [app-ssr] (ecmascript)");
;
let REGISTERED_ACTION = {};
function initPrototypeFeatures() {
    Date.prototype.toCustomString = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomDateFormat"])(this);
    };
    Number.prototype.toPersian = function() {
        const num = +this;
        if (num < 0 || num > 100) return num + ""; // number out of range
        const persianNumbers = [
            '',
            'یک',
            'دو',
            'سه',
            'چهار',
            'پنج',
            'شش',
            'هفت',
            'هشت',
            'نه',
            'ده',
            'یازده',
            'دوازده',
            'سیزده',
            'چهارده',
            'پانزده',
            'شانزده',
            'هفده',
            'هجده',
            'نوزده'
        ].map((o)=>o === 'سه' ? o.substring(0, o.length - 1) + "وم" : o + "م");
        const tens = [
            '',
            '',
            'بیست',
            'سی',
            'چهل',
            'پنجاه',
            'شصت',
            'هفتاد',
            'هشتاد',
            'نود'
        ];
        if (num === 100) return 'صد';
        if (num < 20) {
            return persianNumbers[num];
        }
        const tenPart = Math.floor(num / 10);
        const unitPart = num % 10;
        return tens[tenPart] + (unitPart ? ' و ' + persianNumbers[unitPart] : '');
    };
}
}),
"[project]/frontend/src/no-side/vars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const VARS = {
    BACKEND_URL: process.env['NEXT_PUBLIC_BACKEND_URL'] || process.env['BACKEND_URL'] || "http://localhost:3080",
    FRONTEND_URL: process.env['FRONTEND_URL'] || "http://localhost:3000"
};
const __TURBOPACK__default__export__ = VARS;
}),
"[project]/frontend/src/utils/ui/modalUtils/confirm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askConfirm",
    ()=>askConfirm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
async function askConfirm(text, onOk) {
    return await new Promise((resolve, reject)=>{
        window.showModal.openConfirmModal({
            title: 'هشدار',
            children: typeof text === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: 'text-md font-semibold',
                children: text
            }, void 0, false, {
                fileName: "[project]/frontend/src/utils/ui/modalUtils/confirm.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this) : text,
            onConfirm: async ()=>{
                await onOk?.();
                resolve(true);
            },
            onClose: reject,
            onCancel: reject
        });
    });
}
}),
"[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKEND_URL",
    ()=>BACKEND_URL,
    "backend",
    ()=>backend,
    "handleExistsFile",
    ()=>handleExistsFile,
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/built-in.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/vars.ts [app-ssr] (ecmascript)");
;
;
const BACKEND_URL = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BACKEND_URL || process.env['NEXT_PUBLIC_BACKEND'] : "TURBOPACK unreachable";
async function backend(path, method = "GET", body) {
    const BK_URL = ("TURBOPACK compile-time truthy", 1) ? BACKEND_URL : "TURBOPACK unreachable";
    const finalUrl = new URL(`${BK_URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Throw"])("NEXT_PUBLIC_BACKEND required in .env")}${path}`);
    const token = ("TURBOPACK compile-time truthy", 1) ? await __turbopack_context__.A("[project]/frontend/node_modules/next/headers.js [app-ssr] (ecmascript, async loader)").then((e)=>e.cookies()).then((e)=>e?.get("token")?.value) : "TURBOPACK unreachable";
    return fetch(finalUrl, {
        method,
        ...!!body ? {
            body: body instanceof FormData ? body : JSON.stringify(body)
        } : {},
        headers: {
            ...!!token && {
                "Authorization": token || ""
            },
            "Accept": "*/*",
            "user-agent": "NextJs",
            ...!(body instanceof FormData) && {
                "content-type": "application/json"
            }
        }
    }).then((e)=>e.json()).then((e)=>e).catch((e)=>{
        return {
            ok: false,
            message: "اتصال اینترنت خود را بررسی کنید",
            data: undefined,
            total: undefined
        };
    }).then((e)=>{
        if (!e.ok) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        return e;
    });
}
async function uploadFile(file, path) {
    if (file === null) {
        alert("فایل خالی است");
        throw "FILE NOT FOUND";
    }
    if (file.type === "exist") return file.name;
    const formData = new FormData();
    formData.set('file', file);
    formData.set('path', path);
    const res = await backend(`/user/upload`, "POST", formData);
    if (!res.ok) throw res.message;
    return window.backendUrl + res?.data?.path;
}
function handleExistsFile(path) {
    return new File([], path, {
        type: "exist"
    });
}
}),
"[project]/frontend/src/share/OverrideWindow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "win",
    ()=>win
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/modals/esm/events.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/built-in.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$shared$2f$prototype$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/shared/prototype.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/vars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/confirm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
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
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const OverrideWindow = (props)=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeAllModals"])();
    }, [
        pathname
    ]);
    return null;
};
const win = ("TURBOPACK compile-time truthy", 1) ? undefined : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = OverrideWindow;
}),
"[project]/frontend/src/app/GlobalContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalContext",
    ()=>GlobalContext,
    "GymContextProvider",
    ()=>GymContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const GlobalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
function GymContextProvider(props) {
    const { children, ...other } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalContext.Provider, {
        value: other,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/GlobalContext.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = GlobalContext;
}),
"[project]/frontend/src/components/LayoutProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$mantine$2d$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/style-stuff/mantine-theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/share/OverrideWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$ModalsProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/modals/esm/ModalsProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/GlobalContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/notifications/esm/Notifications.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function LayoutProvider(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionProvider"], {
        initialDirection: 'rtl',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MantineProvider"], {
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$mantine$2d$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            defaultColorScheme: 'light',
            forceColorScheme: 'light',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notifications"], {}, void 0, false, {
                    fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$ModalsProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalsProvider"], {
                    labels: {
                        confirm: "تایید",
                        cancel: "لغو"
                    },
                    modalProps: {
                        scrollAreaComponent: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"].Autosize
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: {
                            ...props.windowProps || {}
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                ...props.windowProps || {}
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this),
                            props.children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/LayoutProvider.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = LayoutProvider;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27ed9cc7._.js.map