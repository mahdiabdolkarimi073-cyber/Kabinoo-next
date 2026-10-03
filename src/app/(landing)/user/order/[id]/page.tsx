import { backend } from "@/utils/api";
import { Button, Badge } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PaymentButton, PaymentCancelBtn } from "./SinglePayment";
import UserAddresses from "@/app/(landing)/user/address/page";
import OrderInstallment from "./OrderInstallment";
import { parseDesignData, DesignSpecsTable } from "@/utils/designSpecs";

export default async function Page(props: any) {
    const { id } = await props.params;
    const [order, statusMap] = await Promise.all([
        backend("/user/order?id=" + id).then(e => e.data),
        backend("/public/enum?id=OrderStatus").then(e => e.data).then(e => Object.fromEntries(e.map((o: any) => [o.key, o.name])))
    ]);
    if (!order) notFound();

    const discount = order.offCode?.type === "FIXED"
        ? (order.offCode?.amount || 0)
        : (order.offCode?.percent || 0);
    const finalPrice = order.finalPrice || (discount && order.offCode?.type === "FIXED"
        ? order.totalPrice - discount
        : discount
            ? Math.round(order.totalPrice * (1 - discount / 100))
            : order.totalPrice);

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">اطلاعات سفارش</h2>
            <div className="mb-4">
                <div>شناسه سفارش: <b>{order.id}</b></div>
                <div>تاریخ ثبت: <b>{new Date(order.created_at).toLocaleDateString('fa-IR')}</b></div>
                <div>وضعیت: <Badge color="yellow">{statusMap[order.status] || order.status}</Badge></div>
                <div>کد سفارش: <b>{order.code}</b></div>
                <div>کد تخفیف: <b>{order.offCode?.id || "-"}</b></div>
                <div>
                    مبلغ کل: <span className={discount ? "text-gray-400 line-through" : "font-bold text-primary"}>
                        {order.totalPrice.toLocaleString('fa')}
                    </span>
                    {discount > 0 && (
                        <>
                            <Badge color="red" variant="outline" mx={4}>
                                {order.offCode?.type === "FIXED"
                                    ? `${discount.toLocaleString('fa')} تومان`
                                    : `${discount}%`}
                            </Badge>
                            <span className="font-bold text-primary">
                                {finalPrice.toLocaleString('fa')}
                            </span>
                        </>
                    )}
                    <span className="mx-2">تومان</span>
                </div>
            </div>
            <br />
            <UserAddresses viewonly address={order.address} />
            <br />
            <h3 className="text-lg font-bold mb-2">محصولات سفارش</h3>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3'>
                {order.products.map((item: any) => {
                    if (!item.product && !item.custom) return;

                    const isCustom = !!item.custom;
                    const designSpec = isCustom ? parseDesignData(item.custom.data) : null;
                    const displayDims = designSpec
                        ? `${designSpec.width} × ${designSpec.height} × ${designSpec.depth} سانتی‌متر`
                        : `${item.product?.x || 0} × ${item.product?.y || 0} × ${item.product?.z || 0} سانتی‌متر`;

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
                        <Link href={isCustom ? "/design?id=" + item.custom.id : `/product/${item.product.id}`} key={item.product.id || item.custom?.id} className="flex flex-col items-start gap-2 mb-4 p-3 bg-white shadow-sm rounded">
                            <div className="flex items-center justify-start gap-4 w-full">
                                <img
                                    src={item.product.images[0]}
                                    alt={item.product.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <div className="font-bold">{item.product.name}</div>
                                    <div>قیمت واحد: <span className="font-bold">{item.product.finalPrice.toLocaleString('fa')}</span> تومان</div>
                                    {item.product.offPercent > 0 && (
                                        <Badge color="red" variant="outline" size="sm" className="mr-2">
                                            تخفیف: {item.product.offPercent}%
                                        </Badge>
                                    )}
                                    <div>ابعاد: {displayDims}</div>
                                </div>
                            </div>
                            {isCustom && designSpec && (
                                <details className="w-full">
                                    <summary className="cursor-pointer text-sm text-primary font-medium py-1">مشخصات فنی طراحی</summary>
                                    <DesignSpecsTable specs={designSpec.specs} />
                                </details>
                            )}
                        </Link>
                    )
                })}
            </div>
            <OrderInstallment order={order} />
            <div className="flex gap-2 mt-8 flex-wrap">
                {order.status === "PAYMENT" && (
                    <>
                        <PaymentButton order={order} />
                        <PaymentCancelBtn id={order.id} />
                    </>
                )}
                <Button color="gray" component='a' href='.'>بازگشت</Button>
            </div>
        </div>
    );
}