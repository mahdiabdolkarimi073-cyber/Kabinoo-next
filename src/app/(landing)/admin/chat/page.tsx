'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { Table, Badge, Button } from "@mantine/core";
import Link from "next/link";

export default function Page() {
    const { data: chats = [], loading } = useBackend("/admin/chat?_include=user");

    if (loading) return <Loading />;

    const notAnswered = chats.filter((c: any) => !c.answered);
    const answered = chats.filter((c: any) => c.answered);

    const tableHead = ["کاربر", "تاریخ ایجاد", "آخرین پیام", "وضعیت", "عملیات"];

    const renderRow = (chat: any) => [
        chat.user?.name || "-",
        new Date(chat.created_at).toLocaleString("fa-IR"),
        chat.lastMsg || "-",
        <Badge color={chat.answered ? "primary" : "yellow"}>
            {chat.answered ? "پاسخ داده شده" : "منتظر پاسخ"}
        </Badge>,
        <Link href={`./chat/${chat.userId}`}>
            <Button size="xs" color="primary">مشاهده</Button>
        </Link>
    ];

    return (
        <div className="w-full p-4 space-y-10">
            <div>
                <h2 className="font-bold text-lg mb-2">چت‌های منتظر پاسخ</h2>
                <Table
                    data={{
                        head: tableHead,
                        body: notAnswered.map(renderRow),
                    }}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            </div>
            <div>
                <h2 className="font-bold text-lg mb-2">چت‌های پاسخ داده شده</h2>
                <Table
                    data={{
                        head: tableHead,
                        body: answered.map(renderRow),
                    }}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            </div>
        </div>
    )
}