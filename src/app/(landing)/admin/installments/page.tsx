'use client';

import { useState } from "react";
import { Table, Badge, Text, Card, Group, Select, TextInput, Progress, SimpleGrid } from "@mantine/core";
import { IconCash, IconClock, IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";

const OrderStatusLabels: Record<string, { label: string; color: string }> = {
    PAYMENT: { label: "در انتظار پرداخت", color: "green" },
    PENDING: { label: "در حال آماده‌سازی", color: "yellow" },
    CANCELED: { label: "لغو شده", color: "red" },
    COMPLETED: { label: "تکمیل شده", color: "blue" },
    PAUSED: { label: "تعلیق", color: "gray" },
    PAY_CHECK: { label: "بررسی پرداخت", color: "gray" },
    SENT: { label: "ارسال شده", color: "cyan" },
};

function formatToman(n: number) {
    return (n || 0).toLocaleString("fa-IR") + " تومان";
}

export default function Page() {
    const [filter, setFilter] = useState("ALL");
    const [search, setSearch] = useState("");

    const { data: installments = [], loading } = useBackend<any[]>("/admin/installments");

    if (loading) return <Loading />;

    const now = new Date();

    let filtered = installments;
    if (filter === "LATE") {
        filtered = filtered.filter((o) => o.lateCount > 0);
    } else if (filter === "PENDING") {
        filtered = filtered.filter((o) => o.pendingCount > 0);
    } else if (filter === "COMPLETED") {
        filtered = filtered.filter((o) => o.status === "COMPLETED");
    }

    if (search) {
        filtered = filtered.filter((o) =>
            o.user?.name?.includes(search) ||
            o.code?.toString().includes(search) ||
            o.user?.phone?.includes(search)
        );
    }

    const totalInstallments = installments.length;
    const totalLate = installments.reduce((sum, o) => sum + o.lateCount, 0);
    const totalPending = installments.reduce((sum, o) => sum + o.pendingCount, 0);
    const totalAmount = installments.reduce((sum, o) => sum + o.totalChecksAmount, 0);
    const paidAmount = installments.reduce((sum, o) => sum + o.paidChecksAmount, 0);

    const summaryCards = [
        { label: "کل سفارشات اقساطی", value: totalInstallments.toLocaleString("fa-IR"), icon: IconCash, color: "blue" },
        { label: "چک‌های در انتظار", value: totalPending.toLocaleString("fa-IR"), icon: IconClock, color: "yellow" },
        { label: "چک‌های معوقه", value: totalLate.toLocaleString("fa-IR"), icon: IconAlertTriangle, color: "red" },
        { label: "مبلغ کل اقساط", value: formatToman(totalAmount), icon: IconCash, color: "teal" },
    ];

    const tableHead = ["کد سفارش", "کاربر", "تلفن", "مبلغ نهایی", "تعداد چک", "در انتظار", "معوقه", "پرداخت شده", "وضعیت", "جزئیات"];
    const tableBody = filtered.map((order) => {
        const statusInfo = OrderStatusLabels[order.status] || { label: order.status, color: "gray" };
        const progress = order.totalChecksAmount > 0
            ? Math.round((order.paidChecksAmount / order.totalChecksAmount) * 100)
            : 0;

        return [
            order.code,
            order.user?.name || "-",
            <Text key="phone" dir="ltr" size="sm">{order.user?.phone || "-"}</Text>,
            formatToman(order.finalPrice),
            order.checksCount,
            order.pendingCount > 0 ? <Badge key="pending" color="yellow" variant="light">{order.pendingCount}</Badge> : "-",
            order.lateCount > 0 ? <Badge key="late" color="red" variant="filled">{order.lateCount}</Badge> : "-",
            <div key="paid" className="flex items-center gap-2">
                <Progress value={progress} size="sm" color="green" style={{ width: 60 }} />
                <Text size="xs">{progress}%</Text>
            </div>,
            <Badge key="status" color={statusInfo.color} variant="light">{statusInfo.label}</Badge>,
            <Link key="link" href={`/admin/order/${order.id}`}>
                <Text c="blue" size="sm" style={{ cursor: "pointer" }}>مشاهده</Text>
            </Link>,
        ];
    });

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">لیست اقساط مشتریان</h2>
                <Text size="sm" c="dimmed">مدیریت و پیگیری سفارشات اقساطی و چک‌های مشتریان</Text>
            </div>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                {summaryCards.map((card, i) => (
                    <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" align="center">
                            <div>
                                <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                <Text size="lg" fw={700}>{card.value}</Text>
                            </div>
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <Select
                    label="فیلتر"
                    data={[
                        { label: "همه", value: "ALL" },
                        { label: "دارای چک معوقه", value: "LATE" },
                        { label: "دارای چک در انتظار", value: "PENDING" },
                        { label: "تکمیل شده", value: "COMPLETED" },
                    ]}
                    value={filter}
                    onChange={(v) => setFilter(v || "ALL")}
                    style={{ minWidth: 180 }}
                />
                <TextInput
                    placeholder="جستجو با نام، کد سفارش یا تلفن..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
            </div>

            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>سفارش اقساطی وجود ندارد</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}
