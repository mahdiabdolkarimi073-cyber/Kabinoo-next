import { backend } from "@/utils/api";
import { Badge, Text, Image as MantineImage, AspectRatio } from "@mantine/core";
import Link from "next/link";

type Article = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    image: string;
    keywords: string[];
    views: number;
    readMinutes: number;
    created_at: string;
    author?: { id: string; name: string };
};

export default async function Page() {
    const articles = (await backend<Article[]>("/public/article").then(e => e.data)) || [];

    return (
        <div className="container mx-auto my-6 md:my-10 px-2 sm:px-4" dir="rtl">
            <div className="text-center mb-6 md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">مقالات</h1>
                <p className="text-gray-500">جدیدترین مقالات و مطالب آموزشی</p>
            </div>

            {articles.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">هنوز مقاله‌ای منتشر نشده است</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/articles/${article.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </AspectRatio>
                            <div className="p-4 sm:p-5">
                                <Text fw={700} size="lg" lineClamp={2} className="mb-2">
                                    {article.title}
                                </Text>
                                <Text size="sm" c="dimmed" lineClamp={2} className="mb-3">
                                    {article.summary}
                                </Text>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {article.keywords?.slice(0, 3).map((kw, i) => (
                                        <Badge key={i} variant="light" size="xs" color="blue">
                                            {kw}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{article.author?.name || "ناشناس"}</span>
                                    <span>{article.readMinutes} دقیقه مطالعه</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
