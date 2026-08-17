'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { Table, TextInput, Button } from "@mantine/core";
import Link from "next/link";
import { useDebouncedState } from "@mantine/hooks";

const example = {
    id: "b7b961d4-906e-4eec-b4b8-bae2649d15c3",
    name: "عباس بوعذاز",
    nationalCode: "undefined",
    phone: "9397791018",
    email: "undefined",
    joined_at: "2025-06-26T20:22:44.576Z",
    isAdmin: true,
};

export default function Page() {
    const [filters, setFilters] = useDebouncedState<Record<string, string>>({
        name: "",
        phone: "",
        email: "",
        nationalCode: "",
        _contains: "name"
    }, 500);

    const { data: users = null, loading } = useBackend<typeof example[]>(
        "/admin/users?" + new URLSearchParams(
            Object.fromEntries(
                Object.entries(filters).filter(([_, v]) => v)
            )
        ).toString()
    );

    if (users === null) return <Loading />;

    const tableHead = [
        "نام",
        "شماره تماس",
        "ایمیل",
        "کد ملی",
        "تاریخ عضویت",
        "عملیات",
    ];

    const tableBody = users.map((user: typeof example) => [
        user.name || "-",
        user.phone || "-",
        user.email || "-",
        user.nationalCode || "-",
        user.joined_at ? new Date(user.joined_at).toLocaleDateString("fa-IR") : "-",
        <Link href={`./user/${user.id}`}>
            <Button size="xs" variant="light">مشاهده</Button>
        </Link>,
    ]);

    return (
        <div className="w-full p-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <TextInput
                    label="نام"
                    placeholder="نام"
                    defaultValue={filters.name}
                    onChange={e => setFilters(f => ({ ...f, name: e.target.value }))}
                />
                <TextInput
                    label="شماره تماس"
                    placeholder="شماره تماس"
                    defaultValue={filters.phone}
                    onChange={e => setFilters(f => ({ ...f, phone: e.target.value }))}
                />
                <TextInput
                    label="ایمیل"
                    placeholder="ایمیل"
                    defaultValue={filters.email}
                    onChange={e => setFilters(f => ({ ...f, email: e.target.value }))}
                />
                <TextInput
                    label="کد ملی"
                    placeholder="کد ملی"
                    defaultValue={filters.nationalCode}
                    onChange={e => setFilters(f => ({ ...f, nationalCode: e.target.value }))}
                />
            </div>
            <div className='relative'>
                {loading && (
                    <div className='absolute left-0 top-0 w-full h-full backdrop-blur-lg'>
                        <Loading />
                    </div>
                )}
                <Table
                    data={{
                        head: tableHead,
                        body: tableBody,
                    }}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            </div>
        </div>
    )
}