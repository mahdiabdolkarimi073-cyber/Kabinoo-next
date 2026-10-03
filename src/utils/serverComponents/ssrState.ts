declare global {
    var ssrStateCleaner: ReturnType<typeof setInterval>;
    var _TEMP_STATES: Record<string, {
        last_usage: Date,
        value: any
    }>
}
global._TEMP_STATES ||= {};
global.ssrStateCleaner ||= setInterval(() => {
    for (const [key, state] of Object.entries(_TEMP_STATES)) {
        const exAt = new Date(state.last_usage);
        exAt.setMinutes(exAt.getMinutes() + 15);

        if (exAt.getTime() < Date.now()) {
            delete _TEMP_STATES[key];
        }
    }
}, 15 * 60 * 1000); // 15 minutes


export function getSsrState<T = any>(id: string): T | undefined {
    console.log("GET", id);
    const state = _TEMP_STATES[id];
    if (!state) return undefined;

    _TEMP_STATES[id] = {
        ...state,
        last_usage: new Date()
    }

    return state.value as T
}

export function setSsrState<T = any>(id: string, value: T) {
    console.log("SET", id, value);
    _TEMP_STATES[id] = {
        last_usage: new Date(),
        value
    };
    return value;
}

export function removeSsrState(id: string) {
    delete _TEMP_STATES[id];
}