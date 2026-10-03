'use server';

import { cookies } from "next/headers";

export async function setUserCookie(token: string) {
    const c = await cookies();
    const ex = new Date();
    ex.setDate(ex.getDate() + 5); // Set cookie to expire in 5 days
    c.set("token", token, {
        path: "/",
        expires: ex
    })
    return true;
}