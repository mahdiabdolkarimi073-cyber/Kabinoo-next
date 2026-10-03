import { IconAlertCircle, IconCheck, IconCircle, IconFileText, IconUpload } from '@tabler/icons-react';
import React, { useState } from 'react';
import { TextInput, NumberInput, Button } from '@mantine/core';

interface HelpComponentProps {
    checkAmount: number;
    onDone: (id: number, file: File) => void;
    onCancel: () => void,
    check: {
        id: string;
        file?: File | undefined;
        amount: number;
        from: any;
        to: any;
    }
}

export default function HelpComponent({ checkAmount, onDone, onCancel, check }: HelpComponentProps) {
    const [step, setStep] = useState(1);
    const [checkId, setCheckId] = useState<number | ''>();
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const formatAmount = (num: number) => {
        return new Intl.NumberFormat('fa-IR').format(num);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = () => {
        if (checkId && file) {
            onDone(checkId, file);
        }
    };

    const canProceed = () => {
        switch (step) {
            case 1:
                return checkId && checkId.toString().length === 16;
            case 2:
                return true;
            case 3:
                return file !== null;
            default:
                return false;
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg " dir="rtl">
            {/* Progress Steps */}
            <div className='justify-center flex w-full items-center'>
                <div className="flex justify-between mb-8 grow">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center flex-1">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {step > s ? <IconCheck size={20} /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-gray-200'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 1: Check ID */}
            {step === 1 && (
                <div className="space-y-6">
                    <div className="bg-primary/10 border-r-4 border-primary p-4 rounded">
                        <div className="flex items-start gap-3">
                            <IconFileText className="text-primary mt-1 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-2">شناسه صیادی چک را وارد کنید</h3>
                                <p className="text-gray-700 mb-3">
                                    شناسه صیادی چک یک کد 16 رقمی است که در بالای چک نوشته شده است.
                                </p>
                                <div className="bg-white p-3 rounded border border-primary/20">
                                    <p className="text-sm text-gray-600 mb-1">مثال:</p>
                                    <p className="font-mono text-lg">۱۲۳۴ ۱۲۳۴ ۱۲۳۴ ۱۲۳۴</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <TextInput
                            label="شناسه صیادی (16 رقم)"
                            value={checkId}
                            onChange={e => setCheckId(+e?.target?.value || '')}
                            inputMode='numeric'
                            placeholder="1234123412341234"
                            maxLength={16}
                            styles={{
                                input: {
                                    textAlign: 'center',
                                    fontSize: '1.125rem',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'monospace'
                                }
                            }}
                        />
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            {checkId ? checkId.toString().length : 0}/16 رقم
                        </p>
                    </div>
                </div>
            )}

            {/* Step 2: Check Details */}
            {step === 2 && (
                <div className="space-y-6">
                    <div className="bg-primary/10 border-r-4 border-primary p-4 rounded">
                        <div className="flex items-start gap-3">
                            <IconAlertCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-2">اطلاعات چک را وارد کنید</h3>
                                <p className="text-gray-700">
                                    هنگام نوشتن چک، دقت کنید که:
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                    <li>مبلغ به عدد و حروف نوشته شود</li>
                                    <li>نام گیرنده چک را به درستی بنویسید</li>
                                    <li>کد ملی گیرنده را در قسمت مربوطه وارد کنید</li>
                                    <li>تاریخ را به صورت شمسی وارد کنید</li>
                                    <li>چک را امضا کنید</li>
                                    <li>چک خوانا و بدون خط خوردگی باشد</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                            <h4 className="font-bold text-lg mb-4 text-center">مبلغ چک</h4>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-primary mb-2">
                                    {formatAmount(checkAmount * 10)}
                                </p>
                                <p className="text-gray-600">ریال</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                            <h4 className="font-bold text-lg mb-4 text-center">تاریخ چک</h4>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-primary mb-2">
                                    {check.to?.toLocaleDateString('fa').split("/").reverse().join(" / ")}
                                </p>
                                <p className="text-gray-600">شمسی</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                        <h4 className="font-bold text-lg mb-4 text-center">نام گیرنده چک</h4>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-2">
                                مرتضی عسکری
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                        <h4 className="font-bold text-lg mb-4 text-center">کد ملی گیرنده چک</h4>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary mb-2" dir="ltr">
                                2993963971
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Upload */}
            {step === 3 && (
                <div className="space-y-6">
                    <div className="bg-primary/10 border-r-4 border-primary p-4 rounded">
                        <div className="flex items-start gap-3">
                            <IconUpload className="text-primary mt-1 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-2">تصویر چک را آپلود کنید</h3>
                                <p className="text-gray-700">
                                    از چک نوشته شده عکس بگیرید و آن را آپلود کنید. مطمئن شوید که:
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                                    <li>تصویر واضح و خوانا باشد</li>
                                    <li>شناسه صیادی کاملاً مشخص باشد</li>
                                    <li>مبلغ و امضا قابل رویت باشند</li>
                                </ul>
                                <figure className="mt-4 overflow-hidden rounded-lg border border-primary/20 bg-white p-2">
                                    <img
                                        src="/assets/images/help/check.svg"
                                        alt="راهنمای بخش‌های مهم تصویر چک"
                                        className="h-auto w-full rounded-md object-contain"
                                    />
                                    <figcaption className="mt-2 text-center text-xs text-gray-600">
                                        راهنمای بخش‌های مهم چک
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive
                            ? 'border-primary bg-primary/10'
                            : file
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-300 bg-gray-50'
                            }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        {file ? (
                            <div className="space-y-3">
                                <IconCheck className="mx-auto text-green-600" size={48} />
                                <p className="font-medium text-green-700">{file.name}</p>
                                <p className="text-sm text-gray-600">
                                    حجم: {(file.size / 1024).toFixed(2)} کیلوبایت
                                </p>
                                <Button
                                    onClick={() => setFile(null)}
                                    color='red'
                                >
                                    حذف فایل
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <IconCheck className="mx-auto text-gray-400" size={48} />
                                <p className="text-gray-600">
                                    تصویر چک را اینجا بکشید یا کلیک کنید
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer transition-colors"
                                >
                                    انتخاب فایل
                                </label>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 gap-4">
                {step > 1 ? (
                    <Button
                        onClick={() => setStep(step - 1)}
                        variant='outline'
                        size='md'
                    >
                        مرحله قبل
                    </Button>
                ) : (
                    <Button
                        onClick={onCancel}
                        variant='outline'
                        size='md'>
                        بازگشت
                    </Button>
                )}

                <div className="flex-1" />

                {step < 3 ? (
                    <Button
                        onClick={() => setStep(step + 1)}
                        disabled={!canProceed()}
                        size='md'
                    >
                        مرحله بعد
                    </Button>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        disabled={!canProceed()}
                        size='md'
                        color='green'
                    >
                        تایید و ارسال
                    </Button>
                )}
            </div>
        </div>
    );
}