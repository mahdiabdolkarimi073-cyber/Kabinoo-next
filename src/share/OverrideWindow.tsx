'use client';

import {notifications} from "@mantine/notifications";
import {showModal, showModalInit} from "@/utils/ui/modals";
import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";
import {closeAllModals} from "@mantine/modals";
import {entries} from "@/utils/built-in";
import initPrototypeFeatures from "@/utils/shared/prototype";
import VARS from "@/no-side/vars";
import {askConfirm} from "@/utils/ui/modalUtils/confirm";
import {UserType} from "@/utils/type";
import {backend} from "@/utils/api";


declare global {
    interface Window {
        //@ts-ignore
        confirm: (msg: string) => Promise<void>,
        routerPush: (path: string) => void
        backendUrl: string
        userToken: string | undefined,
        showModal: typeof showModal,
        user: UserType | undefined,
        device: 'mobile' | 'tablet' | 'console' | 'smarttv' | 'wearable' | 'embedded' | "desktop" | undefined;
        api: typeof backend
        backend: typeof backend
        throw: (msg: string) => never;
    }
}

if (typeof window !== 'undefined') {
    window.backendUrl = VARS.BACKEND_URL || "https://unknown.backend";
    window.showModal = showModal;
}

const OverrideWindow = (props: Partial<typeof window>) => {
    const pathname = usePathname();
    const router = useRouter();
    if (typeof window !== 'undefined') {
        showModalInit();
        window.user = props.user;
        window.backend = backend;
        window.api = backend;
        window.throw = (msg) => {
            window.alert(msg);
            throw(msg);
        }
        let lastAlarm = new Date();
        const limitedSec = 1;
        window.alert = (txt: string) => {
            const ex = new Date(lastAlarm);
            ex.setSeconds(ex.getSeconds() + limitedSec);
            if (ex.getTime() >= Date.now()) return;

            if (!txt) return;
            const type = txt.includes("خطا") || txt.includes("اشتباه") ? "ERROR" : (txt.includes("موفق") || txt.includes(" شد ")) ? "SUCCESS" : "WARN";
            const title = type === "ERROR" ? 'خطا' : type === "WARN" ? "هشدار" : "پیغام";


            notifications.show({
                title: <h3>{title}</h3>,
                message: <p className={'text-[17px]'}>{txt}</p>,
                color: type === "ERROR" ? "red" : type === "WARN" ? "orange" : "green",
                radius: 'sm'
            })
            lastAlarm = new Date();
        }
        //@ts-expect-error
        window.confirm = askConfirm;

        window.routerPush = (path) => {
            router.push(path);
            setTimeout(() => {
                router.refresh();
            }, 100);
        }
        for (let [k, v] of entries(props)) {
            window[k as any] = v;
        }

        initPrototypeFeatures();
    }

    useEffect(() => {
        closeAllModals();
    }, [pathname])

    return null;
};

export const win: typeof window | undefined = typeof window === "undefined" ? undefined : window;

export default OverrideWindow;
