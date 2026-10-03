'use client';
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { backend } from "@/utils/api";
import Loading from "@/no-side/Loading";

type Profile = {
    id: string;
    name: string;
    email: string;
    nationalCode: string;
    phone: string;
    joined_at: string;
    isAuthor: boolean;
};

export default function Page() {
    const { data: profile, loading } = useBackend<Profile>("/author/profile");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [saving, setSaving] = useState(false);

    if (loading || !profile) return <Loading />;

    if (name === "" && profile.name) setName(profile.name);
    if (email === "" && profile.email) setEmail(profile.email);
    if (nationalCode === "" && profile.nationalCode) setNationalCode(profile.nationalCode);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        const res = await backend("/author/profile", "PUT", { name, email, nationalCode });
        setSaving(false);
        if (res.ok) {
            window.alert("اطلاعات با موفقیت ویرایش شد.");
        } else {
            window.alert(res.message || "خطا در ویرایش اطلاعات");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 my-6">
            <h2 className="text-xl font-bold mb-6">ویرایش اطلاعات نویسنده</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput
                    label="نام"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    required
                />
                <TextInput
                    label="ایمیل"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <TextInput
                    label="کد ملی"
                    value={nationalCode}
                    onChange={(e) => setNationalCode(e.currentTarget.value)}
                />
                <TextInput
                    label="شماره تماس"
                    value={profile.phone}
                    readOnly
                    disabled
                />
                <Text size="sm" c="dimmed">
                    تاریخ عضویت: {new Date(profile.joined_at).toLocaleDateString("fa-IR")}
                </Text>
                <Button type="submit" color="primary" loading={saving}>
                    ذخیره تغییرات
                </Button>
            </form>
        </div>
    );
}
