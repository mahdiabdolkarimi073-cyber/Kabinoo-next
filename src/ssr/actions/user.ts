'use server';


import {cookies} from "next/headers";

export async function logout() {
    const c = await cookies();
    c.delete("token");
    c.delete("user");
    return true;
}