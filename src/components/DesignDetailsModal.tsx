'use client';

import { Modal, Image as MantineImage, Text, Badge, Button, Group, Divider } from "@mantine/core";
import { useState } from "react";
import { parseDesignData, DesignSpecsTable } from "@/utils/designSpecs";
import { CategoriesLabels } from "@/app/(main)/design/page";

export default function DesignDetailsModal({
    design,
    opened,
    onClose,
    user,
}: {
    design: any;
    opened: boolean;
    onClose: () => void;
    user?: any;
}) {
    if (!design) return null;
    const spec = parseDesignData(design.data);
    const categoryName = CategoriesLabels.find(o => o.id === design.slug)?.name || spec?.categoryName || design.slug;

    return (
        <Modal opened={opened} onClose={onClose} title={`جزئیات طراحی: ${design.name}`} size="lg" dir="rtl">
            <div className="flex flex-col gap-4">
                {design.image && (
                    <MantineImage
                        src={design.image}
                        alt={design.name}
                        fit="contain"
                        className="rounded-lg border border-gray-200"
                        h={240}
                    />
                )}

                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between border-b border-gray-100 py-1">
                        <span className="text-gray-500">نام طراحی:</span>
                        <span className="font-medium">{design.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-1">
                        <span className="text-gray-500">دسته‌بندی:</span>
                        <span className="font-medium">{categoryName}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-1">
                        <span className="text-gray-500">قیمت:</span>
                        <span className="font-medium">{design.price?.toLocaleString?.('fa') || '-'} تومان</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-1">
                        <span className="text-gray-500">تاریخ ثبت:</span>
                        <span className="font-medium">{new Date(design.created_at).toLocaleDateString('fa-IR')}</span>
                    </div>
                    {user && (
                        <div className="flex justify-between border-b border-gray-100 py-1 col-span-2">
                            <span className="text-gray-500">کاربر:</span>
                            <span className="font-medium">{user.name} - {user.phone}</span>
                        </div>
                    )}
                </div>

                {spec && (
                    <>
                        <Divider my="xs" label="مشخصات فنی" labelPosition="center" />
                        <DesignSpecsTable specs={spec.specs} />
                    </>
                )}

                <Group justify="flex-end" mt="md">
                    <Button variant="light" component="a" href={`/design?id=${design.id}`}>
                        مشاهده در طراحی کن
                    </Button>
                </Group>
            </div>
        </Modal>
    );
}
