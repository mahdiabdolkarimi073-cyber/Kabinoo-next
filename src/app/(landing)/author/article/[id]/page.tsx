'use client';
import useBackend from "@/utils/hooks/useBackend";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, TextInput, Textarea, NumberInput, Group, Text, AspectRatio, ActionIcon, Skeleton } from "@mantine/core";
import { backend, uploadFile } from "@/utils/api";
import generateRandomString from "@/utils/string";
import { IconX } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";

type Article = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    image: string;
    keywords: string[];
    views: number;
    readMinutes: number;
    created_at: string;
};

export default function Page() {
    const { id } = useParams();
    const isN = id === "new";
    const [article, setArticle] = useState<Article | undefined>(undefined);
    const [keywordInput, setKeywordInput] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { data, loading: l5 } = !isN ? useBackend<Article>(`/author/article/${id}`) : { data: undefined, loading: false };

    useEffect(() => {
        if (!loading && !isN) setArticle(data);
    }, [data, l5]);

    if (l5) return <Loading />;

    const addKeyword = () => {
        const kw = keywordInput.trim();
        if (!kw) return;
        setArticle(prev => ({
            ...prev,
            keywords: [...(prev?.keywords || []), kw],
        }) as any);
        setKeywordInput("");
    };

    const removeKeyword = (index: number) => {
        setArticle(prev => ({
            ...prev,
            keywords: prev?.keywords?.filter((_, i) => i !== index) || [],
        }) as any);
    };

    const slugify = (text: string) => {
        return text.trim().replace(/\s+/g, "-").replace(/[^\w\u0600-\u06FF-]/g, "");
    };

    return (
        <div className="flex flex-col gap-4 my-6">
            <h2 className="text-xl font-bold">{isN ? "ساخت مقاله جدید" : "ویرایش مقاله"}</h2>

            <TextInput
                label="عنوان مقاله"
                placeholder="عنوان..."
                value={article?.title || ""}
                onChange={(e) => setArticle(prev => ({
                    ...prev,
                    title: e.target.value,
                    slug: prev?.slug || slugify(e.target.value),
                }) as any)}
            />

            <TextInput
                label="اسلاگ (نامک)"
                placeholder="article-slug"
                value={article?.slug || ""}
                onChange={(e) => setArticle(prev => ({ ...prev, slug: e.target.value }) as any)}
            />

            <Textarea
                label="توضیحات مختصر"
                placeholder="خلاصه مقاله..."
                autosize
                minRows={2}
                value={article?.summary || ""}
                onChange={(e) => setArticle(prev => ({ ...prev, summary: e.target.value }) as any)}
            />

            <Textarea
                label="متن کامل مقاله"
                placeholder="محتوای مقاله (HTML)..."
                autosize
                minRows={8}
                value={article?.content || ""}
                onChange={(e) => setArticle(prev => ({ ...prev, content: e.target.value }) as any)}
            />

            <NumberInput
                label="مدت زمان مطالعه (دقیقه)"
                placeholder="1"
                value={article?.readMinutes || 1}
                onChange={(val) => setArticle(prev => ({ ...prev, readMinutes: +val || 1 }) as any)}
            />

            <div>
                <Text size="sm" fw={500} className="mb-1">کلمات کلیدی</Text>
                <Group gap="xs" className="mb-2">
                    {article?.keywords?.map((kw, i) => (
                        <div key={i} className="flex items-center gap-1 bg-blue-50 rounded-full px-3 py-1">
                            <Text size="sm">{kw}</Text>
                            <ActionIcon size="xs" color="red" variant="subtle" onClick={() => removeKeyword(i)}>
                                <IconX size={12} />
                            </ActionIcon>
                        </div>
                    ))}
                </Group>
                <Group gap="xs">
                    <TextInput
                        placeholder="کلمه کلیدی..."
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addKeyword(); } }}
                    />
                    <Button variant="light" onClick={addKeyword}>افزودن</Button>
                </Group>
            </div>

            <div>
                <Text size="sm" fw={500} className="mb-2">تصویر مقاله</Text>
                <Group gap="md" align="flex-start">
                    {article?.image && (
                        <div className="relative">
                            <ActionIcon size="sm" color="red" className="absolute -top-2 -left-2 z-10" onClick={() => setArticle(prev => ({ ...prev, image: "" }) as any)}>
                                <IconX size={14} />
                            </ActionIcon>
                            <img
                                src={article.image}
                                alt="مقاله"
                                className="w-32 h-32 rounded-xl object-cover"
                            />
                        </div>
                    )}
                    <div className="center">
                        <input id="file" hidden type="file" onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const path = await uploadFile(file, `articles/${generateRandomString(8)}/${generateRandomString(5)}.$EX`);
                            setArticle(prev => ({ ...prev, image: path }) as any);
                        }} />
                        <div
                            className="h-32 w-32 rounded-xl bg-secondary flex items-center justify-center text-white cursor-pointer"
                            onClick={() => document.getElementById('file')?.click()}
                        >
                            انتخاب تصویر
                        </div>
                    </div>
                </Group>
            </div>

            <div className="center mt-4">
                <Button
                    loading={loading}
                    size="lg"
                    onClick={() => {
                        setLoading(true);
                        backend("/author/article", isN ? "POST" : "PUT", article).then((e) => {
                            setLoading(false);
                            if (!e.ok) return;
                            if (isN) {
                                router.push(`./${e?.data?.id}`);
                            } else {
                                setArticle(e?.data);
                                alert("ذخیره شد");
                            }
                        }).catch(() => setLoading(false));
                    }}
                >
                    ذخیره
                </Button>
            </div>
        </div>
    );
}
