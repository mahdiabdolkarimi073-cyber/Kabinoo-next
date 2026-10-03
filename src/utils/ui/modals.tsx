'use client';

import {modals} from "@mantine/modals";
import {entries, fromEntries} from "@/utils/built-in";
import generateRandomString from "@/utils/string";
import {ButtonProps, ScrollArea} from "@mantine/core";

export let OPENED_MODAL: string | null = null;

export const showModal: typeof modals = (fromEntries(entries(modals).map(([key, func]) => ([key, (arg: Parameters<typeof modals.open>[0])=>{
    //@ts-ignore0
    const id = arg.modalId || arg.modal || generateRandomString();
    arg.modalId = id;
    //@ts-ignore
    arg.modal = id;
    arg.scrollAreaComponent = ScrollArea.Autosize;
    arg.radius = 'lg'
    OPENED_MODAL = id;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("modalRollback")){
        params.set("modalRollback", id);
        window.history.pushState({},id, "?"+params.toString())
    }

    return func(arg as any);
}])))) as unknown as typeof modals

export function closeLastModal() {
    const e = Array.from(window.document.querySelectorAll<HTMLButtonElement>(".mantine-Modal-close"))?.at?.(-1);
    if (e) e.click();
    else console.log("MISS CLICK");
}

if (typeof window !== 'undefined') {
    window.showModal = showModal;
}

export function showModalInit(){} // JUST FOR IMPORT FILE IN STARTUP
