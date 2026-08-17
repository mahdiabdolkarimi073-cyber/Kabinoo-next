'use client';

import { CategoriesLabels } from "@/app/(main)/design/page";
import CustomTable from "@/components/responsive/CustomTable";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { Table, Button, Group, Avatar } from "@mantine/core";
import { useState } from "react";

export default function Page() {
    const { data: designs = [], refetch } = useBackend("/user/design");
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        await askConfirm("آیا میخواهید این مورد را حذف کنید؟");
        setLoadingId(id);
        await backend("/user/design/" + id, "DELETE");
        setLoadingId(null);
        refetch();
    };

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">لیست طراحی‌های من</h2>
            <CustomTable
                striped
                highlightOnHover
                data={{
                    head: [
                        "تصویر",
                        "نام طراحی",
                        "تاریخ ثبت",
                        "قیمت",
                        "دسته‌بندی",
                        "عملیات"
                    ],
                    body: designs.map((design: any) => [
                        <Avatar src={design.image} alt={design.name} radius="md" size='xl' />,
                        design.name,
                        new Date(design.created_at).toLocaleDateString('fa-IR'),
                        design.price ? `${design.price.toLocaleString('fa')} تومان` : "-",
                        CategoriesLabels.find(o => o.id === design.slug)?.name || design.slug,
                        <Group gap="xs" key={design.id}>
                            <Button
                                size="xs"
                                color="primary"
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
        </div>
    )
}