'use client';

import { useState } from "react";
import { Button, Modal, Textarea, TextInput, Switch, ActionIcon, Paper, Text, Group, Badge } from "@mantine/core";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import Loading from "@/no-side/Loading";

type Faq = {
    id: string;
    question: string;
    answer: string;
    sortOrder: number;
    enabled: boolean;
    created_at: string;
};

export default function FaqPage() {
    const { data: faqs = [], loading, refetch } = useBackend<Faq[]>("/admin/faq");
    const [opened, setOpened] = useState(false);
    const [editing, setEditing] = useState<Faq | null>(null);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [sortOrder, setSortOrder] = useState(0);
    const [enabled, setEnabled] = useState(true);
    const [saving, setSaving] = useState(false);

    const openCreate = () => {
        setEditing(null);
        setQuestion("");
        setAnswer("");
        setSortOrder(0);
        setEnabled(true);
        setOpened(true);
    };

    const openEdit = (faq: Faq) => {
        setEditing(faq);
        setQuestion(faq.question);
        setAnswer(faq.answer);
        setSortOrder(faq.sortOrder);
        setEnabled(faq.enabled);
        setOpened(true);
    };

    const save = async () => {
        if (!question.trim() || !answer.trim()) {
            window.alert("سوال و پاسخ را وارد کنید");
            return;
        }
        setSaving(true);
        const body = { question, answer, sortOrder, enabled };
        if (editing) {
            await backend(`/admin/faq/${editing.id}`, "PUT", body);
        } else {
            await backend(`/admin/faq`, "POST", body);
        }
        setSaving(false);
        setOpened(false);
        refetch();
    };

    const remove = async (id: string) => {
        if (!window.confirm("این سوال حذف شود؟")) return;
        await backend(`/admin/faq/${id}`, "DELETE");
        refetch();
    };

    const toggleEnabled = async (faq: Faq) => {
        await backend(`/admin/faq/${faq.id}`, "PUT", { enabled: !faq.enabled });
        refetch();
    };

    if (loading) return <Loading />;

    return (
        <div dir="rtl" className="w-full p-4 space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">سوالات متداول</h1>
                    <p className="mt-2 text-sm text-gray-600">سوالات متداول صفحه اصلی را اینجا مدیریت کنید.</p>
                </div>
                <Button leftSection={<IconPlus size={18} />} onClick={openCreate}>افزودن سوال</Button>
            </div>

            {!faqs.length && (
                <Paper p="xl" radius="lg" withBorder>
                    <Text c="dimmed">هنوز سوالی ثبت نشده است.</Text>
                </Paper>
            )}

            <div className="grid gap-4">
                {faqs
                    .slice()
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map((faq) => (
                        <Paper key={faq.id} p="lg" radius="lg" withBorder>
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Text fw={700} size="lg">{faq.question}</Text>
                                        <Badge color={faq.enabled ? "green" : "gray"}>
                                            {faq.enabled ? "نمایش داده می‌شود" : "غیرفعال"}
                                        </Badge>
                                        <Badge variant="light">ترتیب: {faq.sortOrder.toLocaleString("fa")}</Badge>
                                    </div>
                                    <p className="mt-3 leading-7 text-gray-700 whitespace-pre-wrap">{faq.answer}</p>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <Switch checked={faq.enabled} onChange={() => toggleEnabled(faq)} label="فعال" />
                                    <ActionIcon variant="light" color="blue" size="lg" aria-label="ویرایش" onClick={() => openEdit(faq)}>
                                        <IconEdit size={18} />
                                    </ActionIcon>
                                    <ActionIcon variant="light" color="red" size="lg" aria-label="حذف" onClick={() => remove(faq.id)}>
                                        <IconTrash size={18} />
                                    </ActionIcon>
                                </div>
                            </div>
                        </Paper>
                    ))}
            </div>

            <Modal opened={opened} onClose={() => setOpened(false)} title={editing ? "ویرایش سوال" : "افزودن سوال جدید"} centered size="lg">
                <div className="space-y-4">
                    <TextInput label="سوال" value={question} onChange={(e) => setQuestion(e.currentTarget.value)} placeholder="سوال متداول را بنویسید" />
                    <Textarea label="پاسخ" value={answer} onChange={(e) => setAnswer(e.currentTarget.value)} placeholder="پاسخ سوال را بنویسید" autosize minRows={3} />
                    <TextInput label="ترتیب نمایش" type="number" value={sortOrder} onChange={(e) => setSortOrder(+e.currentTarget.value)} />
                    <Switch label="فعال (در سایت نمایش داده شود)" checked={enabled} onChange={(e) => setEnabled(e.currentTarget.checked)} />
                    <Group justify="flex-end">
                        <Button variant="light" onClick={() => setOpened(false)}>انصراف</Button>
                        <Button loading={saving} onClick={save}>{editing ? "ذخیره تغییرات" : "افزودن"}</Button>
                    </Group>
                </div>
            </Modal>
        </div>
    );
}
