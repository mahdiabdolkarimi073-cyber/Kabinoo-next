'use client';


type SingleOrder = {
  id: string
  created_at: string
  userId: string
  totalPrice: number
  finalPrice: number // OFF CODE CALCULATED HERE
  status: string
  code: number
  offCodeId?: string
  offCode?: {
    id: string
    userId: string
    percent: number
    used: number
    maxUsage: number
  },
  user: {
    id: string
    name: string
    nationalCode: string
    email: string
    joined_at: string
    isAdmin: boolean
    phone: string
  }
  products: Array<{
    id: number
    orderId: string
    productId?: string
    customDesignId?: string
    product?: {
      id: string
      name: string
      created_at: string
      updated_at: string
      x: number
      y: number
      z: number
      price: number
      offPercent: number
      colorId: number
      description: string
      rating: number
      images: Array<string>
      others: any,
      deliveryDays: number
      materialId: number
      detailId: number
      categoryId: string
      finalPrice: number
    }
    custom?: {
      id: string
      created_at: string
      slug: string
      price: number
      image: string
      name: string
      data: any,
      userId: string
    },

  }>
  checks: Array<{
    id: number
    created_at: string
    start_at: string
    expire_at: string
    amount: number
    checkId: string
    image: string
    orderId: string
  }>
  payment: {
    id: string
    token: any
    userId: string
    created_at: string
    paid_at: string
    price: number
    redirect: string
    data: any
  },
  address?: Record<string, string>
};

import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { Select, Button, Table, Badge } from "@mantine/core";
import Link from "next/link";
import { OrderStatsList } from "../page";
import OrderInstallment from "@/app/(landing)/user/order/[id]/OrderInstallment";
import { parseDesignData, DesignSpecsTable } from "@/utils/designSpecs";

function formatToman(n: number) {
  return n?.toLocaleString("fa-IR") + " تومان";
}

