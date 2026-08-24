'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Group, NumberInput, Text, Alert, Loader, Center } from '@mantine/core';
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
            baseMultiplier: settings.baseMultiplier,
            installationCost: settings.installationCost,
            designFee: settings.designFee,
            defaultDiscount: settings.defaultDiscount,
            minPrice: settings.minPrice,
        });
        if (res.ok) {
            setSuccess(true);
        } else {
            setError('خطا در ذخیره قیمت‌ها. لطفاً مجدداً تلاش کنید.');
        }
        setSaving(false);
    }

    const priceFields = [
        { key: 'baseMultiplier', label: 'ضریب قیمت پایه', desc: 'ضریب ضرب در قیمت محاسبه شده توسط سیستم طراحی (مثلاً ۱.۲ یعنی ۲۰٪ اضافه)', isPercent: true },
        { key: 'installationCost', label: 'هزینه پایه نصب (تومان)', desc: 'هزینه ثابت نصب که به قیمت طراحی اضافه می‌شود' },
        { key: 'designFee', label: 'هزینه طراحی اختصاصی (تومان)', desc: 'هزینه طراحی اختصاصی که به قیمت طراحی اضافه می‌شود' },
        { key: 'defaultDiscount', label: 'درصد تخفیف پیش‌فرض', desc: 'درصد تخفیف پیش‌فرض برای طرح‌های جدید', isPercent: true },
        { key: 'minPrice', label: 'حداقل قیمت طراحی (تومان)', desc: 'حداقل قیمت قابل قبول برای یک طراحی' },
    ] as const;

    if (loading) {
        return <Center style={{ height: '50vh' }}><Loader size="lg" /></Center>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">مدیریت قیمت‌های طراحی</h1>
            <p className="text-gray-600 mb-6 text-sm">
                این قیمت‌ها در صفحه «طراحی کن» اعمال می‌شوند. با تغییر هر مقدار و کلیک روی «ذخیره»، تنظیمات جدید فوراً اعمال می‌شوند.
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
                                step={field.key === 'baseMultiplier' ? 0.1 : field.key === 'defaultDiscount' ? 5 : 50000}
                                max={field.key === 'baseMultiplier' ? 10 : field.key === 'defaultDiscount' ? 100 : undefined}
                                decimalScale={field.key === 'baseMultiplier' ? 2 : 0}
                                thousandSeparator=","
                            />
                        </div>
                    ))}
                </div>

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
