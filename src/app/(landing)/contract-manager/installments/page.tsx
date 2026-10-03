'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { Table, Badge, Text } from "@mantine/core";
import Link from "next/link";

export default function Page() {
    const { data: orders = [], loading } = useBackend<any[]>("/contract-manager/order?_include=user&_include=checks&_include=payment");

    if (loading) return <Loading />;

    const installmentOrders = orders.filter((o: any) => o.paymentMethod === "INSTALLMENT" && o.checks?.length > 0);

    const tableHead = ["کد سفارش", "کاربر", "مبلغ نهایی", "تعداد چک", "وضعیت", "جزئیات"];
    const tableBody = installmentOrders.map((order: any) => [
        order.code,
        order.user?.name || "-",
        (+order.finalPrice).toLocaleString("fa-IR") + " تومان",
        order.checks.length,
        <Badge key="status" color={order.status === "COMPLETED" ? "green" : order.status === "PAY_CHECK" ? "yellow" : "gray"}>
            {order.status}
        </Badge>,
        <Link key={order.id} href={`/contract-manager/installments/${order.id}`}>
            <Text c="blue" style={{ cursor: "pointer" }}>مشاهده</Text>
        </Link>,
    ]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">لیست اقساط</h2>
            {installmentOrders.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>سفارش اقساطی وجود ندارد</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}
