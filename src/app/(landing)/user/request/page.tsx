import CustomTable from "@/components/responsive/CustomTable";
import { backend } from "@/utils/api";
import { Table, Button } from "@mantine/core";

const defaultTypeLabels: Record<string, string> = {
    PRICE: "برآورد هزینه و مشاوره",
    MODEL: "مدل سه‌بعدی"
};

async function getTypeLabels(): Promise<Record<string, string>> {
    try {
        const res = await backend<any>("/public/requestType?enabled=true");
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        if (list.length > 0) {
            const map: Record<string, string> = {};
            list.forEach((t: any) => { map[t.key] = t.label; });
            return { ...defaultTypeLabels, ...map };
        }
    } catch {}
    return defaultTypeLabels;
}

export default async function Page() {
    const [requests, typeLabels] = await Promise.all([
        backend<any[]>("/user/request").then(e => e.data || []),
        getTypeLabels(),
    ]);
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
                    body: requests.map((req: any) => [
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
