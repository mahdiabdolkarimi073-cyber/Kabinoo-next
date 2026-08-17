'use client';

import useUser from "@/utils/hooks/useUser";
import { useMemo, useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { backend } from "@/utils/api";
import UserPassword from "@/app/(landing)/user/password/page";
import UserAddresses from "@/app/(landing)/user/address/page";

export default function Page() {
    const user = useUser();

    const [name, setName] = useState(user?.name || "");
    const [nationalCode, setNationalCode] = useState(user?.nationalCode || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!user) return null;

    const inviteLink = useMemo(() => {
        return  `${typeof window !== "undefined" ? location.origin:""}/auth?ref=${user.refCode}&signup`;
    }, [user])
        ;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await backend("/user", "PUT", {
            ...user,
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

    const handleCopy = async () => {
        if (!inviteLink) return;
        await navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className={'grid xl:grid-cols-2 grid-cols-1 gap-3'}>
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
            <UserPassword />
            <div className="w-full max-w-md mx-auto p-4">
                <h2 className="text-xl font-bold mb-6">کیف پول</h2>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20 text-center">
                    <p className="text-gray-600 mb-2">موجودی کیف پول شما</p>
                    <p className="text-3xl font-bold text-primary mb-1">
                        {new Intl.NumberFormat('fa-IR').format(user.wallet || 0)}
                    </p>
                    <p className="text-gray-600">تومان</p>
                </div>
            </div>
            <div className={'w-full'}>
                <UserAddresses />
            </div>
            <div className={'p-4'}>
                <div className="text-center">
                    <span className="font-bold">لینک دعوت شما:</span>
                    <div className="mt-2 flex gap-2 items-center justify-center">
                        <TextInput
                            value={inviteLink}
                            readOnly
                            className="flex-1"
                            style={{ direction: "ltr" }}
                        />
                        <Button
                            color={copied ? "green" : "primary"}
                            onClick={handleCopy}
                            disabled={!inviteLink}
                            size="xs"
                        >
                            {copied ? "کپی شد!" : "کپی"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}