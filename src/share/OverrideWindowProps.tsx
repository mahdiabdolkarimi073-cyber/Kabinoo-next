import { entries } from "@/utils/built-in";


export const OverrideWindowProps = (props: {
    [k in keyof Window]?: Window[k]
}) => {
    if (typeof window !== 'undefined') {
        for (let [k, v] of entries(props)) {
            window[k as any] = v;
        }
    }

    return null;
}

export default OverrideWindowProps;