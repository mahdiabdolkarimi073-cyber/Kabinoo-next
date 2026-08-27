'use client';

import { useState } from "react";
import { Table, Button, TextInput, Textarea, Text, Select, Group, Badge } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconUpload } from "@tabler/icons-react";

export default function Page() {
    const { data: files = [], loading, refetch } = useBackend<any[]>("/admin/contractFile?_include=user");
    const { data: users = [] } = useBackend<any[]>("/admin/users");

    const [search, setSearch] = useState("");

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این فایل مطمئن هستید؟");
        const res = await backend(`/admin/contractFile/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const openUploadModal = () => {
        modals.open({
            title: "ارسال فایل برای کاربر",
            size: "md",
            children: <UploadFileModal users={users} onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const filtered = search
        ? files.filter((f) => f.title?.includes(search) || f.fileName?.includes(search))
        : files;

    const tableHead = ["عنوان", "فایل", "کاربر", "تاریخ", "عملیات"];
    const tableBody = filtered.map((f) => [
        <Text key="title" fw={600}>{f.title}</Text>,
        <Text key="file" size="sm">{f.fileName || "-"}</Text>,
        <Badge key="user" variant="light" color="blue">
            {users.find((u: any) => u.id === f.userId)?.name || f.userId}
        </Badge>,
        new Date(f.created_at).toLocaleDateString("fa-IR"),
        <Group key="actions" gap="xs">
            <Button size="xs" variant="light" component="a" href={f.file} target="_blank">مشاهده</Button>
            <Button size="xs" color="red" variant="light" onClick={() => handleDelete(f.id)}>حذف</Button>
        </Group>,
    ]);

    return (
        <div className="p-4 space-y-4" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">فایل‌های قرارداد</h2>
                <Text size="sm" c="dimmed">ارسال و مدیریت فایل‌ها برای مشتریان</Text>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
                <TextInput
                    placeholder="جستجو..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
                <Button leftSection={<IconUpload size={16} />} onClick={openUploadModal}>ارسال فایل جدید</Button>
            </div>
            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ فایلی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}

function UploadFileModal({ users, onDone }: { users: any[]; onDone: () => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!title) { window.alert("عنوان را وارد کنید"); return; }
        if (!userId) { window.alert("کاربر را انتخاب کنید"); return; }
        if (!file) { window.alert("فایل را انتخاب کنید"); return; }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("userId", userId);

        const res = await backend("/admin/contractFile/upload", "POST", formData);
        setLoading(false);
        if (res.ok) onDone();
    };

    return (
        <div className="space-y-4" dir="rtl">
            <Select
                label="انتخاب کاربر"
                placeholder="کاربر را انتخاب کنید..."
                data={users.map((u) => ({ value: u.id, label: `${u.name} - ${u.phone}` }))}
                value={userId}
                onChange={setUserId}
                searchable
                required
            />
            <TextInput
                label="عنوان فایل"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Textarea
                label="توضیحات"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
            />
            <div>
                <Text size="sm" fw={500} className="mb-1">فایل</Text>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            <Button loading={loading} onClick={handleSubmit} fullWidth>ارسال فایل</Button>
        </div>
    );
}
