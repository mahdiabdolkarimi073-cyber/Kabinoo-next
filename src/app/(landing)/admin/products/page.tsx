'use client';

import useBackend from "@/utils/hooks/useBackend";
import { Button, Badge, Group, ActionIcon, Avatar, Text, Box, Table } from "@mantine/core";
import Link from "next/link";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { backend } from "@/utils/api";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";
import { FullProduct } from "./type";

export default function Page() {
    const {
        data = [],
        loading,
        refetch
    } = useBackend<FullProduct[]>("/admin/product?_include=category,color,metarial,detail");

    const handleDelete = async (productId: string, productName: string) => {
        try {
            await askConfirm(`آیا میخواهید محصول "${productName}" را حذف کنید؟`);
            await backend(`/admin/product/${productId}`, "DELETE");
            refetch();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' ت';
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fa-IR');
    };

    if (loading) return <div>Loading...</div>;

    const tableData = {
        head: [
            'تصویر',
            'نام محصول',
            'دسته‌بندی',
            'قیمت',
            'متریال',
            'ابعاد',
            'تحویل',
            'امتیاز',
            'تاریخ ایجاد',
            'عملیات'
        ],
        body: data.map(product => [
            <Avatar key="img" src={product.images?.[0]} size="md" radius="md" alt={product.name} />,

            <Box key="name">
                <Text fw={500} lineClamp={1}>{product.name}</Text>
                <Text size="xs" c="dimmed">ID: {product.id}</Text>
            </Box>,

            <Badge key="cat" variant="light" size="sm">
                {product.category?.name || 'بدون دسته'}
            </Badge>,

            <Box key="price">
                <Text>{formatPrice(product.finalPrice || product.price)}</Text>
                {product.offPercent > 0 && (
                    <Badge color="red" size="xs">{product.offPercent}% تخفیف</Badge>
                )}
            </Box>,

            <Text key="material" size="sm">{product.material?.name || '-'}</Text>,

            <Text key="dims" size="sm" c="dimmed">
                {product.x}×{product.y}×{product.z}
            </Text>,

            <Text key="delivery" size="sm">{product.deliveryDays} روز</Text>,

            <Badge key="rating" variant="light"
                   color={(product.rating || 0) >= 4 ? 'green' : (product.rating || 0) >= 3 ? 'yellow' : 'red'}>
                {product.rating?.toFixed(1) || 'بدون امتیاز'}
            </Badge>,

            <Text key="date" size="sm" c="dimmed">
                {formatDate(product.created_at)}
            </Text>,

            <Group key="actions" gap="xs">
                <Link href={`./products/${product.id}`}>
                    <ActionIcon variant="light" color="blue" size="sm">
                        <IconEdit size={16} />
                    </ActionIcon>
                </Link>
                <ActionIcon
                    variant="light"
                    color="red"
                    size="sm"
                    onClick={() => handleDelete(product.id, product.name)}
                >
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        ])
    };

    return (
        <Box>
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={600}>مدیریت محصولات</Text>
                <Link href='./products/new' style={{ textDecoration: 'none' }}>
                    <Button leftSection={<IconPlus size={16} />}>
                        ساخت محصول جدید
                    </Button>
                </Link>
            </Group>

            <Table data={tableData} striped highlightOnHover withTableBorder />
        </Box>
    );
}