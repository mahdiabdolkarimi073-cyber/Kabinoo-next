'use client';

import { CategoriesLabels } from "@/app/(main)/design/page";
import CustomTable from "@/components/responsive/CustomTable";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { Button, Group, Avatar, Text, Box } from "@mantine/core";
import { useState } from "react";
import DesignDetailsModal from "@/components/DesignDetailsModal";

export default function Page() {
    const { data: designs = [], refetch } = useBackend("/admin/design?_include=user");
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [selected, setSelected] = useState<any | null>(null);

    const handleDelete = async (id: string) => {
        await askConfirm("آیا میخواهید این طراحی را حذف کنید؟");
        setLoadingId(id);
        await backend("/admin/design/" + id, "DELETE");
        setLoadingId(null);
        refetch();
    };

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <Text size="xl" fw={600} mb="md">مدیریت طراحی‌های کاربران</Text>
            <CustomTable
                striped
                highlightOnHover
                data={{
                    head: [
                        "تصویر",
                        "نام طراحی",
                        "کاربر",
                        "تاریخ ثبت",
                        "قیمت",
                        "دسته‌بندی",
                        "عملیات"
                    ],
                    body: designs.map((design: any) => [
                        <Avatar src={design.image} alt={design.name} radius="md" size='xl' />,
                        <Box>
                            <Text fw={500} lineClamp={1}>{design.name}</Text>
                            <Text size="xs" c="dimmed">ID: {design.id}</Text>
                        </Box>,
                        <Text size="sm">{design.user?.name || '-'}{design.user?.phone ? ` - ${design.user.phone}` : ''}</Text>,
                        new Date(design.created_at).toLocaleDateString('fa-IR'),
                        design.price ? `${design.price.toLocaleString('fa')} تومان` : "-",
                        CategoriesLabels.find(o => o.id === design.slug)?.name || design.slug,
                        <Group gap="xs" key={design.id}>
                            <Button
                                size="xs"
                                color="primary"
                                onClick={() => setSelected(design)}
                            >
                                جزئیات
                            </Button>
                            <Button
                                size="xs"
                                color="blue"
                                component="a"
                                href={`/design?id=${design.id}`}
                            >
                                مشاهده
                            </Button>
                            <Button
                                size="xs"
                                color="red"
                                loading={loadingId === design.id}
                                onClick={() => handleDelete(design.id)}
                            >
                                حذف
                            </Button>
                        </Group>
                    ])
                }}
            />
            <DesignDetailsModal
                design={selected}
                opened={!!selected}
                onClose={() => setSelected(null)}
                user={selected?.user}
            />
        </div>
    )
}
