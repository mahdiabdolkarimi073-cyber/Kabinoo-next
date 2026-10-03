'use client';

import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { useState, useRef } from "react";
import { Badge, Button, Textarea, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useInterval } from "@/utils/hooks/useEffects";

const STATUS_BADGE: Record<string, { color: string; label: string }> = {
    OPEN: { color: "yellow", label: "باز" },
    ANSWERED: { color: "primary", label: "پاسخ داده شده" },
    CLOSED: { color: "red", label: "بسته شده" },
};

export default function Page(props: any) {
    const { id } = props.params;
    const router = useRouter();

    // New ticket mode
    const [title, setTitle] = useState("");
    const [creating, setCreating] = useState(false);

    // Message state for existing ticket
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Only fetch ticket if not "new"
    const { data: ticket, loading, refetch } = useBackend<any>(`/user/ticket/${id}`);

    useInterval(() => {
        refetch();
    }, 10 * 1000);

    // Create new ticket
    const handleCreate = async () => {
        if (!title.trim()) return;
        setCreating(true);
        const res = await backend("/user/ticket", "POST", { title });
        setCreating(false);
        if (res.ok && res.data?.id) {
            router.replace(`./${res.data.id}`);
        } else {
            window.alert(res.message || "خطا در ایجاد تیکت");
        }
    };

    // Send message for existing ticket
    const handleSend = async () => {
        if (!message.trim()) return;
        setSending(true);
        const res = await backend("/user/ticket/message", "POST", {
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

    // New ticket UI
    if (id === "new") {
        return (
            <div className="w-full max-w-md mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">ایجاد تیکت جدید</h2>
                <TextInput
                    label="عنوان تیکت"
                    placeholder="عنوان تیکت را وارد کنید"
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                    className="mb-4"
                    disabled={creating}
                />
                <Button
                    color="primary"
                    onClick={handleCreate}
                    loading={creating}
                    disabled={!title.trim()}
                    className="w-full"
                >
                    ایجاد تیکت
                </Button>
            </div>
        );
    }

    // Existing ticket UI
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

            <div className="bg-white rounded-xl shadow p-4 mb-6 max-h-[50vh] overflow-y-auto flex flex-col-reverse gap-4">
                {ticket.messages?.length === 0 && (
                    <div className="text-gray-400 text-center py-8">پیامی وجود ندارد.</div>
                )}
                <div className='flex flex-col gap-4'>
                    {ticket.messages?.map((msg: any) => (
                        <div
                            key={msg.id}
                            className={`flex flex-col ${msg.isAdmin ? "items-start" : "items-end"}`}
                        >
                            <div className="flex items-center gap-2 mb-1">
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
                </div>
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