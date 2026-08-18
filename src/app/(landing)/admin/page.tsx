'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Card, Text, Group, ThemeIcon } from "@mantine/core";
import { IconNotebook, IconUsers } from "@tabler/icons-react";

type Author = { id: string; name: string };

export default function Page() {
    const { data: authors = [] } = useBackend<Author[]>("/admin/author");

    const stats = [
        {
            label: "تعداد نویسندگان",
            value: authors.length,
            icon: IconNotebook,
            color: "blue",
        },
    ];

    return (
        <div className="my-6">
            <h2 className="text-xl font-bold mb-6">آمار سایت</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
                        <Group justify="space-between">
                            <div>
                                <Text size="sm" c="dimmed">{stat.label}</Text>
                                <Text size="xl" fw={700}>{stat.value.toLocaleString("fa-IR")}</Text>
                            </div>
                            <ThemeIcon size={48} radius="md" color={stat.color} variant="light">
                                <stat.icon size={24} />
                            </ThemeIcon>
                        </Group>
                    </Card>
                ))}
            </div>
        </div>
    );
}
