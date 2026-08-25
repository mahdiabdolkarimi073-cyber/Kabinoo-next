'use client';

import useUser from "@/utils/hooks/useUser";
import { useState } from "react";
import { TextInput, Button, Stack, PasswordInput } from "@mantine/core";
import { backend } from "@/utils/api";

export default function Page() {
    const user = useUser();
    const [name, setName] = useState(user?.name || "");
    const [nationalCode, setNationalCode] = useState(user?.nationalCode || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState("");
    const [newPass, setNewPass] = useState("");
    const [passLoading, setPassLoading] = useState(false);

    if (!user) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await backend("/support/profile", "PUT", {
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

    const handlePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setPassLoading(true);
        const res = await backend("/support/profile/password", "POST", {
            current,
            new: newPass,
        });
        setPassLoading(false);
        if (res.ok) {
            window.alert("رمز عبور تغییر کرد.");
            setCurrent("");
            setNewPass("");
        } else {
            window.alert(res.message || "خطا در تغییر رمز عبور");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 space-y-8">
            <div>
                <h2 className="text-xl font-bold mb-6">ویرایش اطلاعات کاربری</h2>
                <form onSubmit={handleSubmit}>
                    <Stack gap="md">
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
                    </Stack>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-6">تغییر رمز عبور</h2>
                <form onSubmit={handlePassword}>
                    <Stack gap="md">
                        <PasswordInput
                            label="رمز عبور فعلی"
                            value={current}
                            onChange={e => setCurrent(e.currentTarget.value)}
                            required
                        />
                        <PasswordInput
                            label="رمز عبور جدید"
                            value={newPass}
                            onChange={e => setNewPass(e.currentTarget.value)}
                            required
                        />
                        <Button type="submit" color="secondary" loading={passLoading}>
                            تغییر رمز عبور
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    );
}
