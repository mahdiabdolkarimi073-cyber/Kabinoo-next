'use client';

import { useState } from "react";
import { Table, Button, Select, TextInput, Textarea, FileInput, Badge, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";

const ContractStatusList = [
    { value: "DRAFT", label: "پیش‌نویس", color: "gray" },
    { value: "ACTIVE", label: "فعال", color: "green" },
    { value: "EXPIRED", label: "منقضی شده", color: "red" },
    { value: "CANCELED", label: "لغو شده", color: "orange" },
];

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const apiUrl = "/contract-manager/contract?_include=user" + (status !== "ALL" ? `&status=${status}` : "");
    const { data: contracts = [], loading, refetch } = useBackend<any[]>(apiUrl);

    if (loading) return <Loading />;

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این قرارداد مطمئن هستید؟");
        const res = await backend(`/contract-manager/contract/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        const res = await backend(`/contract-manager/contract/${id}`, "PUT", { status: newStatus });
        if (res.ok) refetch();
    };

    const openCreateModal = () => {
        modals.open({
            title: "افزودن قرارداد جدید",
            size: "lg",
            children: <CreateContractModal onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const tableHead = ["عنوان", "کاربر", "مبلغ نهایی", "وضعیت", "تاریخ ثبت", "تاریخ انقضا", "عملیات"];
    const tableBody = contracts.map((contract) => [
        contract.title,
        contract.user?.name || "-",
        contract.finalPrice ? (+contract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-",
        <Badge key="status" color={ContractStatusList.find(s => s.value === contract.status)?.color || "gray"} variant="light">
            {ContractStatusList.find(s => s.value === contract.status)?.label || contract.status}
        </Badge>,
        new Date(contract.created_at).toLocaleDateString("fa-IR"),
        contract.expire_at ? new Date(contract.expire_at).toLocaleDateString("fa-IR") : "-",
        <Group key="actions" gap="xs">
            <Button size="xs" variant="light" component="a" href={contract.file} target="_blank">فایل</Button>
            {contract.designFile && (
                <Button size="xs" variant="light" color="teal" component="a" href={contract.designFile} target="_blank">طراحی</Button>
            )}
            <Button size="xs" variant="light" color="blue" component="a" href={`/contract-manager/contract/${contract.id}`}>جزئیات</Button>
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
        <div className="p-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-end justify-between">
                <Select
                    label="وضعیت قرارداد"
                    data={[{ label: "همه", value: "ALL" }, ...ContractStatusList]}
                    value={status}
                    onChange={v => setStatus(v || "ALL")}
                    style={{ minWidth: 150 }}
                />
                <Button onClick={openCreateModal}>افزودن قرارداد جدید</Button>
            </div>
            {contracts.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ قراردادی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}

function CreateContractModal({ onDone }: { onDone: () => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState("");
    const [expireAt, setExpireAt] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [designFile, setDesignFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const { data: users = [] } = useBackend<any[]>("/contract-manager/users");

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

            const res = await backend("/contract-manager/contract/upload", "POST", formData);
            if (!res.ok) { setLoading(false); return; }
            onDone();
        } catch {
            window.alert("خطا در آپلود قرارداد");
        }
        setLoading(false);
    };

    return (
        <div className="space-y-4" dir="rtl">
            <TextInput label="عنوان قرارداد" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea label="توضیحات" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
            <Select
                label="کاربر (اختیاری)"
                data={users.map((u: any) => ({ value: u.id, label: u.name + " - " + (u.phone || "") }))}
                value={userId}
                onChange={(value) => setUserId(value || "")}
                searchable
                clearable
            />
            <TextInput label="مبلغ نهایی (تومان)" type="number" value={finalPrice} onChange={(e) => setFinalPrice(e.target.value)} />
            <TextInput label="تاریخ انقضا (اختیاری)" type="date" value={expireAt} onChange={(e) => setExpireAt(e.target.value)} />
            <FileInput label="فایل قرارداد" placeholder="فایل را انتخاب کنید" onChange={(f) => setFile(f)} accept=".pdf,.doc,.docx,.jpg,.png" required />
            <FileInput label="فایل طراحی (اختیاری)" placeholder="فایل طراحی را انتخاب کنید" onChange={(f) => setDesignFile(f)} accept=".pdf,.jpg,.png,.zip,.rar" />
            <Button loading={loading} onClick={handleSubmit} fullWidth>ثبت قرارداد</Button>
        </div>
    );
}
