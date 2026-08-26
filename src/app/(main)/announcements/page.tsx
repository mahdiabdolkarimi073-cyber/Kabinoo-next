'use client';

import { useState } from "react";
import { Card, Text, Badge, Group, Container, Title, Divider } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";

export default function Page() {
    const { data: announcements = [], loading } = useBackend<any[]>("/public/announcement");
    const [expanded, setExpanded] = useState<string | null>(null);

    if (loading) return <Loading />;

    return (
        <Container size="md" className="py-8" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconBell size={24} className="text-primary" />
                </div>
                <div>
                    <Title order={2}>اطلاعیه‌ها</Title>
                    <Text size="sm" c="dimmed">آخرین اخبار و اطلاعیه‌های سایت</Text>
                </div>
            </div>

            <Divider mb="lg" />

            {announcements.length === 0 ? (
                <Card withBorder radius="lg" className="text-center py-12">
                    <Text c="dimmed" size="lg">در حال حاضر اطلاعیه‌ای وجود ندارد.</Text>
                </Card>
            ) : (
                <div className="space-y-4">
                    {announcements.map((ann, i) => (
                        <Card
                            key={ann.id}
                            withBorder
                            radius="lg"
                            shadow="sm"
                            padding="lg"
                            className="transition-all hover:shadow-md cursor-pointer"
                            onClick={() => setExpanded(expanded === ann.id ? null : ann.id)}
                        >
                            <Group justify="space-between" align="flex-start" wrap="nowrap">
                                <div className="flex-1 min-w-0">
                                    <Group gap="sm" align="center" mb={6}>
                                        <Badge variant="filled" color="primary" size="sm">
                                            {announcements.length - i}
                                        </Badge>
                                        <Text fw={700} size="lg" className="truncate">{ann.title}</Text>
                                    </Group>
                                    <Text
                                        size="sm"
                                        c="dimmed"
                                        lineClamp={expanded === ann.id ? undefined : 2}
                                    >
                                        {ann.content}
                                    </Text>
                                    <Text size="xs" c="dimmed" mt={8}>
                                        {new Date(ann.created_at).toLocaleDateString("fa-IR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </Text>
                                </div>
                            </Group>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    );
}
