'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Group, NumberInput, Text, Alert, Loader, Center, Divider } from '@mantine/core';
import { backend } from '@/utils/api';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

interface DesignPriceSettings {
    id: number;
    baseMultiplier: number;
    installationCost: number;
    designFee: number;
    defaultDiscount: number;
    minPrice: number;
    updatedAt: string;
}

export default function DesignPriceSettingsPage() {
    const [settings, setSettings] = useState<Partial<DesignPriceSettings> | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    async function fetchSettings() {
        setLoading(true);
        const res = await backend<DesignPriceSettings>('/admin/designPrice', 'GET');
        if (res.ok && res.data) {
            setSettings(res.data);
        } else {
            setError('خطا در دریافت قیمت‌ها. لطفاً صفحه را مجدداً بارگذاری کنید.');
        }
        setLoading(false);
    }

    async function handleSave() {
        if (!settings) return;
        setSaving(true);
        setSuccess(false);
        setError(null);
        const res = await backend('/admin/designPrice', 'PUT', {
            baseMultiplier: settings.baseMultiplier ?? 1,
            installationCost: settings.installationCost ?? 0,
            designFee: settings.designFee ?? 0,
            defaultDiscount: settings.defaultDiscount ?? 0,
            minPrice: settings.minPrice ?? 0,
        });
        if (res.ok) {
            setSuccess(true);
            if (res.data) setSettings(prev => ({ ...prev, ...res.data }));
        } else {
            setError('خطا در ذخیره قیمت‌ها. لطفاً مجدداً تلاش کنید.');
        }
        setSaving(false);
    }

    const priceFields = [
        { key: 'baseMultiplier', label: 'ضریب پایه قیمت', desc: 'ضریب ضرب در محاسبه قیمت نهایی طراحی' },
        { key: 'installationCost', label: 'هزینه نصب (تومان)', desc: 'هزینه ثابت نصب برای هر سفارش طراحی' },
        { key: 'designFee', label: 'هزینه طراحی (تومان)', desc: 'دستمزد طراحی برای هر سفارش' },
        { key: 'defaultDiscount', label: 'تخفیف پیش‌فرض (٪)', desc: 'درصد تخفیف پیش‌فرض اعمال شده روی قیمت طراحی' },
        { key: 'minPrice', label: 'حداقل قیمت (تومان)', desc: 'حداقل قیمت قابل قبول برای یک سفارش طراحی' },
    ] as const;

    if (loading) {
        return <Center style={{ height: '50vh' }}><Loader size="lg" /></Center>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">مدیریت قیمت‌های طراحی</h1>
            <p className="text-gray-600 mb-6 text-sm">
                قیمت‌های زیر در صفحه طراحی کنترل‌پنل اعمال می‌شوند. با تغییر هر قیمت و کلیک روی «ذخیره»، قیمت‌های جدید فوراً در محاسبه طراحی اعمال می‌شوند.
            </p>

            {success && (
                <Alert icon={<IconCheck size={16} />} color="green" variant="light" className="mb-4">
                    قیمت‌ها با موفقیت ذخیره شدند.
                </Alert>
            )}
            {error && (
                <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light" className="mb-4">
                    {error}
                </Alert>
            )}

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {priceFields.map((field) => (
                        <div key={field.key}>
                            <Text fw={600} size="sm" mb={4}>{field.label}</Text>
                            <Text size="xs" c="gray.5" mb={8}>{field.desc}</Text>
                            <NumberInput
                                value={settings?.[field.key] ?? 0}
                                onChange={(val) => {
                                    const num = Number(val) || 0;
                                    setSettings(prev => prev ? { ...prev, [field.key]: num } : prev);
                                }}
                                min={0}
                                step={field.key === 'baseMultiplier' || field.key === 'defaultDiscount' ? 0.1 : 50000}
                                thousandSeparator=","
                                parser={(value) => value?.replace(/[^\d.]/g, '') || ''}
                                formatter={(value) => Number(value).toLocaleString('en-US')}
                            />
                        </div>
                    ))}
                </div>

                <Divider my="lg" />

                <Group justify="flex-end" mt="xl">
                    <Button onClick={handleSave} loading={saving} size="md">
                        ذخیره قیمت‌ها
                    </Button>
                </Group>
            </Card>

            <Text size="xs" c="gray.5" mt="md">
                آخرین بروزرسانی: {settings?.updatedAt ? new Date(settings.updatedAt).toLocaleString('fa-IR') : '—'}
            </Text>
        </div>
    );
}
