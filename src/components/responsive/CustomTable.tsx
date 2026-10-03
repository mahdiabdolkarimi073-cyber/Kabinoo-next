'use client';

import useIsMobile from "@/utils/hooks/useIsMobile";
import { Table, TableProps } from "@mantine/core";
import { ReactNode, useMemo } from "react";
import EmptyList from "../EmptyList";

function TableToCard(props: TableProps) {
    const items = useMemo(() => {
        return props.data?.body?.map((items) => {
            return items.map((item, i) => {
                const rowName = props?.data?.head?.[i] as string | ReactNode;
                return [
                    rowName,
                    item
                ] as const;
            })
        }) || [];
    }, [props])
    console.log(items);
    return (
        <div key={items.length} className='flex flex-col gap-5'>
            {items.map((cardItems, i) => {
                return (
                    <div key={i} className='flex flex-wrap justify-between gap-x-10 gap-2 border border-primary rounded-xl p-3 shadow'>
                        {cardItems.map(([key, value], i) => (
                            <div className={`min-w-25 flex flex-col ${i % 2 == 0 ? "items-start" : "items-end"}`}>
                                <div className='flex justify-start w-full opacity-70 font-normal'>
                                    {key}
                                </div>
                                <div className='font-bold'>
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

function CustomTable(props: TableProps) {
    const isMobile = useIsMobile();

    if (!props.data?.body?.length) return (
        <EmptyList />
    )

    return isMobile ? (
        <TableToCard {...props} />
    ) : (
        <Table {...props} />
    )
}

export default CustomTable;