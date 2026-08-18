'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Group, NumberInput, Text, Alert, Loader, Center } from '@mantine/core';
import { backend } from '@/utils/api';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

interface PriceSettings {
    id: number;
    mdfPrice: number;
    highglassPrice: number;
    vacuumPrice: number;
    colorPrice: number;
    fridgeCost: number;
    dishwasherCost: number;
    laundryCost: number;
    wallCabinetCost: number;
    wallCabinetSteppedCost: number;
    hoodCost: number;
    hoodHiddenCost: number;
    ovenCost: number;
    ovenBuiltInCost: number;
    updatedAt: string;
}

export default function PriceSettingsPage() {
    const [settings, setSettings] = useState<Partial<PriceSettings> | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    async function fetchSettings() {
        setLoading(true);
        const res = await backend<PriceSettings>('/admin/calcPrice', 'GET');
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
        const res = await backend('/admin/calcPrice', 'PUT', {
            mdfPrice: settings.mdfPrice,
            highglassPrice: settings.highglassPrice,
            vacuumPrice: settings.vacuumPrice,
            colorPrice: settings.colorPrice,
            fridgeCost: settings.fridgeCost,
            dishwasherCost: settings.dishwasherCost,
            laundryCost: settings.laundryCost,
            wallCabinetCost: settings.wallCabinetCost,
            wallCabinetSteppedCost: settings.wallCabinetSteppedCost,
            hoodCost: settings.hoodCost,
            hoodHiddenCost: settings.hoodHiddenCost,
            ovenCost: settings.ovenCost,
            ovenBuiltInCost: settings.ovenBuiltInCost,
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
        { key: 'mdfPrice', label: 'قیمت ام‌دی‌اف (تومان)', desc: 'قیمت هر متر کابینت ام‌دی‌اف' },
        { key: 'highglassPrice', label: 'قیمت های‌گلاس (تومان)', desc: 'قیمت هر متر کابینت های‌گلاس' },
        { key: 'vacuumPrice', label: 'قیمت وکیوم / ممبران (تومان)', desc: 'قیمت هر متر کابینت وکیوم' },
        { key: 'colorPrice', label: 'قیمت رنگ پلی‌اورتان (تومان)', desc: 'قیمت هر متر کابینت رنگ پلی‌اورتان' },
        { key: 'fridgeCost', label: 'هزینه جای یخچال (تومان)', desc: 'هزینه اضافه برای هر ۸۰ سانتی‌متر فضای یخچال' },
        { key: 'dishwasherCost', label: 'هزینه جای ماشین ظرفشویی (تومان)', desc: 'هزینه اضافه برای فضای ماشین ظرفشویی' },
        { key: 'laundryCost', label: 'هزینه جای ماشین لباسشویی (تومان)', desc: 'هزینه اضافه برای فضای ماشین لباسشویی' },
        { key: 'wallCabinetCost', label: 'هزینه کمد دیواری ساده (تومان)', desc: 'هزینه اضافه برای کمد دیواری ساده' },
        { key: 'wallCabinetSteppedCost', label: 'هزینه کمد دیواری پله‌ای (تومان)', desc: 'هزینه اضافه برای کمد دیواری پله‌ای' },
        { key: 'hoodCost', label: 'هزینه هود روکار (تومان)', desc: 'هزینه اضافه برای هود روکار' },
        { key: 'hoodHiddenCost', label: 'هزینه هود مخفی (تومان)', desc: 'هزینه اضافه برای هود مخفی' },
        { key: 'ovenCost', label: 'هزینه فر و ماکروفر روکار (تومان)', desc: 'هزینه اضافه برای فر و ماکروفر روکار' },
        { key: 'ovenBuiltInCost', label: 'هزینه فر و ماکروفر توکار (تومان)', desc: 'هزینه اضافه برای فر و ماکروفر توکار' },
    ] as const;

    if (loading) {
        return <Center style={{ height: '50vh' }}><Loader size="lg" /></Center>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">مدیریت قیمت‌های محاسبه‌گر</h1>
            <p className="text-gray-600 mb-6 text-sm">
                قیمت‌های زیر در صفحه محاسبه‌گر نمایش داده می‌شوند. با تغییر هر قیمت و کلیک روی «ذخیره»، قیمت‌های جدید فوراً در محاسبه‌گر اعمال می‌شوند.
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
                                step={50000}
                                thousandSeparator=","
                                parser={(value) => value?.replace(/[^\d]/g, '') || ''}
                                formatter={(value) => Number(value).toLocaleString('en-US')}
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
