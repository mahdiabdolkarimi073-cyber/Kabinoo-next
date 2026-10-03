'use client';

import { useState, useEffect, useRef } from 'react';
import { Popover, PopoverDropdown, PopoverTarget } from '@mantine/core';
import { IconMessage2, IconX } from '@tabler/icons-react';
import useUser from '@/utils/hooks/useUser';
import useBackend from '@/utils/hooks/useBackend';
import { useInterval } from '@/utils/hooks/useEffects';
import UserChatComponent from '@/app/(landing)/user/UserChat';
import Link from 'next/link';

export default function LiveChatButton() {
    const user = useUser();
    const { data: chat, refetch } = useBackend<any>("/user/chat");
    const [opened, setOpened] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);
    const lastSeenAdminMsgId = useRef<string | null>(null);

    useInterval(() => {
        if (!opened) refetch();
    }, 3000);

    useEffect(() => {
        if (!chat?.messages) return;
        const adminMsgs = chat.messages.filter((m: any) => m.isAdmin);
        if (adminMsgs.length === 0) {
            setHasUnread(false);
            return;
        }
        const latestAdminMsg = adminMsgs[0];
        if (lastSeenAdminMsgId.current === null) {
            lastSeenAdminMsgId.current = latestAdminMsg.id;
            setHasUnread(false);
        } else if (latestAdminMsg.id !== lastSeenAdminMsgId.current) {
            setHasUnread(true);
        }
    }, [chat?.messages]);

    useEffect(() => {
        if (opened && chat?.messages) {
            const adminMsgs = chat.messages.filter((m: any) => m.isAdmin);
            if (adminMsgs.length > 0) {
                lastSeenAdminMsgId.current = adminMsgs[0].id;
            }
            setHasUnread(false);
        }
    }, [opened, chat?.messages]);

    if (!user) {
        return (
            <div
                className="fixed bottom-4 left-4 lg:bottom-8 lg:left-8 z-50"
            >
                <Link
                    href="/auth"
                    className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:scale-110 transition-transform duration-300"
                >
                    <IconMessage2 size={28} className="lg:hidden" />
                    <IconMessage2 size={32} className="hidden lg:block" />
                </Link>
            </div>
        );
    }

    return (
        <div
            className="fixed bottom-4 left-4 lg:bottom-8 lg:left-8 z-50"
        >
            <Popover
                position="top-start"
                closeOnEscape
                closeOnClickOutside
                opened={opened}
                onChange={setOpened}
                shadow="xl"
            >
                <PopoverTarget>
                    <button
                        className={`flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
                            hasUnread
                                ? 'bg-gradient-to-br from-red-500 to-red-600 animate-bounce'
                                : 'bg-gradient-to-br from-blue-500 to-blue-600'
                        } text-white`}
                    >
                        <IconMessage2 size={28} className="lg:hidden" />
                        <IconMessage2 size={32} className="hidden lg:block" />
                        {hasUnread && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 ring-2 ring-white">
                                !
                            </span>
                        )}
                    </button>
                </PopoverTarget>
                <PopoverDropdown className="shadow-2xl border-2 border-blue-100 w-[90vw] max-w-[380px] p-0 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3">
                        <div className="flex items-center gap-2">
                            <IconMessage2 size={20} />
                            <h3 className="font-bold text-sm">چت آنلاین پشتیبانی</h3>
                        </div>
                        <button
                            onClick={() => setOpened(false)}
                            className="hover:bg-white/20 rounded-lg p-1 transition-colors"
                        >
                            <IconX size={18} />
                        </button>
                    </div>
                    <div className="h-80 md:h-96 bg-white">
                        <UserChatComponent />
                    </div>
                </PopoverDropdown>
            </Popover>
        </div>
    );
}
