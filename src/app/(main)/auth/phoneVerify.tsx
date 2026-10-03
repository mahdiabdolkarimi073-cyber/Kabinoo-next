'use client';

import {getInput} from "@/utils/ui/modalUtils/getInput";
import {modals} from "@mantine/modals";
import {useEffect, useState} from "react";
import {useDelayedEffect} from "@/utils/hooks/useEffects";
import {backend} from "@/utils/api";
import {Button, Loader, PinInput, Text} from "@mantine/core";
import {notifications} from "@mantine/notifications";

export async function waitForPhoneVerification(phone?: string) {
    phone ||= await getInput("شماره تلفن خود را وارد کنید");
    return new Promise((r,rej) => {
        modals.open({
            title: "تایید شماره تلفن",
            children: <PhoneVerify phone={phone} onVerified={() => {
                modals.closeAll();
                r(true);
            }}/>,
            onClose: ()=>{
                rej("Closed");
            },
            closeOnClickOutside: true,
            closeOnEscape: true
        })
    })
}

export function PhoneVerify(props: {
    phone: string,
    onVerified: Function
}) {
    const [phone, setPhone] = useState(props.phone);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(0);
    const [checkingCode, setCheckingCode] = useState(false);

    const checkIsVerified = async ()=>{
        const {ok} = await backend(`/auth/verify?check=true&phone=${phone}`);
        if (ok) {
            props.onVerified();
        }
        return ok;
    }

    const sendCode = async ()=>{
        setLoading(true);
        try {
            const res = await backend(`/auth/verify?phone=${phone}`);
            if (res.ok) {
                setResendTimer(300); // 5 minutes in seconds
            } else {
                notifications.show({
                    title: "خطا",
                    message: "خطا در ارسال کد",
                    color: "red"
                });
            }
        } catch (e) {
            notifications.show({
                title: "خطا",
                message: "خطا در ارسال کد",
                color: "red"
            });
        } finally {
            setLoading(false);
        }
    }

    const check = async (verifyCode: string) => {
        if (verifyCode.length !== 6) return;

        setCheckingCode(true);
        try {
            const res = await backend(`/auth/verify?phone=${phone}&code=${verifyCode}`, "POST");
            if (res.ok) {
                return await checkIsVerified();
            }
        } catch (e) {
            notifications.show({
                title: "خطا",
                message: "خطا در تایید کد",
                color: "red"
            });
            return false;
        } finally {
            setCheckingCode(false);
        }
    }

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => {
                setResendTimer(resendTimer - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    useDelayedEffect(()=>{
        sendCode().catch(console.error);
    }, [phone])

    useDelayedEffect(()=>{
        checkIsVerified().catch(console.error);
    }, [phone])


    useEffect(() => {
        if (code.length === 6) {
            check(code);
        }
    }, [code]);

    return (
        <div className="flex flex-col items-center gap-6 py-4">
            {/* Phone Display */}
            <div className="flex items-center gap-2">
                <Text size="sm" c="dimmed">
                    کد تایید به شماره
                </Text>
                <Text size="sm" fw={600}>
                    {phone}
                </Text>
                <Text size="sm" c="dimmed">
                    ارسال شد
                </Text>
            </div>

            {/* Code Input */}
            <div className="flex flex-col items-center gap-2">
                <PinInput
                    length={6}
                    value={code}
                    onChange={setCode}
                    type="number"
                    size="lg"
                    disabled={checkingCode || loading}
                    dir="ltr"
                />
                {checkingCode && (
                    <div className="flex items-center gap-2">
                        <Loader size="xs" />
                        <Text size="xs" c="dimmed">
                            در حال بررسی...
                        </Text>
                    </div>
                )}
            </div>

            {/* Resend Button */}
            <div className="flex flex-col items-center gap-2">
                {resendTimer > 0 ? (
                    <Text size="sm" c="dimmed">
                        ارسال مجدد کد تا {formatTime(resendTimer)}
                    </Text>
                ) : (
                    <Button
                        variant="light"
                        onClick={sendCode}
                        disabled={loading}
                        loading={loading}
                    >
                        ارسال مجدد کد
                    </Button>
                )}
            </div>
        </div>
    )
}