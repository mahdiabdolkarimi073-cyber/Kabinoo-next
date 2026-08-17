'use client';

import Loading from "@/no-side/Loading";
import useBackend from "@/utils/hooks/useBackend";
import { Table, Button, Modal } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const { data: list = [], loading } = useBackend("/admin/advice");
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState<any>(null);

    if (loading) return <Loading />;

    const tableData = {
        head: ["نام", "شماره تماس", "تاریخ ثبت", "عملیات"],
        body: list.map((item: any) => [
            item.name,
            item.phone,
            new Date(item.created_at).toLocaleString("fa-IR"),
            <Button
                size="xs"
                color="primary"
                onClick={() => {
                    setSelected(item);
                    setOpened(true);
                }}
            >
                مشاهده
            </Button>,
        ]),
    };

    return (
        <div className="w-full p-4">
            <Table
                data={tableData}
                striped
                withColumnBorders
                highlightOnHover
            />
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="جزئیات درخواست مشاوره"
                centered
            >
                {selected && (
                    <div className="space-y-4">
                        <div>
                            <b>نام:</b> {selected.name}
                        </div>
                        <div>
                            <b>شماره تماس:</b> {selected.phone}
                        </div>
                        <div>
                            <b>تاریخ ثبت:</b> {new Date(selected.created_at).toLocaleString("fa-IR")}
                        </div>
                        {selected.userId && (
                            <div>
                                <Link href={`/admin/user/${selected.userId}`}>
                                    <Button color="secondary" size="xs">
                                        مشاهده کاربر
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
}