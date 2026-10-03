'use client';

import { useState, useEffect, useRef } from 'react';
import { Popover, Badge, Text, Group, ScrollArea, ActionIcon, Box } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import { backend } from '@/utils/api';
import { useInterval } from '@/utils/hooks/useEffects';

type Notification = {
    id: string;
    title: string;
    content: string;
    read: boolean;
    created_at: string;
};

export default function NotificationBell() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [opened, setOpened] = useState(false);
    const loaded = useRef(false);

    const fetchNotifications = async () => {
        const res = await backend<Notification[]>("/user/notification");
        if (res.ok && res.data) {
            setNotifications(res.data);
            loaded.current = true;
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    useInterval(() => {
        fetchNotifications();
    }, 15000);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleMarkRead = async (id: string) => {
        await backend(`/user/notification/${id}`, "PUT");
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const handleDelete = async (id: string) => {
        await backend(`/user/notification/${id}`, "DELETE");
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <Popover opened={opened} onChange={setOpened} position="bottom-end" width={360} shadow="md">
            <Popover.Target>
                <button
                    className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setOpened(o => !o)}
                >
                    <IconBell size={22} stroke={1.7} className="text-gray-700" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 animate-pulse">
                            {unreadCount.toLocaleString("fa")}
                        </span>
                    )}
                </button>
            </Popover.Target>
            <Popover.Dropdown className="p-0">
                <div className="p-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
                    <Text fw={600} size="sm">اطلاعیه‌ها</Text>
                </div>
                <ScrollArea.Autosize mah={400}>
                    {notifications.length === 0 ? (
                        <Text c="dimmed" ta="center" py={30} size="sm">اطلاعیه‌ای وجود ندارد</Text>
                    ) : (
                        <div className="flex flex-col">
                            {notifications.map(n => (
                                <div
                                    key={n.id}
                                    className={`p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${!n.read ? 'bg-blue-50/50' : ''}`}
                                    onClick={() => { if (!n.read) handleMarkRead(n.id); }}
                                >
                                    <Group justify="space-between" align="flex-start" gap="xs">
                                        <div className="flex flex-col gap-1 flex-1">
                                            <Group gap="xs" align="center">
                                                {!n.read && <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />}
                                                <Text fw={600} size="sm" className={n.read ? 'text-gray-600' : 'text-gray-900'}>{n.title}</Text>
                                            </Group>
                                            <Text size="xs" c="dimmed" lineClamp={2}>{n.content}</Text>
                                            <Text size="10px" c="dimmed">{new Date(n.created_at).toLocaleDateString("fa-IR")}</Text>
                                        </div>
                                        <ActionIcon
                                            size="xs"
                                            color="red"
                                            variant="subtle"
                                            onClick={(e) => { e.stopPropagation(); handleDelete(n.id); }}
                                        >
                                            ×
                                        </ActionIcon>
                                    </Group>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollArea.Autosize>
            </Popover.Dropdown>
        </Popover>
    );
}
