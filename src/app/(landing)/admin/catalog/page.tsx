'use client';

import { Button, FileInput, Paper, TextInput, Textarea, Switch, NumberInput } from "@mantine/core";
import { IconBook, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import useBackend from "@/utils/hooks/useBackend";
import { backend, uploadFile } from "@/utils/api";
import generateRandomString from "@/utils/string";

type Catalog = {
    id: string;
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    pages: string[];
    enabled: boolean;
    sortOrder: number;
};

export default function CatalogAdminPage() {
    const { data: catalogs = [], refetch } = useBackend<Catalog[]>("/admin/catalog?_take=100");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState<File | null>(null);
    const [pages, setPages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);

    const createCatalog = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !slug || pages.length === 0) return;
        setLoading(true);
        try {
            const coverImage = cover ? await uploadFile(cover, `catalog/${generateRandomString()}.$EX`) : "";
            const pageUrls: string[] = [];
            for (const [index, file] of pages.entries()) {
                pageUrls.push(await uploadFile(file, `catalog/${generateRandomString()}-${index}.$EX`));
            }
            await backend("/admin/catalog", "POST", { title, slug, description, coverImage, pages: pageUrls, enabled: true, sortOrder: 0 });
            setTitle("");
            setSlug("");
            setDescription("");
            setCover(null);
            setPages([]);
            refetch();
        } finally {
            setLoading(false);
        }
    };

    const removeCatalog = async (id: string) => {
        if (!window.confirm("این کاتالوگ حذف شود؟")) return;
        await backend(`/admin/catalog/${id}`, "DELETE");
        refetch();
    };

    const toggleCatalog = async (catalog: Catalog) => {
        await backend(`/admin/catalog/${catalog.id}`, "PUT", { enabled: !catalog.enabled });
        refetch();
    };

    return (
        <div dir="rtl" className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">کاتالوگ دیجیتال</h1>
                <p className="mt-2 text-sm text-gray-600">صفحات کاتالوگ را به‌صورت تصویر انتخاب کنید تا بازدیدکنندگان آن را آنلاین ورق بزنند.</p>
            </div>
            <Paper component="form" onSubmit={createCatalog} p="lg" radius="lg" withBorder className="space-y-4">
                <div className="flex items-center gap-2"><IconBook size={22} /><h2 className="font-bold">افزودن کاتالوگ</h2></div>
                <div className="grid gap-4 md:grid-cols-2">
                    <TextInput label="عنوان کاتالوگ" value={title} onChange={event => setTitle(event.currentTarget.value)} required />
                    <TextInput label="نام انگلیسی در آدرس" value={slug} onChange={event => setSlug(event.currentTarget.value)} placeholder="catalog-1405" required />
                </div>
                <Textarea label="توضیحات" value={description} onChange={event => setDescription(event.currentTarget.value)} minRows={3} />
                <div className="grid gap-4 md:grid-cols-2">
                    <FileInput label="تصویر جلد" accept="image/*" value={cover} onChange={setCover} />
                    <FileInput label="تصاویر صفحات به ترتیب" accept="image/*" multiple value={pages} onChange={setPages} required />
                </div>
                <p className="text-xs leading-6 text-gray-500">فایل‌ها را به ترتیب صفحات انتخاب کنید. فایل اجرایی exe قابل نمایش در سایت نیست؛ از JPG یا PNG هر صفحه استفاده کنید.</p>
                <Button type="submit" loading={loading}>انتشار کاتالوگ</Button>
            </Paper>
            <div className="grid gap-4 md:grid-cols-2">
                {catalogs.map(catalog => (
                    <Paper key={catalog.id} p="lg" radius="lg" withBorder>
                        <div className="flex items-start justify-between gap-3">
                            <div><h2 className="font-bold">{catalog.title}</h2><p className="mt-1 text-sm text-gray-500">{catalog.pages.length} صفحه · /catalog/{catalog.slug}</p></div>
                            <IconTrash className="cursor-pointer text-red-600" onClick={() => removeCatalog(catalog.id)} />
                        </div>
                        <div className="mt-4 flex items-center justify-between"><Switch label={catalog.enabled ? "منتشر شده" : "پنهان"} checked={catalog.enabled} onChange={() => toggleCatalog(catalog)} /><span className="text-sm text-gray-500">ترتیب {catalog.sortOrder}</span></div>
                    </Paper>
                ))}
            </div>
        </div>
    );
}
