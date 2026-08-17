'use client';

import {useState} from "react";
import {backend} from "@/utils/api";
import {Button, PasswordInput, Text} from "@mantine/core";
import {notifications} from "@mantine/notifications";
import {useRouter} from "next/navigation";
import {setUserCookie} from "@/app/(main)/auth/action";

export default function ResetPassword(props: {
    phone: string,
    onSuccess?: () => void
}) {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [errors, setErrors] = useState({
        password: "",
        repeatPassword: ""
    });

    const validate = () => {
        const newErrors = {
            password: "",
            repeatPassword: ""
        };

        if (!password) {
            newErrors.password = "رمز عبور را وارد کنید";
        } else if (password.length < 6) {
            newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
        }

        if (!repeatPassword) {
            newErrors.repeatPassword = "تکرار رمز عبور را وارد کنید";
        } else if (password !== repeatPassword) {
            newErrors.repeatPassword = "رمز عبور و تکرار آن یکسان نیستند";
        }

        setErrors(newErrors);
        return !newErrors.password && !newErrors.repeatPassword;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        try {
            const res = await backend("/auth/password", "POST", {
                phone: props.phone,
                password: password
            });

            if (res.ok) {
                notifications.show({
                    title: "موفق",
                    message: "رمز عبور با موفقیت تغییر کرد",
                    color: "green"
                });
                setPassword("");
                setRepeatPassword("");
                if (props.onSuccess) {
                    props.onSuccess?.();
                } else {
                    setUserCookie(res?.data?.token || window.throw("خطا در لاگین")).then(() => {
                        router.push('/user');
                    })
                }
            }
        } catch (e) {
            notifications.show({
                title: "خطا",
                message: "خطا در ارسال درخواست",
                color: "red"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
            <Text size="sm" c="dimmed" className="text-center">
                رمز عبور جدید برای شماره {props.phone}
            </Text>

            <PasswordInput
                label="رمز عبور جدید"
                placeholder="حداقل ۶ کاراکتر"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({...errors, password: ""});
                }}
                error={errors.password}
                disabled={loading}
                required
                dir="rtl"
            />

            <PasswordInput
                label="تکرار رمز عبور"
                placeholder="رمز عبور را مجددا وارد کنید"
                value={repeatPassword}
                onChange={(e) => {
                    setRepeatPassword(e.target.value);
                    setErrors({...errors, repeatPassword: ""});
                }}
                error={errors.repeatPassword}
                disabled={loading}
                required
                dir="rtl"
            />

            <Button
                type="submit"
                loading={loading}
                disabled={loading}
                fullWidth
                className="mt-2"
            >
                تغییر رمز عبور
            </Button>
        </form>
    );
}