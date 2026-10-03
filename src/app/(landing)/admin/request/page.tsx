"use client";

import { useEffect, useState } from "react";
import { Table, Button, Badge, Group, Divider, Textarea, Select, TextInput } from "@mantine/core";
import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import { useRouter, useSearchParams } from "next/navigation";

const defaultTypeLabels: Record<string, string> = {
    PRICE: "برآورد هزینه و مشاوره",
    MODEL: "مدل سه‌بعدی"
};

export default function Page() {
    const params = useSearchParams();
    const { data: requests = [], loading, refetch } = useBackend<any[]>("/admin/request");
    const { data: typeList = [] } = useBackend<any[]>("/public/requestType?enabled=true");
    const [selected, setSelected] = useState<string | null>(null);
    const [status, setStatus] = useState<string>("");
    const [answer, setAnswer] = useState("");
    const router = useRouter();
    const selectedRequest = requests.find(r => r.id === selected);

    const typeLabels: Record<string, string> = { ...defaultTypeLabels };
    typeList.forEach((t: any) => { typeLabels[t.key] = t.label; });

    useEffect(() => {
        const id = params.get("id");
        if (id) {
            const req = requests.find(r => r.id === id);
            if (req) {
                setSelected(req.id);
                setStatus(req.status);
                setAnswer(req.answer || "");
            }
        }
        if (!params.has("active") && !!selectedRequest) {
            setSelected(null);
        }
    }, [params, requests]);

    if (loading) return <Loading />

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">درخواست‌های کاربران</h2>
            {!selected && (
                <Table
                    striped
                    highlightOnHover
                    data={{
                        head: [
                            "عنوان",
                            "تاریخ ثبت",
                            "نوع درخواست",
                            "تعداد فایل",
                            "وضعیت",
                            "عملیات"
                        ],
                        body: requests.map(req => [
                            req.title,
                            new Date(req.created_at).toLocaleDateString('fa-IR'),
                            typeLabels[req.type] || req.type,
                            req.files.length,
                            <Badge color={req.status === "انجام شده" ? "green" : req.status === "رد شده" ? "red" : "yellow"}>
                                {req.status}
                            </Badge>,
                            <Button
                                size="xs"
                                color="primary"
                                onClick={() => {
                                    router.push(`?active`)
                                    setSelected(req.id);
                                    setStatus(req.status);
                                    setAnswer(req.answer)
                                }}
                                key={req.id}
                            >
                                مشاهده
                            </Button>
                        ])
                    }}
                />
            )}

            {selectedRequest && (
                <div className="mt-8 p-6 border rounded-lg bg-white">
                    <h3 className="text-xl font-bold mb-4">جزئیات درخواست</h3>
                    <Divider mb="md" />
                    <div className="mb-2"><b>عنوان:</b> {selectedRequest.title}</div>
                    <div className="mb-2"><b>تاریخ ثبت:</b> {new Date(selectedRequest.created_at).toLocaleDateString('fa-IR')}</div>
                    <div className="mb-2"><b>نوع درخواست:</b> {typeLabels[selectedRequest.type] || selectedRequest.type}</div>
                    <div className="mb-2"><b>وضعیت فعلی:</b> <Badge color={selectedRequest.status === "انجام شده" ? "green" : selectedRequest.status === "رد شده" ? "red" : "yellow"}>
                        {selectedRequest.status}
                    </Badge></div>
                    <div className="mb-2"><b>توضیحات:</b></div>
                    <Textarea value={selectedRequest.description} readOnly mb="md" />
                    <div className="mb-2"><b>فایل‌های ضمیمه:</b></div>
                    <Group gap="xs" mb="md">
                        {selectedRequest.files.length === 0 && <span className="text-gray-500">فایلی ثبت نشده است</span>}
                        {selectedRequest.files.map((file: string, idx: number) => (
                            <Button
                                key={idx}
                                size="xs"
                                color="gray"
                                component="a"
                                href={file}
                                target="_blank"
                            >
                                مشاهده فایل {idx + 1}
                            </Button>
                        ))}
                    </Group>
                    <Divider mb="md" />
                    <TextInput
                        label="تغییر وضعیت درخواست"
                        value={status}
                        onChange={e => setStatus(e.currentTarget.value)}
                        mb="md"
                        placeholder="مثلاً انجام شده، رد شده، در انتظار بررسی..."
                    />
                    <div className="mb-2"><b>پاسخ ادمین:</b></div>
                    <Textarea value={answer} onChange={e => setAnswer(e.target.value)} mb="md" />

                    <Group gap="xs">
                        <Button color="green" onClick={() => {
                            backend("/admin/request/" + selectedRequest?.id, "PUT", { status, answer }).then(() => {
                                window.alert("ذخیره شد")
                                setSelected(null);
                            }).finally(refetch)
                        }}>ذخیره تغییرات</Button>
                        <Button color="gray" variant="outline" onClick={() => setSelected(null)}>بازگشت به لیست</Button>
                    </Group>
                </div>
            )}
        </div>
    )
}
