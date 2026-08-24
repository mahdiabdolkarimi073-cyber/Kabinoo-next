'use client';

import { ActionIcon, Button } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

type CatalogViewerProps = {
    title: string;
    pages: string[];
};

export default function CatalogViewer({ title, pages }: CatalogViewerProps) {
    const [page, setPage] = useState(0);
    const currentPage = pages[page];
    const nextPage = () => setPage(value => Math.min(value + 1, pages.length - 1));
    const previousPage = () => setPage(value => Math.max(value - 1, 0));

    if (!pages.length) {
        return <p className="rounded-2xl bg-white p-8 text-center text-gray-600">صفحه‌ای برای این کاتالوگ ثبت نشده است.</p>;
    }

    return (
        <section dir="rtl" className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl bg-[#eee9df] p-3 shadow-xl md:p-6">
                <div className="relative flex min-h-[65vh] items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-inner">
                    <img src={currentPage} alt={`${title} - صفحه ${page + 1}`} className="max-h-[75vh] w-full object-contain" />
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-black/10 md:block" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                    <ActionIcon aria-label="صفحه قبل" onClick={previousPage} disabled={page === 0} size="lg" variant="light">
                        <IconChevronRight />
                    </ActionIcon>
                    <div className="text-center text-sm text-gray-700">
                        <p className="font-bold">صفحه {page + 1} از {pages.length}</p>
                        <p className="mt-1 text-xs text-gray-500">برای ورق زدن از دکمه‌های دو طرف استفاده کنید</p>
                    </div>
                    <ActionIcon aria-label="صفحه بعد" onClick={nextPage} disabled={page === pages.length - 1} size="lg" variant="light">
                        <IconChevronLeft />
                    </ActionIcon>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Button variant="subtle" onClick={() => setPage(0)}>بازگشت به جلد</Button>
            </div>
        </section>
    );
}
