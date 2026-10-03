import CustomTable from "@/components/responsive/CustomTable";
import { backend } from "@/utils/api";
import { Table, Badge, Button } from "@mantine/core";



export default async function Page() {
    const [orders, status] = await Promise.all([
        backend<any[]>("/user/order?order=created_at").then(e => e.data || []),
        backend<any[]>("/public/enum?id=OrderStatus").then(e => e.data || [])
    ])
    return (
        <div className="container mx-auto my-10" dir="rtl">
            <h2 className="text-2xl font-bold mb-6">سفارش‌های من</h2>
            <CustomTable
                style={{
                    minWidth: "800px"
                }}
                striped
                highlightOnHover
                data={{

                    head: [
                        "شناسه سفارش",
                        "تاریخ ثبت",
                        "محصولات",
                        "وضعیت",
                        "کد تخفیف",
                        "مبلغ کل",
                        "مبلغ نهایی",
                        "عملیات"
                    ],
                    body: orders.map(order => [
                        order.code,
                        new Date(order.created_at).toLocaleDateString('fa-IR'),
                        order.label,
                        <Badge color={order.status === "PAYMENT" ? "secondary":order.status === "CANCELED" ? "red":"primary"}>{status.find(o => o.key === order.status)?.name || order.status}</Badge>,
                        order.offCode?.percent ? `${order.offCode.id?.slice(0, 5)}... (${order.offCode.percent}%)` : "-",
                        order.totalPrice.toLocaleString('fa'),
                        order.offCode
                            ? (
                                <div>
                                    <span className="text-gray-400 line-through text-sm">
                                        {order.totalPrice.toLocaleString('fa')}
                                    </span>
                                    <Badge color="red" variant="outline" mx={4}>
                                        {order.offCode.percent}%
                                    </Badge>
                                    <span className="font-bold text-primary">
                                        {order.finalPrice.toLocaleString('fa')}
                                    </span>
                                </div>
                            )
                            : <span className="font-bold text-primary">{order.totalPrice.toLocaleString('fa')}</span>,
                        <Button component='a' href={'./order/' + order.id}>
                            جزئیات
                        </Button>
                    ])
                }}
            />
        </div>
    );
}
