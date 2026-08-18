'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { useState } from "react";
import { Table, TextInput, Button, Badge, Group, ActionIcon, Text } from "@mantine/core";
import Link from "next/link";
import { useDebouncedState } from "@mantine/hooks";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { IconTrash, IconEye } from "@tabler/icons-react";

type Author = {
    id: string;
    name: string;
    email: string;
    nationalCode: string;
    phone: string;
    joined_at: string;
    isAdmin: boolean;
    isAuthor: boolean;
};

export default function Page() {
    const [filters, setFilters] = useDebouncedState<Record<string, string>>({
        name: "",
        _contains: "name",
    }, 500);

    const { data: authors = null, loading } = useBackend<Author[]>(
        "/admin/author?" + new URLSearchParams(
            Object.fromEntries(
                Object.entries(filters).filter(([, v]) => v)
            )
        ).toString()
    );

    const handleRemoveAuthor = async (authorId: string, authorName: string) => {
        try {
            await askConfirm(`آیا می‌خواهید دسترسی نویسندگی "${authorName}" را بگیرید؟`);
            await backend(`/admin/author/${authorId}`, "PUT", { isAuthor: false });
            window.location.reload();
        } catch (error) {
            console.error('Failed:', error);
        }
    };

    if (authors === null) return <Loading />;

    const tableHead = [
        "نام",
        "شماره تماس",
        "ایمیل",
        "کد ملی",
        "تاریخ عضویت",
        "عملیات",
    ];

    const tableBody = authors.map((author: Author) => [
        <Group gap="xs">
            <Text fw={500}>{author.name}</Text>
            {author.isAdmin && <Badge size="xs" color="red">ادمین</Badge>}
        </Group>,
        author.phone || "-",
        author.email || "-",
        author.nationalCode || "-",
        author.joined_at ? new Date(author.joined_at).toLocaleDateString("fa-IR") : "-",
        <Group gap="xs">
            <Link href={`/admin/user/${author.id}`}>
                <ActionIcon variant="light" color="blue" size="sm">
                    <IconEye size={16} />
                </ActionIcon>
            </Link>
            <ActionIcon
                variant="light"
                color="red"
                size="sm"
                onClick={() => handleRemoveAuthor(author.id, author.name)}
            >
                <IconTrash size={16} />
            </ActionIcon>
        </Group>,
    ]);

    return (
        <div className="w-full p-4">
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={600}>مدیریت نویسندگان</Text>
            </Group>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <TextInput
                    label="نام"
                    placeholder="جستجو بر اساس نام..."
                    defaultValue={filters.name}
                    onChange={(e) => setFilters((f) => ({ ...f, name: e.target.value }))}
                />
            </div>
            <div className="relative">
                {loading && (
                    <div className="absolute left-0 top-0 w-full h-full backdrop-blur-lg">
                        <Loading />
                    </div>
                )}
                <Table
                    data={{
                        head: tableHead,
                        body: tableBody,
                    }}
                    striped
                    withColumnBorders
                    highlightOnHover
                />
            </div>
        </div>
    );
}
