'use client';

import { useState } from "react";
import { Button, TextInput, Textarea, Select, Group, FileInput, Divider } from "@mantine/core";
import { backend, uploadFile } from "@/utils/api";
import generateRandomString from "@/utils/string";
import { useRouter } from "next/navigation";

const typeOptions = [
    { value: "PRICE", label: "برآورد هزینه و مشاوره" },
    { value: "MODEL", label: "درخواست مدل سه‌بعدی" }
];

const typeDescriptions: Record<"PRICE" | "MODEL", string> = {
    PRICE: "اگر نیاز به محاسبه قیمت و دریافت مشاوره برای ساخت طرح یا ایده خود دارید، این گزینه را انتخاب کنید.",
    MODEL: "در صورتی که می‌خواهید طرح یا ایده شما به صورت مدل سه‌بعدی طراحی شود، این گزینه مناسب شماست."
};

export default function Page() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState<"PRICE" | "MODEL">("PRICE");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (form: FormData) => {
        if (!window.user) window.throw("ابتدا وارد حساب کاربری خود شوید!");
        if (!title) {
            setError("لطفا عنوان درخواست را وارد نمایید");
            return;
        }
        if (title.length > 120) {
            setError("حداکثر طول مجاز برای عنوان درخواست 120 کاراکتر می باشد");
            return;
        }
        setError(null);
        setLoading(true);
        // Upload each file and collect returned strings
        const uploadedFiles: string[] = [];
        for (const file of files) {
            const fileName = `request/file-${generateRandomString()}.$EX` as const;
            const fileUrl = await uploadFile(file, fileName).catch(() => undefined);
            if (fileUrl) uploadedFiles.push(fileUrl);
        }

        // Build finalPayload object
        const finalPayload = {
            id: generateRandomString(16),
            title,
            created_at: new Date().toISOString(),
            userId: window.user.id, // Replace with actual user id
            files: uploadedFiles,
            type,
            description
        };
        backend("/user/request", "POST", finalPayload)
            .then(e => {
                if (e.ok) router.push("/user/request");
            })
            .finally(() => {
                setLoading(true)
            })
    };

    return (
        <form className="max-w-xl mx-auto my-10 p-6 rounded-lg bg-white" action={handleSubmit} dir="rtl">
            <h2 className="text-2xl font-bold mb-6">ثبت درخواست طراحی</h2>
            <Divider mb="md" />
            <TextInput
                label="عنوان درخواست"
                placeholder="مثلاً کابینت آشپزخانه"
                value={title}
                onChange={e => setTitle(e.currentTarget.value)}
                maxLength={120}
                required
                error={error}
                mb="md"
            />
            <div className="mb-2 text-gray-500 text-xs">(این عنوان برای پیگیری‌های بعدی شما استفاده خواهد شد)</div>
            <FileInput
                label="فایل‌های ضمیمه (حداکثر ۱۰ عدد)"
                placeholder="انتخاب فایل‌ها"
                multiple
                value={files}
                onChange={setFiles}
                accept="image/jpeg,image/png,image/webp,image/gif,application/pdf,application/xps"
                mb="md"
            />
            <div className="mb-2 text-xs text-red-500">فرمت‌های مجاز: jpg, jpeg, png, webp, gif, pdf, xps</div>
            <Select
                label="نوع درخواست"
                data={typeOptions}
                value={type}
                onChange={val => setType(val as "PRICE" | "MODEL")}
                required
                mb="xs"
            />
            <div className="mb-4 text-sm text-gray-700">{typeDescriptions[type]}</div>
            <Textarea
                label="توضیحات تکمیلی"
                placeholder="ابعاد (عرض، ارتفاع، عمق)، جنس مورد نظر، رنگ دلخواه و سایر توضیحات مرتبط را وارد کنید."
                value={description}
                onChange={e => setDescription(e.currentTarget.value)}
                rows={4}
                mb="md"
            />
            <Button type="submit" fullWidth loading={loading}>
                ارسال درخواست
            </Button>
        </form>
    )
}