'use client';

import { useState } from "react";
import { Table, Button, Modal, Select, Badge, Text, Group, TextInput } from "@mantine/core";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import Link from "next/link";
import { IconHeadphones } from "@tabler/icons-react";

const CounselingTypeList = [
    { value: "GENERAL", label: "مشاوره عمومی" },
    { value: "DESIGN", label: "مشاوره طراحی" },
    { value: "PRICE", label: "مشاوره قیمت" },
    { value: "INSTALLMENT", label: "مشاوره اقساط" },
];

const CounselingStatusList = [
    { value: "PENDING", label: "در انتظار", color: "orange" },
    { value: "CONTACTED", label: "تماس گرفته شده", color: "blue" },
    { value: "DONE", label: "انجام شده", color: "green" },
    { value: "CANCELED", label: "لغو شده", color: "red" },
];

export default function Page() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");
    const { data: list = [], loading, refetch } = useBackend<any[]>("/admin/counseling?_include=user");
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState<any>(null);

    if (loading) return <Loading />;

    const filtered = list.filter((item: any) => {
        const matchSearch = !search ||
            item.name?.includes(search) ||
            item.phone?.includes(search);
        const matchStatus = statusFilter === "ALL" || item.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const handleDelete = async (id: string) => {
        await askConfirm("آیا از حذف این درخواست مطمئن هستید؟");
        const res = await backend(`/admin/counseling/${id}`, "DELETE");
        if (res.ok) refetch();
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        const res = await backend(`/admin/counseling/${id}`, "PUT", { status: newStatus });
        if (res.ok) refetch();
    };

    const tableData = {
        head: ["نام", "شماره تماس", "نوع مشاوره", "وضعیت", "تاریخ ثبت", "عملیات"],
        body: filtered.map((item: any) => [
            <Text key="name" fw={600}>{item.name}</Text>,
            <Text key="phone" dir="ltr" size="sm">{item.phone}</Text>,
            <Badge key="type" variant="light" color="blue">
                {CounselingTypeList.find(t => t.value === item.type)?.label || item.type}
            </Badge>,
            <Badge key="status" variant="light" color={CounselingStatusList.find(s => s.value === item.status)?.color || "gray"}>
                {CounselingStatusList.find(s => s.value === item.status)?.label || item.status}
            </Badge>,
            new Date(item.created_at).toLocaleString("fa-IR"),
            <Group key="actions" gap="xs">
                <Button
                    size="xs"
                    color="primary"
                    variant="light"
                    onClick={() => {
                        setSelected(item);
                        setOpened(true);
                    }}
                >
                    مشاهده
                </Button>
                <Select
                    size="xs"
                    w={130}
                    data={CounselingStatusList}
                    value={item.status}
                    onChange={(v) => v && handleStatusChange(item.id, v)}
                />
                <Button size="xs" color="red" variant="light" onClick={() => handleDelete(item.id)}>حذف</Button>
            </Group>,
        ]),
    };

    return (
        <div className="w-full p-4 space-y-4" dir="rtl">
            <div className="flex items-center gap-2 mb-2">
                <IconHeadphones size={24} color="#D1987B" />
                <h2 className="text-xl font-bold">درخواست‌های مشاوره</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <TextInput
                    placeholder="جستجو با نام یا شماره..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
                <Select
                    label="وضعیت"
                    data={[{ label: "همه", value: "ALL" }, ...CounselingStatusList]}
                    value={statusFilter}
                    onChange={(v) => setStatusFilter(v || "ALL")}
                    style={{ minWidth: 180 }}
                />
            </div>

            {filtered.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ درخواست مشاوره‌ای ثبت نشده است</Text>
            ) : (
                <Table
                    data={tableData}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            )}

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="جزئیات درخواست مشاوره"
                centered
                size="lg"
            >
                {selected && (
                    <div className="space-y-4" dir="rtl">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <Text size="xs" c="dimmed">نام</Text>
                                <Text fw={600}>{selected.name}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">شماره تماس</Text>
                                <Text fw={600} dir="ltr">{selected.phone}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">نوع مشاوره</Text>
                                <Badge variant="light" color="blue">
                                    {CounselingTypeList.find(t => t.value === selected.type)?.label || selected.type}
                                </Badge>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">وضعیت</Text>
                                <Badge variant="light" color={CounselingStatusList.find(s => s.value === selected.status)?.color || "gray"}>
                                    {CounselingStatusList.find(s => s.value === selected.status)?.label || selected.status}
                                </Badge>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تاریخ ثبت</Text>
                                <Text fw={600}>{new Date(selected.created_at).toLocaleString("fa-IR")}</Text>
                            </div>
                        </div>

                        {selected.description && (
                            <div>
                                <Text size="xs" c="dimmed" mb={4}>توضیحات</Text>
                                <Text size="sm">{selected.description}</Text>
                            </div>
                        )}

                        {selected.userId && (
                            <div>
                                <Link href={`/admin/user/${selected.userId}`}>
                                    <Button color="secondary" size="xs" variant="light">
                                        مشاهده کاربر
                                    </Button>
                                </Link>
                            </div>
                        )}

                        <Group>
                            <Select
                                label="تغییر وضعیت"
                                data={CounselingStatusList}
                                value={selected.status}
                                onChange={(v) => {
                                    if (v) {
                                        handleStatusChange(selected.id, v);
                                        setSelected({ ...selected, status: v });
                                    }
                                }}
                                style={{ minWidth: 200 }}
                            />
                        </Group>
                    </div>
                )}
            </Modal>
        </div>
    );
}
