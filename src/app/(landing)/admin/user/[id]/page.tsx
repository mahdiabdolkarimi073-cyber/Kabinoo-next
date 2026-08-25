'use client';

import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";
import { Table, Badge, Button, ActionIcon } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { backend } from "@/utils/api";
import useUser from "@/utils/hooks/useUser";

type FullUser = {
    id: string
    name: string
    nationalCode: string
    phone: string
    email: string
    joined_at: string
    isAdmin: boolean
    isShopManager: boolean
    comments: Array<{
        id: string
        content: string
        rate: number
        accepted: boolean
        created_at: string
        author: string
        userId: string
        productId: string
    }>
    orders: Array<{
        id: string
        created_at: string
        userId: string
        totalPrice: number
        finalPrice: number
        status: string
        code: number
        offCodeId?: string
    }>
    offCodes: Array<{
        id: string
        userId: string
        percent: number
        used: number
        maxUsage: number
    }>
    addresses: Array<{
        id: string
        userId: string
        address: string
        receiver: string
        state: string
        city: string
        phone: string
        phone2: string,
        postal?: string
    }>
    cartItems: Array<any>
    designs: Array<{
        id: string
        created_at: string
        slug: string
        price: number
        image: string
        name: string
        data: any
        userId: string
    }>
    designRequests: Array<{
        id: string
        title: string
        created_at: string
        userId: string
        status: string
        files: Array<string>
        type: string
        description: string
        answer: string
    }>
}

const STATUS_BADGE: Record<string, { color: string; label: string }> = {
    PENDING: { color: "yellow", label: "درحال اماده‌سازی" },
    PAYMENT: { color: "primary", label: "درانتظار پرداخت" },
    CANCELED: { color: "red", label: "لغو شده" },
    COMPLETED: { color: "secondary", label: "تکمیل شده" },
    ACCEPTED: { color: "primary", label: "تایید شده" },
    REJECTED: { color: "red", label: "رد شده" },
    WAITING: { color: "yellow", label: "در انتظار بررسی" },
};

function toman(n: number) {
    return n?.toLocaleString("fa-IR") + " تومان";
}

