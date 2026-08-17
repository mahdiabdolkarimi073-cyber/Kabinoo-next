'use client';;
import { useEffect, useState } from "react";
import { TextInput, NumberInput, Button, Select, Group, Box, Table } from "@mantine/core";
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
    max?: number;
    used: number;
    maxUsage?: number;
};


const exampleOffCodes: OffCode[] = [
    { id: "off1", userId: "u1", percent: 10, max: 100, used: 2, maxUsage: 5 },
    { id: "off2", userId: "u2", percent: 20, used: 0 },
];

export default function OffCodeHandler() {
    const { data: users = [] } = useBackend<UserType[]>("/admin/users");
    const { data: offCodes = [], refetch } = useBackend<typeof exampleOffCodes>("/admin/order/offCodes");
    const [form, setForm] = useState<Partial<OffCode>>({});
    const [editId, setEditId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        refetch();
    }, [loading])

    function handleAdd() {
        if (!form.percent) return;
        const newOffCode: OffCode = {
            id: form.id || generateRandomString(10),
            userId: form.userId,
            percent: form.percent,
            max: form.max,
            used: 0,
            maxUsage: form.maxUsage,
        };
        setLoading(true);
        backend("/admin/order/offCodes", "POST", newOffCode)
            .finally(() => {
                setForm({});
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
                setForm({});
                setEditId(null);
                setLoading(false);
            })
    }

    function handleDelete(id: string) {
        setLoading(true);
        backend("/admin/order/offCodes/" + id, "DELETE")
            .finally(() => {
                setForm({});
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
                                "درصد تخفیف",
                                "سقف مبلغ",
                                "تعداد مجاز",
                                "استفاده شده",
                                "کاربر",
                                "عملیات"
                            ],
                            body: offCodes.map((code) => [
                                code.id,
                                `${code.percent}%`,
                                code.max ?? "-",
                                code.maxUsage ?? "-",
                                code.used,
                                users.find(u => u.id === code.userId)?.name || "بدون کاربر",
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
                        <NumberInput
                            label="درصد تخفیف"
                            value={form.percent ?? ""}
                            onChange={val => setForm({ ...form, percent: Number(val) })}
                            required
                        />
                        <NumberInput
                            label="سقف مبلغ"
                            value={form.max ?? ""}
                            onChange={val => setForm({ ...form, max: Number(val) })}
                        />
                        <NumberInput
                            label="تعداد مجاز استفاده"
                            value={form.maxUsage ?? ""}
                            onChange={val => setForm({ ...form, maxUsage: Number(val) })}
                        />
                        <Select
                            label="کاربر"
                            data={users.map(u => ({ value: u.id, label: u.name }))}
                            value={form.userId ?? ""}
                            onChange={val => setForm({ ...form, userId: val! })}
                            placeholder="انتخاب کاربر"
                        />
                        <Group mt="md">
                            <Button type="submit" loading={loading}>{editId ? "ذخیره" : "افزودن"}</Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setEditId(null);
                                    setForm({});
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