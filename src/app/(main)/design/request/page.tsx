'use client';

import { useState, useEffect } from "react";
import { Button, TextInput, Textarea, Select, Group, FileInput, Divider } from "@mantine/core";
import { backend, uploadFile } from "@/utils/api";
import generateRandomString from "@/utils/string";
import { useRouter } from "next/navigation";

interface RequestTypeItem {
    id: string;
    label: string;
    key: string;
    description: string;
    enabled: boolean;
    sortOrder: number;
}

const defaultTypeLabels: Record<string, string> = {
    PRICE: "برآورد هزینه و مشاوره",
    MODEL: "درخواست مدل سه‌بعدی"
};

const defaultTypeDescriptions: Record<string, string> = {
    PRICE: "اگر نیاز به محاسبه قیمت و دریافت مشاوره برای ساخت طرح یا ایده خود دارید، این گزینه را انتخاب کنید.",
    MODEL: "در صورتی که می‌خواهید طرح یا ایده شما به صورت مدل سه‌بعدی طراحی شود، این گزینه مناسب شماست."
};

export default function Page() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState<string>("");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [typeOptions, setTypeOptions] = useState<{ value: string; label: string }[]>([]);
    const [typeDescriptions, setTypeDescriptions] = useState<Record<string, string>>({});
    const router = useRouter();

    useEffect(() => {
        backend<{ data?: RequestTypeItem[] } | RequestTypeItem[]>("/public/requestType?enabled=true")
            .then(res => {
                const list = Array.isArray(res) ? res : (res as any)?.data || [];
                if (list.length > 0) {
                    const sorted = [...list].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
                    setTypeOptions(sorted.map(t => ({ value: t.key, label: t.label })));
                    const descMap: Record<string, string> = {};
                    sorted.forEach(t => { descMap[t.key] = t.description || ""; });
                    setTypeDescriptions(descMap);
                    if (sorted.length > 0 && !type) setType(sorted[0].key);
                } else {
                    setTypeOptions([
                        { value: "PRICE", label: defaultTypeLabels["PRICE"] },
                        { value: "MODEL", label: defaultTypeLabels["MODEL"] },
                    ]);
                    setTypeDescriptions(defaultTypeDescriptions);
                    if (!type) setType("PRICE");
                }
            })
            .catch(() => {
                setTypeOptions([
                    { value: "PRICE", label: defaultTypeLabels["PRICE"] },
                    { value: "MODEL", label: defaultTypeLabels["MODEL"] },
                ]);
                setTypeDescriptions(defaultTypeDescriptions);
                if (!type) setType("PRICE");
            });
    }, []);

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
        if (!type) {
            setError("لطفا نوع درخواست را انتخاب کنید");
            return;
        }
        setError(null);
        setLoading(true);
        const uploadedFiles: string[] = [];
        for (const file of files) {
            const fileName = `request/file-${generateRandomString()}.$EX` as const;
            const fileUrl = await uploadFile(file, fileName).catch(() => undefined);
            if (fileUrl) uploadedFiles.push(fileUrl);
        }

        const finalPayload = {
            id: generateRandomString(16),
            title,
            created_at: new Date().toISOString(),
            userId: window.user.id,
            files: uploadedFiles,
            type,
            description
        };
        backend("/user/request", "POST", finalPayload)
            .then(e => {
                if (e.ok) router.push("/user/request");
            })
            .finally(() => {
                setLoading(false)
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
                onChange={val => setType(val || "")}
                required
                mb="xs"
            />
            {type && typeDescriptions[type] && (
                <div className="mb-4 text-sm text-gray-700">{typeDescriptions[type]}</div>
            )}
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
