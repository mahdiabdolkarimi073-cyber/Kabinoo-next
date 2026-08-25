'use client';

import React, { useState } from "react";
import { Button, TextInput, Text, Card, Table, Badge, Group } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import Link from "next/link";

export default function Page({ params }: any) {
    const { id } = React.use(params) as any;
    const { data: user, loading, refetch } = useBackend<any>(`/contract-manager/users/${id}?_include=contracts`);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);

    if (loading || !user) return <Loading />;

    const startEdit = () => {
        setName(user.name || "");
        setEmail(user.email || "");
        setNationalCode(user.nationalCode || "");
        setEditing(true);
    };

    const handleSave = async () => {
        setSaving(true);
        const res = await backend(`/contract-manager/users/${id}`, "PUT", { name, email, nationalCode });
        setSaving(false);
        if (res.ok) {
            setEditing(false);
            refetch();
        }
    };

    return (
        <div className="p-4 space-y-6">
            <h2 className="text-xl font-bold">اطلاعات کاربر</h2>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                {editing ? (
                    <div className="space-y-4">
                        <TextInput label="نام" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextInput label="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextInput label="کد ملی" value={nationalCode} onChange={(e) => setNationalCode(e.target.value)} />
                        <Group gap="xs">
                            <Button loading={saving} onClick={handleSave}>ذخیره</Button>
                            <Button variant="light" onClick={() => setEditing(false)}>انصراف</Button>
                        </Group>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <Group><Text fw={600}>نام:</Text> <Text>{user.name || "-"}</Text></Group>
                        <Group><Text fw={600}>شماره تماس:</Text> <Text>{user.phone || "-"}</Text></Group>
                        <Group><Text fw={600}>ایمیل:</Text> <Text>{user.email || "-"}</Text></Group>
                        <Group><Text fw={600}>کد ملی:</Text> <Text>{user.nationalCode || "-"}</Text></Group>
                        <Group><Text fw={600}>تاریخ عضویت:</Text> <Text>{new Date(user.joined_at).toLocaleDateString("fa-IR")}</Text></Group>
                        <Button onClick={startEdit}>ویرایش اطلاعات</Button>
                    </div>
                )}
            </Card>

            <div>
                <h3 className="text-lg font-bold mb-4">قراردادهای این کاربر</h3>
                {user.contracts && user.contracts.length > 0 ? (
                    <Table
                        data={{
                            head: ["عنوان", "وضعیت", "مبلغ نهایی", "تاریخ ثبت", "جزئیات"],
                            body: user.contracts.map((c: any) => [
                                c.title,
                                <Badge key={c.id} color={c.status === "ACTIVE" ? "green" : c.status === "EXPIRED" ? "red" : "gray"}>
                                    {c.status === "ACTIVE" ? "فعال" : c.status === "EXPIRED" ? "منقضی" : c.status === "CANCELED" ? "لغو شده" : "پیش‌نویس"}
                                </Badge>,
                                c.finalPrice ? (+c.finalPrice).toLocaleString("fa-IR") + " تومان" : "-",
                                new Date(c.created_at).toLocaleDateString("fa-IR"),
                                <Link key={c.id} href={`/contract-manager/contract/${c.id}`}>
                                    <Button size="xs" variant="light">مشاهده</Button>
                                </Link>,
                            ]),
                        }}
                        striped
                        withColumnBorders
                        highlightOnHover
                    />
                ) : (
                    <Text c="dimmed">این کاربر قراردادی ندارد</Text>
                )}
            </div>
        </div>
    );
}
