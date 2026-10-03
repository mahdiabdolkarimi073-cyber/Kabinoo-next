'use client';

import { useState } from "react";
import { TextInput, Button, PasswordInput } from "@mantine/core";
import { backend } from "@/utils/api";

export default function UserPassword() {
    const [current, setCurrent] = useState("");
    const [newPass, setNewPass] = useState("");
    const [repeat, setRepeat] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!current || !newPass || !repeat) {
            window.alert("لطفا همه فیلدها را پر کنید.");
            return;
        }
        if (newPass !== repeat) {
            window.alert("رمز جدید و تکرار آن یکسان نیستند.");
            return;
        }
        setLoading(true);
        const res = await backend("/user/password", "POST", { current, new: newPass });
        setLoading(false);
        if (res.ok) {
            window.alert("رمز عبور با موفقیت تغییر کرد.");
            setCurrent("");
            setNewPass("");
            setRepeat("");
        } else {
            window.alert(res.message || "خطا در تغییر رمز عبور");
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto p-4">
            <h2 className="text-xl font-bold mb-6">تغییر رمز عبور</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                <PasswordInput
                    label="تکرار رمز عبور جدید"
                    value={repeat}
                    onChange={e => setRepeat(e.currentTarget.value)}
                    required
                    autoCorrect=""
                    autoComplete=""
                    error={newPass === repeat || !newPass ? undefined:true}
                />
                <Button
                    type="submit"
                    color="primary"
                    loading={loading}
                    disabled={!current || !newPass || !repeat}
                >
                    تغییر رمز عبور
                </Button>
            </form>
        </div>
    );
}