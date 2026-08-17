import { isValidElement, ReactNode } from "react";

export function isReactNode(object: any): object is ReactNode {
    return typeof object === 'object' && 'type' in object;
}

export function isReactComponent(object: any): object is (...o: any[])=>ReactNode {
    return isValidElement(object) && !isReactNode(object);
}