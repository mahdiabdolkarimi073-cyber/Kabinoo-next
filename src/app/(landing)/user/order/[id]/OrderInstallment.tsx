import { Button, Badge } from "@mantine/core";

export default function OrderInstallment({ order }: { order: any }) {
    if (!order.checks?.length) {
        return null;
    }

    return (
        <>
            <h3 className="text-lg font-bold mb-4 mt-8">اطلاعات پرداخت اقساطی</h3>
            
            {/* Payment Info */}
            {order.payment && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border border-blue-100">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex justify-start gap-5 items-center">
                            <span className="text-slate-600 text-sm">پیش پرداخت</span>
                            <h6 className="font-bold text-lg">
                                {order.payment.price.toLocaleString('fa')} تومان
                            </h6>
                        </div>
                        {order.payment.paid_at && (
                            <div className="flex justify-start items-center gap-5">
                                <span className="text-slate-600 text-sm">تاریخ پرداخت</span>
                                <span className="text-sm font-medium">
                                    {new Date(order.payment.paid_at).toLocaleDateString('fa-IR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-5 text-amber-950">
                <div className="font-bold mb-1">راهنمای ارسال اطلاعات چک</div>
                <p className="text-sm leading-6">تصویر چک باید کاملاً خوانا، کامل و بدون خط‌خوردگی باشد. اطلاعات چک، مبلغ و تاریخ‌ها را پیش از ارسال بررسی کنید.</p>
            </div>
            {(order.address?.receiver || order.user?.nationalCode) && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-5">
                    <div className="text-sm text-slate-500 mb-2">هویت گیرنده سفارش</div>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 font-medium">
                        {order.address?.receiver && <span>گیرنده: {order.address.receiver}</span>}
                        {order.user?.nationalCode && <span>شناسه ملی گیرنده: {order.user.nationalCode}</span>}
                    </div>
                </div>
            )}
            <h4 className="text-md font-bold mb-4">چک‌های ارسالی</h4>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {order.checks.map((check: any) => {
                    const now = new Date();
                    const isExpired = new Date(check.expire_at) < now;
                    const isApproved = check.status === 'APPROVED';
                    const isRejected = check.status === 'REJECTED';
                    const isActive = isApproved && new Date(check.start_at) <= now && !isExpired;
                    const isPending = !isApproved && !isRejected;

                    // Calculate remaining days until expiry
                    const expiryDate = new Date(check.expire_at);
                    const diffTime = expiryDate.getTime() - now.getTime();
                    const remainingDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

                    return (
                        <div key={check.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                            {/* Check Image */}
                            {check.image && (
                                <div className="relative h-64 bg-slate-100">
                                    <img
                                        src={check.image}
                                        alt={`چک شماره ${check.checkId}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Check Details */}
                            <div className="p-5 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-sm text-slate-600 mb-1">شماره چک</div>
                                        <div className="font-bold text-lg font-mono" dir="ltr">{check.checkId}</div>
                                    </div>
                                    <Badge
                                        color={isRejected || isExpired ? 'red' : isActive ? 'green' : 'blue'}
                                        variant="light"
                                    >
                                        {isRejected ? 'رد شده' : isExpired ? 'منقضی شده' : isApproved ? (isActive ? 'تایید شده' : 'تایید شده و آینده') : 'در انتظار تایید'}
                                    </Badge>
                                </div>

                                <div className="space-y-2 pt-2 border-t border-slate-100">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm">مبلغ چک</span>
                                        <span className="font-bold text-primary">
                                            {check.amount.toLocaleString('fa')} تومان
                                        </span>
                                    </div>

                                    {!isExpired && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600 text-sm">روز باقی‌مانده</span>
                                            <span className={`text-sm font-bold ${remainingDays <= 7 ? 'text-red-600' : remainingDays <= 30 ? 'text-orange-600' : 'text-green-600'}`}>
                                                {remainingDays.toLocaleString('fa')} روز
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm">تاریخ شروع</span>
                                        <span className="text-sm font-medium">
                                            {new Date(check.start_at).toLocaleDateString('fa-IR')}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm">تاریخ انقضا</span>
                                        <span className="text-sm font-medium">
                                            {new Date(check.expire_at).toLocaleDateString('fa-IR')}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 text-sm">تاریخ ثبت</span>
                                        <span className="text-sm">
                                            {new Date(check.created_at).toLocaleDateString('fa-IR')}
                                        </span>
                                    </div>
                                </div>

                                {/* Download Button */}
                                {check.image && (
                                    <Button
                                        component="a"
                                        href={check.image}
                                        download={`check-${check.checkId}.png`}
                                        target="_blank"
                                        variant="light"
                                        fullWidth
                                        size="sm"
                                        className="mt-3"
                                    >
                                        دانلود تصویر چک
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}