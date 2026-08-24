'use client';;
import useBackend from "@/utils/hooks/useBackend";
import { useParams } from "next/navigation";
import { FullProduct } from "../type";
import { useEffect, useState } from "react";
import { ActionIcon, Button, MultiSelect, Select, Skeleton, Textarea, TextInput } from "@mantine/core";
import { backend, uploadFile } from "@/utils/api";
import generateRandomString from "@/utils/string";
import { IconPlus, IconX } from "@tabler/icons-react";
import { getInput } from "@/utils/ui/modalUtils/getInput";
import { useRouter } from "next/navigation";
import Loading from "@/no-side/Loading";

export default function Page(props: any) {
    const { id } = useParams();
    const isN = id === "new";
    const [product, setProduct] = useState<FullProduct>();
    const {data: designs = [], loading: l0} = useBackend<{name: string, id: string}[]>("/admin/design");
    const { data: categories = [], loading: l4 } = useBackend<FullProduct['category'][]>("/admin/product/category");
    const { data: colors = [], loading: l3 } = useBackend<FullProduct['color'][]>("/admin/product/colors");
    const { data: materials = [], loading: l2 } = useBackend<FullProduct['material'][]>("/admin/product/materials");
    const { data: details = [], loading: l1 } = useBackend<FullProduct['detail'][]>("/admin/product/details");
    const { data, loading: l5 = false } = !isN ? useBackend<FullProduct>(`/admin/product/${id}`) : {};
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isN && data) setProduct({
            ...data,
            detailIds: data.detailIds?.length ? data.detailIds : data.detailId ? [data.detailId] : []
        });
    }, [data, l5])

    if (l5 || l1 || l2 || l3 || l4 || l0) return <Loading />;

    const prop = (key: keyof FullProduct, label?: any, textarea = false) => {
        const C = textarea ? Textarea : TextInput;
        const extraProps = textarea ? { autosize: true, minRows: 3 } : {};
        return (
            <C
                key={key as string}
                label={label}
                value={product?.[key]?.toString() || ""}
                placeholder={label + "..."}
                onChange={(e) => setProduct({ ...product, [key]: label.includes("عدد") ? +e.target.value || 0 : e.target.value } as any)}
                {...extraProps}
            />
        );
    }

    const select = (key: keyof FullProduct, label: string, options: any[], optionLabel = "name") => {
        return (
            <Select
                key={key}
                searchable
                label={label}
                data={options.map(o => ({ value: o.id.toString(), label: o[optionLabel] }))}
                value={product?.[key]?.toString() || undefined}
                onChange={(e) => setProduct({ ...product, [key]: +(e || "") || e } as any)}
            />
        );
    }

    return (
        <div className='flex flex-col gap-3 my-10 relative'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {prop("name", "نام محصول")}
                <div>
                    {prop("price", "عدد قیمت محصول")}
                    {!!product?.price && <p className="p-1">{(product.price - (product.price / 100 * (product.offPercent || 0)))?.toLocaleString('fa')} تومان</p>}
                </div>
                {select("categoryId", "دسته بندی", categories)}
                {select("colorId", "رنگ محصول", colors)}
                <MultiSelect
                    label="جزئیات محصول"
                    searchable
                    clearable
                    data={details.map((o) => ({ value: o!.id.toString(), label: o!.name }))}
                    value={(product?.detailIds?.length ? product.detailIds : product?.detailId ? [product.detailId] : []).map(String)}
                    onChange={(values) => setProduct({
                        ...product,
                        detailIds: values.map(Number),
                        detailId: Number(values[0]) || product?.detailId
                    } as any)}
                />
                {select("materialId", "متریال محصول", materials)}
                {select("designId", "دیزاین مربوطه", designs)}
                {prop("x", "عدد عرض")}
                {prop("y", "عدد طول")}
                {prop("z", "عدد ارتفاع")}
                {prop("deliveryDays", "عدد تعداد روز تحویل")}
                {prop("offPercent", "عدد درصد تخفیف")}
            </div>
            {prop("description", "توضیحات",true)}
            <div className='flex flex-wrap gap-3'>
                {product?.images && product.images.map((image, index) => image === "loading" ? (
                    <Skeleton
                        key={`skeleton-${index}`}
                        width={128}
                        height={128}
                    />
                ) : (
                    <div key={`image-${index}`} className='relative!'>
                        <ActionIcon size='sm' color='red' className="absolute! top-2 left-3" onClick={() => {
                            setProduct(prev => ({
                                ...(prev || {}),
                                images: prev?.images?.filter((_, i) => i !== index)
                            }) as any);
                        }}>
                            <IconX />
                        </ActionIcon>
                        <img
                            src={image}
                            alt={product.name}
                            className='w-32 h-32 rounded-xl object-cover'
                        />
                    </div>
                ))}
                <div className="center">
                    <input id='file' hidden type='file' onChange={async e => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        setProduct(prev => ({
                            ...(prev || {}),
                            images: [...(prev?.images || []), "loading"]
                        }) as any);
                        uploadFile(file, `products/${product?.id || generateRandomString(8)}/${generateRandomString(5)}.$EX`).then(path => {
                            setProduct(prev => ({
                                ...(prev || {}),
                                images: [...(prev?.images || []), path].filter(o => o !== "loading")
                            }) as any)
                        })
                    }} />
                    <div
                        className='h-32 w-32 rounded-xl bg-secondary flex items-center justify-center text-white cursor-pointer'
                        onClick={() => {
                            if (product?.images?.includes("loading")) return;
                            document.getElementById('file')?.click();
                        }}
                    >
                        افزودن عکس
                    </div>
                </div>
            </div>
            <br />
            <div className="flex gap-3">
                <p>سایر جزئیات</p>
                <ActionIcon size='sm' color='secondary' onClick={async () => {
                    const key = await getInput("مقدار جدید");
                    setProduct({
                        ...product,
                        others: {
                            ...(product?.others || {}),
                            [key]: ""
                        }
                    } as any);
                }}>
                    <IconPlus />
                </ActionIcon>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                {Object.entries(product?.others || {}).map(([key, value]) => (
                    <div className='flex gap-3'>
                        <TextInput
                            label={key}
                            value={value}
                            placeholder={key + "..."}
                            onChange={(e) => setProduct({
                                ...product,
                                others: {
                                    ...(product?.others || {}),
                                    [key]: e.target.value
                                }
                            } as any)}
                        />
                        <ActionIcon color='red' onClick={() => {
                            setProduct({
                                ...product,
                                others: Object.fromEntries(Object.entries(product?.others || {}).filter(([k]) => k !== key))
                            } as any);
                        }}>
                            <IconX />
                        </ActionIcon>
                    </div>
                ))}
            </div>
            <br />
            <div className='center'>
                <Button loading={loading} size='lg' onClick={() => {
                    setLoading(true);
                    backend("/admin/product", isN ? "POST" : "PUT", product).then(e => {
                        setLoading(false);
                        if (!e.ok) return;
                        if (isN) {
                            router.push(`./${e?.data?.id}`)
                        } else {
                            setProduct(e?.data);
                            alert("ذخیره شد")
                        }
                    }).catch(() => setLoading(false))
                }}>
                    ذخیره
                </Button>
            </div>
        </div>
    );
}
