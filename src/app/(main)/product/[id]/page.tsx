import { backend } from "@/utils/api";
import Product from "../product";

export default async function Page(props: any) {
    const { id } = (await props?.params) || {};
    const { data: product } = await backend(`/public/products/${id}?_include=category.products`)
    
    return (
        <Product
            product={product}
            similarProducts={product?.category?.products || []}
        />
    );
}