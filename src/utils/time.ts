import {format} from "date-fns";


export const echoDateAsShortTime = (d: Date) => format(d, 'HH:mm')


export function CustomDateFormat(date: Date) {
    return format(date, 'yyyy/MM/dd-H:mm:ss');
}

export const echoDateAsWeekDay = (dayDate: Date) => dayDate?.toLocaleString('fa-ir', {weekday: "long"})


export const echoDate = (date: Date) => {
    date = typeof date.getFullYear === 'function' ? date : new Date(date);
    return date.toLocaleString('fa-ir', {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: 'numeric',
        ...(new Date().getFullYear() !== date.getFullYear() && ({
            year: "numeric"
        }))
    }).split(",").reverse()?.join(" ").trim()
}

export function newDate() {
    return new Date();
}
