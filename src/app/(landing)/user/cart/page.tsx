'use client';;
import { backend } from "@/utils/api";
import { FullProduct } from "../../admin/products/type";
import { useState } from "react";
import { Button, TextInput, Card, Badge } from "@mantine/core";
import useBackend from "@/utils/hooks/useBackend";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/no-side/Loading";
import { products } from "@/hard-code";
import EmptyList from "@/components/EmptyList";

export default function Page() {
    const { data: cartItems = [], loading: l1, refetch } = useBackend<{ id: string, product: FullProduct, custom: any }[]>("/user/cart?_include=product,customDesign,design,custom");
    // For demo: local state for discount code and deleted items
    const [discountCode, setDiscountCode] = useState("");
    const [offCode, setOffCode] = useState<{ id: string, percent: number }>();
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    if (l1) return <Loading />

    const handleDelete = (id: string) => {
        backend("/user/cart/" + id, "DELETE").finally(refetch);
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + (item?.product?.finalPrice || item?.custom?.price || 0), 0);



    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-6">سبد خرید شما</h2>
            {cartItems.length === 0 && <EmptyList text="سبد خرید شما خالی است" />}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                {cartItems.map((item: any) => {
                    if (!item.custom && !item.product) return null;
                    item.product ||= {
                        ...(item.custom || {}),
                        finalPrice: item.custom.price,
                        offPercent: 0,
                        images: [item?.custom?.image],
                        id: item.custom.id,
                        name: item.custom.name,
                        price: item.custom.price,
                        x: 0,
                        y: 0,
                        z: 0,
                        rating: 0,
                        description: "",
                        updated_at: ""
                    } as any;
                    return (
                        (
                            <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
                                <div className="flex justify-between flex-wrap gap-5 sm:gap-2">
                                    <div>
                                        <div className="font-bold text-lg">{item.product.name}</div>
                                        <div className="text-gray-500 text-sm mb-2">{item.product.category?.name}</div>
                                        <div className="flex gap-2 items-center justify-between mb-2 w-full">
                                            <img src={item.product.images[0] || "https://placehold.co/60x60"} alt={item.product.name} className="w-16 h-16 rounded" />
                                            <div>
                                                {item.product.offPercent > 0 ? (
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-gray-400 line-through text-sm">
                                                                {item.product.price.toLocaleString('fa')} تومان
                                                            </span>
                                                            <Badge variant="outline" size="lg" color="red">
                                                                تخفیف: {item.product.offPercent}%
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-lg text-primary">
                                                                {item.product.finalPrice.toLocaleString('fa')}
                                                            </span>
                                                            <span className="text-primary text-sm">تومان</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-lg text-primary">
                                                            {item.product.price.toLocaleString('fa')}
                                                        </span>
                                                        <span className="text-primary text-sm">تومان</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 sm:flex-col justify-between'>
                                        <Button color="secondary" variant="outline" onClick={() => handleDelete(item.id)}>
                                            حذف
                                        </Button>
                                        <Link href={!!item.custom ? "/design?id=" + item?.custom?.id : '/product/' + item.product.id}>
                                            <Button>
                                                مشاهده
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        )
                    )
                })}
            </div>
            <Card shadow="sm" padding="lg" radius="md" withBorder className="mt-8">
                <div className="flex items-end justify-start gap-4 flex-wrap">
                    <div>
                        <div className="text-lg font-bold">مجموع نهایی:</div>
                        {offCode ? (
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-gray-400 line-through text-xl">
                                        {totalPrice.toLocaleString('fa')} تومان
                                    </span>
                                    <Badge color="red" variant="outline" size="lg">
                                        تخفیف: {offCode.percent}%
                                    </Badge>
                                </div>
                                <div className="text-2xl text-primary font-bold">
                                    {(totalPrice * (1 - offCode.percent / 100)).toLocaleString('fa')} تومان
                                </div>
                            </div>
                        ) : (
                            <div className="text-2xl text-primary font-bold">
                                {totalPrice.toLocaleString('fa')} تومان
                            </div>
                        )}
                    </div>

                    <TextInput
                        label="کد تخفیف"
                        placeholder="وارد کنید..."
                        value={discountCode}
                        onChange={e => setDiscountCode(e.currentTarget.value)}
                    />
                    <Button disabled={!cartItems.length || loading} color="secondary" onClick={async () => {
                        setLoading(true);
                        backend("/user/offCode?code=" + discountCode).then(({ data: offCode, message }) => {
                            if (!offCode) window.throw(message || "کد تخفیف یافت نشد")
                            setOffCode(offCode);
                        }).finally(() => {
                            setLoading(false);
                        })
                    }}>اعمال کد</Button>

                    <Button disabled={!cartItems.length} loading={loading} onClick={() => {
                        setLoading(true);
                        router.push(`/user/address?next=create-order&offCode=${offCode?.id || ""}`)
                    }}>
                        ادامه خرید و پرداخت
                    </Button>
                </div>
            </Card>
        </div>
    );
}