'use client';

import { useEffect, useMemo, useState } from "react";
import { Button, Radio, Group, NumberInput, Select, TextInput, FileInput, Divider, Slider, LoadingOverlay } from "@mantine/core";
import { modals } from "@mantine/modals";
import { backend, uploadFile } from "@/utils/api";
import { askConfirm } from "@/utils/ui/modalUtils/confirm";
import { useRouter } from "next/navigation";
import useBackend from "@/utils/hooks/useBackend";
import moment from 'moment-jalaali';
import HelpComponent from "./CheckHelp";

const paymentGates = [
    { value: "mellat", label: "ملت" },
    { value: "pasargad", label: "پاسارگاد" },
    { value: "meli", label: "ملی" }
];

export default function SinglePayment({ amount, ...order }: { amount: number }) {
    const { data: config = {}, loading: l1 } = useBackend("/public/config");
    const [method, setMethod] = useState<"DIRECT" | "INSTALLMENT">("DIRECT");
    const [gate, setGate] = useState<string | null>(null);
    const [months, setMonths] = useState<number>(2);
    const minPrepay = config?.['MIN_PREPAY_PERCENT'] || 30;
    const [prepayPercent, setPrepayPercent] = useState<number>(minPrepay);
    const [loading, setLoading] = useState(false);
    const [checks, setChecks] = useState<{ id: string; file?: File }[]>([]);
    const maxMonth = config?.['MAX_VAM_CH_COUNT'] || 12;
    const today = useMemo(() => {
        const date = new Date();
        date.setUTCHours(0, 0, 0);
        date.setHours(0, 0, 0, 0);
        return date;
    }, [])
    // Update checks array when months changes
    const handleMonthsChange = (val: number) => {
        val = Math.min(val, maxMonth);
        setMonths(val);
        setChecks(Array.from({ length: val }, (_, i) => checks[i] || { id: "", file: undefined }));
    };

    const handleCheckChange = (idx: number, field: "id" | "file", value: any) => {
        setChecks(prev =>
            prev.map((c, i) =>
                i === idx ? { ...c, [field]: value } : c
            )
        );
    };

    // Calculate amounts
    const prepayAmount = Math.round((amount * prepayPercent) / 100);
    const finalPayAmount = useMemo(() => {
        const a = method === "DIRECT" ? amount : prepayAmount;
        return a + (a / 100 * config?.PAY_FEE)
    }, [order, prepayAmount, amount, config])
    const remainAmount = amount - prepayAmount;
    const checkAmount = months > 0 ? Math.ceil(remainAmount / months) : 0;
    const [currentUpload, setCurrentUpload] = useState<number>();

    const finalChecks = Array.from({ length: Math.max(Math.min(months, maxMonth), 1) }).map((_, idx) => {
        const each = config?.['VAM_CH_MONTH'] || 2;

        const from = moment(today)
            .jDate(1)
            .add(idx * each, 'jMonth');

        const to = moment(today)
            .jDate(1)
            .add((idx + 1) * each, 'jMonth');

        const noFeeMonths = Number(config?.['VAM_NOFEE_MONTH']) || 6;

        const fd = from.toDate();
        const td = to.toDate();
        const includeFee = idx + 1 > noFeeMonths;
        const fee = includeFee ? checkAmount / 100 * (config?.['VAM_FEE'] || 0) : 0;

        return {
            amount: Math.ceil(checkAmount + fee),
            from: fd,
            to: td,
            ...checks[idx]
        }
    });

    useEffect(() => {
        handleMonthsChange(months);
    }, []);

    useEffect(() => {
        if (prepayPercent < minPrepay) setPrepayPercent(minPrepay);
    }, [minPrepay]);

    if (typeof currentUpload !== 'undefined') {
        const check = finalChecks[currentUpload];
        if (!check) {
            setCurrentUpload(undefined);
            return null;
        }
        return (
            <div>
                <HelpComponent
                    onDone={(id, file) => {
                        const idx = currentUpload;
                        setChecks(prev =>
                            prev.map((c, i) =>
                                i === idx ? {
                                    ...c,
                                    file,
                                    id: id + ""
                                } : c
                            )
                        );
                        setCurrentUpload(undefined);
                    }}
                    onCancel={() => {
                        setCurrentUpload(undefined);
                    }}
                    check={check}
                    checkAmount={check?.amount || checkAmount}
                />
            </div>
        )
    }

    return (
        <div className="mx-auto rounded-lg relative bg-white" dir="rtl">
            <LoadingOverlay visible={l1} />
            <div className="mb-4 flex gap-1 flex-wrap">
                <div>مبلغ کل: <span className="font-bold text-primary">{(amount + (amount / 100 * (config.PAY_FEE || 0))).toLocaleString('fa')}</span> تومان</div>
                +
                <div>
                    {config?.PAY_FEE || 0}% کارمزد درگاه
                </div>
            </div>
            <Divider my="md" />
            <Radio.Group
                value={method}
                onChange={setMethod as any}
                label="روش پرداخت"
                name="payment-method"
                mb="md"
            >
                <Group>
                    <Radio value="DIRECT" label="پرداخت نقدی" />
                    <Radio value="INSTALLMENT" label="پرداخت قسطی" />
                </Group>
            </Radio.Group>
            {method === "INSTALLMENT" && (
                <>
                    <div className='max-w-lg flex items-center gap-5'>
                        <NumberInput
                            label="تعداد چک ها"
                            min={1}
                            max={maxMonth}
                            value={months}
                            onChange={handleMonthsChange as any}
                            required
                            mb="md"
                        />
                        <NumberInput
                            label="درصد پیش پرداخت"
                            min={minPrepay}
                            suffix="%"
                            max={95}
                            value={prepayPercent}
                            onBlur={val => setPrepayPercent(Math.min(100, Math.max(minPrepay, Number(val) || minPrepay)))}
                            required
                            description={(
                                <>
                                    <Slider min={minPrepay} max={95} value={prepayPercent} onChange={setPrepayPercent} />
                                    <p>حداقل درصد پیش پرداخت {minPrepay}% میباشد</p>
                                </>
                            )}
                            inputWrapperOrder={[
                                "label",
                                "input",
                                "error",
                                "description"
                            ]}
                            mb="md"
                        />
                    </div>
                    <div className="my-4 flex flex-wrao items-center gap-5">
                        <div>
                            مبلغ پیش پرداخت: <span className="font-bold text-primary">{prepayAmount.toLocaleString('fa')}</span> تومان
                        </div>
                        <div>
                            مبلغ هر چک: <span className="font-bold text-primary">{checkAmount.toLocaleString('fa')}</span> تومان
                        </div>
                    </div>
                    <Divider my="md" label="چک‌ها" />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {finalChecks.map(({ from, to, id, file, amount }, idx) => {

                            return (
                                <div key={idx} className="mb-4 p-3 border border-gray-300 rounded-xl">
                                    <h4 className="mb-2 font-bold">چک {idx + 1}</h4>
                                    <div className={'flex items-center gap-2'}>
                                        <p>از تاریخ</p>
                                        <strong>{from.toLocaleDateString('fa')}</strong>
                                        <p>تا تاریخ</p>
                                        <strong>{to.toLocaleDateString('fa')}</strong>
                                    </div>
                                    <br />
                                    <div className='flex items-center gap-1'>
                                        <div>مبلغ چک: <span className="font-bold text-primary">{amount.toLocaleString('fa')}</span> تومان</div>
                                        {amount !== checkAmount && (
                                            <div>
                                                <p className='text-xs opacity-80'>+ {config?.['VAM_FEE']}% کارمزد</p>
                                            </div>
                                        )}
                                    </div>
                                    <p className='tracking-widest mb-2'>{checks[idx]?.id}</p>
                                    <Button fullWidth onClick={() => {
                                        setCurrentUpload(idx);
                                    }}>
                                        اپلود عکس چک
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='sticky! bottom-0 bg-white p-5 '>
                        <div className='center justify-between! w-full!'>
                            <div>
                                <sub>پیش پرداخت</sub>
                                <h3>{finalPayAmount.toLocaleString('fa')} تومان</h3>
                            </div>
                            <Button loading={loading} onClick={async () => {
                                setLoading(true);
                                const files: string[] = [];

                                for (const check of checks) {
                                    if (!check.id) {
                                        setLoading(false);
                                        window.throw('لطفا شناسه چک های خود را وارد کنید');
                                    }
                                    if (!check.file) {
                                        setLoading(false);
                                        window.throw("لطفا عکس چک های خود را انتخاب کنید");
                                    }
                                    const link = await uploadFile(check.file, `${(order as any).id}-${files.length}.$EX`);
                                    files.push(link);
                                }

                                backend("/user/order/payment", "POST", {
                                    id: (order as any).id,
                                    method: "INSTALLMENT",
                                    checks: finalChecks.map((o, i) => ({
                                        ...o,
                                        file: files[i],
                                        from: o.from.toLocaleString(),
                                        to: o.to.toLocaleString()
                                    })),
                                    prepay: prepayAmount,
                                    checkAmount
                                })
                                    .then(e => {
                                        if (!e.ok) return;
                                        alert('درحال انتقال به درگاه پرداخت...');
                                        window.location.href = e.data?.link || window.throw("خطا در انتقال");
                                    })
                                    .finally(() => {
                                        setLoading(false)
                                    })
                            }} color="green" className='w-32'>
                                ثبت سفارش قسطی
                            </Button>
                        </div>
                    </div>
                </>
            )}
            {method === "DIRECT" && (
                <>
                    <div className="h-70 flex items-center gap-1 justify-center flex-col">
                        <img
                            src="https://www.sep.ir/uploads/1/2022/Sep/06/SEP-NEW-LOGO-104x65.png"
                        />
                        <h4 className='text-primary mt-3'>{finalPayAmount.toLocaleString('fa')}</h4>
                        <h5>
                            تومان
                        </h5>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button loading={loading} color="green" className='w-3/4' onClick={() => {
                            setLoading(true);
                            backend("/user/order/payment", "POST", {
                                id: (order as any).id,
                                method: "DIRECT"
                            }).then(e => {
                                const { payment, link } = e.data || {};
                                if (!link) window.throw("خطا در دریافت لینک پرداخت!");
                                alert("درحال انتقال به درگاه پرداخت...")
                                window.location.href = link;
                            }).finally(() => {
                                setLoading(false);
                            })
                        }}>
                            پرداخت و ثبت سفارش
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export function PaymentButton({ order }: any) {

    return (
        <Button color="primary" w={'100px'} disabled={order.status !== "PAYMENT"} onClick={() => {
            modals.open({
                title: "پرداخت سفارش",
                children: <SinglePayment {...order} amount={order.finalPrice} />,
                size: "xl"
            })
        }}>پرداخت</Button>
    )
}

export function PaymentCancelBtn({ id = '' }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    return (
        <Button
            color="red"
            loading={loading}
            onClick={async () => {
                await askConfirm("آیا میخواهید این سفارش را لغو کنید؟");
                setLoading(true);
                backend("/user/order/cancel", "POST", {
                    id
                })
                    .then((e) => {
                        if (!e.ok) return;
                        alert('لغو شد');
                        router.push('.');
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            }}
        >لغو</Button>
    )
}

function CheckUpload(props: {
    onFile: (file: File) => void,
    amount?: number
}) {

    return (
        <div>

        </div>
    )
}