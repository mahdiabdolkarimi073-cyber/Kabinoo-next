'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { Table, TextInput, Button, Badge, Group, ActionIcon, Text, Modal, Stack } from "@mantine/core";
import Link from "next/link";
import { useDebouncedState } from "@mantine/hooks";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconTrash, IconEye, IconPlus } from "@tabler/icons-react";

type Author = {
    id: string;
    name: string;
    email: string;
    nationalCode: string;
    phone: string;
    joined_at: string;
    isAdmin: boolean;
    isAuthor: boolean;
};

export default function Page() {
    const [filters, setFilters] = useDebouncedState<Record<string, string>>({
        name: "",
        _contains: "name",
    }, 500);

    const { data: authors = null, loading } = useBackend<Author[]>(
        "/admin/author?" + new URLSearchParams(
            Object.fromEntries(
                Object.entries(filters).filter(([, v]) => v)
            )
        ).toString()
    );

    const [createOpen, setCreateOpen] = useState(false);
    const [creating, setCreating] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", password: "", email: "", nationalCode: "" });

    const handleCreateAuthor = async () => {
        if (!form.name.trim()) return window.alert("نام را وارد کنید");
        if (!form.phone.trim()) return window.alert("شماره تلفن را وارد کنید");
        if (!form.password.trim()) return window.alert("رمزعبور را وارد کنید");
        setCreating(true);
        const res = await backend("/admin/author", "POST", {
            name: form.name,
            phone: form.phone,
            password: form.password,
            email: form.email || undefined,
            nationalCode: form.nationalCode || undefined,
        });
        setCreating(false);
        if (!res.ok) return;
        setCreateOpen(false);
        setForm({ name: "", phone: "", password: "", email: "", nationalCode: "" });
        window.location.reload();
    };

    const handleRemoveAuthor = async (authorId: string, authorName: string) => {
        try {
            await askConfirm(`آیا می‌خواهید دسترسی نویسندگی "${authorName}" را بگیرید؟`);
            await backend(`/admin/author/${authorId}`, "PUT", { isAuthor: false });
            window.location.reload();
        } catch (error) {
            console.error('Failed:', error);
        }
    };

    if (authors === null) return <Loading />;

    const tableHead = [
        "نام",
        "شماره تماس",
        "ایمیل",
        "کد ملی",
        "تاریخ عضویت",
        "عملیات",
    ];

    const tableBody = authors.map((author: Author) => [
        <Group gap="xs">
            <Text fw={500}>{author.name}</Text>
            {author.isAdmin && <Badge size="xs" color="red">ادمین</Badge>}
        </Group>,
        author.phone || "-",
        author.email || "-",
        author.nationalCode || "-",
        author.joined_at ? new Date(author.joined_at).toLocaleDateString("fa-IR") : "-",
        <Group gap="xs">
            <Link href={`/admin/user/${author.id}`}>
                <ActionIcon variant="light" color="blue" size="sm">
                    <IconEye size={16} />
                </ActionIcon>
            </Link>
            <ActionIcon
                variant="light"
                color="red"
                size="sm"
                onClick={() => handleRemoveAuthor(author.id, author.name)}
            >
                <IconTrash size={16} />
            </ActionIcon>
        </Group>,
    ]);

    return (
        <div className="w-full p-4">
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={600}>مدیریت نویسندگان</Text>
                <Button
                    leftSection={<IconPlus size={18} />}
                    onClick={() => setCreateOpen(true)}
                >
                    افزودن نویسنده
                </Button>
            </Group>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <TextInput
                    label="نام"
                    placeholder="جستجو بر اساس نام..."
                    defaultValue={filters.name}
                    onChange={(e) => setFilters((f) => ({ ...f, name: e.target.value }))}
                />
            </div>
            <div className="relative">
                {loading && (
                    <div className="absolute left-0 top-0 w-full h-full backdrop-blur-lg">
                        <Loading />
                    </div>
                )}
                <Table
                    data={{
                        head: tableHead,
                        body: tableBody,
                    }}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            </div>

            <Modal
                opened={createOpen}
                onClose={() => setCreateOpen(false)}
                title="افزودن نویسنده جدید"
                centered
            >
                <Stack gap="sm">
                    <TextInput
                        label="نام و نام خانوادگی"
                        placeholder="نام نویسنده"
                        required
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                    <TextInput
                        label="شماره تلفن"
                        placeholder="مثال: 09123456789"
                        required
                        value={form.phone}
                        onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                    <TextInput
                        label="رمزعبور"
                        placeholder="رمزعبور نویسنده"
                        required
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
                    />
                    <TextInput
                        label="ایمیل"
                        placeholder="ایمیل (اختیاری)"
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                    <TextInput
                        label="کد ملی"
                        placeholder="کد ملی (اختیاری)"
                        value={form.nationalCode}
                        onChange={(e) => setForm(f => ({ ...f, nationalCode: e.target.value }))}
                    />
                    <Button
                        loading={creating}
                        onClick={handleCreateAuthor}
                        color="green"
                        fullWidth
                    >
                        ایجاد نویسنده
                    </Button>
                </Stack>
            </Modal>
        </div>
    );
}
