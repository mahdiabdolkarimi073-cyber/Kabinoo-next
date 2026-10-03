export type FullProduct = {
    id: string;
    name: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    x: number;
    y: number;
    z: number;
    price: number;
    colorId: number;
    images: string[];
    deliveryDays: number;
    materialId: number;
    detailId: number;
    detailIds: number[];
    categoryId: string;
    color?: {
        id: number;
        name: string;
        hex?: string;
        src?: string;
    };
    material?: {
        id: number;
        name: string;
    };
    detail?: {
        id: number;
        name: string;
    };
    category?: {
        id: string;
        name: string;
        slug: string;
        image?: string;
    };
    comments: Array<{
        id: string;
        content: string;
        rate: number;
        created_at: string;
        author: string;
        userId?: string;
        accepted: boolean
    }>;
    others: Record<string, any>
    finalPrice: number,
    offPercent: number
    rating?: number
    description?: string
    designId?: string;
}