'use client';

import { useState } from "react";
import { Table, Button, TextInput, Textarea, Text, Select, Group, Badge } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconBell } from "@tabler/icons-react";

export default function Page() {
    const { data: notifications = [], loading, refetch } = useBackend<any[]>("/admin/notification?_include=user");
    const { data: users = [] } = useBackend<any[]>("/admin/users");

    const [search, setSearch] = useState("");

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این اطلاعیه مطمئن هستید؟");
        const res = await backend(`/admin/notification/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const openSendModal = () => {
        modals.open({
            title: "ارسال اطلاعیه به کاربر",
            size: "md",
            children: <SendNotificationModal users={users} onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const filtered = search
        ? notifications.filter((n) => n.title?.includes(search) || n.content?.includes(search))
        : notifications;

    const tableHead = ["عنوان", "محتوا", "کاربر", "خوانده شده", "تاریخ", "عملیات"];
    const tableBody = filtered.map((n) => [
        <Text key="title" fw={600}>{n.title}</Text>,
        <Text key="content" size="sm" lineClamp={2} style={{ maxWidth: 250 }}>{n.content}</Text>,
        <Badge key="user" variant="light" color="blue">
            {users.find((u: any) => u.id === n.userId)?.name || n.userId}
        </Badge>,
        n.read ? <Badge key="read" color="green" variant="light">خوانده شده</Badge> : <Badge key="read" color="yellow" variant="light">جدید</Badge>,
        new Date(n.created_at).toLocaleDateString("fa-IR"),
        <Button key="actions" size="xs" color="red" variant="light" onClick={() => handleDelete(n.id)}>حذف</Button>,
    ]);

    return (
        <div className="p-4 space-y-4" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">اطلاعیه‌های مشتریان</h2>
                <Text size="sm" c="dimmed">ارسال اطلاعیه و پیام به مشتریان انتخابی</Text>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
                <TextInput
                    placeholder="جستجو..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
                <Button leftSection={<IconBell size={16} />} onClick={openSendModal}>ارسال اطلاعیه جدید</Button>
            </div>
            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ اطلاعیه‌ای ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}

function SendNotificationModal({ users, onDone }: { users: any[]; onDone: () => void }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!title) { window.alert("عنوان را وارد کنید"); return; }
        if (!content) { window.alert("محتوا را وارد کنید"); return; }
        if (!userId) { window.alert("کاربر را انتخاب کنید"); return; }

        setLoading(true);
        const res = await backend("/admin/notification", "POST", { title, content, userId });
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
                label="عنوان اطلاعیه"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Textarea
                label="محتوا"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                required
            />
            <Button loading={loading} onClick={handleSubmit} fullWidth>ارسال اطلاعیه</Button>
        </div>
    );
}
