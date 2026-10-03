'use client';

import { useState } from "react";
import { Table, Button, Badge, Text, Select, TextInput, Group, Modal } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";

const ContractStatusList = [
    { value: "DRAFT", label: "پیش‌نویس", color: "gray" },
    { value: "ACTIVE", label: "فعال", color: "green" },
    { value: "EXPIRED", label: "منقضی شده", color: "red" },
    { value: "CANCELED", label: "لغو شده", color: "orange" },
];

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const [search, setSearch] = useState("");
    const [selectedContract, setSelectedContract] = useState<any | null>(null);

    const apiUrl = "/admin/contract?_include=user" + (status !== "ALL" ? `&status=${status}` : "");
    const { data: contracts = [], loading, refetch } = useBackend<any[]>(apiUrl);

    if (loading) return <Loading />;

    const filtered = search
        ? contracts.filter((c) =>
            c.title?.includes(search) ||
            c.user?.name?.includes(search) ||
            c.user?.phone?.includes(search)
        )
        : contracts;

    const tableHead = ["عنوان", "کاربر", "تلفن", "وضعیت", "تاریخ ثبت", "تاریخ انقضا", "مبلغ نهایی", "عملیات"];
    const tableBody = filtered.map((contract) => [
        <Text key="title" fw={600}>{contract.title}</Text>,
        contract.user?.name || "-",
        <Text key="phone" dir="ltr" size="sm">{contract.user?.phone || "-"}</Text>,
        <Badge key="status" color={ContractStatusList.find(s => s.value === contract.status)?.color || "gray"} variant="light">
            {ContractStatusList.find(s => s.value === contract.status)?.label || contract.status}
        </Badge>,
        new Date(contract.created_at).toLocaleDateString("fa-IR"),
        contract.expire_at ? new Date(contract.expire_at).toLocaleDateString("fa-IR") : "-",
        contract.finalPrice ? (contract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-",
        <Group key="actions" gap="xs">
            <Button
                size="xs"
                variant="light"
                leftSection={<IconEye size={14} />}
                onClick={() => setSelectedContract(contract)}
            >
                جزئیات
            </Button>
            <Button size="xs" variant="light" component="a" href={contract.file} target="_blank">فایل</Button>
        </Group>,
    ]);

    return (
        <div className="p-4 space-y-4" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">قراردادهای مشتریان</h2>
                <Text size="sm" c="dimmed">مشاهده و مدیریت تمام قراردادهای کاربران</Text>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <Select
                    label="وضعیت قرارداد"
                    data={[{ label: "همه", value: "ALL" }, ...ContractStatusList]}
                    value={status}
                    onChange={(v) => setStatus(v || "ALL")}
                    style={{ minWidth: 180 }}
                />
                <TextInput
                    placeholder="جستجو با عنوان، نام کاربر یا تلفن..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
            </div>

            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ قراردادی ثبت نشده است</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}

            <Modal
                opened={!!selectedContract}
                onClose={() => setSelectedContract(null)}
                title="جزئیات قرارداد"
                size="lg"
                centered
            >
                {selectedContract && (
                    <div className="space-y-4" dir="rtl">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <Text size="xs" c="dimmed">عنوان</Text>
                                <Text fw={600}>{selectedContract.title}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">کاربر</Text>
                                <Text fw={600}>{selectedContract.user?.name || "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تلفن</Text>
                                <Text fw={600} dir="ltr">{selectedContract.user?.phone || "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">وضعیت</Text>
                                <Badge color={ContractStatusList.find(s => s.value === selectedContract.status)?.color || "gray"} variant="light">
                                    {ContractStatusList.find(s => s.value === selectedContract.status)?.label || selectedContract.status}
                                </Badge>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تاریخ ثبت</Text>
                                <Text fw={600}>{new Date(selectedContract.created_at).toLocaleDateString("fa-IR")}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تاریخ انقضا</Text>
                                <Text fw={600}>{selectedContract.expire_at ? new Date(selectedContract.expire_at).toLocaleDateString("fa-IR") : "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">مبلغ نهایی</Text>
                                <Text fw={600}>{selectedContract.finalPrice ? (selectedContract.finalPrice).toLocaleString("fa-IR") + " تومان" : "-"}</Text>
                            </div>
                        </div>

                        {selectedContract.description && (
                            <div>
                                <Text size="xs" c="dimmed" mb={4}>توضیحات</Text>
                                <Text size="sm">{selectedContract.description}</Text>
                            </div>
                        )}

                        {selectedContract.designFile && (
                            <div>
                                <Text size="xs" c="dimmed" mb={4}>فایل طراحی</Text>
                                <Button size="xs" variant="light" component="a" href={selectedContract.designFile} target="_blank">
                                    مشاهده فایل طراحی
                                </Button>
                            </div>
                        )}

                        <Button fullWidth component="a" href={selectedContract.file} target="_blank">
                            مشاهده فایل قرارداد
                        </Button>
                    </div>
                )}
            </Modal>
        </div>
    );
}
