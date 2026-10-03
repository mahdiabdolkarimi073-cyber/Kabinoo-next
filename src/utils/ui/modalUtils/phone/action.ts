import {backend} from "@/utils/api";

export async function isPhoneVerified(phone: number) {
	return await backend(`/auth?phone=${phone}&check=true`, "PATCH")
		.then(e=>e.ok)
		.catch(()=>false);
}

export async function sendPhoneVerifyCode(phone: number) {
	return backend(`/auth?phone=${phone}`, "PATCH")
		.then(e=>e.ok);
}


export async function verifyPhoneNumber(phone: number, code: string) {
	return backend(`/auth?phone=${phone}&code=${code}`,"PATCH")
		.then(e=>e.ok);
}
