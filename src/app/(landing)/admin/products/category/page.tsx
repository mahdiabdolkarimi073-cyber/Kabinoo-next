'use client';

import { getInput } from "@/utils/ui/modalUtils/getInput";
import BackendItemHandler from "../color/page";
import { CategoriesLabels } from "@/app/(main)/design/page";
import { FullProduct } from "../type";
import { modals } from "@mantine/modals";
import { useState } from "react";
import { ActionIcon, Button, Select, TextInput } from "@mantine/core";
import generateRandomString from "@/utils/string";
import { uploadFile } from "@/utils/api";
import { IconX } from "@tabler/icons-react";

function Page() {

    return <BackendItemHandler
        api="/admin/product/category"
        name="دسته بندی محصول"
        handle={categoryHandler as any}
    />
}

function categoryHandler(o: FullProduct['category']) {
    return new Promise(r => {
        modals.open({
            title: "مدیریت دسته بندی",
            children: <HandlerComponent default={o} onDone={e => {
                r(e);
                modals.closeAll();
            }} />
        })
    })
}

function HandlerComponent(props: {
    default: any
    onDone: (o: any) => any
}) {
    const [state, setState] = useState<Partial<NonNullable<FullProduct['category']>>>(props.default || {});
    const [loading, setLoading] = useState(false);
    const s = (s: string, v: any) => setState(prev => ({ ...(prev || {}), [s]: v }))

    return (
        <div>
            <TextInput
                label="نام دسته بندی"
                value={state?.name}
                onChange={e => s("name", e.target.value)}
            />
            <Select
                data={CategoriesLabels.map(o => ({
                    label: o.name,
                    value: o.id
                }))}
                label="دسته مربوطه"
                value={state.slug}
                onChange={e => s("slug", e)}
            />
            <input
                id="file"
                hidden
                type='file'
                onChange={e => {
                    const file = e.target.files?.[0] || window.throw("select file");
                    setLoading(true);
                    uploadFile(file, `category/${generateRandomString()}.$EX`)
                        .then(path => {
                            s("image", path);
                        })
                        .finally(() => {
                            setLoading(false)
                        })
                }}
            />
            {state?.image && (
                <div className=''>
                    <div className='relative! h-48 w-48 center mx-auto my-5'>
                        <ActionIcon className='absolute! left-2 top-2' onClick={() => {
                            s("image", null);
                        }}>
                            <IconX />
                        </ActionIcon>
                        <img src={state.image} className='w-full h-full rounded-lg object-cover' />
                    </div>
                </div>
            )}
            <div className='center p-3'>
                <Button loading={loading} onClick={() => {
                    window.document.getElementById("file")?.click();
                }}>
                    انتخاب عکس
                </Button>
            </div>
            <div className="center p-3">
                <Button onClick={() => {
                    props.onDone(state);
                }}>
                    ذخیره
                </Button>
            </div>
        </div>
    )
}

export default Page;