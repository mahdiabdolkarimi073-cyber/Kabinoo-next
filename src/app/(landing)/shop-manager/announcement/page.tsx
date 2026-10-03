'use client';

import useBackend from "@/utils/hooks/useBackend";
import { Button, Text, Group, ActionIcon, Table, Modal, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";

type Announcement = {
    id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
};

export default function Page() {
    const { data: announcements = [], loading, refetch } = useBackend<Announcement[]>("/shop-manager/announcement");
    const [modalOpen, setModalOpen] = useState(false);
    const [editItem, setEditItem] = useState<Announcement | null>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [saving, setSaving] = useState(false);

    const openCreate = () => {
        setEditItem(null);
        setTitle("");
        setContent("");
        setModalOpen(true);
    };

    const openEdit = (item: Announcement) => {
        setEditItem(item);
        setTitle(item.title);
        setContent(item.content);
        setModalOpen(true);
    };

    const handleSave = async () => {
        if (!title.trim() || !content.trim()) {
            window.alert("عنوان و محتوا الزامی است");
            return;
        }
        setSaving(true);
        if (editItem) {
            const res = await backend(`/shop-manager/announcement/${editItem.id}`, "PUT", { title, content });
            if (!res.ok) { setSaving(false); return; }
        } else {
            const res = await backend("/shop-manager/announcement", "POST", { title, content });
            if (!res.ok) { setSaving(false); return; }
        }
        setSaving(false);
        setModalOpen(false);
        refetch();
    };

    const handleDelete = async (id: string, title: string) => {
        try {
            await askConfirm(`آیا میخواهید اعلان "${title}" را حذف کنید؟`);
            await backend(`/shop-manager/announcement/${id}`, "DELETE");
            refetch();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    if (loading) return <div>در حال بارگذاری...</div>;

    const tableData = {
        head: ['عنوان', 'محتوا', 'تاریخ ایجاد', 'عملیات'],
        body: announcements.map(item => [
            <Text key="title" fw={500}>{item.title}</Text>,
            <Text key="content" size="sm" lineClamp={2}>{item.content}</Text>,
            <Text key="date" size="sm" c="dimmed">{new Date(item.created_at).toLocaleDateString('fa-IR')}</Text>,
            <Group key="actions" gap="xs">
                <ActionIcon variant="light" color="blue" size="sm" onClick={() => openEdit(item)}>
                    <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon variant="light" color="red" size="sm" onClick={() => handleDelete(item.id, item.title)}>
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        ])
    };

    return (
        <div>
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={600}>اعلان به مشتریان</Text>
                <Button leftSection={<IconPlus size={16} />} onClick={openCreate}>
                    ایجاد اعلان جدید
                </Button>
            </Group>

            <Table data={tableData} striped highlightOnHover withTableBorder />

            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title={editItem ? "ویرایش اعلان" : "ایجاد اعلان جدید"} centered>
                <div className="flex flex-col gap-4">
                    <TextInput
                        label="عنوان"
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                        placeholder="عنوان اعلان..."
                    />
                    <Textarea
                        label="محتوا"
                        value={content}
                        onChange={e => setContent(e.currentTarget.value)}
                        placeholder="محتوای اعلان..."
                        autosize
                        minRows={4}
                    />
                    <Button loading={saving} onClick={handleSave}>
                        ذخیره
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
