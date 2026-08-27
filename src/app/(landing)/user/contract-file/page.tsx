'use client';

import { Table, Button, Text, Badge, Group } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { IconFileDownload } from "@tabler/icons-react";

export default function Page() {
    const { data: files = [], loading } = useBackend<any[]>("/user/contractFile");

    if (loading) return <Loading />;

    if (files.length === 0) {
        return (
            <div className="text-center py-20">
                <Text size="lg" c="dimmed">شما هیچ فایلی ندارید</Text>
            </div>
        );
    }

    const tableHead = ["عنوان", "توضیحات", "نام فایل", "تاریخ دریافت", "عملیات"];
    const tableBody = files.map((f) => [
        <Text key="title" fw={600}>{f.title}</Text>,
        <Text key="desc" size="sm" lineClamp={2} style={{ maxWidth: 250 }}>{f.description || "-"}</Text>,
        <Text key="fileName" size="sm">{f.fileName || "-"}</Text>,
        new Date(f.created_at).toLocaleDateString("fa-IR"),
        <Button
            key="download"
            size="xs"
            variant="light"
            leftSection={<IconFileDownload size={14} />}
            component="a"
            href={f.file}
            target="_blank"
        >
            دانلود / مشاهده
        </Button>,
    ]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">فایل‌های قرارداد</h2>
            <Text size="sm" c="dimmed" className="mb-4">
                فایل‌هایی که توسط مدیریت برای شما ارسال شده است
            </Text>
            <Table
                data={{ head: tableHead, body: tableBody }}
                striped
                highlightOnHover
                withColumnBorders
            />
        </div>
    );
}
