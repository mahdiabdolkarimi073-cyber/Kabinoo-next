'use client';

import useUser from "@/utils/hooks/useUser";
import { useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { backend } from "@/utils/api";

export default function Page() {
    const user = useUser();
    const [name, setName] = useState(user?.name || "");
    const [nationalCode, setNationalCode] = useState(user?.nationalCode || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);

    if (!user) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await backend("/shop-manager/profile", "PUT", {
            name,
            nationalCode,
            email,
        });
        setLoading(false);
        if (res.ok) {
            window.alert("اطلاعات با موفقیت ویرایش شد.");
        } else {
            window.alert(res.message || "خطا در ویرایش اطلاعات");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-6">ویرایش اطلاعات کاربری</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput
                    label="نام"
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                    required
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
                <Button type="submit" color="primary" loading={loading}>
                    ذخیره تغییرات
                </Button>
            </form>
        </div>
    );
}
