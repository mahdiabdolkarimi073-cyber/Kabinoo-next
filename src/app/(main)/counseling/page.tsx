'use client'

import { backend } from "@/utils/api";
import useUser from "@/utils/hooks/useUser";
import { TextInput, Button, Textarea, Select } from "@mantine/core";
import { IconHeadphones } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const user = useUser();
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("GENERAL");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="max-w-md mx-auto my-16 p-6 rounded-xl bg-white shadow border border-gray-300" dir="rtl">
            <div className="flex flex-col items-center mb-4">
                <IconHeadphones size={64} stroke={1.5} color="#D1987B" />
                <h2 className="text-xl font-bold mt-2 text-gray-700">درخواست مشاوره</h2>
                <p className="text-center text-gray-500 mt-2 text-sm">
                    اگر هنوز مطمئن نیستی چی می‌خواهی و نمی‌دونی باید از کجا شروع کنی،
                    کارشناسان ما ایده‌پردازی و راهنمایی‌ات می‌کنن.
                </p>
            </div>
            <form action={async form => {
                setLoading(true);
                try {
                    backend("/public/counseling", "POST", {
                        name: form.get("name")?.toString() ?? "",
                        phone: form.get("phone")?.toString() || window.throw("شماره تلفن همراه را وارد کنید"),
                        type: form.get("type")?.toString() || "GENERAL",
                        description: form.get("description")?.toString() ?? "",
                    }).then(() => {
                        alert("درخواست مشاوره شما با موفقیت ثبت شد. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.");
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
                <div className="mb-3">
                    <label className="block mb-1 font-medium text-gray-700">نوع مشاوره</label>
                    <Select
                        name="type"
                        value={type}
                        onChange={(v) => setType(v || "GENERAL")}
                        data={[
                            { value: "GENERAL", label: "مشاوره عمومی" },
                            { value: "DESIGN", label: "مشاوره طراحی" },
                            { value: "PRICE", label: "مشاوره قیمت" },
                            { value: "INSTALLMENT", label: "مشاوره اقساط" },
                        ]}
                        radius="xl"
                        size="md"
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 font-medium text-gray-700">توضیحات (اختیاری)</label>
                    <Textarea
                        placeholder="درخواست خود را توضیح دهید..."
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        radius="md"
                        size="md"
                        autosize
                        minRows={2}
                    />
                </div>
                <Button loading={loading} fullWidth type='submit' radius="xl" size="md">
                    درخواست مشاوره
                </Button>
            </form>
        </div>
    )
}
