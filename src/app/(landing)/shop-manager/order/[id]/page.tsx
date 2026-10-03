'use client';

type SingleOrder = {
  id: string
  created_at: string
  userId: string
  totalPrice: number
  finalPrice: number
  status: string
  code: number
  offCodeId?: string
  offCode?: {
    id: string
    userId: string
    percent: number
    used: number
    maxUsage: number
  }
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
      price: number
      offPercent: number
      images: Array<string>
      x: number
      y: number
      z: number
      finalPrice: number
    }
    custom?: {
      id: string
      name: string
      price: number
      image: string
    }
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
    status: string
    adminNote?: string | null
  }>
  address?: Record<string, string>
};

import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { Select, Button, Table, Badge, Card, Group, Text } from "@mantine/core";
import Link from "next/link";
import { OrderStatsList } from "../page";

function formatToman(n: number) {
  return n?.toLocaleString("fa-IR") + " تومان";
}

export default function Page(props: any) {
  const { id } = props.params;
  const { data: order, loading, refetch } = useBackend<SingleOrder>("/shop-manager/order/" + id + "?_include=products.product,products.custom,user,offCode,checks");
  const [status, setStatus] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  if (loading || !order) return <Loading />;

  const handleStatusChange = async () => {
    if (!status || status === order.status) return;
    setUpdating(true);
    const res = await backend("/shop-manager/order/" + id, "PUT", { status });
    if (res.ok) {
      window.alert("وضعیت با موفقیت تغییر کرد.");
      refetch();
    } else {
      window.alert(res.message || "خطا در تغییر وضعیت");
    }
    setUpdating(false);
  };

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

  const productsBody = order.products?.map((item: any) => {
    let name = "";
    let price = "";
    let img = "";
    let badge = null;

    if (item.product) {
      name = item.product.name;
      price = formatToman(item.product.finalPrice ?? item.product.price);
      img = item.product.images?.[0] || "";
      badge = <Badge color="blue" variant="light">محصول</Badge>;
    } else if (item.custom) {
      name = item.custom.name;
      price = formatToman(item.custom.price);
      img = item.custom.image || "";
      badge = <Badge color="yellow" variant="light">سفارشی</Badge>;
    } else {
      name = "-";
      price = "-";
    }

    return [
      <div className="flex items-center gap-2">
        {img && <img src={img} alt={name} className="w-12 h-12 object-cover rounded" />}
        {name}
      </div>,
      badge,
      price,
    ];
  });

  const statusObj = OrderStatsList.find(opt => opt.value === (status ?? order.status));
  const statusBadge = (
    <Badge color={statusObj?.color || "gray"} variant="filled">
      {statusObj?.label || order.status}
    </Badge>
  );

  const orderTable = (
    <Table
      data={{
        head: ["کد سفارش", "تاریخ ثبت", "مبلغ کل", "مبلغ نهایی", "وضعیت"],
        body: [[
          order.code,
          new Date(order.created_at).toLocaleString("fa-IR"),
          formatToman(order.totalPrice),
          <span className="text-lg font-bold text-green-700">{formatToman(order.finalPrice)}</span>,
          statusBadge,
        ]]
      }}
      striped
      withColumnBorders
      className="mb-6"
    />
  );

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
      </div>
      <h3 className="font-bold mb-2">محصولات سفارش</h3>
      <Table
        data={{
          head: ["محصول", "نوع", "قیمت"],
          body: productsBody,
        }}
        striped
        withColumnBorders
      />
    </div>
  );
}
