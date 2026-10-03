'use client';

import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { useState, useRef } from "react";
import { Badge, Button, Textarea } from "@mantine/core";
import { useInterval } from "@/utils/hooks/useEffects";

const STATUS_BADGE: Record<string, { color: string; label: string }> = {
    OPEN: { color: "yellow", label: "باز" },
    ANSWERED: { color: "primary", label: "پاسخ داده شده" },
    CLOSED: { color: "red", label: "بسته شده" },
};

export default function Page(props: any) {
    const { id } = props.params;
    const { data: ticket, loading, refetch } = useBackend<any>(`/admin/ticket/${id}`);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!message.trim()) return;
        setSending(true);
        const res = await backend("/admin/ticket/message", "POST", {
            ticketId: id,
            content: message,
        });
        setSending(false);
        if (res.ok) {
            setMessage("");
            refetch();
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            window.alert(res.message || "خطا در ارسال پیام");
        }
    };

    if (loading || !ticket) return <Loading />;

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold">{ticket.title}</h2>
                    <Badge color={STATUS_BADGE[ticket.status]?.color || "gray"}>
                        {STATUS_BADGE[ticket.status]?.label || ticket.status}
                    </Badge>
                </div>
                <div className="text-gray-500 text-sm">
                    ایجاد شده در: {new Date(ticket.created_at).toLocaleString("fa-IR")}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 mb-6 max-h-[50vh] overflow-y-auto flex flex-col gap-4">
                {ticket.messages?.length === 0 && (
                    <div className="text-gray-400 text-center py-8">پیامی وجود ندارد.</div>
                )}
                {ticket.messages?.map((msg: any) => (
                    <div
                        key={msg.id}
                        className={`flex flex-col ${msg.isAdmin ? "items-start" : "items-end"}`}
                    >
                        <div className={`flex items-center gap-2 mb-1`}>
                            <Badge color={msg.isAdmin ? "primary" : "secondary"}>
                                {msg.isAdmin ? "پشتیبانی" : "شما"}
                            </Badge>
                            <span className="text-xs text-gray-400">
                                {new Date(msg.created_at).toLocaleString("fa-IR")}
                            </span>
                        </div>
                        <div
                            className={`rounded-xl px-4 py-2 text-base max-w-[80%] break-words ${msg.isAdmin
                                    ? "bg-primary/10 text-primary border border-primary"
                                    : "bg-secondary/10 text-secondary border border-secondary"
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {ticket.status !== "CLOSED" && (
                <div className="flex flex-col gap-2">
                    <Textarea
                        placeholder="پیام خود را بنویسید..."
                        value={message}
                        onChange={e => setMessage(e.currentTarget.value)}
                        minRows={3}
                        maxRows={6}
                        className="w-full"
                        disabled={sending}
                    />
                    <div className="flex justify-end">
                        <Button
                            color="primary"
                            onClick={handleSend}
                            loading={sending}
                            disabled={!message.trim()}
                        >
                            ارسال پیام
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}