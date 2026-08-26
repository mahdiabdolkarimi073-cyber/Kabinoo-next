'use client';

import { useEffect, useState } from "react";
import { Card, Text, Group, ThemeIcon, SimpleGrid, Badge, Progress, Table, ScrollArea, Tabs, Box, Select, Button, Tooltip } from "@mantine/core";
import {
    IconUsers, IconNotebook, IconShoppingBag, IconListCheck, IconContract, IconCash,
    IconCheck, IconAlertTriangle, IconChartBar, IconTrendingUp, IconCalendar, IconUserShield,
    IconUserHeart, IconHeadset, IconCoin, IconClock, IconX,
} from "@tabler/icons-react";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";

type Stats = {
    users: { total: number; authors: number; shopManagers: number; contractManagers: number; support: number; admins: number };
    orders: { total: number; today: number; month: number; year: number };
    sales: { total: number; today: number; month: number; year: number };
    contracts: { total: number; active: number; installmentOrders: number };
    checks: { total: number; pending: number; late: number; approved: number; rejected: number };
    products: { total: number };
    monthly: { month: string; orders: number; revenue: number }[];
    installmentsByMonth: { month: string; count: number; amount: number }[];
    lateInstallments: any[];
};

function formatToman(n: number) {
    return (n || 0).toLocaleString("fa-IR") + " تومان";
}

function formatNumber(n: number) {
    return (n || 0).toLocaleString("fa-IR");
}

