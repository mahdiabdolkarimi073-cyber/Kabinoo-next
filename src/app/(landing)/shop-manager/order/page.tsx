'use client';

import { useState } from "react";
import { Table, Select, Button, TextInput, Tooltip } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";
import { useDebouncedState } from "@mantine/hooks";

export const OrderStatsList = [
    { value: "PENDING", label: "درحال آماده‌سازی", color: "yellow" },
    { value: "PAYMENT", label: "درانتظار پرداخت", color: "green" },
    { value: "CANCELED", label: "لغو شده", color: "red" },
    { value: "COMPLETED", label: "تکمیل شده", color: "blue" },
    { value: "SENT", label: "ارسال شده", color: "cyan" },
    { value: "PAUSED", label: "تعلیق", color: "gray" },
    { value: "PAY_CHECK", label: "بررسی پرداخت", color: "gray" },
];

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const [orderCode, setManualOrderId] = useDebouncedState("", 1000);
    const apiUrl =
        "/shop-manager/order?_include=user" +
        (status !== "ALL" ? `&status=${status}` : "")
        + (orderCode ? `&code=${orderCode}` : "");

    const { data: orders = [], loading } = useBackend<any[]>(apiUrl);

    if (loading) return <Loading />;

    const tableHead = [
        "کد سفارش",
        "تاریخ ثبت",
        "نام کاربر",
        "مبلغ کل",
        "مبلغ نهایی",
        "وضعیت",
        "عملیات",
    ];

    const tableBody = orders.map((order: any) => [
        <Tooltip label={order.id}>
            <span>{order.code}</span>
        </Tooltip>,
        new Date(order.created_at).toLocaleString("fa-IR"),
        order.user?.name ?? "-",
        order.totalPrice.toLocaleString(),
        order.finalPrice.toLocaleString(),
        OrderStatsList.find(opt => opt.value === order.status)?.label || order.status,
        <Link href={`./order/${order.id}`}>
            <Button size="xs">مشاهده</Button>
        </Link>,
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
                <div>
                    <Select
                        label="وضعیت سفارش"
                        data={[
                            { label: "همه", value: "ALL" },
                            ...OrderStatsList
                        ]}
                        value={status}
                        onChange={v => setStatus(v || "ALL")}
                        style={{ minWidth: 150 }}
                    />
                </div>
                <TextInput
                    defaultValue={orderCode}
                    placeholder="کد سفارش را وارد کنید"
                    onChange={e => setManualOrderId(e.target.value)}
                />
            </div>
            <Table
                data={{
                    head: tableHead,
                    body: tableBody,
                }}
                striped
                highlightOnHover
                withColumnBorders
            />
        </div>
    );
}
