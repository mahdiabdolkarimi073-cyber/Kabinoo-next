import { sleep } from "@/no-side/utils";
import { backend } from "@/utils/api";
import { Button, NumberInput, TextInput } from "@mantine/core";
import { revalidatePath } from "next/cache";

export default async function Page() {
    const [Enum = [], all = []] = await Promise.all([
        backend("/public/enum?id=VariableKey").then(e => e.data as { key: string, name: string }[]),
        backend("/admin/global/variable").then(e => e.data as any[]) 
    ]);

    return (
        <div className='gap-3 flex flex-col'>
            {Enum.map(item => {
                const v = all.find(o => o.key === item.key)?.value;
                return (
                    <form className='flex flex-col gap-1' action={async e => {
                        'use server';
                        const R = await backend("/admin/global/variable", typeof v !== 'undefined' ? "PUT" : "POST", {
                            key: item.key,
                            value: +(e.get('value') + "")
                        })
                        
                        revalidatePath("./")
                    }}>
                        <TextInput
                            label={item.name}
                            defaultValue={v}
                            name='value'
                        />
                        <div>
                            <Button size='sm' type='submit'>
                                ذخیره
                            </Button>
                        </div>
                    </form>
                )
            })}
        </div>
    );
}