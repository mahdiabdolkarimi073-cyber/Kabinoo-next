'use client'

import {backend} from "@/utils/api";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Pagination} from "@mantine/core";
import {objectToId} from "@/utils/string";

function useBackend<T = any>(...args: Parameters<typeof backend>) {
    const url = useMemo(() => (
        typeof window !== 'undefined' ? new URL(window.backendUrl + args[0]):new URL("http://test.com")
    ), [args]);
    const preId = useRef<string>("");
    const [R, setR] = useState<Awaited<ReturnType<typeof backend<T>>>>();
    const [loading, setLoading] = useState(true);
    const [skip, setSkip] = useState(0);
    const take = useMemo(() => (
        +(url.searchParams.get("_take") || "") || 10
    ), [url]);
    const page = useMemo(() => (
        Math.ceil(skip / take) + 1
    ), [take, skip]);
    const maxPage = useMemo(() => (
        Math.ceil((R?.total || 0) / take)
    ), [take, R])

    const fetch = (..._args: typeof args | []) => {
        const targetArgs =_args?.length ? _args:args;

        if (!_args.length) {
            const id = objectToId(targetArgs);
            if (preId.current === id) return;
            preId.current = id;
            setSkip(0);
        }

        setLoading(true);
        backend<T>(...targetArgs).then(e => {
            setR(e);
        }).finally(() => {
            setLoading(false);
        })
    }

    const doSkip = (n: number, increase = true) => {
        if (increase && (R?.total || 0) - skip < take) return;
        const target = increase ? skip + n : n;
        setSkip(target);
        url.searchParams.set("_skip", target + "");
        url.searchParams.set("_pagination", "true");
        const c = [...args] as typeof args;
        c[0] = url.pathname + url.search;
        fetch(...c);
    }

    useEffect(() => {
        fetch();
    }, [args]);

    return {
        ...R,
        loading,
        refetch: ()=>fetch(...args),
        next: () => doSkip(take),
        prev: () => doSkip(-take),
        gotoPage: (page: number) => doSkip((page - 1) * take, false),
        page,
        maxPage,
        take,
        get Pagination() {
            return <Pagination total={this.maxPage} value={this.page} onChange={this.gotoPage} />
        }
    }
}

export default useBackend;