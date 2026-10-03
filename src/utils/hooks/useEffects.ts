import { EffectCallback, useEffect, useRef } from "react";

export function useDelayedEffect(func: EffectCallback, deps: any[],delay: number = 100) {
	const thread = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	useEffect(() => {
		clearTimeout(thread.current || -1);
		thread.current = setTimeout(func, delay);
	}, deps);
}

export function useTrueEffect(func: EffectCallback, deps: any[]) {
	const touch = useRef(false);

	useEffect(() => {
		return func();
	}, deps);
}

export function useInterval(func: EffectCallback, ms = 1000) {
    const thread = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

    useEffect(()=>{
		if (thread.current) return;
        thread.current = setInterval(func, ms);
        return ()=>clearInterval(thread.current);
    }, []);
}

export function useTimeout(func: EffectCallback, ms = 1000) {
    const thread = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(()=>{
        if (thread.current) return;

        thread.current = setTimeout(func, ms);
        return ()=>clearTimeout(thread.current);
    }, []);
}