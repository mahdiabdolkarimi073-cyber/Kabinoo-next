'use client';

import { useState, useEffect } from "react";
import { Table, Button, Select, TextInput, Textarea, FileInput, Badge, Group, Text, LoadingOverlay, Modal } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconEdit, IconEye } from "@tabler/icons-react";
import Link from "next/link";

const ContractStatusList = [
    { value: "DRAFT", label: "پیش‌نویس", color: "gray" },
    { value: "ACTIVE", label: "فعال", color: "green" },
    { value: "EXPIRED", label: "منقضی شده", color: "red" },
    { value: "CANCELED", label: "لغو شده", color: "orange" },
];

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const apiUrl = "/admin/contract?_include=user" + (status !== "ALL" ? `&status=${status}` : "");
    const { data: contracts = [], loading, refetch } = useBackend<any[]>(apiUrl);
    const [uploading, setUploading] = useState(false);
    const [editTarget, setEditTarget] = useState<any | null>(null);

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این قرارداد مطمئن هستید؟");
        const res = await backend(`/admin/contract/${id}`, "DELETE");
        if (res.ok) {
            refetch();
        }
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        const res = await backend(`/admin/contract/${id}`, "PUT", { status: newStatus });
        if (res.ok) {
            refetch();
        }
    };

    const openUploadModal = () => {
        modals.open({
            title: "آپلود قرارداد جدید",
            size: "lg",
            children: <UploadModal onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const tableHead = ["عنوان", "کاربر", "مبلغ نهایی", "وضعیت", "تاریخ ثبت", "تاریخ انقضا", "عملیات"];
    const tableBody = contracts.map((contract) => [
        <Text key="title" fw={600}>{contract.title}</Text>,
        contract.user?.name || "-",
        contract.finalPrice ? (+contract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-",
        <Badge key="status" color={ContractStatusList.find(s => s.value === contract.status)?.color || "gray"} variant="light">
            {ContractStatusList.find(s => s.value === contract.status)?.label || contract.status}
        </Badge>,
        new Date(contract.created_at).toLocaleDateString("fa-IR"),
        contract.expire_at ? new Date(contract.expire_at).toLocaleDateString("fa-IR") : "-",
        <Group key="actions" gap="xs">
            <Link href={`/admin/contract/${contract.id}`}>
                <Button size="xs" variant="light" leftSection={<IconEye size={14} />}>جزئیات</Button>
            </Link>
            <Button size="xs" variant="light" component="a" href={contract.file} target="_blank">فایل</Button>
            {contract.designFile && (
                <Button size="xs" variant="light" color="teal" component="a" href={contract.designFile} target="_blank">طراحی</Button>
            )}
            <Button size="xs" variant="light" color="blue" leftSection={<IconEdit size={14} />} onClick={() => setEditTarget(contract)}>ویرایش</Button>
            <Select
                size="xs"
                w={120}
                data={ContractStatusList}
                value={contract.status}
                onChange={(v) => v && handleStatusChange(contract.id, v)}
            />
            <Button size="xs" color="red" variant="light" onClick={() => handleDelete(contract.id)}>حذف</Button>
        </Group>,
    ]);

    return (
        <div className="relative">
            <LoadingOverlay visible={uploading} />
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-end justify-between">
                <div>
                    <Select
                        label="وضعیت قرارداد"
                        data={[{ label: "همه", value: "ALL" }, ...ContractStatusList]}
                        value={status}
                        onChange={v => setStatus(v || "ALL")}
                        style={{ minWidth: 150 }}
                    />
                </div>
                <Button onClick={openUploadModal}>آپلود قرارداد جدید</Button>
            </div>
            {contracts.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ قراردادی ثبت نشده است</Text>
            ) : (
                <Table
                    data={{ head: tableHead, body: tableBody }}
                    striped
                    highlightOnHover
                    withColumnBorders
                />
            )}

            <EditContractModal
                contract={editTarget}
                onClose={() => setEditTarget(null)}
                onSaved={() => { setEditTarget(null); refetch(); }}
            />
        </div>
    );
}

function EditContractModal({ contract, onClose, onSaved }: { contract: any | null; onClose: () => void; onSaved: () => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [expireAt, setExpireAt] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (contract) {
            setTitle(contract.title || "");
            setDescription(contract.description || "");
            setStatus(contract.status || "DRAFT");
            setExpireAt(contract.expire_at ? new Date(contract.expire_at).toISOString().split("T")[0] : "");
            setFinalPrice(contract.finalPrice ? String(contract.finalPrice) : "");
        }
    }, [contract]);

    if (!contract) return null;

    const handleSave = async () => {
        if (!title.trim()) { window.alert("عنوان قرارداد را وارد کنید"); return; }
        setSaving(true);
        const body: any = { title, description, status };
        if (expireAt) body.expire_at = expireAt;
        if (finalPrice) body.finalPrice = +finalPrice;
        const res = await backend(`/admin/contract/${contract.id}`, "PUT", body);
        setSaving(false);
        if (res.ok) onSaved();
    };

    return (
        <Modal opened={!!contract} onClose={onClose} title="ویرایش قرارداد" centered size="lg">
            <div className="space-y-4" dir="rtl">
                <TextInput label="عنوان قرارداد" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <Textarea
                    label="توضیحات (تغییرات در طراحی)"
                    description="توضیحات و تغییرات مورد نظر برای طراحی را اینجا وارد کنید"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                />
                <Select
                    label="وضعیت"
                    data={ContractStatusList}
                    value={status}
                    onChange={(v) => setStatus(v || "DRAFT")}
                />
                <TextInput label="مبلغ نهایی (تومان)" type="number" value={finalPrice} onChange={(e) => setFinalPrice(e.target.value)} />
                <TextInput label="تاریخ انقضا (اختیاری)" type="date" value={expireAt} onChange={(e) => setExpireAt(e.target.value)} />
                <Group justify="flex-end">
                    <Button variant="light" onClick={onClose}>انصراف</Button>
                    <Button loading={saving} onClick={handleSave}>ذخیره تغییرات</Button>
                </Group>
            </div>
        </Modal>
    );
}

function UploadModal({ onDone }: { onDone: () => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState("");
    const [expireAt, setExpireAt] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [designFile, setDesignFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const { data: users = [] } = useBackend<any[]>("/admin/users");

    const handleSubmit = async () => {
        if (!title) { window.alert("عنوان قرارداد را وارد کنید"); return; }
        if (!file) { window.alert("فایل قرارداد را انتخاب کنید"); return; }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            if (designFile) formData.append("designFile", designFile);
            formData.append("title", title);
            formData.append("description", description);
            if (userId) formData.append("userId", userId);
            if (expireAt) formData.append("expire_at", expireAt);
            if (finalPrice) formData.append("finalPrice", finalPrice);

            const res = await backend("/admin/contract/upload", "POST", formData);
            if (!res.ok) {
                setLoading(false);
                return;
            }
            onDone();
        } catch (e) {
            window.alert("خطا در آپلود قرارداد");
        }
        setLoading(false);
    };

    return (
        <div className="space-y-4" dir="rtl">
            <TextInput
                label="عنوان قرارداد"
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
            <Select
                label="کاربر (اختیاری)"
                data={users.map((u: any) => ({ value: u.id, label: u.name + " - " + (u.phone || "") }))}
                value={userId}
                onChange={(value) => setUserId(value || "")}
                searchable
                clearable
            />
            <TextInput
                label="مبلغ نهایی (تومان)"
                type="number"
                value={finalPrice}
                onChange={(e) => setFinalPrice(e.target.value)}
            />
            <TextInput
                label="تاریخ انقضا (اختیاری)"
                type="date"
                value={expireAt}
                onChange={(e) => setExpireAt(e.target.value)}
            />
            <FileInput
                label="فایل قرارداد"
                placeholder="فایل را انتخاب کنید"
                onChange={(f) => setFile(f)}
                accept=".pdf,.doc,.docx,.jpg,.png"
                required
            />
            <FileInput
                label="فایل طراحی (اختیاری)"
                placeholder="فایل طراحی را انتخاب کنید"
                onChange={(f) => setDesignFile(f)}
                accept=".pdf,.jpg,.png,.zip,.rar"
            />
            <Button loading={loading} onClick={handleSubmit} fullWidth>
                ثبت قرارداد
            </Button>
        </div>
    );
}
