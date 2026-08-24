'use client';

import { Accordion, Badge, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import FullProductCard from "@/components/FullProductCard";
import type { FullProduct } from "@/app/(landing)/admin/products/type";

type Question = { q: string; answer: string };

type SearchResultsProps = {
    products: FullProduct[];
    questions: Question[];
    initialQuery: string;
};

export default function SearchResults({ products, questions, initialQuery }: SearchResultsProps) {
    const [query, setQuery] = useState(initialQuery);
    const normalizedQuery = query.trim().toLocaleLowerCase('fa');
    const results = useMemo(() => products.filter(product => [product.name, product.description, product.category?.name, product.material?.name].filter(Boolean).join(' ').toLocaleLowerCase('fa').includes(normalizedQuery)), [products, normalizedQuery]);
    const questionResults = useMemo(() => questions.filter(question => `${question.q} ${question.answer}`.toLocaleLowerCase('fa').includes(normalizedQuery)), [questions, normalizedQuery]);
    const hasQuery = normalizedQuery.length > 0;

    return (
        <div dir="rtl">
            <div className="mx-auto max-w-3xl">
                <TextInput value={query} onChange={event => setQuery(event.currentTarget.value)} placeholder="نام محصول یا سوال خود را بنویسید..." size="lg" radius="xl" leftSection={<IconSearch size={21} />} autoFocus />
                <p className="mt-3 text-sm text-gray-500">جستجو بین محصولات و سوالات متداول به‌صورت زنده انجام می‌شود.</p>
            </div>
            {!hasQuery ? (
                <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">برای شروع، عبارت موردنظر خود را جستجو کنید.</div>
            ) : (
                <>
                    <section className="mt-10">
                        <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-bold">محصولات</h2><Badge>{results.length.toLocaleString('fa-IR')} نتیجه</Badge></div>
                        {results.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{results.map(product => <FullProductCard key={product.id} {...product} />)}</div> : <p className="rounded-xl bg-white p-5 text-gray-500">محصولی با این عبارت پیدا نشد.</p>}
                    </section>
                    <section className="mt-10">
                        <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-bold">سوالات متداول</h2><Badge color="teal">{questionResults.length.toLocaleString('fa-IR')} نتیجه</Badge></div>
                        {questionResults.length ? <Accordion variant="separated">{questionResults.map((question, index) => <Accordion.Item key={index} value={`question-${index}`}><Accordion.Control>{question.q}</Accordion.Control><Accordion.Panel>{question.answer}</Accordion.Panel></Accordion.Item>)}</Accordion> : <p className="rounded-xl bg-white p-5 text-gray-500">سوال متداولی با این عبارت پیدا نشد.</p>}
                    </section>
                </>
            )}
            <Link href="/" className="mt-10 inline-block font-bold text-primary">بازگشت به صفحه اصلی ←</Link>
        </div>
    );
}
