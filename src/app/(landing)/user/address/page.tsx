'use client';

import { useEffect, useState } from "react";
import { TextInput, Button, Group, Divider, NumberInput } from "@mantine/core";
import useBackend from "@/utils/hooks/useBackend";
import { backend } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type Address = {
    id: string;
    userId: string;
    address: string;
    receiver: string;
    state: string;
    city: string;
    phone: string;
    phone2?: string;
    user?: {
        id: string;
        name: string;
    },
    postal?: string
};

// Example initial data
const initialAddresses: Address[] = [
    {
        id: "1",
        userId: "u1",
        address: "خیابان آزادی، پلاک ۱۲",
        receiver: "علی رضایی",
        state: "تهران",
        city: "تهران",
        phone: "09120000000",
        phone2: "02112345678",
        user: { id: "u1", name: "علی رضایی" }
    }
];

export default function UserAddresses(props: {
    viewonly?: boolean,
    address?: Address
}) {
    const { data: addresses = [], refetch } = props?.address ? { data: [props.address], refetch: (() => { }) } : useBackend<Address[]>("/user/address");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState<Partial<Address>>({});
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState<Address['id']>()
    const router = useRouter();
    const params = useSearchParams();
    const next = params.get("next");
    const selectMode = !!next;

    const reload = () => {
        setEditingId(null);
        setAdding(false);
        setLoading(false);
        refetch();
    }

    const handleEdit = (address: Address) => {
        setEditingId(address.id);
        setForm(address);
        setAdding(false);
    };

    const handleDelete = async (id: string) => {
        await askConfirm("آیا میخواهید این آدرس را حذف کنید؟")
        backend("/user/address/" + id, "DELETE").finally(reload)
    };

    const handleSave = () => {
        backend("/user/address", editingId ? "PUT" : "POST", form).finally(reload)
    };

    useEffect(() => {
        setSelected(addresses[0]?.id);
    }, [addresses])

    return (
        <div className={props.viewonly ? "" : "max-w-xl mx-auto my-10 p-6 rounded-lg"} dir="rtl">
            <div className={'flex items-center gap-2 mb-6'}>
                <h2 className="text-2xl font-bold">{props.address ? "آدرس" : "آدرس‌های من"}</h2>
                {props.viewonly && (
                    <Link href={'/user/address'}>
                        <Button size={'xs'}>
                            ویرایش
                        </Button>
                    </Link>
                )}
            </div>
            {!props.viewonly && (
                <Divider mb="md" />
            )}
            {!adding && !editingId && (
                <>
                    {addresses.length === 0 && <div className="text-gray-500 mb-4">آدرسی ثبت نشده است.</div>}
                    {addresses.map(address => (
                        <div key={address.id} className={`mb-4 p-4 border rounded-lg ${selectMode ? `${selected === address.id ? "bg-accent/50 border-accent" : "border-gray-300"}` : "border-gray-300 "}`}>
                            <div><b>گیرنده:</b> {address.receiver}</div>
                            <div><b>استان:</b> {address.state} <b>شهر:</b> {address.city}</div>
                            <div><b>آدرس:</b> {address.address}</div>
                            <div><b>کدپستی:</b> {address.postal}</div>
                            <div><b>تلفن:</b> {address.phone} {address.phone2 && <>| <b>تلفن دوم:</b> {address.phone2}</>}</div>
                            {!props.viewonly && (
                                <Group gap="xs" mt="md">
                                    {selectMode && (
                                        <Button onClick={() => setSelected(address.id)} color={'accent'} size={'xs'}>
                                            {selected === address.id ? "انتخاب شده" : "انتخاب"}
                                        </Button>
                                    )}
                                    <Button size="xs" color="primary" onClick={() => handleEdit(address)}>ویرایش</Button>
                                    <Button size="xs" loading={loading} color="red" onClick={() => handleDelete(address.id)}>حذف</Button>
                                </Group>
                            )}
                        </div>
                    ))}
                    <div className={'flex flex-col lg:flex-row items-center gap-3 mt-2'}>
                        {!props.viewonly && (
                            <Button color="accent" fullWidth onClick={() => { setAdding(true); setForm({}); }}>افزودن آدرس جدید</Button>
                        )}
                        {selectMode && (
                            <Button disabled={!selected} fullWidth color={'primary'} onClick={() => {
                                if (!selected) return;

                                const nextParams = new URLSearchParams(params);
                                nextParams.set("address", selected);
                                nextParams.delete("next");
                                router.push(`./${next}?${nextParams.toString()}`);
                            }}>
                                ادامه خرید
                            </Button>
                        )}
                    </div>
                </>
            )}

            {(adding || editingId) && (
                <form
                    className="p-4 border border-gray-300 rounded-lg mb-4"
                    onSubmit={e => { e.preventDefault(); handleSave(); }}
                >
                    <TextInput
                        label="گیرنده"
                        value={form.receiver || ""}
                        onChange={e => setForm(f => ({ ...f, receiver: e.target.value }))}
                        required
                        name='receiver'
                        mb="sm"
                    />
                    <TextInput
                        label="استان"
                        name='state'
                        value={form.state || ""}
                        onChange={e => setForm(f => ({ ...f, state: e.target.value }))}
                        required
                        mb="sm"
                    />
                    <TextInput
                        label="شهر"
                        name='city'
                        value={form.city || ""}
                        onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                        required
                        mb="sm"
                    />
                    <TextInput
                        label="آدرس"
                        name='address'
                        value={form.address || ""}
                        onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                        required
                        mb="sm"
                    />
                    <TextInput
                        name='phone'
                        label="تلفن"
                        value={form.phone || ""}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        required
                        mb="sm"
                    />
                    <TextInput
                        label="تلفن دوم (اختیاری)"
                        name='phone2'
                        value={form.phone2 || ""}
                        onChange={e => setForm(f => ({ ...f, phone2: e.target.value }))}
                        mb="sm"
                    />
                    <NumberInput
                        label="کدپستی"
                        required
                        name='postalCode'
                        value={form.postal || ""}
                        onChange={e => setForm(f => ({ ...f, postal: e+"" }))}
                        mb="sm"
                    />
                    <Group gap="xs" mt="md">
                        <Button loading={loading} type="submit" color="green">{editingId ? "ذخیره" : "افزودن"}</Button>
                        <Button color="gray" variant="outline" onClick={() => { setEditingId(null); setAdding(false); setForm({}); }}>انصراف</Button>
                    </Group>
                </form>
            )}
        </div>
    )
}