import {CustomDateFormat} from "../time";

declare global {
    interface Date {
        toCustomString(): string;
    }

    interface Number {
        toPersian: () => string
    }
}

let REGISTERED_ACTION: {
    [k: string]: boolean
} = {}

export default function initPrototypeFeatures() {

    Date.prototype.toCustomString = function () {
        return CustomDateFormat(this);
    }

    Number.prototype.toPersian = function () {
        const num = +this;
        if (num < 0 || num > 100) return num + ""; // number out of range

        const persianNumbers = [
            '', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه',
            'ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده',
            'هفده', 'هجده', 'نوزده'
        ].map(o => o === 'سه' ? o.substring(0, o.length - 1) + "وم" : o + "م");

        const tens = [
            '', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'
        ];

        if (num === 100) return 'صد';

        if (num < 20) {
            return persianNumbers[num];
        }

        const tenPart = Math.floor(num / 10);
        const unitPart = num % 10;

        return tens[tenPart] + (unitPart ? ' و ' + persianNumbers[unitPart] : '');
    }
}