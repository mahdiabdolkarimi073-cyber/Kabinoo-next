'use client'

import { backend } from "@/utils/api";
import useUser from "@/utils/hooks/useUser";
import { TextInput, Button } from "@mantine/core";
import { IconHeadphones } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const user = useUser();
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="max-w-sm mx-auto my-16 p-6 rounded-xl bg-white shadow border border-gray-300" dir="rtl">
            <div className="flex flex-col items-center mb-4">
                <IconHeadphones size={64} stroke={1.5} color="#D1987B" />
                <h2 className="text-xl font-bold mt-2 text-gray-700">مشاوره رایگان تلفنی</h2>
                <p className="text-center text-gray-500 mt-2 text-sm">
                    اگر هنوز مطمئن نیستی چی می‌خواهی و نمی‌دونی باید از کجا شروع کنی،
                    کارشناسان ما ایده‌پردازی و راهنمایی‌ات می‌کنن.
                </p>
            </div>
            <form action={async form => {
                setLoading(true);
                try {
                    backend("/public/advice", "POST", {
                        name: form.get("name")?.toString() ?? "",
                        phone: form.get("phone")?.toString() || window.throw("شماره تلفن همراه را وارد کنید"),
                    }).then(() => {
                        alert("درخواست شما با موفقیت ثبت شد. کارشناسان ما با شما تماس خواهند گرفت.");
                    }).catch(e => {
                        alert(e?.message ?? e);
                    }).finally(() => {
                        setLoading(false);
                    })
                } catch {
                    setLoading(false);
                };
            }}>
                <div className="mb-3">
                    <label className="block mb-1 font-medium text-gray-700">نام و نام خانوادگی</label>
                    <TextInput
                        placeholder="نام و نام خانوادگی خود را وارد نمایید"
                        name="name"
                        radius="xl"
                        defaultValue={user?.name ?? ""}
                        size="md"
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 font-medium text-gray-700">تلفن همراه</label>
                    <TextInput
                        placeholder="شماره تلفن همراه خود را وارد نمایید"
                        name="phone"
                        type="tel"
                        radius="xl"
                        size="md"
                    />
                </div>
                <Button loading={loading} fullWidth type='submit' radius="xl" size="md" mt="md">
                    درخواست تماس
                </Button>
            </form>
        </div>
    )
}