'use client';

import ActionList from "@/components/responsive/ActionList";
import { backend, uploadFile } from "@/utils/api";
import useBackend from "@/utils/hooks/useBackend";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { getInput } from "@/utils/ui/modalUtils/getInput";
import { Button, ColorInput, ColorPicker, ColorSwatch, FileInput, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import { ReactNode, useState } from "react";

function BackendItemHandler<T extends ({ id: string | number, name?: string } & Record<any, any>)>(props: {
    api: string,
    render?: (o: T) => ReactNode,
    handle?: (o?: T) => Promise<Partial<T>>,
    name: string,
    onUpdate?: ()=>void
}) {
    const {
        name = "رنگ",
        api = "/admin/product/colors",
        handle = async (o) => {
            return api.includes("colors") ? handleColor(o as any) : {
                ...(o || {}),
                name: await getInput(`نام ${name} مورد نظر را وارد کنید`, undefined, [o?.name || ""])
            }
        },
        render = item => {

            return (
                <div key={item.id} className="p-4 border border-gray-400 rounded-2xl center justify-between!"
                    style={api.includes("colors") ? { backgroundColor: item.hex } : {}}
                >
                    <p className="truncate">{item.name}</p>
                    <ActionList
                        actions={[
                            {
                                label: "ویرایش",
                                onClick: async () => {
                                    const updated = await handle?.(item);
                                    if (updated) {
                                        await backend(`${api}/${item.id}`, "PUT", updated);
                                        refetch();
                                    }
                                }
                            },
                            {
                                label: "حذف",
                                onClick: async () => {
                                    if (await askConfirm("آیا مطمئن هستید؟")) {
                                        await backend(`${api}/${item.id}`, "DELETE");
                                        refetch();
                                    }
                                },
                                color: "red"
                            }
                        ]}
                        wide
                    />
                </div>
            )
        }
    } = props;
    const { data, loading, refetch: refetchItems } = useBackend<T[]>(api);

    const refetch = ()=>{
        props?.onUpdate?.();
        refetchItems();
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Button onClick={async () => {
                const o = await handle?.(undefined);
                if (o) {
                    await backend(api, "POST", o);
                    refetch();
                }
            }}>
                ساخت {name} جدید
            </Button>
            <br />
            <br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
                {data?.map(render)}
            </div>
            {!data?.length && (
                <div>
                    موردی یافت نشد
                </div>
            )}
        </div>
    )
}

type ColorObj = {
    hex?: string,
    name: string,
    src?: string
}
const handleColor = (defaultColor: ColorObj): Promise<ColorObj> => {

    // uploadFile(file, `category/${generateRandomString()}.$EX`);// JUST FOR HELP ONLY
    //     .then(path => {
    //         s("image", path);
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })

    return new Promise(r => {
        modals.open({
            title: "میدیریت رنگ",
            children: <ColorManagement default={defaultColor} onDone={e => {
                r(e);
                modals.closeAll();
            }} />
        })
    })
}


export function ColorManagement({ default: defaultColor, onDone }: { default?: ColorObj, onDone: (c: ColorObj) => void }) {
    const [name, setName] = useState(defaultColor?.name || "");
    const [hex, setHex] = useState(defaultColor?.hex || "#ffffff");
    const [src, setSrc] = useState<string | undefined>(defaultColor?.src);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (file: File) => {
        setUploading(true);
        try {
            const path = await uploadFile(file, `color/${file.name}.$EX`);
            setSrc(path);
        } finally {
            setUploading(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={e => {
                e.preventDefault();
                onDone({ ...defaultColor, name, hex, src });
            }}
        >
            <TextInput
                label="نام رنگ"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                required
            />
            <div className='center flex-col! gap-2'>
                <ColorSwatch color={hex} size='40' />
                <ColorPicker
                    value={hex}
                    onChange={setHex}
                    format="hex"
                    swatches={["#fff", "#000", "#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"]}
                    className="mx-auto"
                />
            </div>
            <FileInput
                label="تصویر رنگ (اختیاری)"
                accept="image/*"
                value={file}
                onChange={async (f) => {
                    setFile(f);
                    if (f) await handleUpload(f);
                }}
                disabled={uploading}
            />
            {src && (
                <div className="flex items-center center gap-2">
                    <img src={src} alt="color" className="w-16 h-16 rounded border" />
                </div>
            )}
            <Button type="submit" color="primary" loading={uploading}>
                ذخیره
            </Button>
        </form>
    );
}

export default BackendItemHandler;