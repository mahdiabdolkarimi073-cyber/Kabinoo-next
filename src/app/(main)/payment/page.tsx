import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { backend } from '@/utils/api';
import { notFound } from 'next/navigation';

interface PaymentObject {
    id: string;
    token: string | null;
    userId: string;
    created_at: Date;
    paid_at: Date | null;
    price: number;
    redirect: string;
    data: any;
    actions: any[];
}

interface PaymentResultProps {
    searchParams: Record<string, string>;
}

export default async function PaymentResult(props: PaymentResultProps) {
    const { id, message, ...info } = await props.searchParams;
    const payment = await backend("/user/payment/" + id)
        .then(e => e.data)
        .then(e => e as PaymentObject);

    if (!payment) notFound();

    const isSuccess = payment.paid_at !== null;

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    };

    // Extract additional payment info for successful payments
    const refNum = info.RefNum ? decodeURIComponent(info.RefNum) : null;
    const securePan = info.SecurePan;
    const rrn = info.Rrn;
    const traceNo = info.TraceNo;

    return (
        <div className="min-h-screen flex items-center justify-center p-4" dir="rtl">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Section */}
                    <div className={`${isSuccess ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'} p-8 text-center`}>
                        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                            {isSuccess ? (
                                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            {isSuccess ? 'پرداخت موفق' : 'پرداخت ناموفق'}
                        </h1>
                        <p className="text-white text-opacity-90">
                            {isSuccess ? 'تراکنش شما با موفقیت انجام شد' : message || 'متأسفانه تراکنش شما انجام نشد'}
                        </p>
                    </div>

                    {/* Details Section */}
                    <div className="p-8 space-y-6">
                        {/* Amount */}
                        <div className="bg-slate-50 rounded-xl p-5">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600 text-sm">مبلغ پرداختی</span>
                                <div className="text-left">
                                    <span className="text-2xl font-bold text-slate-800">{formatPrice(payment.price)}</span>
                                    <span className="text-slate-500 text-sm mr-2">ریال</span>
                                </div>
                            </div>
                        </div>

                        {/* Transaction Details */}
                        <div className="space-y-3">
                            {isSuccess && payment.paid_at && (
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-600 text-sm">تاریخ پرداخت</span>
                                    <span className="text-slate-800 text-sm font-medium">{formatDate(payment.paid_at)}</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                <span className="text-slate-600 text-sm">شماره تراکنش</span>
                                <span className="text-slate-800 text-sm font-mono truncate max-w-[75%] text-left">{payment.id}</span>
                            </div>

                            {/* Additional payment gateway info for successful payments */}
                            {isSuccess && securePan && (
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-600 text-sm">شماره کارت</span>
                                    <span className="text-slate-800 text-sm font-mono" dir="ltr">{securePan}</span>
                                </div>
                            )}

                            {isSuccess && rrn && (
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-600 text-sm">شماره مرجع</span>
                                    <span className="text-slate-800 text-sm font-mono" dir="ltr">{rrn}</span>
                                </div>
                            )}

                            {isSuccess && traceNo && (
                                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <span className="text-slate-600 text-sm">شماره پیگیری</span>
                                    <span className="text-slate-800 text-sm font-mono" dir="ltr">{traceNo}</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center py-3">
                                <span className="text-slate-600 text-sm">وضعیت</span>
                                <span className={`text-sm font-medium px-3 py-1 rounded-full ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {isSuccess ? 'موفق' : 'ناموفق'}
                                </span>
                            </div>
                        </div>

                        {/* Error Message for Failed Payment */}
                        {!isSuccess && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                <p className="text-red-700 text-sm text-center">
                                    در صورت کسر وجه از حساب شما، مبلغ تا ۷۲ ساعت آینده به حساب شما بازگردانده خواهد شد.
                                </p>
                            </div>
                        )}

                        {/* Action Button */}
                        <Button
                            component={Link}
                            href={payment.redirect}
                            fullWidth
                            size="lg"
                            className="!bg-primary hover:!bg-primary/90 !font-medium shadow-lg hover:shadow-xl"
                        >
                            {isSuccess ? 'مشاهده سفارش' : 'بازگشت به داشبورد'}
                        </Button>
                    </div>
                </div>

                {/* Footer Note */}
                {isSuccess && (
                    <p className="text-center text-slate-500 text-sm mt-6">
                        رسید این تراکنش به ایمیل شما ارسال شد
                    </p>
                )}
            </div>
        </div>
    );
}