export default function Page() {
    const { data: stats, loading } = useBackend<Stats>("/admin/stats");
    const [activeTab, setActiveTab] = useState("overview");

    if (loading || !stats) {
        return <div className="p-8 text-center text-gray-500">در حال بارگذاری آمار...</div>;
    }

    const maxMonthlyRevenue = Math.max(...stats.monthly.map(m => m.revenue), 1);
    const maxMonthlyOrders = Math.max(...stats.monthly.map(m => m.orders), 1);
    const maxInstallmentAmount = Math.max(...stats.installmentsByMonth.map(m => m.amount), 1);

    const userCards = [
        { label: "کل کاربران", value: stats.users.total, icon: IconUsers, color: "blue", href: "/admin/user" },
        { label: "نویسندگان", value: stats.users.authors, icon: IconNotebook, color: "orange", href: "/admin/author" },
        { label: "مدیران فروشگاه", value: stats.users.shopManagers, icon: IconShoppingBag, color: "teal", href: "/admin/user" },
        { label: "مدیران قرارداد", value: stats.users.contractManagers, icon: IconContract, color: "indigo", href: "/admin/user" },
        { label: "پشتیبانان", value: stats.users.support, icon: IconHeadset, color: "cyan", href: "/admin/user" },
        { label: "مدیران سیستم", value: stats.users.admins, icon: IconUserShield, color: "red", href: "/admin/user" },
    ];

    const orderCards = [
        { label: "فروش امروز", value: formatNumber(stats.orders.today), icon: IconTrendingUp, color: "green" },
        { label: "فروش این ماه", value: formatNumber(stats.orders.month), icon: IconCalendar, color: "blue" },
        { label: "فروش امسال", value: formatNumber(stats.orders.year), icon: IconChartBar, color: "violet" },
        { label: "کل سفارشات", value: formatNumber(stats.orders.total), icon: IconListCheck, color: "gray" },
    ];

    const salesCards = [
        { label: "تراکنش امروز", value: formatToman(stats.sales.today), icon: IconCash, color: "green" },
        { label: "تراکنش این ماه", value: formatToman(stats.sales.month), icon: IconCash, color: "blue" },
        { label: "تراکنش امسال", value: formatToman(stats.sales.year), icon: IconCash, color: "violet" },
        { label: "کل تراکنش‌ها", value: formatToman(stats.sales.total), icon: IconCoin, color: "teal" },
    ];

    const checkCards = [
        { label: "کل چک‌ها", value: formatNumber(stats.checks.total), icon: IconCheck, color: "gray" },
        { label: "در انتظار تایید", value: formatNumber(stats.checks.pending), icon: IconClock, color: "yellow" },
        { label: "تایید شده", value: formatNumber(stats.checks.approved), icon: IconCheck, color: "green" },
        { label: "رد شده", value: formatNumber(stats.checks.rejected), icon: IconX, color: "red" },
    ];

    const contractCards = [
        { label: "کل قراردادها", value: formatNumber(stats.contracts.total), icon: IconContract, color: "blue", href: "/admin/contract" },
        { label: "قراردادهای فعال", value: formatNumber(stats.contracts.active), icon: IconContract, color: "green", href: "/admin/contract" },
        { label: "سفارشات اقساطی", value: formatNumber(stats.contracts.installmentOrders), icon: IconCash, color: "orange", href: "/admin/check" },
        { label: "اقساط معوقه", value: formatNumber(stats.checks.late), icon: IconAlertTriangle, color: "red", href: "/admin/check" },
    ];

    return (
        <div className="my-6 p-4 space-y-8" dir="rtl">
            <div>
                <h2 className="text-2xl font-bold mb-2">داشبورد آماری سایت</h2>
                <Text size="sm" c="dimmed">نمای کلی از وضعیت سایت به صورت لحظه‌ای</Text>
            </div>

            <Tabs value={activeTab} onChange={(v) => setActiveTab(v || "overview")}>
                <Tabs.List>
                    <Tabs.Tab value="overview" leftSection={<IconChartBar size={16} />}>نمای کلی</Tabs.Tab>
                    <Tabs.Tab value="users" leftSection={<IconUsers size={16} />}>کاربران</Tabs.Tab>
                    <Tabs.Tab value="sales" leftSection={<IconCash size={16} />}>فروش و تراکنش</Tabs.Tab>
                    <Tabs.Tab value="contracts" leftSection={<IconContract size={16} />}>قراردادها و اقساط</Tabs.Tab>
                    <Tabs.Tab value="checks" leftSection={<IconCheck size={16} />}>چک‌ها</Tabs.Tab>
                </Tabs.List>

                {/* Overview Tab */}
                <Tabs.Panel value="overview" pt="xl">
                    <div className="space-y-8">
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                            {[
                                ...orderCards.slice(0, 2),
                                ...salesCards.slice(0, 2),
                            ].map((card, i) => (
                                <Card key={i} shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow">
                                    <Group justify="space-between" align="center">
                                        <div>
                                            <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                            <Text size="xl" fw={700}>{card.value}</Text>
                                        </div>
                                        <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                            <card.icon size={24} />
                                        </ThemeIcon>
                                    </Group>
                                </Card>
                            ))}
                        </SimpleGrid>

                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <h3 className="font-bold mb-4">روند ۶ ماه اخیر</h3>
                            <div className="space-y-4">
                                <div>
                                    <Text size="sm" fw={600} mb="xs">تعداد سفارشات</Text>
                                    {stats.monthly.map((m, i) => (
                                        <Group key={i} gap="sm" mb={6}>
                                            <Text size="xs" w={70} c="dimmed">{m.month}</Text>
                                            <Progress
                                                value={(m.orders / maxMonthlyOrders) * 100}
                                                size="lg"
                                                color="blue"
                                                style={{ flex: 1 }}
                                            />
                                            <Text size="xs" fw={600} w={40}>{formatNumber(m.orders)}</Text>
                                        </Group>
                                    ))}
                                </div>
                                <div>
                                    <Text size="sm" fw={600} mb="xs">درآمد (تومان)</Text>
                                    {stats.monthly.map((m, i) => (
                                        <Group key={i} gap="sm" mb={6}>
                                            <Text size="xs" w={70} c="dimmed">{m.month}</Text>
                                            <Progress
                                                value={(m.revenue / maxMonthlyRevenue) * 100}
                                                size="lg"
                                                color="green"
                                                style={{ flex: 1 }}
                                            />
                                            <Text size="xs" fw={600} w={120}>{formatNumber(m.revenue)}</Text>
                                        </Group>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {stats.checks.late > 0 && (
                            <Card shadow="sm" padding="lg" radius="md" withBorder className="border-red-200 bg-red-50">
                                <Group gap="sm" mb="md">
                                    <ThemeIcon color="red" variant="light">
                                        <IconAlertTriangle size={20} />
                                    </ThemeIcon>
                                    <Text fw={700} c="red">{formatNumber(stats.checks.late)} قسط معوقه</Text>
                                </Group>
                                <Text size="sm" c="dimmed">برای مشاهده و پیگیری اقساط معوقه به بخش چک‌ها مراجعه کنید.</Text>
                                <Link href="/admin/check">
                                    <Button size="xs" color="red" variant="light" mt="md">مشاهده اقساط معوقه</Button>
                                </Link>
                            </Card>
                        )}
                    </div>
                </Tabs.Panel>

                {/* Users Tab */}
                <Tabs.Panel value="users" pt="xl">
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
                        {userCards.map((card, i) => (
                            <Link href={card.href} key={i} style={{ textDecoration: 'none' }}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow cursor-pointer h-full">
                                    <Group justify="space-between" align="center">
                                        <div>
                                            <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                            <Text size="xl" fw={700}>{formatNumber(card.value)}</Text>
                                        </div>
                                        <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                            <card.icon size={24} />
                                        </ThemeIcon>
                                    </Group>
                                </Card>
                            </Link>
                        ))}
                    </SimpleGrid>
                </Tabs.Panel>

                {/* Sales Tab */}
                <Tabs.Panel value="sales" pt="xl">
                    <div className="space-y-8">
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                            {salesCards.map((card, i) => (
                                <Card key={i} shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow">
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

                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                            {orderCards.map((card, i) => (
                                <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                                    <Group justify="space-between" align="center">
                                        <div>
                                            <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                            <Text size="xl" fw={700}>{card.value}</Text>
                                        </div>
                                        <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                            <card.icon size={24} />
                                        </ThemeIcon>
                                    </Group>
                                </Card>
                            ))}
                        </SimpleGrid>

                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <h3 className="font-bold mb-4">روند درآمد ۶ ماه اخیر</h3>
                            <div className="space-y-3">
                                {stats.monthly.map((m, i) => (
                                    <Group key={i} gap="sm">
                                        <Text size="sm" w={70} c="dimmed">{m.month}</Text>
                                        <Box style={{ flex: 1 }}>
                                            <Progress
                                                value={(m.revenue / maxMonthlyRevenue) * 100}
                                                size="lg"
                                                color="green"
                                            />
                                        </Box>
                                        <Text size="sm" fw={600} w={150}>{formatToman(m.revenue)}</Text>
                                    </Group>
                                ))}
                            </div>
                        </Card>
                    </div>
                </Tabs.Panel>

                {/* Contracts Tab */}
                <Tabs.Panel value="contracts" pt="xl">
                    <div className="space-y-8">
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                            {contractCards.map((card, i) => (
                                <Link href={card.href} key={i} style={{ textDecoration: 'none' }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder className="hover:shadow-md transition-shadow cursor-pointer h-full">
                                        <Group justify="space-between" align="center">
                                            <div>
                                                <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                                <Text size="xl" fw={700}>{card.value}</Text>
                                            </div>
                                            <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                                <card.icon size={24} />
                                            </ThemeIcon>
                                        </Group>
                                    </Card>
                                </Link>
                            ))}
                        </SimpleGrid>

                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <h3 className="font-bold mb-4">اقساط ۶ ماه اخیر</h3>
                            <div className="space-y-3">
                                {stats.installmentsByMonth.map((m, i) => (
                                    <Group key={i} gap="sm">
                                        <Text size="sm" w={70} c="dimmed">{m.month}</Text>
                                        <Box style={{ flex: 1 }}>
                                            <Progress
                                                value={(m.amount / maxInstallmentAmount) * 100}
                                                size="lg"
                                                color="orange"
                                            />
                                        </Box>
                                        <Text size="sm" fw={600} w={150}>{formatToman(m.amount)}</Text>
                                        <Badge size="sm" variant="light" color="orange">{formatNumber(m.count)} چک</Badge>
                                    </Group>
                                ))}
                            </div>
                        </Card>

                        {stats.lateInstallments.length > 0 && (
                            <Card shadow="sm" padding="lg" radius="md" withBorder className="border-red-200">
                                <h3 className="font-bold mb-4 text-red-700">اقساط معوقه</h3>
                                <ScrollArea>
                                    <Table
                                        data={{
                                            head: ["کد سفارش", "کاربر", "مبلغ چک", "تاریخ سررسید", "وضعیت"],
                                            body: stats.lateInstallments.map((c: any) => [
                                                c.order?.code || "-",
                                                c.order?.user?.name || "-",
                                                formatToman(c.amount),
                                                new Date(c.expire_at).toLocaleDateString("fa-IR"),
                                                <Badge key={c.id} color="red" variant="light">معوقه</Badge>,
                                            ]),
                                        }}
                                        striped
                                        highlightOnHover
                                        withColumnBorders
                                    />
                                </ScrollArea>
                            </Card>
                        )}
                    </div>
                </Tabs.Panel>

                {/* Checks Tab */}
                <Tabs.Panel value="checks" pt="xl">
                    <div className="space-y-6">
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                            {checkCards.map((card, i) => (
                                <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                                    <Group justify="space-between" align="center">
                                        <div>
                                            <Text size="sm" c="dimmed" mb={4}>{card.label}</Text>
                                            <Text size="xl" fw={700}>{card.value}</Text>
                                        </div>
                                        <ThemeIcon size={48} radius="md" color={card.color} variant="light">
                                            <card.icon size={24} />
                                        </ThemeIcon>
                                    </Group>
                                </Card>
                            ))}
                        </SimpleGrid>

                        {stats.checks.pending > 0 && (
                            <Card shadow="sm" padding="lg" radius="md" withBorder className="border-yellow-200 bg-yellow-50">
                                <Group justify="space-between">
                                    <div>
                                        <Text fw={700} c="yellow.8">{formatNumber(stats.checks.pending)} چک در انتظار تایید</Text>
                                        <Text size="sm" c="dimmed" mt={4}>برای تایید یا رد تصاویر چک‌های ضمانت به صفحه بررسی چک‌ها مراجعه کنید.</Text>
                                    </div>
                                    <Link href="/admin/check">
                                        <Button color="yellow" variant="light">بررسی چک‌ها</Button>
                                    </Link>
                                </Group>
                            </Card>
                        )}

                        {stats.checks.late > 0 && (
                            <Card shadow="sm" padding="lg" radius="md" withBorder className="border-red-200 bg-red-50">
                                <Group justify="space-between">
                                    <div>
                                        <Text fw={700} c="red">{formatNumber(stats.checks.late)} قسط معوقه</Text>
                                        <Text size="sm" c="dimmed" mt={4}>اقساطی که تاریخ سررسید آن‌ها گذشته و هنوز تایید نشده‌اند.</Text>
                                    </div>
                                    <Link href="/admin/check">
                                        <Button color="red" variant="light">مشاهده اقساط معوقه</Button>
                                    </Link>
                                </Group>
                            </Card>
                        )}
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}
