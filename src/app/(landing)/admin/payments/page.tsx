'use client';

import { useState } from "react";
import { Table, Badge, Text, Select, TextInput, Group, Card, SimpleGrid, ThemeIcon } from "@mantine/core";
import { IconCash, IconCheck, IconClock, IconCoin } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";

function formatToman(n: number) {
    return (n || 0).toLocaleString("fa-IR") + " تومان";
}

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const [search, setSearch] = useState("");

    const apiUrl = "/admin/payments?_take=50" + (status !== "ALL" ? `&status=${status}` : "");
    const { data: result, loading } = useBackend<any>(apiUrl);
    const payments = result?.data || [];
    const total = result?.total || 0;

    if (loading) return <Loading />;

    let filtered = payments;
    if (search) {
        filtered = filtered.filter((p: any) =>
            p.user?.name?.includes(search) ||
            p.id?.includes(search) ||
            p.user?.phone?.includes(search)
        );
    }

    const totalAmount = payments.reduce((sum: number, p: any) => sum + (p.price || 0), 0);
    const paidAmount = payments
        .filter((p: any) => p.paid_at)
        .reduce((sum: number, p: any) => sum + (p.price || 0), 0);
    const pendingAmount = payments
        .filter((p: any) => !p.paid_at)
        .reduce((sum: number, p: any) => sum + (p.price || 0), 0);
    const paidCount = payments.filter((p: any) => p.paid_at).length;

    const summaryCards = [
        { label: "کل تراکنش‌ها", value: payments.length.toLocaleString("fa-IR"), icon: IconCash, color: "blue" },
        { label: "تراکنش‌های موفق", value: paidCount.toLocaleString("fa-IR"), icon: IconCheck, color: "green" },
        { label: "در انتظار پرداخت", value: (payments.length - paidCount).toLocaleString("fa-IR"), icon: IconClock, color: "yellow" },
        { label: "مبلغ تراکنش‌های موفق", value: formatToman(paidAmount), icon: IconCoin, color: "teal" },
    ];

    const tableHead = ["شناسه", "کاربر", "تلفن", "مبلغ", "تاریخ ایجاد", "تاریخ پرداخت", "وضعیت", "سفارشات"];
    const tableBody = filtered.map((payment: any) => [
        <Text key="id" size="xs" dir="ltr" style={{ maxWidth: 120 }} truncate>{payment.id}</Text>,
        payment.user?.name || "-",
        <Text key="phone" dir="ltr" size="sm">{payment.user?.phone || "-"}</Text>,
        <Text key="price" fw={600}>{formatToman(payment.price)}</Text>,
        new Date(payment.created_at).toLocaleString("fa-IR"),
        payment.paid_at ? new Date(payment.paid_at).toLocaleString("fa-IR") : "-",
        <Badge key="status" color={payment.paid_at ? "green" : "yellow"} variant="light">
            {payment.paid_at ? "پرداخت شده" : "در انتظار"}
        </Badge>,
        <Group key="orders" gap={4}>
            {(payment.orders || []).map((order: any) => (
                <Link key={order.id} href={`/admin/order/${order.id}`}>
                    <Text c="blue" size="xs" style={{ cursor: "pointer" }}>#{order.code}</Text>
                </Link>
            ))}
        </Group>,
    ]);

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">تراکنش‌های سایت</h2>
                <Text size="sm" c="dimmed">مشاهده تمام تراکنش‌های پرداختی سایت</Text>
            </div>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                {summaryCards.map((card, i) => (
                    <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between" align="center">
                            <div>
                                <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                <Text size="lg" fw={700}>{card.value}</Text>
                            </div>
                            <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                <card.icon size={24} />
                            </ThemeIcon>
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <Select
                    label="وضعیت تراکنش"
                    data={[
                        { label: "همه", value: "ALL" },
                        { label: "پرداخت شده", value: "PAID" },
                        { label: "در انتظار پرداخت", value: "PENDING" },
                    ]}
                    value={status}
                    onChange={(v) => setStatus(v || "ALL")}
                    style={{ minWidth: 180 }}
                />
                <TextInput
                    placeholder="جستجو با نام کاربر، شناسه یا تلفن..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
            </div>

            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>تراکنشی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}
