'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Text, Card, Group, ThemeIcon } from "@mantine/core";
import { IconArticle, IconEye } from "@tabler/icons-react";

type Article = {
    id: string;
    title: string;
    views: number;
    created_at: string;
};

export default function Page() {
    const { data: articles = [] } = useBackend<Article[]>("/author/article");

    const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);

    const stats = [
        {
            label: "تعداد مقالات",
            value: articles.length,
            icon: IconArticle,
            color: "blue",
        },
        {
            label: "کل بازدیدها",
            value: totalViews,
            icon: IconEye,
            color: "green",
        },
    ];

    return (
        <div className="my-6">
            <h2 className="text-xl font-bold mb-6">داشبورد نویسنده</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

            <h3 className="text-lg font-bold mb-4">آخرین مقالات</h3>
            {articles.length === 0 ? (
                <Text c="dimmed">هنوز مقاله‌ای منتشر نکرده‌اید.</Text>
            ) : (
                <div className="space-y-2">
                    {articles.slice(0, 5).map((article) => (
                        <Card key={article.id} padding="sm" radius="md" withBorder>
                            <Group justify="space-between">
                                <Text fw={500}>{article.title}</Text>
                                <Text size="sm" c="dimmed">
                                    {new Date(article.created_at).toLocaleDateString("fa-IR")}
                                </Text>
                            </Group>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
