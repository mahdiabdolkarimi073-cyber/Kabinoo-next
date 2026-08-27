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
    isSupport: boolean
    isContractManager: boolean
    isAuthor: boolean
    wallet: number
    refCode: string
    refId: string | null
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
        amount: number
        type: string
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
    cartItems: Array<{
        id: string
        productId: string | null
        customDesignId: string | null
        quantity: number
    }>
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
    tickets: Array<{
        id: string
        title: string
        status: string
        created_at: string
    }>
    contracts: Array<{
        id: string
        title: string
        status: string
        finalPrice: number
        created_at: string
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
    OPEN: { color: "yellow", label: "باز" },
    ANSWERED: { color: "primary", label: "پاسخ داده شده" },
    CLOSED: { color: "secondary", label: "بسته شده" },
    DRAFT: { color: "yellow", label: "پیش‌نویس" },
    ACTIVE: { color: "primary", label: "فعال" },
    EXPIRED: { color: "red", label: "منقضی شده" },
    PAUSED: { color: "yellow", label: "تعلیق" },
    PAY_CHECK: { color: "yellow", label: "بررسی پرداخت" },
    SENT: { color: "primary", label: "ارسال شده" },
};

const CONTRACT_STATUS_BADGE: Record<string, { color: string; label: string }> = {
    DRAFT: { color: "yellow", label: "پیش‌نویس" },
    ACTIVE: { color: "primary", label: "فعال" },
    EXPIRED: { color: "red", label: "منقضی شده" },
    CANCELED: { color: "red", label: "لغو شده" },
};

