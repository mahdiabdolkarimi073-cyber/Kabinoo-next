'use client';

import { Table, Button, Badge, Text, Group } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { IconFileDownload, IconDesign } from "@tabler/icons-react";

const ContractStatusList = [
    { value: "DRAFT", label: "پیش‌نویس", color: "gray" },
    { value: "ACTIVE", label: "فعال", color: "green" },
    { value: "EXPIRED", label: "منقضی شده", color: "red" },
    { value: "CANCELED", label: "لغو شده", color: "orange" },
];

export default function Page() {
    const { data: contracts = [], loading } = useBackend<any[]>("/user/contract");

    if (loading) return <Loading />;

    if (contracts.length === 0) {
        return (
            <div className="text-center py-20">
                <Text size="lg" c="dimmed">شما هیچ قراردادی ندارید</Text>
            </div>
        );
    }

    const tableHead = ["عنوان", "توضیحات", "مبلغ نهایی", "وضعیت", "تاریخ ثبت", "تاریخ انقضا", "عملیات"];
    const tableBody = contracts.map((contract) => [
        <Text key="title" fw={600}>{contract.title}</Text>,
        <Text size="sm" lineClamp={2} style={{ maxWidth: 200 }}>{contract.description || "-"}</Text>,
        <Text key="price" size="sm">{contract.finalPrice ? (+contract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-"}</Text>,
        <Badge color={ContractStatusList.find(s => s.value === contract.status)?.color || "gray"} variant="light">
            {ContractStatusList.find(s => s.value === contract.status)?.label || contract.status}
        </Badge>,
        new Date(contract.created_at).toLocaleDateString("fa-IR"),
        contract.expire_at ? new Date(contract.expire_at).toLocaleDateString("fa-IR") : "-",
        <Group key="actions" gap="xs">
            <Button
                size="xs"
                variant="light"
                leftSection={<IconFileDownload size={14} />}
                component="a"
                href={contract.file}
                target="_blank"
            >
                فایل قرارداد
            </Button>
            {contract.designFile && (
                <Button
                    size="xs"
                    variant="light"
                    color="teal"
                    leftSection={<IconDesign size={14} />}
                    component="a"
                    href={contract.designFile}
                    target="_blank"
                >
                    فایل طراحی
                </Button>
            )}
        </Group>,
    ]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">قراردادهای من</h2>
            <Table
                data={{ head: tableHead, body: tableBody }}
                striped
                highlightOnHover
                withColumnBorders
            />
        </div>
    );
}
