'use client';

import React, {useMemo, useState} from "react";
import BackendItemHandler from "../products/color/page";
import {getInput} from "@/utils/ui/modalUtils/getInput";
import {modals} from "@mantine/modals";
import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    ActionIcon,
    Button,
    Select,
    TextInput
} from "@mantine/core";
import generateRandomString from "@/utils/string";
import {backend, uploadFile} from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import {IconEdit, IconPlus, IconTrash} from "@tabler/icons-react";
import ActionList from "@/components/responsive/ActionList";
import {askConfirm} from "@/utils/ui/modalUtils/confirm";

type Cat = {
    name: string,
    parentId: string | null,
    children: Cat[],
    id: string
}

export default function Page() {
    const {data: categories = [], refetch} = useBackend<Cat[]>("/public/portfolio/categories?_include=children");
    const allCats = useMemo(() => {
        const childs = categories.map(parent => parent.children.map(o => ({
            ...o,
            name: `${parent.name} - ${o.name}`
        }))).flat();
        return [
            ...categories.map(o => ({
                ...o,
                children: undefined
            }))
            , ...childs
        ];
    }, [categories])
    const addCategory = async (parentId?: string,edit?: string) => {
        const name = await getInput("نام دسته بندی را وارد کنید");
        await backend(`/admin/portfolio/category${edit ? "/"+edit:""}`, edit ? "PUT":"POST", {
            name,
            parentId
        }).then(refetch)
    }

    const delCategory = async (id: string) => {
        await askConfirm("آیا میخواهید این دسته بندی را حذف کنید؟");
        await backend(`/admin/portfolio/category/${id}`, "DELETE")
            .then(refetch);
    }

    return (
        <>
            <div className={'flex flex-col gap-3'}>
                <div className={'flex items-center gap-3'}>
                    <h3>دسته بندی ها</h3>
                    <Button className={'text-sm flex gap-2'} onClick={()=>addCategory()}>
                        <IconPlus/>
                        <p className={'text-sm'}>دسته بندی</p>
                    </Button>
                </div>
                <Accordion className={'grid grid-cols-1 xl:grid-cols-3 gap-5'}>
                    {categories.map(category => (
                        <div>
                            <AccordionItem value={category.id} className={'bg-white rounded-2xl overflow-hidden'}>
                                <AccordionControl>
                                    <div className={'flex gap-3 items-center'}>
                                        <p>{category.name} ({category.children?.length})</p>
                                        <ActionList actions={[
                                            {
                                                icon: IconPlus,
                                                onClick: () => addCategory(category.id)
                                            },
                                            {
                                                icon: IconEdit,
                                                color: "secondary",
                                                onClick: () => addCategory(undefined, category.id)
                                            },
                                            {
                                                icon: IconTrash,
                                                onClick: () => delCategory(category.id),
                                                color: "red"
                                            }
                                        ]} wide/>
                                    </div>
                                </AccordionControl>
                                <AccordionPanel>
                                    <div className={'flex flex-col gap-3'}>
                                        {category.children.map(cat => (
                                            <div key={cat.id} className={'center justify-between! gap-3'}>
                                                <p>{cat.name}</p>
                                                <ActionIcon color={'red'} variant={'outline'}
                                                            onClick={() => delCategory(cat.id)}>
                                                    <IconTrash size={17}/>
                                                </ActionIcon>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </div>
                    ))}
                </Accordion>
            </div>
            <br/>
            <br/>
            <BackendItemHandler
                api="/admin/portfolio"
                name="نمونه کار"
                handle={async e => {
                    return new Promise(r => {
                        modals.open({
                            title: "مدیریت نمونه کار",
                            children: (
                                <ManageItems item={e} categories={allCats} onEnd={r}/>
                            )
                        })
                    })
                }}
            />
        </>
    );
}

function ManageItems({categories, item, onEnd}: {
    categories: any[],
    item: any,
    onEnd: (item: any) => void
}) {
    const [loading, setLoading] = useState(false);
    return (
        <form action={async data => {
            setLoading(true);
            try {
                let image = item?.image;
                const obj = Object.fromEntries(data.entries());
                if (!!obj['file'] && !!(obj['file'] as File)?.size) {
                    image = await uploadFile(obj['file'] as File, `portfolio/${generateRandomString()}.$EX`);
                }

                const final = Object.fromEntries(Object.entries({
                    ...item || {},
                    ...obj,
                    image
                }).filter(o => typeof o[0] !== 'object'))
                onEnd(final);
                modals.closeAll();
            } catch {
                setLoading(false);
            }
        }}>
            <Select
                required
                defaultValue={item?.categoryId}
                label='دسته بندی'
                data={categories?.map((o: any) => ({
                    label: o?.name,
                    value: o?.id
                }))}
                name='categoryId'
            />
            <br/>
            <TextInput
                required
                label="نام نمونه کار"
                defaultValue={item?.name}
                name='name'
            />
            <br/>
            <input hidden id="file" name='file' type="file" onChange={_e => {
                setLoading(true);
                _e.target.closest("form")?.requestSubmit();
            }}/>
            {item?.image && (
                <img src={item.image} className='w-32 h-32 object-cover'/>
            )}
            <br/>
            <div className="flex gap-3">
                <Button loading={loading} onClick={(e) => {
                    document.getElementById("file")?.click();
                }}>
                    انتخاب عکس
                </Button>
                <Button disabled={!item?.image || loading} type='submit'>
                    ذخیره
                </Button>
            </div>
        </form>
    );
}