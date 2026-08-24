import Link from "next/link";
import { backend } from "@/utils/api";

export type PublicCatalog = {
    id: string;
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    pages: string[];
};

export default async function CatalogPage() {
    const response = await backend<PublicCatalog[]>("/public/catalog?_take=50");
    const catalogs = response.ok && response.data ? response.data : [];

    return (
        <main dir="rtl" className="container mx-auto min-h-screen px-4 py-12">
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-bold text-accent">کاتالوگ دیجیتال کابینو</p>
                <h1 className="text-3xl font-bold md:text-4xl">محصولات و ایده‌های ما</h1>
                <p className="mx-auto mt-3 max-w-2xl text-gray-600">کاتالوگ‌های کابینو را ورق بزنید و برای انتخاب فضای دلخواهتان ایده بگیرید.</p>
            </div>
            {catalogs.length ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {catalogs.map(catalog => (
                        <Link key={catalog.id} href={`/catalog/${catalog.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                {catalog.coverImage ? <img src={catalog.coverImage} alt={catalog.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-gray-400">تصویر جلد</div>}
                            </div>
                            <div className="p-5">
                                <h2 className="text-xl font-bold">{catalog.title}</h2>
                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{catalog.description}</p>
                                <span className="mt-4 inline-block font-bold text-accent">مشاهده کاتالوگ ←</span>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : <p className="rounded-2xl bg-white p-10 text-center text-gray-600">هنوز کاتالوگی منتشر نشده است.</p>}
        </main>
    );
}
