'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { Table, Badge, Button } from "@mantine/core";
import Link from "next/link";
import { useInterval } from "@/utils/hooks/useEffects";

export default function Page() {
    const { data: chats = [], loading, refetch } = useBackend("/support/chat?_include=user");

    useInterval(() => {
        refetch();
    }, 5000);

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
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-bold text-lg">چت‌های منتظر پاسخ</h2>
                    {notAnswered.length > 0 && (
                        <Badge color="red" size="lg" variant="filled" className="animate-pulse">
                            {notAnswered.length.toLocaleString("fa")} پیام جدید
                        </Badge>
                    )}
                </div>
                {notAnswered.length === 0 ? (
                    <p className="text-gray-500 text-sm py-4">پیام جدیدی وجود ندارد.</p>
                ) : (
                    <Table
                        data={{
                            head: tableHead,
                            body: notAnswered.map(renderRow),
                        }}
                        striped
                        withColumnBorders
                        highlightOnHover
                    />
                )}
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
