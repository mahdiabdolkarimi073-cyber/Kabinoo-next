'use client';

import { useState } from "react";
import { Card, Text, Textarea, Button, Select, Group, Divider, Alert, Badge } from "@mantine/core";
import { IconSend, IconInfoCircle } from "@tabler/icons-react";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import Loading from "@/no-side/Loading";

export default function Page() {
    const { data: users = [], loading } = useBackend<any[]>("/admin/users");
    const [userId, setUserId] = useState<string | null>(null);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

    if (loading) return <Loading />;

    const selectedUser = users.find((u: any) => u.id === userId);

    const handleSend = async () => {
        if (!userId) { setResult({ ok: false, msg: "یک کاربر را انتخاب کنید" }); return; }
        if (!message.trim()) { setResult({ ok: false, msg: "متن پیام را وارد کنید" }); return; }
        setSending(true);
        setResult(null);
        const res = await backend("/admin/sms", "POST", { userId, message: message.trim() });
        setSending(false);
        if (res.ok) {
            setResult({ ok: true, msg: "پیامک با موفقیت ارسال شد" });
            setMessage("");
            setUserId(null);
        } else {
            setResult({ ok: false, msg: res.error || "ارسال پیامک ناموفق بود" });
        }
    };

    return (
        <div className="p-4 space-y-6" dir="rtl">
            <div>
                <h2 className="text-xl font-bold mb-2">ارسال اطلاعیه پیامکی</h2>
                <Text size="sm" c="dimmed">ارسال پیامک اطلاعیه به یک کاربر انتخابی</Text>
            </div>

            <Card withBorder radius="lg" shadow="sm" padding="lg">
                <div className="space-y-4">
                    <Select
                        label="انتخاب کاربر"
                        placeholder="کاربر مورد نظر را جستجو و انتخاب کنید"
                        data={users.map((u: any) => ({
                            value: u.id,
                            label: `${u.name} - ${u.phone?.() ?? u.phone ?? ""}`,
                        }))}
                        value={userId}
                        onChange={setUserId}
                        searchable
                        clearable
                    />

                    {selectedUser && (
                        <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
                            <Group gap="sm">
                                <Text size="sm">گیرنده:</Text>
                                <Text size="sm" fw={600}>{selectedUser.name}</Text>
                                <Badge variant="light" color="blue">{selectedUser.phone?.() ?? selectedUser.phone}</Badge>
                            </Group>
                        </Alert>
                    )}

                    <Textarea
                        label="متن پیامک"
                        placeholder="متن اطلاعیه را اینجا وارد کنید..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        maxLength={500}
                    />
                    <Text size="xs" c="dimmed" ta="left">{message.length} / 500</Text>

                    {result && (
                        <Alert color={result.ok ? "green" : "red"} variant="light">
                            {result.msg}
                        </Alert>
                    )}

                    <Divider />

                    <Group justify="flex-end">
                        <Button
                            leftSection={<IconSend size={16} />}
                            loading={sending}
                            onClick={handleSend}
                        >
                            ارسال پیامک
                        </Button>
                    </Group>
                </div>
            </Card>
        </div>
    );
}
