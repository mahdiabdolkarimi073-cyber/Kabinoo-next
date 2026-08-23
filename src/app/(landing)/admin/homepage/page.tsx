import { backend } from "@/utils/api";
import { Button, Checkbox, NumberInput, TextInput, Textarea } from "@mantine/core";
import { revalidatePath } from "next/cache";

interface HomepageContent {
    id: number;
    key: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonLabel: string;
    buttonHref: string;
    enabled: boolean;
    sortOrder: number;
}

export default async function Page() {
    const response = await backend<HomepageContent[]>("/admin/homepage");
    const content = response.ok && response.data ? response.data : [];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">مدیریت صفحه اصلی</h1>
                <p className="text-sm text-gray-600 mt-2">متن‌ها، تصویرها و دکمه‌های صفحه اصلی را از این بخش تغییر دهید.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
                {content.sort((a, b) => a.sortOrder - b.sortOrder).map((item) => (
                    <form
                        key={item.id}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3"
                        action={async (formData) => {
                            "use server";
                            await backend(`/admin/homepage/${item.id}`, "PUT", {
                                title: String(formData.get("title") || ""),
                                subtitle: String(formData.get("subtitle") || ""),
                                description: String(formData.get("description") || ""),
                                image: String(formData.get("image") || ""),
                                buttonLabel: String(formData.get("buttonLabel") || ""),
                                buttonHref: String(formData.get("buttonHref") || ""),
                                enabled: formData.get("enabled") === "on",
                                sortOrder: Number(formData.get("sortOrder") || 0),
                            });
                            revalidatePath("/admin/homepage");
                            revalidatePath("/");
                        }}
                    >
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="font-bold text-lg">{item.key}</h2>
                            <Checkbox label="نمایش داده شود" name="enabled" defaultChecked={item.enabled} />
                        </div>
                        <TextInput label="عنوان" name="title" defaultValue={item.title} required />
                        <TextInput label="زیرعنوان" name="subtitle" defaultValue={item.subtitle} />
                        <Textarea label="توضیحات" name="description" defaultValue={item.description} minRows={3} />
                        <TextInput label="آدرس تصویر" name="image" defaultValue={item.image} />
                        <div className="grid grid-cols-2 gap-3">
                            <TextInput label="متن دکمه" name="buttonLabel" defaultValue={item.buttonLabel} />
                            <TextInput label="آدرس دکمه" name="buttonHref" defaultValue={item.buttonHref} />
                        </div>
                        <NumberInput label="ترتیب نمایش" name="sortOrder" defaultValue={item.sortOrder} min={0} />
                        <Button type="submit">ذخیره تغییرات</Button>
                    </form>
                ))}
            </div>
        </div>
    );
}
