'use client';

import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";
import { useState, useEffect } from "react";
import { TextInput, Button, Stack } from "@mantine/core";
import { backend } from "@/utils/api";

export default function Page({ params }: any) {
    const { id } = params;
    const { data: user, loading, refetch } = useBackend<any>(`/support/users/${id}`);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setNationalCode(user.nationalCode || "");
        }
    }, [user]);

    if (loading || !user) return <Loading />;

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        const res = await backend(`/support/users/${id}`, "PUT", {
            name,
            email,
            nationalCode,
        });
        setSaving(false);
        if (res.ok) {
            window.alert("اطلاعات با موفقیت ویرایش شد.");
            refetch();
        } else {
            window.alert(res.message || "خطا در ویرایش اطلاعات");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-6">ویرایش اطلاعات کاربر</h2>
            <form onSubmit={handleSave}>
                <Stack gap="md">
                    <TextInput
                        label="نام"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        required
                    />
                    <TextInput
                        label="شماره تماس"
                        value={user.phone || "-"}
                        readOnly
                        disabled
                    />
                    <TextInput
                        label="کد ملی"
                        value={nationalCode}
                        onChange={e => setNationalCode(e.currentTarget.value)}
                    />
                    <TextInput
                        label="ایمیل"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    />
                    <Button type="submit" color="primary" loading={saving}>
                        ذخیره تغییرات
                    </Button>
                </Stack>
            </form>
        </div>
    );
}
