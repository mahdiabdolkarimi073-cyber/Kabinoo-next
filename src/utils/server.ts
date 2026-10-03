"use client";

export type ActionResult<T = unknown> = {
	message?: string,
	data?: T
	ok: boolean
}

export function doAction<T extends Promise<ActionResult<Awaited<T>['data']>>>(func: ()=>T, callback?: (data: (Awaited<T>)['data'], ok: boolean)=>void) {
	func().then((e)=>{
		if (e.message) alert(e.message);
		callback?.( e?.['data'] , e.ok ?? true)
	}).catch((e)=>{
		if (e.message) alert(e.message);
		callback?.(e?.['data'], false)
	})
}
