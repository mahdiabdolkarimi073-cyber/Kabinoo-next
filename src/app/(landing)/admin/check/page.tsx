'use client';

import { useState } from "react";
import { Card, Badge, Group, Text, Button, TextInput, Select, SimpleGrid, Modal, Textarea, ScrollArea } from "@mantine/core";
import { IconCheck, IconX, IconEye, IconFilter } from "@tabler/icons-react";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";

export default function Page() {
    const [statusFilter, setStatusFilter] = useState("PENDING");
    const [search, setSearch] = useState("");
    const [selectedCheck, setSelectedCheck] = useState<any | null>(null);
    const [actionLoading, setActionLoading] = useState<number | null>(null);
    const [adminNote, setAdminNote] = useState("");

    const apiUrl = "/admin/check?_include=order.user" + (statusFilter !== "ALL" ? `&status=${statusFilter}` : "") + "&_pagination=true&_take=20";
    const { data: checksData, loading, refetch } = useBackend<any>(apiUrl);
    const checks = checksData?.data || [];
    const total = checksData?.total || 0;

    if (loading) return <Loading />;

    const filteredChecks = search
        ? checks.filter((c: any) =>
            c.checkId?.includes(search) ||
            c.order?.user?.name?.includes(search) ||
            c.order?.code?.toString().includes(search)
        )
        : checks;

    const updateCheck = async (checkId: number, status: "APPROVED" | "REJECTED", note?: string) => {
        setActionLoading(checkId);
        const res = await backend("/admin/order/check", "PUT", {
            id: checkId,
            status,
            adminNote: note || undefined,
        });
        if (res.ok) {
            refetch();
            setSelectedCheck(null);
            setAdminNote("");
        } else {
            window.alert(res.message || "خطا در تغییر وضعیت چک");
        }
        setActionLoading(null);
    };

    const statusInfo: Record<string, { label: string; color: string }> = {
        PENDING: { label: "در انتظار تایید", color: "yellow" },
        APPROVED: { label: "تایید شده", color: "green" },
        REJECTED: { label: "رد شده", color: "red" },
        PAID: { label: "پرداخت شده", color: "teal" },
    };

    const isLate = (check: any) => {
        return check.status === "PENDING" && new Date(check.expire_at) < new Date();
    };

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">مدیریت چک‌های ضمانت</h2>
                <Text size="sm" c="dimmed">بررسی و تایید تصاویر چک‌های پرداختی و اقساطی</Text>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-end">
                <Select
                    label="وضعیت چک"
                    data={[
                        { label: "در انتظار تایید", value: "PENDING" },
                        { label: "تایید شده", value: "APPROVED" },
                        { label: "رد شده", value: "REJECTED" },
                        { label: "پرداخت شده", value: "PAID" },
                        { label: "همه", value: "ALL" },
                    ]}
                    value={statusFilter}
                    onChange={(v) => setStatusFilter(v || "PENDING")}
                    style={{ minWidth: 180 }}
                />
                <TextInput
                    label="جستجو"
                    placeholder="کد چک، نام کاربر، کد سفارش..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: 250 }}
                />
                <Text size="sm" c="dimmed">{total.toLocaleString("fa-IR")} چک</Text>
            </div>

            {filteredChecks.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>چکی برای نمایش وجود ندارد</Text>
            ) : (
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
                    {filteredChecks.map((check: any) => {
                        const late = isLate(check);
                        const sInfo = statusInfo[check.status] || { label: check.status, color: "gray" };

                        return (
                            <Card key={check.id} withBorder shadow="sm" padding="md" className={late ? "border-red-300" : ""}>
                                <Group justify="space-between" mb="sm">
                                    <div>
                                        <Text size="xs" c="dimmed">شناسه چک</Text>
                                        <Text fw={700} dir="ltr">{check.checkId}</Text>
                                    </div>
                                    <Group gap="xs">
                                        {late && (
                                            <Badge color="red" variant="filled" size="sm">معوقه</Badge>
                                        )}
                                        <Badge color={sInfo.color} variant="light">{sInfo.label}</Badge>
                                    </Group>
                                </Group>

                                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                                    <div>
                                        <Text size="xs" c="dimmed">کد سفارش</Text>
                                        <Text fw={600}>{check.order?.code || "-"}</Text>
                                    </div>
                                    <div>
                                        <Text size="xs" c="dimmed">کاربر</Text>
                                        <Text fw={600}>{check.order?.user?.name || "-"}</Text>
                                    </div>
                                    <div>
                                        <Text size="xs" c="dimmed">مبلغ</Text>
                                        <Text fw={600}>{(check.amount || 0).toLocaleString("fa-IR")} تومان</Text>
                                    </div>
                                    <div>
                                        <Text size="xs" c="dimmed">تاریخ سررسید</Text>
                                        <Text fw={600}>{new Date(check.expire_at).toLocaleDateString("fa-IR")}</Text>
                                    </div>
                                </div>

                                <Button
                                    variant="light"
                                    fullWidth
                                    size="sm"
                                    leftSection={<IconEye size={16} />}
                                    onClick={() => {
                                        setSelectedCheck(check);
                                        setAdminNote(check.adminNote || "");
                                    }}
                                >
                                    مشاهده تصویر و بررسی
                                </Button>
                            </Card>
                        );
                    })}
                </SimpleGrid>
            )}

            <Modal
                opened={!!selectedCheck}
                onClose={() => setSelectedCheck(null)}
                title="بررسی تصویر چک"
                size="xl"
                centered
            >
                {selectedCheck && (
                    <div className="space-y-4" dir="rtl">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <Text size="xs" c="dimmed">شناسه چک</Text>
                                <Text fw={700} dir="ltr">{selectedCheck.checkId}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">کد سفارش</Text>
                                <Text fw={600}>{selectedCheck.order?.code || "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">کاربر</Text>
                                <Text fw={600}>{selectedCheck.order?.user?.name || "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تلفن</Text>
                                <Text fw={600} dir="ltr">{selectedCheck.order?.user?.phone || "-"}</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">مبلغ</Text>
                                <Text fw={600}>{(selectedCheck.amount || 0).toLocaleString("fa-IR")} تومان</Text>
                            </div>
                            <div>
                                <Text size="xs" c="dimmed">تاریخ سررسید</Text>
                                <Text fw={600}>{new Date(selectedCheck.expire_at).toLocaleDateString("fa-IR")}</Text>
                            </div>
                        </div>

                        <div>
                            <Text size="sm" fw={600} mb={4}>تصویر چک</Text>
                            <img
                                src={selectedCheck.image}
                                alt={`چک ${selectedCheck.checkId}`}
                                className="w-full max-h-96 object-contain rounded-lg border bg-slate-50"
                            />
                        </div>

                        <Textarea
                            label="یادداشت ادمین (اختیاری)"
                            placeholder="یادداشتی برای این چک ثبت کنید..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            rows={2}
                        />

                        {selectedCheck.adminNote && (
                            <Text size="sm" c="dimmed">یادداشت قبلی: {selectedCheck.adminNote}</Text>
                        )}

                        <Group justify="flex-end" gap="sm">
                            <Button
                                color="red"
                                variant="light"
                                leftSection={<IconX size={16} />}
                                loading={actionLoading === selectedCheck.id}
                                onClick={() => updateCheck(selectedCheck.id, "REJECTED", adminNote)}
                            >
                                رد چک
                            </Button>
                            <Button
                                color="green"
                                leftSection={<IconCheck size={16} />}
                                loading={actionLoading === selectedCheck.id}
                                onClick={() => updateCheck(selectedCheck.id, "APPROVED", adminNote)}
                            >
                                تایید چک
                            </Button>
                        </Group>
                    </div>
                )}
            </Modal>
        </div>
    );
}