export default function Page({ params }: any) {
    const { id } = React.use(params) as any;
    const self = useUser();
    const { data: user, loading, refetch } = useBackend<FullUser>(`/admin/users/${id}`);
    if (loading || !user) return <Loading />;

    // User Info
    const userInfo = [
        { label: "نام", value: user.name },
        { label: "ایمیل", value: user.email },
        { label: "شماره تماس", value: user.phone },
        { label: "کد ملی", value: user.nationalCode },
        { label: "تاریخ عضویت", value: new Date(user.joined_at).toLocaleDateString("fa-IR") },
        {
            label: "ادمین", value: (
                <div className='flex items-center gap-2'>
                    {user.isAdmin ? <Badge color="primary">بله</Badge> : <Badge color="secondary">خیر</Badge>}
                    <ActionIcon disabled={self?.id === user.id} size='sm' color={user.isAdmin ? "red" : undefined} onClick={async () => {
                        if (user.isAdmin) await askConfirm("آیا میخواهید ادمینی این کاربر را بگیرید؟")
                        else await askConfirm("آیا میخواهید این کاربر را ادمین کنید؟")

                        await backend("/admin/users/"+id, "PUT", {
                            isAdmin: !user.isAdmin
                        })
                            .finally(()=>{
                                refetch();
                            })
                    }}>
                        {user.isAdmin ? <IconMinus size={15} />:<IconPlus size={15} />}
                    </ActionIcon>
                </div>
            )
        },
        {
            label: "مدیر فروشگاه", value: (
                <div className='flex items-center gap-2'>
                    {user.isShopManager ? <Badge color="teal">بله</Badge> : <Badge color="secondary">خیر</Badge>}
                    <ActionIcon size='sm' color={user.isShopManager ? "red" : "teal"} onClick={async () => {
                        if (user.isShopManager) await askConfirm("آیا میخواهید مدیریت فروشگاه این کاربر را بگیرید؟")
                        else await askConfirm("آیا میخواهید این کاربر را مدیر فروشگاه کنید؟")

                        await backend("/admin/users/"+id, "PUT", {
                            isShopManager: !user.isShopManager
                        })
                            .finally(()=>{
                                refetch();
                            })
                    }}>
                        {user.isShopManager ? <IconMinus size={15} />:<IconPlus size={15} />}
                    </ActionIcon>
                </div>
            )
        },
    ];

    // Orders Table
    const ordersBody = user.orders.map(order => [
        <Badge color={STATUS_BADGE[order.status]?.color || "gray"}>
            {STATUS_BADGE[order.status]?.label || order.status}
        </Badge>,
        order.code,
        new Date(order.created_at).toLocaleString("fa-IR"),
        toman(order.totalPrice),
        <span className="font-bold text-green-700">{toman(order.finalPrice)}</span>,
        order.offCodeId ? <Badge color="secondary">{order.offCodeId}</Badge> : "-",
        <Link href={`/admin/order/${order.id}`}>
            <Button size="xs" color="primary">مشاهده</Button>
        </Link>
    ]);

    // Comments Table
    const commentsBody = user.comments.map(c => [
        <Badge color={c.accepted ? "primary" : "red"}>
            {c.accepted ? "تایید شده" : "رد شده"}
        </Badge>,
        c.rate,
        c.content,
        new Date(c.created_at).toLocaleString("fa-IR"),
        <Link href={`/product/${c.productId}`}>
            <Button size="xs" color="secondary">محصول</Button>
        </Link>
    ]);

    // Designs Table
    const designsBody = user.designs.map(d => [
        <img src={d.image} alt={d.name} className="w-12 h-12 object-cover rounded" />,
        d.name,
        toman(d.price),
        new Date(d.created_at).toLocaleString("fa-IR"),
        <Link href={`/design?id=${d.id}`}>
            <Button size="xs" color="primary">مشاهده</Button>
        </Link>
    ]);

    // Design Requests Table
    const designReqBody = user.designRequests.map(r => [
        <Badge color={r.status === "ACCEPTED" ? "primary" : r.status === "REJECTED" ? "red" : "yellow"}>
            {STATUS_BADGE[r.status]?.label || r.status}
        </Badge>,
        r.title,
        new Date(r.created_at).toLocaleString("fa-IR"),
        r.type,
        <Link href={`/admin/request?id=${r.id}`}>
            <Button size="xs" color="secondary">مشاهده</Button>
        </Link>
    ]);

    // Addresses Table
    const addressesBody = user.addresses.map(a => [
        a.receiver,
        a.phone,
        a.state,
        a.city,
        a.address,
        a.phone2 || "-",
        a.postal || "-"
    ]);

    // OffCodes Table
    const offCodesBody = user.offCodes.map(o => [
        o.id,
        <Badge color="primary">{o.percent}%</Badge>,
        `${o.used} / ${o.maxUsage}`,
    ]);

    return (
        <div className="w-full p-4 space-y-10">
            <h2 className="text-xl font-bold mb-4">اطلاعات کاربر</h2>
            <Table
                data={{
                    head: ["مشخصه", "مقدار"],
                    body: userInfo.map(i => [i.label, i.value]),
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">سفارش‌ها</h3>
            <Table
                data={{
                    head: ["وضعیت", "کد سفارش", "تاریخ", "مبلغ کل", "مبلغ نهایی", "کد تخفیف", "جزئیات"],
                    body: ordersBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">کامنت‌ها</h3>
            <Table
                data={{
                    head: ["وضعیت", "امتیاز", "متن", "تاریخ", "محصول"],
                    body: commentsBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">طراحی‌ها</h3>
            <Table
                data={{
                    head: ["تصویر", "نام", "قیمت", "تاریخ", "جزئیات"],
                    body: designsBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">درخواست طراحی</h3>
            <Table
                data={{
                    head: ["وضعیت", "عنوان", "تاریخ", "نوع", "جزئیات"],
                    body: designReqBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">آدرس‌ها</h3>
            <Table
                data={{
                    head: ["گیرنده", "تلفن", "استان", "شهر", "آدرس", "تلفن دوم","کدپستی"],
                    body: addressesBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">کدهای تخفیف</h3>
            <Table
                data={{
                    head: ["کد", "درصد", "تعداد استفاده / سقف"],
                    body: offCodesBody,
                }}
                striped
                withColumnBorders
                className="mb-8"
            />
        </div>
    );
}