export default function Page(props: any) {
  const { id } = props.params;
  const { data: order, loading, refetch } = useBackend<SingleOrder>("/admin/order/" + id + "?_include=products.product,products.custom,user,offCode");
  const [status, setStatus] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  if (loading || !order) return <Loading />;

  const handleStatusChange = async () => {
    if (!status || status === order.status) return;
    setUpdating(true);
    const res = await backend("/admin/order/" + id, "PUT", { status });
    if (res.ok) {
      window.alert("وضعیت با موفقیت تغییر کرد.");
      refetch();
    } else {
      window.alert(res.message || "خطا در تغییر وضعیت");
    }
    setUpdating(false);
  };

  // User info table
  const userTable = (
    <Table
      data={{
        head: ["نام", "ایمیل", "کد ملی", "شماره تماس", "تاریخ عضویت"],
        body: [[
          order.user?.name || "-",
          order.user?.email || "-",
          order.user?.nationalCode || "-",
          order.user?.phone || "-",
          order.user?.joined_at ? new Date(order.user.joined_at).toLocaleDateString("fa-IR") : "-",
        ]]
      }}
      striped
      withColumnBorders
      className="mb-6"
    />
  );

  // Products table
  const productsBody = order.products?.map((item: any) => {
    let type = "";
    let name = "";
    let price = "";
    let link = "";
    let badge = null;
    let img = "";
    let discount = null;
    let dims = "-";

    if (item.product) {
      type = "محصول عادی";
      name = item.product.name;
      price = formatToman(item.product.finalPrice ?? item.product.price);
      link = `/product/${item.product.id}`;
      img = item.product.images?.[0] || "";
      dims = `${item.product.x || 0} × ${item.product.y || 0} × ${item.product.z || 0} سانتی‌متر`;
      if (item.product.offPercent && item.product.offPercent > 0) {
        discount = (
          <Badge color="red" variant="filled" className="ml-2">
            {item.product.offPercent}% تخفیف
          </Badge>
        );
      }
    } else if (item.custom) {
      type = "سفارشی";
      name = item.custom.name;
      price = formatToman(item.custom.price);
      link = `/design?id=${item.custom.id}`;
      img = item.custom.image || "";
      const spec = parseDesignData(item.custom.data);
      if (spec) {
        dims = `${spec.width} × ${spec.height} × ${spec.depth} سانتی‌متر`;
      }
    } else {
      type = "نامشخص";
      name = "-";
      price = "-";
      link = "#";
    }

    badge = (
      <Badge color={type === "محصول عادی" ? "blue" : "yellow"} variant="light">
        {type}
      </Badge>
    );

    const designSpec = item.custom ? parseDesignData(item.custom.data) : null;

    return [
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {img && <img src={img} alt={name} className="w-12 h-12 object-cover rounded" />}
          {name}
          {discount}
        </div>
        {designSpec && (
          <details>
            <summary className="cursor-pointer text-xs text-primary">مشخصات فنی</summary>
            <DesignSpecsTable specs={designSpec.specs} />
          </details>
        )}
      </div>,
      badge,
      dims,
      price,
      <Link href={link}>
        <Button size="xs" variant="light">مشاهده</Button>
      </Link>
    ];
  });

  // Order status badge
  const statusObj = OrderStatsList.find(opt => opt.value === (status ?? order.status));
  const statusBadge = (
    <Badge color={statusObj?.color || "gray"} variant="filled">
      {statusObj?.label || order.status}
    </Badge>
  );

  // Order info table
  const orderTable = (
    <Table
      data={{
        head: ["کد سفارش", "تاریخ ثبت", "مبلغ کل", "مبلغ نهایی", "وضعیت", "تخفیف"],
        body: [[
          order.code,
          new Date(order.created_at).toLocaleString("fa-IR"),
          formatToman(order.totalPrice),
          <span className="text-lg font-bold text-green-700">{formatToman(order.finalPrice)}</span>,
          statusBadge,
          order.offCodeId ? (
            <Badge color="teal" variant="light">
              {order.offCodeId}
              {order.offCode && ` (${order.offCode.percent}% - ${order.offCode.used}/${order.offCode.maxUsage})`}
            </Badge>
          ) : "-"
        ]]
      }}
      striped
      withColumnBorders
      className="mb-6"
    />
  );

  // Status change controls
  const statusControl = (
    <div className="flex gap-2 mb-8">
      <Select
        data={OrderStatsList}
        value={status ?? order.status}
        onChange={setStatus}
        disabled={updating}
        className="w-40"
      />
      <Button
        size="xs"
        onClick={handleStatusChange}
        loading={updating}
        disabled={!status || status === order.status}
      >
        تغییر وضعیت
      </Button>
    </div>
  );

  const address = order.address || {};

  return (
    <div className="w-full p-4 space-y-8">

      <h2 className="text-xl font-bold mb-2">جزئیات سفارش</h2>
      {orderTable}
      {statusControl}
      <h3 className="font-bold mb-2">اطلاعات کاربر</h3>
      {userTable}
      <h3 className="font-bold mb-2">اطلاعات آدرس</h3>
      <div className='flex flex-wrap justify-between gap-5'>
        <div><b>گیرنده:</b> {address.receiver}</div>
        <div><b>استان:</b> {address.state} <b>شهر:</b> {address.city}</div>
        <div><b>آدرس:</b> {address.address}</div>
        <div><b>کدپستی:</b> {address.postal}</div>
        <div><b>تلفن:</b> {address.phone}</div>
        {address.phone2 && <p><b>تلفن دوم:</b> {address.phone2}</p>}
      </div>
      <h3 className="font-bold mb-2">محصولات سفارش</h3>
      <Table
        data={{
          head: ["محصول", "نوع", "ابعاد", "قیمت", "لینک"],
          body: productsBody,
        }}
        striped
        withColumnBorders
      />
      <OrderInstallment order={order} />
    </div>
  );
}