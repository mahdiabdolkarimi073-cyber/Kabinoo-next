'use client';

import React, { useState } from "react";
import { Button, TextInput, Textarea, Select, FileInput, Badge, Group, Text, Card } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";

const ContractStatusList = [
    { value: "DRAFT", label: "پیش‌نویس", color: "gray" },
    { value: "ACTIVE", label: "فعال", color: "green" },
    { value: "EXPIRED", label: "منقضی شده", color: "red" },
    { value: "CANCELED", label: "لغو شده", color: "orange" },
];

export default function Page({ params }: any) {
    const { id } = React.use(params) as any;
    const { data: contract, loading, refetch } = useBackend<any>(`/admin/contract/${id}?_include=user`);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [expireAt, setExpireAt] = useState("");
    const [designFile, setDesignFile] = useState<File | null>(null);
    const [saving, setSaving] = useState(false);

    if (loading || !contract) return <Loading />;

    const startEdit = () => {
        setTitle(contract.title);
        setDescription(contract.description);
        setStatus(contract.status);
        setFinalPrice(contract.finalPrice ? String(contract.finalPrice) : "");
        setExpireAt(contract.expire_at ? contract.expire_at.split("T")[0] : "");
        setEditing(true);
    };

    const handleSave = async () => {
        setSaving(true);
        const data: any = {};
        if (title) data.title = title;
        if (description !== undefined) data.description = description;
        if (status) data.status = status;
        if (finalPrice) data.finalPrice = +finalPrice;
        if (expireAt) data.expire_at = expireAt;

        const res = await backend(`/admin/contract/${id}`, "PUT", data);
        setSaving(false);
        if (res.ok) {
            setEditing(false);
            refetch();
        }
    };

    const handleUploadDesign = async () => {
        if (!designFile) { window.alert("فایل طراحی را انتخاب کنید"); return; }
        setSaving(true);
        const formData = new FormData();
        formData.append("designFile", designFile);
        formData.append("id", id);
        const res = await backend(`/admin/contract/upload-design`, "POST", formData);
        setSaving(false);
        if (res.ok) {
            setDesignFile(null);
            refetch();
        }
    };

    if (editing) {
        return (
            <div className="p-4 max-w-2xl mx-auto space-y-4">
                <h2 className="text-xl font-bold mb-4">ویرایش قرارداد</h2>
                <TextInput label="عنوان" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Textarea label="توضیحات" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                <Select label="وضعیت" data={ContractStatusList} value={status} onChange={(v) => setStatus(v || "")} />
                <TextInput label="مبلغ نهایی (تومان)" type="number" value={finalPrice} onChange={(e) => setFinalPrice(e.target.value)} />
                <TextInput label="تاریخ انقضا" type="date" value={expireAt} onChange={(e) => setExpireAt(e.target.value)} />
                <Group gap="xs">
                    <Button loading={saving} onClick={handleSave}>ذخیره</Button>
                    <Button variant="light" onClick={() => setEditing(false)}>انصراف</Button>
                </Group>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <Group justify="space-between">
                <h2 className="text-xl font-bold">{contract.title}</h2>
                <Button onClick={startEdit}>ویرایش</Button>
            </Group>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="space-y-3">
                    <Group><Text fw={600}>کاربر:</Text> <Text>{contract.user?.name || "-"}</Text></Group>
                    <Group><Text fw={600}>وضعیت:</Text>
                        <Badge color={ContractStatusList.find(s => s.value === contract.status)?.color || "gray"}>
                            {ContractStatusList.find(s => s.value === contract.status)?.label || contract.status}
                        </Badge>
                    </Group>
                    <Group><Text fw={600}>مبلغ نهایی:</Text>
                        <Text>{contract.finalPrice ? (+contract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-"}</Text>
                    </Group>
                    <Group><Text fw={600}>تاریخ ثبت:</Text>
                        <Text>{new Date(contract.created_at).toLocaleDateString("fa-IR")}</Text>
                    </Group>
                    {contract.expire_at && (
                        <Group><Text fw={600}>تاریخ انقضا:</Text>
                            <Text>{new Date(contract.expire_at).toLocaleDateString("fa-IR")}</Text>
                        </Group>
                    )}
                    {contract.description && (
                        <div><Text fw={600} mb={4}>توضیحات:</Text><Text>{contract.description}</Text></div>
                    )}
                    <Group>
                        <Button variant="light" component="a" href={contract.file} target="_blank">مشاهده فایل قرارداد</Button>
                        {contract.designFile && (
                            <Button variant="light" color="teal" component="a" href={contract.designFile} target="_blank">مشاهده فایل طراحی</Button>
                        )}
                    </Group>
                </div>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <h3 className="text-lg font-bold mb-4">آپلود فایل طراحی</h3>
                <Group gap="xs" align="flex-end">
                    <FileInput
                        label="فایل طراحی"
                        placeholder="فایل را انتخاب کنید"
                        onChange={(f) => setDesignFile(f)}
                        accept=".pdf,.jpg,.png,.zip,.rar"
                        style={{ flex: 1 }}
                    />
                    <Button loading={saving} onClick={handleUploadDesign}>آپلود</Button>
                </Group>
            </Card>
        </div>
    );
}
