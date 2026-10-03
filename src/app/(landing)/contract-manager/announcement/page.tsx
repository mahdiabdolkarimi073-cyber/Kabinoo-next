'use client';

import { useState } from "react";
import { Table, Button, TextInput, Textarea, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";

export default function Page() {
    const { data: announcements = [], loading, refetch } = useBackend<any[]>("/contract-manager/announcement");

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این اعلان مطمئن هستید؟");
        const res = await backend(`/contract-manager/announcement/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const openCreateModal = () => {
        modals.open({
            title: "افزودن اعلان جدید",
            size: "md",
            children: <CreateAnnouncementModal onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const tableHead = ["عنوان", "محتوا", "تاریخ ثبت", "عملیات"];
    const tableBody = announcements.map((ann) => [
        ann.title,
        <Text key="content" size="sm" lineClamp={2}>{ann.content}</Text>,
        new Date(ann.created_at).toLocaleDateString("fa-IR"),
        <Button key="del" size="xs" color="red" variant="light" onClick={() => handleDelete(ann.id)}>حذف</Button>,
    ]);

    return (
        <div className="p-4">
            <div className="mb-4 flex justify-end">
                <Button onClick={openCreateModal}>افزودن اعلان</Button>
            </div>
            {announcements.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ اعلانی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}

function CreateAnnouncementModal({ onDone }: { onDone: () => void }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!title) { window.alert("عنوان را وارد کنید"); return; }
        if (!content) { window.alert("محتوا را وارد کنید"); return; }
        setLoading(true);
        const res = await backend("/contract-manager/announcement", "POST", { title, content });
        setLoading(false);
        if (res.ok) onDone();
    };

    return (
        <div className="space-y-4" dir="rtl">
            <TextInput label="عنوان" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea label="محتوا" value={content} onChange={(e) => setContent(e.target.value)} rows={4} required />
            <Button loading={loading} onClick={handleSubmit} fullWidth>ثبت اعلان</Button>
        </div>
    );
}
