import { backend } from "@/utils/api";
import { Badge, Text, Container, AspectRatio, Group, Divider } from "@mantine/core";
import { IconEye, IconClock, IconCalendar } from "@tabler/icons-react";
import Link from "next/link";

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
    author?: { id: string; name: string };
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await backend<Article>(`/public/article/bySlug?slug=${encodeURIComponent(slug)}`).then(e => e.data);

    if (!article) {
        return (
            <Container className="my-20 text-center">
                <h1 className="text-2xl font-bold text-gray-700">مقاله یافت نشد</h1>
                <Link href="/articles" className="text-primary mt-4 inline-block">
                    بازگشت به لیست مقالات
                </Link>
            </Container>
        );
    }

    const formattedDate = new Date(article.created_at).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <article className="container mx-auto my-6 md:my-10 px-2 sm:px-4 max-w-3xl" dir="rtl">
            <Link href="/articles" className="text-primary text-sm mb-4 inline-block">
                بازگشت به مقالات
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h1>

            <p className="text-gray-500 text-lg mb-6 leading-relaxed">{article.summary}</p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-5 md:mb-6">
                <Group gap="xs">
                    <IconEye size={16} />
                    <span>{article.views.toLocaleString("fa-IR")} بازدید</span>
                </Group>
                <Group gap="xs">
                    <IconClock size={16} />
                    <span>{article.readMinutes} دقیقه مطالعه</span>
                </Group>
                <Group gap="xs">
                    <IconCalendar size={16} />
                    <span>{formattedDate}</span>
                </Group>
                <Group gap="xs">
                    <span>نویسنده: {article.author?.name || "ناشناس"}</span>
                </Group>
            </div>

            <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </AspectRatio>

            {article.keywords?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                    {article.keywords.map((kw, i) => (
                        <Badge key={i} variant="light" color="blue" size="md">
                            {kw}
                        </Badge>
                    ))}
                </div>
            )}

            <Divider mb={{ base: 24, sm: 32 }} />

            <div
                className="prose prose-sm sm:prose-lg max-w-none leading-loose text-gray-800"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}
