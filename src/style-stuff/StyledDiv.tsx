import { entries } from "@/utils/built-in";
import generateRandomString from "@/utils/string";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type Style = {
    [key: string]: ComponentProps<'div'>['style'] | Style
} | ComponentProps<'div'>['style']



function StyledDiv(props: {
    style?: Style,
    base?: string,
    important?: boolean
} & Omit<ComponentProps<"div">, 'style'>) {
    const className = props.base || "div-"+generateRandomString();
    const finalBase = props.base ? className:"."+className;
    return (
        <>
            <style key={Math.random()}>{styleToString(finalBase, props.important, props.style || {})}</style>
            <div {...props} className={twMerge(className,props.className)} />
        </>
    );
};

const toKebabCase = (str: string) => {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};

// Function to escape special characters in class names
const escapeClassName = (className: string) => {
    return className.replace(/[^a-z0-9\-_]/gi, '-');
};

function styleToString(baseName: string,important: boolean = false,style: Style = undefined) {
    const list = Object.entries(style as any);
    let body = ``;
    let after = "";

    for (const [key, value] of list) {
        if (typeof value === 'object') {
            const kStr = `${key}`;
            after += styleToString(kStr.startsWith(":") ? `${baseName}${kStr}`:baseName+" "+kStr,important, value as any)+"\n";
        } else {
            body += `${toKebabCase(key)}: ${value || (typeof value === 'string' ? "''":"") || value} ${important ? "!important":""};`
        }
    }

    return `${baseName} { ${body} }\n${after}`;
}

export default StyledDiv;