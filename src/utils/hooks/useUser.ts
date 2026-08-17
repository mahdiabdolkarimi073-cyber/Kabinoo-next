'use client';;
import { useContext, useEffect, useState } from "react";
import {modals} from "@mantine/modals";
import GlobalContext from "@/app/GlobalContext";
import {logout} from "@/ssr/actions/user";
import { getUser } from "@/no-side/user";
import { useId } from "@mantine/hooks";

declare global {
	interface Window {
		userUpdate: ReturnType<typeof setInterval>
	}
}
const state: Partial<{
	events: Record<string, Function>
}> = {};
const tick = async function (this: typeof state) {
	const user = await getUser();
	window.user = user;
	for (const [key,event] of Object.entries(this.events || {})) {
		event(user);
	}
}
const func = tick.bind(state);
if (typeof window !== 'undefined') window.userUpdate ||= setInterval(func,5 *60 * 1000); // every 5 minutes

function useUser() {
	const {user: initUser} = useContext(GlobalContext);
	const [user, setUser] = useState<typeof window.user>(initUser);
	const id = useId();
	useEffect(()=>{
		state.events ||= {};
		state.events[id] = setUser;
		return ()=>{
			if (state.events) delete state.events[id];
		}
	}, [id])

	return user;
}

export function handleUserLogout(callback?: ()=>void) {
	modals.openConfirmModal({
		title: "خروج",
		children: "آیا میخواهید از حساب خود خارج شوید؟",
		onConfirm: ()=>{
			logout().then(callback).finally(refetchUser)
		}
	})
}

export function refetchUser() {
	return func();
}

export default useUser;
