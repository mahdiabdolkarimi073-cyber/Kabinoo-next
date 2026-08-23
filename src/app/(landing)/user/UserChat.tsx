'use client';

import Loading from "@/no-side/Loading";
import { backend } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import useUser from "@/utils/hooks/useUser";
import { useState, useRef, useEffect } from "react";
import { Button, Textarea } from "@mantine/core";
import Link from "next/link";
import { useInterval } from "@/utils/hooks/useEffects";
import { useRouter } from "next/navigation";

export default function UserChatComponent(props: { userId?: string }) {
    const user = useUser(); // may be null
    const { data: chat, loading, refetch } = useBackend<any>("/user/chat" + (props.userId ? "?userId=" + props.userId : ""));
    const [content, setContent] = useState("");
    const [sending, setSending] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const ws = useRef<WebSocket>(undefined);
    const [l, setL] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Initialize messages from backend
    useEffect(() => {
        if (chat?.messages) setMessages(chat.messages);
    }, [chat?.messages]);

    const init = () => {
        const url = new URL(window.backendUrl);
        const websocket = new WebSocket(`${url.protocol === "https:" ? "wss" : "ws"}://${url.host}/user/chat`);
        websocket.onclose = () => init();
        websocket.onmessage = (event) => {
            if (ws.current !== websocket) return;
            try {
                const data = JSON.parse(event.data);
                if (data.type === "message" && data.message) {
                    setMessages(prev => [data.message, ...prev]);
                    if (data.message.isAdmin) {
                        try {
                            new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=').play().catch(() => {});
                        } catch {}
                        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
                            new Notification('پاسخ جدید از پشتیبانی', {
                                body: (data.message.content || '').slice(0, 50),
                                icon: '/logo.png',
                            });
                        }
                    }
                }
            } catch { }
        };
        ws.current = websocket;
    }

    // WebSocket connection
    useEffect(() => {
        if (!chat?.id) return;
        init();
        return () => ws?.current?.close();
    }, [chat?.id]);

    useInterval(() => {
        refetch();
    }, 5000)

    if (!user)
        return (
            <div className="flex flex-col items-center justify-center min-h-40 gap-3">
                <p className='text-xs'>جهت ارتباط با پشتیبانی ابتدا وارد حساب خود شوید</p>
                <Link href="/auth">
                    <Button color="primary" size="xs">ورود به حساب کاربری</Button>
                </Link>
            </div>
        );

    if (loading && !chat) return <Loading />;

    const handleSend = async () => {
        if (!content.trim()) return;
        setSending(true);
        await backend("/user/chat" + (props.userId ? "?userId=" + props.userId : ""), "POST", {
            chatId: chat.id,
            content: content,
        });
        setContent("");
        setSending(false);
        refetch();
    };

    return (
        <div className="w-full max-w-lg h-full max-h-[70vh] mx-auto bg-white rounded-xl shadow p-4 flex flex-col gap-4">
            <div className="font-bold text-lg mb-2">گفتگو با پشتیبانی</div>
            <div className="flex-1 overflow-y-auto flex flex-col-reverse gap-3 bg-gray-50 rounded-lg p-3">
                {messages.length === 0 && (
                    <div className="text-gray-400 text-center py-8">هنوز پیامی ارسال نشده است.</div>
                )}
                {messages.map((msg: any) => (
                    <div
                        key={msg.id}
                        className={`flex flex-col ${msg.isAdmin ? "items-start" : "items-end"}`}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-bold ${msg.isAdmin ? "text-primary" : "text-secondary"}`}>
                                {msg.isAdmin ? "پشتیبانی" : chat?.userId === user?.id && !user.isAdmin ? "شما" : chat?.user?.name || "شما"}
                            </span>
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
                            {(msg.content + "").split("\n").map((o, i) => (
                                <p key={i}>{o}</p>
                            ))}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex flex-col gap-2 relative">
                <Textarea
                    placeholder="پیام خود را بنویسید..."
                    value={content}
                    onChange={e => setContent(e.currentTarget.value)}
                    autosize
                    maxRows={4}
                    disabled={sending}
                    maxLength={100}
                />
                <div className="flex items-center top-0 left-0.5 justify-center h-full absolute  my-auto">
                    <Button
                        size='xs'
                        color="primary"
                        onClick={handleSend}
                        loading={sending}
                        disabled={!content.trim()}
                    >
                        ارسال پیام
                    </Button>
                </div>
            </div>
            {!!props.userId && (
                <div className='flex items-center justify-center'>
                    <Button w='300px' loading={l} onClick={async () => {
                        setL(true);
                        backend("/admin/chat/" + chat.id, "DELETE")
                            .then(() => {
                                router.back();
                            })
                            .finally(() => {
                                setL(false);
                            })
                    }}>
                        پایان مکالمه
                    </Button>
                </div>
            )}
        </div>
    )
}