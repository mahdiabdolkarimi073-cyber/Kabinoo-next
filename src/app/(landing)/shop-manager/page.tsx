'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Card, Text, Group, ThemeIcon, SimpleGrid, Badge } from "@mantine/core";
import { IconListCheck, IconShoppingBag, IconSpeakerphone } from "@tabler/icons-react";
import Link from "next/link";

type Stat = {
    label: string;
    value: number;
    icon: any;
    color: string;
    href: string;
};

export default function Page() {
    const { data: orders = [] } = useBackend<any[]>("/shop-manager/order?_include=user");
    const { data: products = [] } = useBackend<any[]>("/shop-manager/product?_include=category");
    const { data: announcements = [] } = useBackend<any[]>("/shop-manager/announcement");

    const pendingOrders = orders.filter((o: any) => o.status === "PAYMENT" || o.status === "PENDING").length;

    const stats: Stat[] = [
        { label: "تعداد سفارشات", value: orders.length, icon: IconListCheck, color: "blue", href: "/shop-manager/order" },
        { label: "سفارشات در انتظار", value: pendingOrders, icon: IconListCheck, color: "orange", href: "/shop-manager/order" },
        { label: "محصولات", value: products.length, icon: IconShoppingBag, color: "green", href: "/shop-manager/products" },
        { label: "اعلان‌ها", value: announcements.length, icon: IconSpeakerphone, color: "teal", href: "/shop-manager/announcement" },
    ];

    return (
        <div className="my-6 p-4">
            <h2 className="text-xl font-bold mb-6">داشبورد مدیر فروشگاه</h2>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                {stats.map((stat, i) => (
                    <Link href={stat.href} key={i} style={{ textDecoration: 'none' }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow cursor-pointer h-full">
                            <Group justify="space-between" align="center">
                                <div>
                                    <Text size="sm" c="dimmed" mb={4}>{stat.label}</Text>
                                    <Text size="xl" fw={700}>
                                        {stat.value.toLocaleString("fa-IR")}
                                    </Text>
                                </div>
                                <ThemeIcon size={48} radius="md" color={stat.color} variant="light">
                                    <stat.icon size={24} />
                                </ThemeIcon>
                            </Group>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>

            <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">آخرین سفارشات</h3>
                {orders.length === 0 ? (
                    <Text c="dimmed">سفارشی وجود ندارد</Text>
                ) : (
                    <div className="space-y-2">
                        {orders.slice(0, 5).map((order: any) => (
                            <Link href={`/shop-manager/order/${order.id}`} key={order.id} style={{ textDecoration: 'none' }}>
                                <Card shadow="xs" padding="md" radius="md" withBorder className="hover:shadow-sm transition-shadow cursor-pointer">
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500}>سفارش #{order.code}</Text>
                                            <Text size="sm" c="dimmed">{order.user?.name || "-"}</Text>
                                        </div>
                                        <Badge color={order.status === "PAYMENT" ? "orange" : order.status === "COMPLETED" ? "green" : "blue"}>
                                            {order.status}
                                        </Badge>
                                    </Group>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
