'use client';

import { Button, FileInput, Paper, TextInput, Textarea, Switch, Tabs } from "@mantine/core";
import { IconBook, IconTrash, IconFileZip } from "@tabler/icons-react";
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
    zipPath: string;
    entryFile: string;
    enabled: boolean;
    sortOrder: number;
};

export default function CatalogAdminPage() {
    const { data: catalogs = [], refetch } = useBackend<Catalog[]>("/admin/catalog?_take=100");
    const [tab, setTab] = useState<string>("zip");

    // ZIP form state
    const [zipTitle, setZipTitle] = useState("");
    const [zipSlug, setZipSlug] = useState("");
    const [zipDesc, setZipDesc] = useState("");
    const [zipFile, setZipFile] = useState<File | null>(null);
    const [zipCover, setZipCover] = useState<File | null>(null);
    const [zipLoading, setZipLoading] = useState(false);

    // Image form state
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState<File | null>(null);
    const [pages, setPages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);

    const createZipCatalog = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!zipTitle || !zipSlug || !zipFile) return;
        setZipLoading(true);
        try {
            const formData = new FormData();
            formData.set("file", zipFile);
            if (zipCover) formData.set("cover", zipCover);
            formData.set("title", zipTitle);
            formData.set("slug", zipSlug);
            formData.set("description", zipDesc);

            const BK_URL = window.backendUrl || "";
            const token = window.userToken || (new URLSearchParams(document.cookie.replaceAll("; ", "&").replaceAll(";", "&")).get("token"));

            const res = await fetch(`${BK_URL}/admin/catalogZip`, {
                method: "POST",
                body: formData,
                headers: {
                    ...(token ? { "Authorization": token } : {}),
                },
            });
            const result = await res.json();
            if (!result.ok) {
                window.alert(result.message || "خطا در ساخت کاتالوگ");
                return;
            }
            setZipTitle("");
            setZipSlug("");
            setZipDesc("");
            setZipFile(null);
            setZipCover(null);
            refetch();
        } finally {
            setZipLoading(false);
        }
    };

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

    const removeCatalog = async (id: string, isZip: boolean) => {
        if (!window.confirm("این کاتالوگ حذف شود؟")) return;
        if (isZip) {
            await backend(`/admin/catalogZip/${id}`, "DELETE");
        } else {
            await backend(`/admin/catalog/${id}`, "DELETE");
        }
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
                <p className="mt-2 text-sm text-gray-600">کاتالوگ‌های دیجیتال را از فایل زیپ یا تصاویر صفحات بسازید.</p>
            </div>

            <Tabs value={tab} onChange={setTab}>
                <Tabs.List>
                    <Tabs.Tab value="zip" leftSection={<IconFileZip size={18} />}>
                        کاتالوگ زیپ (HTML/CSS)
                    </Tabs.Tab>
                    <Tabs.Tab value="images" leftSection={<IconBook size={18} />}>
                        کاتالوگ تصویری
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="zip" pt="md">
                    <Paper component="form" onSubmit={createZipCatalog} p="lg" radius="lg" withBorder className="space-y-4">
                        <div className="flex items-center gap-2"><IconFileZip size={22} /><h2 className="font-bold">افزودن کاتالوگ از فایل زیپ</h2></div>
                        <p className="text-xs leading-6 text-gray-500">فایل زیپ شامل فایل‌های HTML، CSS، تصاویر و سایر منابع کاتالوگ دیجیتال را آپلود کنید. سایت به‌صورت خودکار فایل ورودی (مثل index.html) را پیدا کرده و کاتالوگ را نمایش می‌دهد.</p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <TextInput label="عنوان کاتالوگ" value={zipTitle} onChange={e => setZipTitle(e.currentTarget.value)} required />
                            <TextInput label="نام انگلیسی در آدرس" value={zipSlug} onChange={e => setZipSlug(e.currentTarget.value)} placeholder="catalog-1405" required />
                        </div>
                        <Textarea label="توضیحات" value={zipDesc} onChange={e => setZipDesc(e.currentTarget.value)} minRows={3} />
                        <div className="grid gap-4 md:grid-cols-2">
                            <FileInput label="فایل زیپ کاتالوگ" accept=".zip" value={zipFile} onChange={setZipFile} required />
                            <FileInput label="تصویر جلد (اختیاری)" accept="image/*" value={zipCover} onChange={setZipCover} />
                        </div>
                        <Button type="submit" loading={zipLoading} leftSection={<IconFileZip size={18} />}>استخراج و انتشار کاتالوگ</Button>
                    </Paper>
                </Tabs.Panel>

                <Tabs.Panel value="images" pt="md">
                    <Paper component="form" onSubmit={createCatalog} p="lg" radius="lg" withBorder className="space-y-4">
                        <div className="flex items-center gap-2"><IconBook size={22} /><h2 className="font-bold">افزودن کاتالوگ تصویری</h2></div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <TextInput label="عنوان کاتالوگ" value={title} onChange={e => setTitle(e.currentTarget.value)} required />
                            <TextInput label="نام انگلیسی در آدرس" value={slug} onChange={e => setSlug(e.currentTarget.value)} placeholder="catalog-1405" required />
                        </div>
                        <Textarea label="توضیحات" value={description} onChange={e => setDescription(e.currentTarget.value)} minRows={3} />
                        <div className="grid gap-4 md:grid-cols-2">
                            <FileInput label="تصویر جلد" accept="image/*" value={cover} onChange={setCover} />
                            <FileInput label="تصاویر صفحات به ترتیب" accept="image/*" multiple value={pages} onChange={setPages} required />
                        </div>
                        <p className="text-xs leading-6 text-gray-500">فایل‌ها را به ترتیب صفحات انتخاب کنید. از JPG یا PNG هر صفحه استفاده کنید.</p>
                        <Button type="submit" loading={loading}>انتشار کاتالوگ</Button>
                    </Paper>
                </Tabs.Panel>
            </Tabs>

            <div className="grid gap-4 md:grid-cols-2">
                {catalogs.map(catalog => (
                    <Paper key={catalog.id} p="lg" radius="lg" withBorder>
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                                {catalog.zipPath ? <IconFileZip size={20} className="text-blue-600" /> : <IconBook size={20} className="text-gray-600" />}
                                <div>
                                    <h2 className="font-bold">{catalog.title}</h2>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {catalog.zipPath ? `کاتالوگ زیپ · ${catalog.entryFile}` : `${catalog.pages.length} صفحه`}
                                        {" · /catalog/" + catalog.slug}
                                    </p>
                                </div>
                            </div>
                            <IconTrash className="cursor-pointer text-red-600" onClick={() => removeCatalog(catalog.id, !!catalog.zipPath)} />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <Switch label={catalog.enabled ? "منتشر شده" : "پنهان"} checked={catalog.enabled} onChange={() => toggleCatalog(catalog)} />
                            <span className="text-sm text-gray-500">ترتیب {catalog.sortOrder}</span>
                        </div>
                    </Paper>
                ))}
            </div>
        </div>
    );
}
