'use client';

import React from "react";
import { Table, Badge, Text, Card, Group, Button, Textarea, TextInput } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { useState } from "react";

const CheckStatusList = [
    { value: "PENDING", label: "در انتظار", color: "yellow" },
    { value: "APPROVED", label: "تایید شده", color: "green" },
    { value: "REJECTED", label: "رد شده", color: "red" },
];

export default function Page({ params }: any) {
    const { id } = React.use(params) as any;
    const { data: order, loading, refetch } = useBackend<any>(`/contract-manager/order/${id}?_include=user&_include=checks&_include=payment`);
    const [checkAction, setCheckAction] = useState<{ id: number; status: string; note: string } | null>(null);
    const [saving, setSaving] = useState(false);

    if (loading || !order) return <Loading />;

    const now = new Date();
    const isLate = (check: any) => check.status === "PENDING" && new Date(check.expire_at) < now;

    const handleCheckAction = async () => {
        if (!checkAction) return;
        setSaving(true);
        const res = await backend(`/contract-manager/check`, "PUT", {
            id: checkAction.id,
            status: checkAction.status,
            adminNote: checkAction.note,
        });
        setSaving(false);
        if (res.ok) {
            setCheckAction(null);
            refetch();
        }
    };

    const tableHead = ["مبلغ چک", "شناسه چک", "تاریخ شروع", "تاریخ سررسید", "وضعیت", "عملیات"];
    const tableBody = (order.checks || []).map((check: any) => [
        (+check.amount).toLocaleString("fa-IR") + " تومان",
        check.checkId,
        new Date(check.start_at).toLocaleDateString("fa-IR"),
        new Date(check.expire_at).toLocaleDateString("fa-IR"),
        <Badge key={check.id} color={CheckStatusList.find(s => s.value === check.status)?.color || "gray"}>
            {isLate(check) ? "معوق" : CheckStatusList.find(s => s.value === check.status)?.label || check.status}
        </Badge>,
        <Group key="actions" gap="xs">
            <Button
                size="xs"
                color="green"
                variant="light"
                onClick={() => setCheckAction({ id: check.id, status: "APPROVED", note: check.adminNote || "" })}
            >
                تایید
            </Button>
            <Button
                size="xs"
                color="red"
                variant="light"
                onClick={() => setCheckAction({ id: check.id, status: "REJECTED", note: check.adminNote || "" })}
            >
                رد
            </Button>
        </Group>,
    ]);

    return (
        <div className="p-4 space-y-6">
            <h2 className="text-xl font-bold">جزئیات اقساط - سفارش #{order.code}</h2>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="space-y-3">
                    <Group><Text fw={600}>کاربر:</Text> <Text>{order.user?.name || "-"}</Text></Group>
                    <Group><Text fw={600}>مبلغ کل:</Text> <Text>{(+order.totalPrice).toLocaleString("fa-IR")} تومان</Text></Group>
                    <Group><Text fw={600}>مبلغ نهایی:</Text> <Text>{(+order.finalPrice).toLocaleString("fa-IR")} تومان</Text></Group>
                    <Group><Text fw={600}>روش پرداخت:</Text>
                        <Badge color="blue">{order.paymentMethod === "INSTALLMENT" ? "اقساطی" : "مستقیم"}</Badge>
                    </Group>
                    <Group><Text fw={600}>تعداد چک:</Text> <Text>{order.checks?.length || 0}</Text></Group>
                </div>
            </Card>

            <div>
                <h3 className="text-lg font-bold mb-4">لیست چک‌ها</h3>
                {order.checks && order.checks.length > 0 ? (
                    <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
                ) : (
                    <Text c="dimmed">چکی ثبت نشده است</Text>
                )}
            </div>

            {checkAction && (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <h3 className="text-lg font-bold mb-4">
                        {checkAction.status === "APPROVED" ? "تایید چک" : "رد چک"}
                    </h3>
                    <div className="space-y-4">
                        <Textarea
                            label="یادداشت (اختیاری)"
                            value={checkAction.note}
                            onChange={(e) => setCheckAction({ ...checkAction, note: e.target.value })}
                            rows={3}
                        />
                        <Group gap="xs">
                            <Button loading={saving} onClick={handleCheckAction}>ثبت</Button>
                            <Button variant="light" onClick={() => setCheckAction(null)}>انصراف</Button>
                        </Group>
                    </div>
                </Card>
            )}
        </div>
    );
}
