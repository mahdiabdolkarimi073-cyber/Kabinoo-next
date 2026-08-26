'use client';
import { useEffect, useState } from "react";
import { TextInput, NumberInput, Button, Select, Group, Box, Table, Text, SegmentedControl, Checkbox, Badge } from "@mantine/core";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { UserType } from "@/utils/type";
import generateRandomString from "@/utils/string";

type User = {
    id: string;
    name: string;
};

type OffCode = {
    id: string;
    userId?: string;
    percent: number;
    amount: number;
    type: "PERCENT" | "FIXED";
    cashOnly: boolean;
    used: number;
    maxUsage?: number;
};

export default function OffCodeHandler() {
    const { data: users = [] } = useBackend<UserType[]>("/admin/users");
    const { data: offCodes = [], refetch } = useBackend<OffCode[]>("/admin/order/offCodes");
    const [form, setForm] = useState<Partial<OffCode>>({ type: "PERCENT", cashOnly: false });
    const [editId, setEditId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        refetch();
    }, [loading])

    function handleAdd() {
        const newOffCode: OffCode = {
            id: form.id || generateRandomString(10),
            userId: form.userId || undefined,
            percent: form.type === "PERCENT" ? (form.percent || 0) : 0,
            amount: form.type === "FIXED" ? (form.amount || 0) : 0,
            type: form.type || "PERCENT",
            cashOnly: form.cashOnly || false,
            used: 0,
            maxUsage: form.maxUsage,
        };
        setLoading(true);
        backend("/admin/order/offCodes", "POST", newOffCode)
            .finally(() => {
                setForm({ type: "PERCENT", cashOnly: false });
                setIsAdding(false);
                setLoading(false);
            })
    }

    function handleEdit(id: string) {
        const code = offCodes.find((c) => c.id === id);
        if (code) {
            setForm(code);
            setEditId(id);
        }
    }

    function handleSave() {
        if (!editId) return;
        setLoading(true);
        backend("/admin/order/offCodes/" + editId, "PUT", form)
            .finally(() => {
                setForm({ type: "PERCENT", cashOnly: false });
                setEditId(null);
                setLoading(false);
            })
    }

    function handleDelete(id: string) {
        setLoading(true);
        backend("/admin/order/offCodes/" + id, "DELETE")
            .finally(() => {
                setForm({ type: "PERCENT", cashOnly: false });
                setLoading(false);
            })
    }

    return (
        <Box mx="auto" dir="rtl">
            {(!editId && !isAdding) && (
                <>
                    <Table
                        striped
                        highlightOnHover
                        data={{
                            head: [
                                "کد تخفیف",
                                "نوع",
                                "مقدار تخفیف",
                                "نقدی فقط",
                                "تعداد مجاز",
                                "استفاده شده",
                                "کاربر",
                                "عملیات"
                            ],
                            body: offCodes.map((code) => [
                                code.id,
                                <Badge key="type" color={code.type === "FIXED" ? "teal" : "blue"} variant="light">
                                    {code.type === "FIXED" ? "نقدی" : "درصدی"}
                                </Badge>,
                                code.type === "FIXED"
                                    ? `${(code.amount || 0).toLocaleString('fa')} تومان`
                                    : `${code.percent}%`,
                                <Badge key="cash" color={code.cashOnly ? "green" : "gray"} variant="light">
                                    {code.cashOnly ? "بله" : "خیر"}
                                </Badge>,
                                code.maxUsage ?? "-",
                                code.used,
                                code.userId ? (users.find(u => u.id === code.userId)?.name || "-") : "برای همه کاربران",
                                <Group gap="xs" key={code.id}>
                                    <Button size="xs" onClick={() => handleEdit(code.id)}>ویرایش</Button>
                                    <Button size="xs" color="red" loading={loading} onClick={() => handleDelete(code.id)}>حذف</Button>
                                </Group>
                            ])
                        }}
                    />
                    <Button mt="md" onClick={() => setIsAdding(true)}>افزودن کد تخفیف جدید</Button>
                </>
            )}
            {(editId || isAdding) && (
                <>
                    <h3>{editId ? "ویرایش کد تخفیف" : "افزودن کد تخفیف"}</h3>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            editId ? handleSave() : handleAdd();
                        }}
                    >
                        <TextInput
                            disabled={!!editId}
                            label="کد تخفیف"
                            defaultValue={generateRandomString(10)}
                            value={form.id ?? generateRandomString(10)}
                            onChange={val => setForm({ ...form, id: val.target.value })}
                            required
                        />
                        <div className="mt-4">
                            <Text size="sm" fw={500} mb={4}>نوع تخفیف</Text>
                            <SegmentedControl
                                value={form.type || "PERCENT"}
                                onChange={(val) => setForm({ ...form, type: val as "PERCENT" | "FIXED" })}
                                data={[
                                    { label: "درصدی", value: "PERCENT" },
                                    { label: "نقدی (مبلغ ثابت)", value: "FIXED" },
                                ]}
                            />
                        </div>
                        {form.type === "PERCENT" ? (
                            <NumberInput
                                label="درصد تخفیف"
                                value={form.percent ?? ""}
                                onChange={val => setForm({ ...form, percent: Number(val) })}
                                required
                                min={0}
                                max={100}
                                suffix="%"
                            />
                        ) : (
                            <NumberInput
                                label="مبلغ تخفیف (تومان)"
                                value={form.amount ?? ""}
                                onChange={val => setForm({ ...form, amount: Number(val) })}
                                required
                                min={0}
                                suffix=" تومان"
                            />
                        )}
                        <NumberInput
                            label="تعداد مجاز استفاده"
                            value={form.maxUsage ?? ""}
                            onChange={val => setForm({ ...form, maxUsage: Number(val) })}
                        />
                        <Select
                            label="کاربر"
                            data={users.map(u => ({ value: u.id, label: u.name }))}
                            value={form.userId ?? ""}
                            onChange={val => setForm({ ...form, userId: val ?? "" })}
                            placeholder="انتخاب کاربر (خالی بگذارید = برای همه)"
                            clearable
                            searchable
                        />
                        <Text size="sm" c="dimmed">
                            اگر کاربری انتخاب نشود، این کد تخفیف برای همه کاربران قابل استفاده خواهد بود.
                        </Text>
                        <div className="mt-4">
                            <Checkbox
                                label="فقط برای پرداخت نقدی (آنلاین) - قابل استفاده برای پرداخت اقساطی نیست"
                                checked={form.cashOnly || false}
                                onChange={(e) => setForm({ ...form, cashOnly: e.currentTarget.checked })}
                            />
                        </div>
                        <Group mt="md">
                            <Button type="submit" loading={loading}>{editId ? "ذخیره" : "افزودن"}</Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setEditId(null);
                                    setForm({ type: "PERCENT", cashOnly: false });
                                    setIsAdding(false);
                                }}
                            >
                                انصراف
                            </Button>
                        </Group>
                    </form>
                </>
            )}
        </Box>
    )
}
