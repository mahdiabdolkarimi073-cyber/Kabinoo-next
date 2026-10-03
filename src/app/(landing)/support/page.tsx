'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Card, Text, Group, ThemeIcon, SimpleGrid, Badge } from "@mantine/core";
import { IconMessage, IconPhoneCall, IconStar, IconTicket } from "@tabler/icons-react";
import Link from "next/link";

type Stat = {
    label: string;
    value: number;
    icon: any;
    color: string;
    href: string;
    alert?: boolean;
};

export default function Page() {
    const { data: chats = [] } = useBackend<any[]>("/support/chat?_include=user");
    const { data: advices = [] } = useBackend<any[]>("/support/advice");
    const { data: comments = [] } = useBackend<any[]>("/support/comment?_include=product&_take=100");
    const { data: tickets = [] } = useBackend<any[]>("/support/ticket?_include=user");

    const unansweredChats = chats.filter((c: any) => !c.answered).length;
    const pendingComments = comments.filter((c: any) => !c.accepted).length;
    const openTickets = tickets.filter((t: any) => t.status === "OPEN").length;

    const stats: Stat[] = [
        { label: "چت‌های پاسخ‌نشده", value: unansweredChats, icon: IconMessage, color: "red", href: "/support/chat", alert: unansweredChats > 0 },
        { label: "درخواست‌های مشاوره تلفنی", value: advices.length, icon: IconPhoneCall, color: "orange", href: "/support/advice" },
        { label: "نظرات در انتظار بررسی", value: pendingComments, icon: IconStar, color: "yellow", href: "/support/comment" },
        { label: "تیکت‌های باز", value: openTickets, icon: IconTicket, color: "blue", href: "/support/ticket" },
    ];

    return (
        <div className="my-6 p-4">
            <h2 className="text-xl font-bold mb-6">داشبورد پشتیبان</h2>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
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
                                        {stat.alert && stat.value > 0 && (
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
