import { HTTP_METHOD } from "next/dist/server/web/http";
import { Throw } from "@/utils/built-in";
import VARS from "@/no-side/vars";


export const BACKEND_URL = typeof window === 'undefined' ? VARS.BACKEND_URL || process.env['NEXT_PUBLIC_BACKEND'] : window.backendUrl;

export async function backend<T = any>(path: string, method: HTTP_METHOD = "GET", body?: Record<string, any>): Promise<{
    ok: boolean,
    total?: number,
    data: T | undefined,
    message?: string
}> {
    const BK_URL = typeof window === 'undefined' ? BACKEND_URL : window.backendUrl;
    const finalUrl = new URL(`${BK_URL || Throw("NEXT_PUBLIC_BACKEND required in .env")}${path}`);
    const token =
        typeof window === "undefined" ?
            (await import("next/headers").then(e => e.cookies()).then(e => e?.get("token")?.value)) :
            window.userToken || (new URLSearchParams(window.document.cookie.replaceAll("; ", "&").replaceAll(";", "&")).get("token"));
    return fetch(finalUrl, {
        method,
        ...(!!body ? {
            body: body instanceof FormData ? body : JSON.stringify(body)
        } : {}),
        headers: {
            ...!!token && {
                "Authorization": token || "",
            },
            "Accept": "*/*",
            "user-agent": "NextJs",
            ...(!(body instanceof FormData) && ({
                "content-type": "application/json"
            }))
        }
    })
        .then(e => e.json())
        .then(e => e as { ok: boolean, total?: number, message?: string, data: T })
        .catch((e) => {
            return { ok: false, message: "اتصال اینترنت خود را بررسی کنید", data: undefined, total: undefined };
        })
        .then(e => {
            if (!e.ok) {
                if (typeof window !== 'undefined' && method !== 'GET') {
                    console.error(e?.message ?? e);
                    window.alert(e?.message ?? e);
                }
            }
            return e;
        })
}


export async function uploadFile(file: File | null, path: `${string}.$EX`): Promise<string> {
    if (file === null) {
        alert("فایل خالی است")
        throw ("FILE NOT FOUND");
    }

    if (file.type === "exist") return file.name;

    const formData = new FormData();
    formData.set('file', file);
    formData.set('path', path);

    const res = await backend(`/user/upload`, "POST", formData)
    if (!res.ok) throw (res.message);
    return window.backendUrl + res?.data?.path;
}

export function handleExistsFile(path: string) {
    return new File([], path, {
        type: "exist"
    })
}
