import { backend } from "@/utils/api";
import type { FullProduct } from "@/app/(landing)/admin/products/type";
import { questions as fallbackQuestions } from "@/hard-code";

type Faq = { question: string; answer: string; enabled: boolean; sortOrder: number };
import SearchResults from "./SearchResults";

type SearchPageProps = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const params = await searchParams;
    const [response, faqResponse] = await Promise.all([
        backend<FullProduct[]>("/public/products?_include=category,color,detail,material"),
        backend<Faq[]>("/public/faq")
    ]);
    const faqQuestions = faqResponse.ok && faqResponse.data?.length
        ? faqResponse.data.filter(faq => faq.enabled).sort((a, b) => a.sortOrder - b.sortOrder).map(faq => ({ q: faq.question, answer: faq.answer }))
        : fallbackQuestions;
    return (
        <main className="container mx-auto py-6 md:py-14 px-2 sm:px-4">
            <div className="mb-8 text-center" dir="rtl">
                <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">جستجو در کابینو</h1>
                <p className="mt-3 text-gray-600">محصول یا پاسخ موردنظرتان را سریع پیدا کنید.</p>
            </div>
            <SearchResults products={response.ok && response.data ? response.data : []} questions={faqQuestions} initialQuery={params.q || ""} />
        </main>
    );
}
