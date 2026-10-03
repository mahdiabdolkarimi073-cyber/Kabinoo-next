'use client';

import { useState } from "react";
import { Table, Button, TextInput, Textarea, Text, Badge, Card, Group } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";

export default function Page() {
    const { data: announcements = [], loading, refetch } = useBackend<any[]>("/admin/announcement");

    const [search, setSearch] = useState("");

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این اعلان مطمئن هستید؟");
        const res = await backend(`/admin/announcement/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const openCreateModal = () => {
        modals.open({
            title: "افزودن اعلان جدید",
            size: "md",
            children: <CreateAnnouncementModal onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const openEditModal = (ann: any) => {
        modals.open({
            title: "ویرایش اعلان",
            size: "md",
            children: <EditAnnouncementModal announcement={ann} onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const filtered = search
        ? announcements.filter((a) => a.title?.includes(search) || a.content?.includes(search))
        : announcements;

    const tableHead = ["عنوان", "محتوا", "تاریخ ثبت", "عملیات"];
    const tableBody = filtered.map((ann) => [
        <Text key="title" fw={600}>{ann.title}</Text>,
        <Text key="content" size="sm" lineClamp={2} style={{ maxWidth: 300 }}>{ann.content}</Text>,
        new Date(ann.created_at).toLocaleDateString("fa-IR"),
        <Group key="actions" gap="xs">
            <Button size="xs" variant="light" onClick={() => openEditModal(ann)}>ویرایش</Button>
            <Button size="xs" color="red" variant="light" onClick={() => handleDelete(ann.id)}>حذف</Button>
        </Group>,
    ]);

    return (
        <div className="p-4 space-y-4" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">اعلان‌های مشتریان</h2>
                <Text size="sm" c="dimmed">مدیریت اعلان‌ها و اطلاعیه‌های نمایش داده شده به مشتریان</Text>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
                <TextInput
                    placeholder="جستجو در اعلان‌ها..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
                <Button onClick={openCreateModal}>افزودن اعلان</Button>
            </div>
            {filtered.length === 0 ? (
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
        const res = await backend("/admin/announcement", "POST", { title, content });
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

function EditAnnouncementModal({ announcement, onDone }: { announcement: any; onDone: () => void }) {
    const [title, setTitle] = useState(announcement.title || "");
    const [content, setContent] = useState(announcement.content || "");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!title) { window.alert("عنوان را وارد کنید"); return; }
        setLoading(true);
        const res = await backend(`/admin/announcement/${announcement.id}`, "PUT", { title, content });
        setLoading(false);
        if (res.ok) onDone();
    };

    return (
        <div className="space-y-4" dir="rtl">
            <TextInput label="عنوان" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea label="محتوا" value={content} onChange={(e) => setContent(e.target.value)} rows={4} required />
            <Button loading={loading} onClick={handleSubmit} fullWidth>ذخیره تغییرات</Button>
        </div>
    );
}