const TICKET_STATUS_BADGE: Record<string, { color: string; label: string }> = {
    OPEN: { color: "yellow", label: "باز" },
    ANSWERED: { color: "primary", label: "پاسخ داده شده" },
    CLOSED: { color: "secondary", label: "بسته شده" },
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
        { label: "کیف پول", value: <span className="font-bold text-green-700">{toman(user.wallet)}</span> },
        { label: "کد معرف", value: <code className="bg-gray-100 px-2 py-1 rounded text-sm">{user.refCode}</code> },
        { label: "معرفی‌شده توسط", value: user.refId ? <code className="bg-gray-100 px-2 py-1 rounded text-sm">{user.refId}</code> : "-" },
        {
            label: "نویسنده", value: (
                <div className='flex items-center gap-2'>
                    {user.isAuthor ? <Badge color="primary">بله</Badge> : <Badge color="secondary">خیر</Badge>}
                    <ActionIcon size='sm' color={user.isAuthor ? "red" : undefined} onClick={async () => {
                        if (user.isAuthor) await askConfirm("آیا میخواهید نویسندگی این کاربر را بگیرید؟")
                        else await askConfirm("آیا میخواهید این کاربر را نویسنده کنید؟")

                        await backend("/admin/users/"+id, "PUT", {
                            isAuthor: !user.isAuthor
                        })
                            .finally(()=>{
                                refetch();
                            })
                    }}>
                        {user.isAuthor ? <IconMinus size={15} />:<IconPlus size={15} />}
                    </ActionIcon>
                </div>
            )
        },
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
        {
            label: "پشتیبان", value: (
                <div className='flex items-center gap-2'>
                    {user.isSupport ? <Badge color="cyan">بله</Badge> : <Badge color="secondary">خیر</Badge>}
                    <ActionIcon size='sm' color={user.isSupport ? "red" : "cyan"} onClick={async () => {
                        if (user.isSupport) await askConfirm("آیا میخواهید پشتیبانی این کاربر را بگیرید؟")
                        else await askConfirm("آیا میخواهید این کاربر را پشتیبان کنید؟")

                        await backend("/admin/users/"+id, "PUT", {
                            isSupport: !user.isSupport
                        })
                            .finally(()=>{
                                refetch();
                            })
                    }}>
                        {user.isSupport ? <IconMinus size={15} />:<IconPlus size={15} />}
                    </ActionIcon>
                </div>
            )
        },
        {
            label: "مدیر قراردادها", value: (
                <div className='flex items-center gap-2'>
                    {user.isContractManager ? <Badge color="violet">بله</Badge> : <Badge color="secondary">خیر</Badge>}
                    <ActionIcon size='sm' color={user.isContractManager ? "red" : "violet"} onClick={async () => {
                        if (user.isContractManager) await askConfirm("آیا میخواهید مدیریت قراردادهای این کاربر را بگیرید؟")
                        else await askConfirm("آیا میخواهید این کاربر را مدیر قراردادها کنید؟")

                        await backend("/admin/users/"+id, "PUT", {
                            isContractManager: !user.isContractManager
                        })
                            .finally(()=>{
                                refetch();
                            })
                    }}>
                        {user.isContractManager ? <IconMinus size={15} />:<IconPlus size={15} />}
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
        o.type === "PERCENT" ? <Badge color="primary">{o.percent}%</Badge> : <Badge color="teal">{toman(o.amount)}</Badge>,
        `${o.used} / ${o.maxUsage}`,
    ]);

    // Cart Items Table
    const cartItemsBody = user.cartItems.map(c => [
        c.quantity,
        c.productId ? <Link href={`/product/${c.productId}`}><Button size="xs" color="secondary">محصول</Button></Link> : c.customDesignId ? <Link href={`/design?id=${c.customDesignId}`}><Button size="xs" color="primary">طراحی</Button></Link> : "-",
    ]);

    // Tickets Table
    const ticketsBody = user.tickets.map(t => [
        <Badge color={TICKET_STATUS_BADGE[t.status]?.color || "gray"}>
            {TICKET_STATUS_BADGE[t.status]?.label || t.status}
        </Badge>,
        t.title,
        new Date(t.created_at).toLocaleString("fa-IR"),
        <Link href={`/admin/ticket/${t.id}`}>
            <Button size="xs" color="primary">مشاهده</Button>
        </Link>
    ]);

    // Contracts Table
    const contractsBody = user.contracts.map(c => [
        <Badge color={CONTRACT_STATUS_BADGE[c.status]?.color || "gray"}>
            {CONTRACT_STATUS_BADGE[c.status]?.label || c.status}
        </Badge>,
        c.title,
        toman(c.finalPrice),
        new Date(c.created_at).toLocaleString("fa-IR"),
        <Link href={`/admin/contract/${c.id}`}>
            <Button size="xs" color="primary">مشاهده</Button>
        </Link>
    ]);

    const EmptyRow = ({ colSpan }: { colSpan: number }) => (
        <tr><td colSpan={colSpan} className="text-center text-gray-400 py-4">موردی یافت نشد</td></tr>
    );

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
                    body: ordersBody.length ? ordersBody : [[<EmptyRow colSpan={7} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">کامنت‌ها</h3>
            <Table
                data={{
                    head: ["وضعیت", "امتیاز", "متن", "تاریخ", "محصول"],
                    body: commentsBody.length ? commentsBody : [[<EmptyRow colSpan={5} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">طراحی‌ها</h3>
            <Table
                data={{
                    head: ["تصویر", "نام", "قیمت", "تاریخ", "جزئیات"],
                    body: designsBody.length ? designsBody : [[<EmptyRow colSpan={5} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">درخواست طراحی</h3>
            <Table
                data={{
                    head: ["وضعیت", "عنوان", "تاریخ", "نوع", "جزئیات"],
                    body: designReqBody.length ? designReqBody : [[<EmptyRow colSpan={5} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">آدرس‌ها</h3>
            <Table
                data={{
                    head: ["گیرنده", "تلفن", "استان", "شهر", "آدرس", "تلفن دوم","کدپستی"],
                    body: addressesBody.length ? addressesBody : [[<EmptyRow colSpan={7} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">کدهای تخفیف</h3>
            <Table
                data={{
                    head: ["کد", "مقدار", "تعداد استفاده / سقف"],
                    body: offCodesBody.length ? offCodesBody : [[<EmptyRow colSpan={3} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">سبد خرید</h3>
            <Table
                data={{
                    head: ["تعداد", "نوع"],
                    body: cartItemsBody.length ? cartItemsBody : [[<EmptyRow colSpan={2} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">تیکت‌ها</h3>
            <Table
                data={{
                    head: ["وضعیت", "عنوان", "تاریخ", "جزئیات"],
                    body: ticketsBody.length ? ticketsBody : [[<EmptyRow colSpan={4} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />

            <h3 className="text-lg font-bold mb-2">قراردادها</h3>
            <Table
                data={{
                    head: ["وضعیت", "عنوان", "مبلغ", "تاریخ", "جزئیات"],
                    body: contractsBody.length ? contractsBody : [[<EmptyRow colSpan={5} />]],
                }}
                striped
                withColumnBorders
                className="mb-8"
            />
        </div>
    );
}