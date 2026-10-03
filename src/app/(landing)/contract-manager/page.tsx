'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Card, Text, Group, ThemeIcon, SimpleGrid, Badge } from "@mantine/core";
import { IconContract, IconClipboardList, IconUsers, IconAlertTriangle } from "@tabler/icons-react";
import Link from "next/link";

type Stat = {
    label: string;
    value: number;
    icon: any;
    color: string;
    href: string;
};

export default function Page() {
    const { data: contracts = [] } = useBackend<any[]>("/contract-manager/contract?_include=user");
    const { data: requests = [] } = useBackend<any[]>("/contract-manager/request?_include=user");
    const { data: users = [] } = useBackend<any[]>("/contract-manager/users");
    const { data: orders = [] } = useBackend<any[]>("/contract-manager/order?_include=user&_include=checks");

    const activeContracts = contracts.filter((c: any) => c.status === "ACTIVE").length;
    const pendingRequests = requests.filter((r: any) => r.status === "درحال بررسی").length;

    const lateChecks = orders.flatMap((o: any) => o.checks || []).filter((c: any) => {
        return c.status === "PENDING" && new Date(c.expire_at) < new Date();
    }).length;

    const stats: Stat[] = [
        { label: "قراردادهای فعال", value: activeContracts, icon: IconContract, color: "green", href: "/contract-manager/contract" },
        { label: "درخواست‌های طراحی", value: pendingRequests, icon: IconClipboardList, color: "orange", href: "/contract-manager/request" },
        { label: "مشتریان", value: users.length, icon: IconUsers, color: "blue", href: "/contract-manager/users" },
        { label: "اقساط معوق", value: lateChecks, icon: IconAlertTriangle, color: "red", href: "/contract-manager/installments/late" },
    ];

    return (
        <div className="my-6 p-4">
            <h2 className="text-xl font-bold mb-6">داشبورد مدیریت قراردادها</h2>
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
                <h3 className="text-lg font-bold mb-4">آخرین قراردادها</h3>
                {contracts.length === 0 ? (
                    <Text c="dimmed">قراردادی وجود ندارد</Text>
                ) : (
                    <div className="space-y-2">
                        {contracts.slice(0, 5).map((contract: any) => (
                            <Link href={`/contract-manager/contract/${contract.id}`} key={contract.id} style={{ textDecoration: 'none' }}>
                                <Card shadow="xs" padding="md" radius="md" withBorder className="hover:shadow-sm transition-shadow cursor-pointer">
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500}>{contract.title}</Text>
                                            <Text size="sm" c="dimmed">{contract.user?.name || "-"}</Text>
                                        </div>
                                        <Badge color={contract.status === "ACTIVE" ? "green" : contract.status === "EXPIRED" ? "red" : contract.status === "CANCELED" ? "orange" : "gray"}>
                                            {contract.status === "ACTIVE" ? "فعال" : contract.status === "EXPIRED" ? "منقضی" : contract.status === "CANCELED" ? "لغو شده" : "پیش‌نویس"}
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
