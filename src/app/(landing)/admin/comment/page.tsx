'use client';

import { ActionIcon, Badge, Button, Paper, Rating, Text } from "@mantine/core";
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";

type AdminComment = {
    id: string;
    content: string;
    rate: number;
    author: string;
    accepted: boolean;
    created_at: string;
    product?: { name?: string };
};

export default function CommentsPage() {
    const { data: comments = [], loading, refetch } = useBackend<AdminComment[]>("/admin/comment?_include=product&_take=100");
    const update = async (id: string, accepted: boolean) => {
        await backend(`/admin/comment/${id}`, "PUT", { accepted });
        refetch();
    };
    const remove = async (id: string) => {
        if (!window.confirm("این نظر حذف شود؟")) return;
        await backend(`/admin/comment/${id}`, "DELETE");
        refetch();
    };

    if (loading) return <p className="p-6">در حال دریافت نظرات...</p>;

    return (
        <div dir="rtl" className="space-y-5">
            <div>
                <h1 className="text-2xl font-bold">مدیریت نظرات</h1>
                <p className="mt-2 text-sm text-gray-600">نظرات جدید تا زمان تأیید شما در سایت نمایش داده نمی‌شوند.</p>
            </div>
            {!comments.length && <Paper p="xl" radius="lg" withBorder><Text>نظری برای بررسی وجود ندارد.</Text></Paper>}
            <div className="grid gap-4">
                {comments.map(comment => (
                    <Paper key={comment.id} p="lg" radius="lg" withBorder>
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Text fw={700}>{comment.author}</Text>
                                    <Rating value={comment.rate} readOnly size="sm" />
                                    <Badge color={comment.accepted ? "green" : "orange"}>{comment.accepted ? "تأیید شده" : "در انتظار بررسی"}</Badge>
                                </div>
                                <Text size="sm" c="dimmed" mt={4}>{comment.product?.name || "محصول"} · {new Date(comment.created_at).toLocaleDateString("fa-IR")}</Text>
                                <p className="mt-4 leading-7 text-gray-700">{comment.content}</p>
                            </div>
                            <div className="flex shrink-0 gap-2">
                                {!comment.accepted && <Button color="green" leftSection={<IconCheck size={16} />} onClick={() => update(comment.id, true)}>تأیید</Button>}
                                {!comment.accepted && <Button color="red" variant="light" leftSection={<IconX size={16} />} onClick={() => remove(comment.id)}>رد و حذف</Button>}
                                {comment.accepted && <Button color="orange" variant="light" leftSection={<IconX size={16} />} onClick={() => update(comment.id, false)}>لغو نمایش</Button>}
                                <ActionIcon color="red" variant="light" size="lg" aria-label="حذف نظر" onClick={() => remove(comment.id)}><IconTrash size={18} /></ActionIcon>
                            </div>
                        </div>
                    </Paper>
                ))}
            </div>
        </div>
    );
}
