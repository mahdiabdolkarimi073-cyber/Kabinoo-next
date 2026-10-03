import { notFound } from "next/navigation";
import { backend } from "@/utils/api";
import CatalogViewer from "../CatalogViewer";
import type { PublicCatalog } from "../page";

export default async function CatalogDetailPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const response = await backend<PublicCatalog>(`/public/catalog/${encodeURIComponent(slug)}`);
    if (!response.ok || !response.data) notFound();

    return (
        <main dir="rtl" className="container mx-auto min-h-screen px-2 sm:px-4 py-6 md:py-10">
            <div className="mb-5 md:mb-6 text-center">
                <h1 className="text-3xl font-bold">{response.data.title}</h1>
                {response.data.description && <p className="mx-auto mt-2 max-w-2xl text-gray-600">{response.data.description}</p>}
            </div>
            <CatalogViewer
                title={response.data.title}
                pages={response.data.pages}
                zipPath={response.data.zipPath}
                entryFile={response.data.entryFile}
            />
        </main>
    );
}
