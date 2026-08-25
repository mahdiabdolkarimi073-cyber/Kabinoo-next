'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { Table, Badge, Text, Alert } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

export default function Page() {
    const { data: orders = [], loading } = useBackend<any[]>("/contract-manager/order?_include=user&_include=checks");

    if (loading) return <Loading />;

    const now = new Date();
    const lateChecks: any[] = [];
    orders.forEach((order: any) => {
        if (order.paymentMethod === "INSTALLMENT" && order.checks?.length > 0) {
            order.checks.forEach((check: any) => {
                if (check.status === "PENDING" && new Date(check.expire_at) < now) {
                    lateChecks.push({ ...check, orderCode: order.code, userName: order.user?.name, orderId: order.id });
                }
            });
        }
    });

    const tableHead = ["کد سفارش", "کاربر", "مبلغ چک", "تاریخ سررسید", "شناسه چک", "وضعیت"];
    const tableBody = lateChecks.map((check) => [
        check.orderCode,
        check.userName || "-",
        (+check.amount).toLocaleString("fa-IR") + " تومان",
        new Date(check.expire_at).toLocaleDateString("fa-IR"),
        check.checkId,
        <Badge key={check.id} color="red">معوق</Badge>,
    ]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <Alert icon={<IconAlertTriangle size={16} />} color="red" variant="light">
                    اقساطی که تاریخ سررسید آن‌ها گذشته و هنوز تایید یا پرداخت نشده‌اند.
                </Alert>
            </div>
            <h2 className="text-xl font-bold mb-4">اقساط معوق</h2>
            {lateChecks.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>اقساط معوقی وجود ندارد</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}
