'use client';

import useBackend from "@/utils/hooks/useBackend";
import Loading from "@/no-side/Loading";
import { Table, Badge, Button } from "@mantine/core";
import Link from "next/link";

const STATUS_BADGE: Record<string, { color: string; label: string }> = {
    OPEN: { color: "yellow", label: "باز" },
    ANSWERED: { color: "primary", label: "پاسخ داده شده" },
    CLOSED: { color: "red", label: "بسته شده" },
};

type Ticket = {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    status: "OPEN" | "ANSWERED" | "CLOSED";
    userId: string;
    user: any
};

export default function Page() {
    const { data: tickets = [], loading } = useBackend<Ticket[]>("/admin/ticket?_include=user");

    if (loading) return <Loading />;

    const tableData = {
        head: ["عنوان", "تاریخ ایجاد","کاربر", "وضعیت", "عملیات"],
        body: tickets.map((ticket) => [
            ticket.title,
            new Date(ticket.created_at).toLocaleString("fa-IR"),
            ticket.user.name,
            <Badge color={STATUS_BADGE[ticket.status]?.color || "gray"}>
                {STATUS_BADGE[ticket.status]?.label || ticket.status}
            </Badge>,
            <Link href={`./ticket/${ticket.id}`}>
                <Button size="xs" color="primary">مشاهده</Button>
            </Link>
        ]),
    };

    return (
        <div className="w-full p-4">
            <Link href={'./ticket/new'}>
                <Button>
                    تیکت جدید
                </Button>
            </Link>
            <br />
            <Table
                data={tableData}
                striped
                withColumnBorders
                highlightOnHover
            />
        </div>
    )
}