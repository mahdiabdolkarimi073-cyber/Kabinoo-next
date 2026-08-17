import CustomTable from "@/components/responsive/CustomTable";
import { backend } from "@/utils/api";
import { Table, Button } from "@mantine/core";



const typeLabels: Record<string, string> = {
    PRICE: "برآورد هزینه و مشاوره",
    MODEL: "مدل سه‌بعدی"
};

export default async function Page() {
    const { data: requests = [] } = await backend<any[]>("/user/request");
    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">درخواست‌های من</h2>
            <CustomTable
                striped
                highlightOnHover
                data={{
                    head: [
                        "عنوان",
                        "تاریخ ثبت",
                        "نوع درخواست",
                        "وضعیت",
                        "تعداد فایل",
                        "عملیات"
                    ],
                    body: requests.map(req => [
                        req.title,
                        new Date(req.created_at).toLocaleDateString('fa-IR'),
                        typeLabels[req.type] || req.type,
                        req.status,
                        req.files.length,
                        <Button
                            size="xs"
                            color="primary"
                            component="a"
                            href={`/user/request/${req.id}`}
                            key={req.id}
                        >
                            مشاهده
                        </Button>
                    ])
                }}
            />
        </div>
    )
}