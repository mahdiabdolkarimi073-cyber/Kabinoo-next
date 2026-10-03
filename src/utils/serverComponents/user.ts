"use server";

import {ssrOptimize} from "@/utils/other";
import {getUser} from "@/no-side/user";

export async function getUserFromCookie() {
    return ssrOptimize(await getUser());
}

export type UserCookieType = Awaited<ReturnType<typeof getUserFromCookie>>
