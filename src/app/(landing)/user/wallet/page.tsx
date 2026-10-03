'use client';

import useUser from "@/utils/hooks/useUser";

export default function WalletPage() {
    const user = useUser();

    if (!user) return null;

    const balance = user.wallet || 0;
    const formattedBalance = new Intl.NumberFormat('fa-IR').format(balance);

    return (
        <div className="container mx-auto my-10" dir="rtl">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">کیف پول</h2>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20 text-center mb-6">
                    <p className="text-gray-600 mb-3">موجودی کیف پول شما</p>
                    <p className="text-4xl font-bold text-primary mb-2">
                        {formattedBalance}
                    </p>
                    <p className="text-gray-600">تومان</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold mb-4">راهنمای کیف پول</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                        <li>موجودی کیف پول شما برای پرداخت‌های آتی استفاده می‌شود.</li>
                        <li>برای شارژ کیف پول با پشتیبانی تماس بگیرید.</li>
                        <li>تراکنش‌های مربوط به کیف پول در همین صفحه نمایش داده خواهند شد.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
