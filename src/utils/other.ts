import {fromEntries} from "@/utils/built-in";


export function getRandomNumber(min: number, max: number) {
    if (min >= max) {
        return min;
    }

    // Calculate and return the random number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function arabicToEnglishNumber(str: string | undefined) {
    str = str+"";
    const
         persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
         arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]

    for (let i = 0; i < 10; i++) {
        str = str.replaceAll(persianNumbers[i], i+"").replaceAll(arabicNumbers[i], i+"");
    }

    return str;
}


function optimize<T>(obj: T): T {
    if (obj instanceof Date) return obj;
    if (typeof obj !== 'object') return obj;
    if (Object.keys(obj as object).length === 0) return obj;
    if (Array.isArray(obj)) {
        return obj.map((o)=>{
            return optimize(o);
        }) as T
    }
    return fromEntries(Object.entries(obj as any).filter(([k,v]) => typeof v !== 'function').map(([k,v]) =>
         [k, typeof v === 'object' ? optimize(v):v]
    ) as any) as unknown as T;
}

export function ssrOptimize<T>(obj: T): T {
    try {
        return optimize(obj) as T;
    } catch {
        try {
            return JSON.parse(JSON.stringify(obj)) as T;
        } catch {
            return obj as T;
        }
    }
}
export type JsonData = {[key: string]: any | undefined}
export function formDataToJson(formData: FormData | JsonData) {
    if (!(formData instanceof FormData)) return formData;

    let json: JsonData = {};
    formData.forEach((value, key)=>json[key] = value)
    return json;
}

export const IranMonths = [
	"فروردین",
	"ُردیبهشت",
	"خرداد",
	"تیر",
	"َمرداد",
	"شهریور",
	"مهر",
	"آبان",
	"آذر",
	"دی",
	"بهمن",
	"اسفند"
] as const;
export function echoDateMonth(date: Date){
	const str = arabicToEnglishNumber(date.toLocaleDateString('fa'));
	return IranMonths[+str.split("/")[1] - 1];
}


