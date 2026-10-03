'use client';

import { useState } from "react";
import { Table, Badge, Text, Select, TextInput, Group, Card, SimpleGrid } from "@mantine/core";
import { IconShoppingBag, IconCash, IconUsers, IconPackage } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";

const OrderStatusLabels: Record<string, { label: string; color: string }> = {
    PAYMENT: { label: "در انتظار پرداخت", color: "yellow" },
    PENDING: { label: "در حال آماده‌سازی", color: "blue" },
    CANCELED: { label: "لغو شده", color: "red" },
    COMPLETED: { label: "تکمیل شده", color: "green" },
    PAUSED: { label: "تعلیق", color: "gray" },
    PAY_CHECK: { label: "بررسی پرداخت", color: "gray" },
    SENT: { label: "ارسال شده", color: "cyan" },
};

function formatToman(n: number) {
    return (n || 0).toLocaleString("fa-IR") + " تومان";
}

export default function Page() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("ALL");

    const { data: result, loading } = useBackend<any>("/admin/purchases?_take=50");
    const purchases = result?.data || [];
    const total = result?.total || 0;

    if (loading) return <Loading />;

    let filtered = purchases;
    if (status !== "ALL") {
        filtered = filtered.filter((p: any) => p.order?.status === status);
    }
    if (search) {
        filtered = filtered.filter((p: any) =>
            p.product?.name?.includes(search) ||
            p.custom?.name?.includes(search) ||
            p.order?.user?.name?.includes(search) ||
            p.order?.code?.toString().includes(search)
        );
    }

    const totalRevenue = purchases.reduce((sum: number, p: any) => {
        const price = p.product?.finalPrice ?? p.product?.price ?? p.custom?.price ?? 0;
        return sum + price * (p.quantity || 1);
    }, 0);
    const totalItems = purchases.length;
    const uniqueProducts = new Set(purchases.map((p: any) => p.productId).filter(Boolean)).size;
    const uniqueUsers = new Set(purchases.map((p: any) => p.order?.userId).filter(Boolean)).size;

    const summaryCards = [
        { label: "کل اقلام فروخته شده", value: totalItems.toLocaleString("fa-IR"), icon: IconShoppingBag, color: "blue" },
        { label: "محصولات منحصر به فرد", value: uniqueProducts.toLocaleString("fa-IR"), icon: IconPackage, color: "teal" },
        { label: "خریداران", value: uniqueUsers.toLocaleString("fa-IR"), icon: IconUsers, color: "violet" },
        { label: "ارزش کل فروش", value: formatToman(totalRevenue), icon: IconCash, color: "green" },
    ];

    const tableHead = ["محصول", "نوع", "تعداد", "قیمت واحد", "کاربر", "کد سفارش", "وضعیت سفارش", "تاریخ"];
    const tableBody = filtered.map((item: any) => {
        const isCustom = !!item.custom;
        const name = isCustom ? item.custom?.name : item.product?.name || "-";
        const img = isCustom ? item.custom?.image : item.product?.images?.[0];
        const unitPrice = isCustom
            ? item.custom?.price ?? 0
            : item.product?.finalPrice ?? item.product?.price ?? 0;
        const statusInfo = OrderStatusLabels[item.order?.status] || { label: item.order?.status || "-", color: "gray" };

        return [
            <Group key="name" gap="xs">
                {img && <img src={img} alt={name} className="w-10 h-10 object-cover rounded" />}
                <Text size="sm" fw={600}>{name}</Text>
            </Group>,
            <Badge key="type" color={isCustom ? "yellow" : "blue"} variant="light">
                {isCustom ? "سفارشی" : "محصول"}
            </Badge>,
            (item.quantity || 1).toLocaleString("fa-IR"),
            formatToman(unitPrice),
            item.order?.user?.name || "-",
            <Link key="order" href={`/admin/order/${item.order?.id}`}>
                <Text c="blue" size="sm" style={{ cursor: "pointer" }}>#{item.order?.code || "-"}</Text>
            </Link>,
            <Badge key="status" color={statusInfo.color} variant="light">{statusInfo.label}</Badge>,
            item.order?.created_at ? new Date(item.order.created_at).toLocaleDateString("fa-IR") : "-",
        ];
    });

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">لیست خریداری شده از فروشگاه</h2>
                <Text size="sm" c="dimmed">مشاهده تمام اقلام خریداری شده توسط مشتریان</Text>
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
                    label="وضعیت سفارش"
                    data={[
                        { label: "همه", value: "ALL" },
                        ...Object.entries(OrderStatusLabels).map(([value, { label }]) => ({ label, value })),
                    ]}
                    value={status}
                    onChange={(v) => setStatus(v || "ALL")}
                    style={{ minWidth: 180 }}
                />
                <TextInput
                    placeholder="جستجو با نام محصول، کاربر یا کد سفارش..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
            </div>

            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>خریدی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}
