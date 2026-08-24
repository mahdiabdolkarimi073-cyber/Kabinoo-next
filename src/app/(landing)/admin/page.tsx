'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Card, Text, Group, ThemeIcon, SimpleGrid, Badge } from "@mantine/core";
import { IconNotebook, IconUsers, IconListCheck, IconMessage, IconShoppingBag, IconListLetters } from "@tabler/icons-react";
import Link from "next/link";

type Stat = {
    label: string;
    value: number;
    icon: any;
    color: string;
    href: string;
};

export default function Page() {
    const { data: authors = [] } = useBackend<any[]>("/admin/author");
    const { data: orders = [] } = useBackend<any[]>("/admin/order");
    const { data: users = [] } = useBackend<any[]>("/admin/user");
    const { data: chats = [] } = useBackend<any[]>("/admin/chat?_include=user");
    const { data: products = [] } = useBackend<any[]>("/admin/product");
    const { data: portfolio = [] } = useBackend<any[]>("/admin/portfolio");

    const unansweredChats = chats.filter((c: any) => !c.answered).length;

    const stats: Stat[] = [
        { label: "سفارشات", value: orders.length, icon: IconListCheck, color: "blue", href: "/admin/order" },
        { label: "محصولات", value: products.length, icon: IconShoppingBag, color: "green", href: "/admin/products" },
        { label: "کاربران", value: users.length, icon: IconUsers, color: "violet", href: "/admin/user" },
        { label: "نویسندگان", value: authors.length, icon: IconNotebook, color: "orange", href: "/admin/author" },
        { label: "نمونه کارها", value: portfolio.length, icon: IconListLetters, color: "teal", href: "/admin/portfolio" },
        { label: "چت‌های پاسخ‌نشده", value: unansweredChats, icon: IconMessage, color: "red", href: "/admin/chat" },
    ];

    return (
        <div className="my-6 p-4">
            <h2 className="text-xl font-bold mb-6">آمار سایت</h2>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing="lg"
            >
                {stats.map((stat, i) => (
                    <Link href={stat.href} key={i} style={{ textDecoration: 'none' }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow cursor-pointer h-full">
                            <Group justify="space-between" align="center">
                                <div>
                                    <Text size="sm" c="dimmed" mb={4}>{stat.label}</Text>
                                    <Group gap="xs" align="baseline">
                                        <Text size="xl" fw={700}>
                                            {stat.value.toLocaleString("fa-IR")}
                                        </Text>
                                        {stat.label === "چت‌های پاسخ‌نشده" && stat.value > 0 && (
                                            <Badge color="red" size="sm" variant="filled">جدید</Badge>
                                        )}
                                    </Group>
                                </div>
                                <ThemeIcon size={48} radius="md" color={stat.color} variant="light">
                                    <stat.icon size={24} />
                                </ThemeIcon>
                            </Group>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </div>
    );
}
