'use client';

import useUser from "@/utils/hooks/useUser";
import { useState } from "react";
import { TextInput, Button, PasswordInput } from "@mantine/core";
import { backend } from "@/utils/api";

export default function Page() {
    const user = useUser();
    const [name, setName] = useState(user?.name || "");
    const [nationalCode, setNationalCode] = useState(user?.nationalCode || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordLoading, setPasswordLoading] = useState(false);

    if (!user) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await backend("/contract-manager/profile", "PUT", { name, nationalCode, email });
        setLoading(false);
        if (res.ok) window.alert("اطلاعات با موفقیت ویرایش شد.");
    };

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordLoading(true);
        const res = await backend("/contract-manager/profile/password", "POST", {
            current: currentPassword,
            new: newPassword,
        });
        setPasswordLoading(false);
        if (res.ok) {
            setCurrentPassword("");
            setNewPassword("");
            window.alert("رمز عبور تغییر کرد.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 space-y-8">
            <div>
                <h2 className="text-xl font-bold mb-6">ویرایش اطلاعات کاربری</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextInput label="نام" value={name} onChange={e => setName(e.currentTarget.value)} required />
                    <TextInput label="کد ملی" value={nationalCode} onChange={e => setNationalCode(e.currentTarget.value)} />
                    <TextInput label="ایمیل" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                    <Button type="submit" color="primary" loading={loading}>ذخیره تغییرات</Button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-6">تغییر رمز عبور</h2>
                <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
                    <PasswordInput label="رمز عبور فعلی" value={currentPassword} onChange={e => setCurrentPassword(e.currentTarget.value)} required />
                    <PasswordInput label="رمز عبور جدید" value={newPassword} onChange={e => setNewPassword(e.currentTarget.value)} required />
                    <Button type="submit" color="primary" loading={passwordLoading}>تغییر رمز عبور</Button>
                </form>
            </div>
        </div>
    );
}
