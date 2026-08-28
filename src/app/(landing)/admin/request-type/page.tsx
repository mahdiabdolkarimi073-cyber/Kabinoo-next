"use client";

import { useState } from "react";
import { Table, Button, Group, TextInput, Textarea, Switch, Divider, Modal, Text } from "@mantine/core";
import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";

export default function Page() {
    const { data: types = [], loading, refetch } = useBackend<any[]>("/public/requestType");
    const [modalOpen, setModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [label, setLabel] = useState("");
    const [key, setKey] = useState("");
    const [description, setDescription] = useState("");
    const [enabled, setEnabled] = useState(true);
    const [sortOrder, setSortOrder] = useState(0);
    const [saving, setSaving] = useState(false);

    if (loading) return <Loading />;

    const openCreate = () => {
        setEditId(null);
        setLabel("");
        setKey("");
        setDescription("");
        setEnabled(true);
        setSortOrder(0);
        setModalOpen(true);
    };

    const openEdit = (t: any) => {
        setEditId(t.id);
        setLabel(t.label);
        setKey(t.key);
        setDescription(t.description || "");
        setEnabled(t.enabled);
        setSortOrder(t.sortOrder || 0);
        setModalOpen(true);
    };

    const handleSave = async () => {
        if (!label || !key) {
            window.alert("عنوان و کلید الزامی هستند");
            return;
        }
        setSaving(true);
        const payload = { label, key, description, enabled, sortOrder };
        const res = editId
            ? await backend("/admin/requestType/" + editId, "PUT", payload)
            : await backend("/admin/requestType", "POST", payload);
        setSaving(false);
        if (res.ok) {
            setModalOpen(false);
            refetch();
        } else {
            window.alert(res.message || "خطا در ذخیره‌سازی");
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("آیا از حذف این نوع درخواست مطمئن هستید؟")) return;
        const res = await backend("/admin/requestType/" + id, "DELETE");
        if (res.ok) refetch();
        else window.alert(res.message || "خطا در حذف");
    };

    const sorted = [...types].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <Group justify="space-between" mb="md">
                <h2 className="text-2xl font-bold">مدیریت انواع درخواست طراحی</h2>
                <Button onClick={openCreate}>افزودن نوع درخواست</Button>
            </Group>
            <Text c="dimmed" mb="lg" size="sm">
                انواع درخواست‌هایی که در فرم «درخواست طراحی» نمایش داده می‌شوند را مدیریت کنید. هر نوعی که اینجا اضافه کنید در فرم طراحی برای کاربران قابل انتخاب خواهد بود.
            </Text>
            {sorted.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هنوز نوع درخواستی تعریف نشده است. روی «افزودن نوع درخواست» کلیک کنید.</Text>
            ) : (
                <Table
                    striped
                    highlightOnHover
                    data={{
                        head: ["عنوان", "کلید", "توضیحات", "فعال", "ترتیب", "عملیات"],
                        body: sorted.map(t => [
                            t.label,
                            <Text size="xs" c="dimmed" span style={{ direction: "ltr", display: "inline-block" }}>{t.key}</Text>,
                            <Text size="sm" c="dimmed" lineClamp={2}>{t.description || "-"}</Text>,
                            <Switch checked={t.enabled} onChange={e => {
                                backend("/admin/requestType/" + t.id, "PUT", { enabled: e.currentTarget.checked }).then(() => refetch());
                            }} />,
                            <Text size="sm">{(t.sortOrder || 0).toLocaleString("fa")}</Text>,
                            <Group gap="xs">
                                <Button size="xs" variant="light" onClick={() => openEdit(t)}>ویرایش</Button>
                                <Button size="xs" color="red" variant="light" onClick={() => handleDelete(t.id)}>حذف</Button>
                            </Group>
                        ])
                    }}
                />
            )}

            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "ویرایش نوع درخواست" : "افزودن نوع درخواست"} size="md" centered>
                <Divider mb="md" />
                <TextInput
                    label="عنوان نوع درخواست"
                    placeholder="مثلاً برآورد هزینه و مشاوره"
                    value={label}
                    onChange={e => setLabel(e.currentTarget.value)}
                    required
                    mb="sm"
                />
                <TextInput
                    label="کلید (انگلیسی، یکتا)"
                    placeholder="مثلاً PRICE"
                    value={key}
                    onChange={e => setKey(e.currentTarget.value.toUpperCase().replace(/\s/g, "_"))}
                    required
                    mb="sm"
                    style={{ direction: "ltr" }}
                    disabled={!!editId}
                />
                <Textarea
                    label="توضیحات"
                    placeholder="توضیحات این نوع درخواست برای نمایش به کاربر"
                    value={description}
                    onChange={e => setDescription(e.currentTarget.value)}
                    rows={3}
                    mb="sm"
                />
                <TextInput
                    label="ترتیب نمایش"
                    type="number"
                    value={sortOrder}
                    onChange={e => setSortOrder(+e.currentTarget.value)}
                    mb="sm"
                />
                <Switch
                    label="فعال"
                    checked={enabled}
                    onChange={e => setEnabled(e.currentTarget.checked)}
                    mb="lg"
                />
                <Group justify="flex-end">
                    <Button variant="outline" onClick={() => setModalOpen(false)}>انصراف</Button>
                    <Button loading={saving} onClick={handleSave}>ذخیره</Button>
                </Group>
            </Modal>
        </div>
    );
}
