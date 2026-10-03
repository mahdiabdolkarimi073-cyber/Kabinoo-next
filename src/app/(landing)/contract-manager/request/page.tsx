'use client';

import { useState } from "react";
import { Table, Button, Badge, Select, Textarea, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";

const defaultTypeLabels: Record<string, string> = {
    PRICE: "قیمت بده",
    MODEL: "مدل سه بعدی"
};

export default function Page() {
    const [status, setStatus] = useState("ALL");
    const apiUrl = "/contract-manager/request?_include=user" + (status !== "ALL" ? `&status=${status}` : "");
    const { data: requests = [], loading, refetch } = useBackend<any[]>(apiUrl);
    const { data: typeList = [] } = useBackend<any[]>("/public/requestType?enabled=true");

    const typeLabels: Record<string, string> = { ...defaultTypeLabels };
    typeList.forEach((t: any) => { typeLabels[t.key] = t.label; });

    if (loading) return <Loading />;

    const openAnswerModal = (request: any) => {
        modals.open({
            title: "پاسخ به درخواست طراحی",
            size: "lg",
            children: <AnswerModal request={request} onDone={() => { refetch(); modals.closeAll(); }} />,
        });
    };

    const tableHead = ["عنوان", "کاربر", "نوع", "وضعیت", "تاریخ ثبت", "عملیات"];
    const tableBody = requests.map((req) => [
        req.title,
        req.user?.name || "-",
        typeLabels[req.type] || req.type,
        <Badge key="status" color={req.status === "ACCEPTED" ? "green" : req.status === "REJECTED" ? "red" : "yellow"}>
            {req.status}
        </Badge>,
        new Date(req.created_at).toLocaleDateString("fa-IR"),
        <Button key="action" size="xs" variant="light" onClick={() => openAnswerModal(req)}>بررسی</Button>,
    ]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <Select
                    label="وضعیت درخواست"
                    data={[
                        { label: "همه", value: "ALL" },
                        { label: "درحال بررسی", value: "درحال بررسی" },
                        { label: "تایید شده", value: "ACCEPTED" },
                        { label: "رد شده", value: "REJECTED" },
                    ]}
                    value={status}
                    onChange={v => setStatus(v || "ALL")}
                    style={{ minWidth: 150 }}
                />
            </div>
            {requests.length === 0 ? (
                <Text c="dimmed" ta="center" py={40}>هیچ درخواست طراحی وجود ندارد</Text>
            ) : (
                <Table data={{ head: tableHead, body: tableBody }} striped highlightOnHover withColumnBorders />
            )}
        </div>
    );
}

function AnswerModal({ request, onDone }: { request: any; onDone: () => void }) {
    const [status, setStatus] = useState(request.status || "درحال بررسی");
    const [answer, setAnswer] = useState(request.answer || "");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const res = await backend(`/contract-manager/request/${request.id}`, "PUT", { status, answer });
        setLoading(false);
        if (res.ok) onDone();
    };

    return (
        <div className="space-y-4" dir="rtl">
            <div>
                <Text fw={600} mb={4}>عنوان:</Text>
                <Text>{request.title}</Text>
            </div>
            {request.description && (
                <div>
                    <Text fw={600} mb={4}>توضیحات:</Text>
                    <Text>{request.description}</Text>
                </div>
            )}
            {request.files?.length > 0 && (
                <div>
                    <Text fw={600} mb={4}>فایل‌ها:</Text>
                    <div className="flex flex-wrap gap-2">
                        {request.files.map((f: string, i: number) => (
                            <Button key={i} size="xs" variant="light" component="a" href={f} target="_blank">
                                فایل {i + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
            <Select
                label="وضعیت"
                data={[
                    { label: "درحال بررسی", value: "درحال بررسی" },
                    { label: "تایید شده", value: "ACCEPTED" },
                    { label: "رد شده", value: "REJECTED" },
                ]}
                value={status}
                onChange={(v) => setStatus(v || "")}
            />
            <Textarea label="پاسخ" value={answer} onChange={(e) => setAnswer(e.target.value)} rows={4} />
            <Button loading={loading} onClick={handleSubmit} fullWidth>ثبت پاسخ</Button>
        </div>
    );
}
