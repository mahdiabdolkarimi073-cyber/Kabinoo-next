'use client';
import useBackend from "@/utils/hooks/useBackend";
import { Button, Badge, Group, ActionIcon, Text, Box, Table } from "@mantine/core";
import Link from "next/link";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { backend } from "@/utils/api";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";

type Article = {
    id: string;
    title: string;
    slug: string;
    views: number;
    readMinutes: number;
    created_at: string;
};

export default function Page() {
    const { data = [], loading, refetch } = useBackend<Article[]>("/author/article");

    const handleDelete = async (articleId: string, articleTitle: string) => {
        try {
            await askConfirm(`آیا می‌خواهید مقاله "${articleTitle}" را حذف کنید؟`);
            await backend(`/author/article/${articleId}`, "DELETE");
            refetch();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fa-IR');
    };

    if (loading) return <div>در حال بارگذاری...</div>;

    const tableData = {
        head: ['عنوان', 'بازدید', 'مدت مطالعه', 'تاریخ انتشار', 'عملیات'],
        body: data.map(article => [
            <Text key="title" fw={500} lineClamp={1}>{article.title}</Text>,
            <Badge key="views" variant="light" color="blue">{article.views?.toLocaleString("fa-IR") || 0}</Badge>,
            <Text key="read" size="sm">{article.readMinutes} دقیقه</Text>,
            <Text key="date" size="sm" c="dimmed">{formatDate(article.created_at)}</Text>,
            <Group key="actions" gap="xs">
                <Link href={`./article/${article.id}`}>
                    <ActionIcon variant="light" color="blue" size="sm">
                        <IconEdit size={16} />
                    </ActionIcon>
                </Link>
                <ActionIcon
                    variant="light"
                    color="red"
                    size="sm"
                    onClick={() => handleDelete(article.id, article.title)}
                >
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        ])
    };

    return (
        <Box>
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={600}>مدیریت مقالات</Text>
                <Link href='./article/new' style={{ textDecoration: 'none' }}>
                    <Button leftSection={<IconPlus size={16} />}>
                        ساخت مقاله جدید
                    </Button>
                </Link>
            </Group>

            <Table data={tableData} striped highlightOnHover withTableBorder />
        </Box>
    );
}
