import { backend } from "@/utils/api";
import { Badge, Group, Textarea, Button } from "@mantine/core";

const typeLabels: Record<string, string> = {
    PRICE: "برآورد هزینه و مشاوره",
    MODEL: "مدل سه‌بعدی"
};

// Example request data (replace with actual data from backend)


export default async function Page(props: any) {
    const {id} = await props.params;
    const request = await backend("/user/request/"+id).then(e=>e.data);
    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">جزئیات درخواست شما</h2>
            <div className="mb-2"><b>عنوان:</b> {request.title}</div>
            <div className="mb-2"><b>تاریخ ثبت:</b> {new Date(request.created_at).toLocaleDateString('fa-IR')}</div>
            <div className="mb-2"><b>نوع درخواست:</b> {typeLabels[request.type]}</div>
            <div className="mb-2"><b>وضعیت:</b> <Badge color={request.status === "انجام شده" ? "green" : request.status === "رد شده" ? "red" : "yellow"}>{request.status}</Badge></div>
            <div className="mb-2"><b>توضیحات شما:</b></div>
            <Textarea value={request.description} readOnly mb="md" />
            <div className="mb-2"><b>فایل‌های ضمیمه:</b></div>
            <Group gap="xs" mb="md">
                {request.files.length === 0 && <span className="text-gray-500">فایلی ثبت نشده است</span>}
                {request.files.map((file: string, idx: number) => (
                    <Button
                        key={idx}
                        size="xs"
                        color="gray"
                        component="a"
                        href={file}
                        target="_blank"
                    >
                        مشاهده فایل {idx + 1}
                    </Button>
                ))}
            </Group>
            <div className="mb-2"><b>پاسخ ادمین:</b></div>
            <Textarea value={request.answer || "هنوز پاسخی ثبت نشده است."} readOnly mb="md" />
            <Button color="gray" variant="outline" component="a" href="/user/request">
                بازگشت به لیست درخواست‌ها
            </Button>
        </div>
    )
}