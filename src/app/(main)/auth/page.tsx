'use client';

import React, { useState } from 'react';
import { Anchor, Button, Paper, PasswordInput, Spoiler, Stack, Text, TextInput } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { setUserCookie } from './action';
import {waitForPhoneVerification} from "@/app/(main)/auth/phoneVerify";
import {getInput} from "@/utils/ui/modalUtils/getInput";

const LoginSignupForm = () => {
    const params = useSearchParams();
    const [isLogin, setIsLogin] = useState(!params.has("signup"));
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    const setToken = async (token: string | undefined) => {
        setUserCookie(token || window.throw("خطا در لاگین")).then(() => {
            router.push('/user');
        })
    }

    const handleLoginSubmit = async (event: FormData) => {
        setLoading(true);
        const body = Object.fromEntries(event.entries());
        window.backend("/auth/login", "POST", body).then(e => {
            if (!e.ok) return;
            alert("باموفقیت وارد شدید");
            return setToken(e.data?.token);
        }).finally(() => {
            setLoading(false);
        })
    };

    const handleSignupSubmit = async (event: FormData) => {
        setLoading(true);
        const body = Object.fromEntries(event.entries());
        await waitForPhoneVerification(body.phone?.toString());
        body.name = body.firstName + " "+body.lastName;
        window.backend("/auth/signup", "POST", body).then(e => {
            if (!e.ok) return;
            alert("باموفقیت وارد شدید");
            return setToken(e.data?.token);
        }).finally(() => {
            setLoading(false);
        })
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 container mx-auto">
            <div
                className="bg-white shadow-lg flex! flex-col lg:flex-row flex-nowrap gap-5 rounded-lg overflow-hidden"
                style={{
                    maxWidth: "1000px"
                }}
            >
                <div className={'w-full min-w-76 md:w-md p-5 flex-grow mx-auto'}>
                    <h2 className="text-center mb-6" style={{ color: 'var(--primary-color)' }}>
                        {isLogin ? 'ورود' : 'ثبت نام'}
                    </h2>

                    {isLogin ? (
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            handleLoginSubmit(new FormData(e.currentTarget as any)).finally(()=>setLoading(false))
                        }}>
                            <Stack>
                                <TextInput
                                    name='phone'
                                    label="شماره تلفن"
                                    placeholder="شماره تلفن"
                                    required
                                    dir="rtl"
                                />
                                <PasswordInput
                                    label="رمز عبور"
                                    placeholder="رمز عبور خود را وارد کنید"
                                    type="password"
                                    name='password'
                                    required
                                    inputWrapperOrder={['label', "input", "description"]}
                                    description={(
                                        <Button size={'xs'} color={'red'} p={0} py={0} variant={'transparent'} onClick={async ()=>{
                                            const phone = await getInput("شماره تلفن خود را وارد کنید");
                                            await waitForPhoneVerification(phone);
                                            router.push(`./auth/password?phone=${phone}`);
                                        }}>
                                            فراموشی رمز عبور
                                        </Button>
                                    )}
                                    dir="rtl"
                                />
                                <Button loading={loading} type="submit" fullWidth
                                    className="mt-4 bg-primary text-white hover:bg-primary-dark">
                                    ورود
                                </Button>
                            </Stack>
                        </form>
                    ) : (
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            handleSignupSubmit(new FormData(e.currentTarget as any)).finally(()=>setLoading(false))
                        }}>
                            <div className='flex flex-col gap-3'>
                                <TextInput
                                    key={'test'}
                                    label="شماره تلفن"
                                    placeholder="شماره تلفن خود را وارد کنید"
                                    type="phone"
                                    name='phone'
                                    required
                                    dir="rtl"
                                />
                                <div className={'grid grid-cols-2 gap-3'}>
                                    <TextInput
                                        label="نام"
                                        placeholder="نام خود را وارد کنید"
                                        required
                                        dir="rtl"
                                        name="firstName"
                                    />
                                    <TextInput
                                        label="نام خانوادگی"
                                        placeholder="نام خانوادگی خود را وارد کنید"
                                        required
                                        dir="rtl"
                                        name="lastName"
                                    />
                                </div>
                                <TextInput
                                    label="ایمیل (اختیاری)"
                                    placeholder="ایمیل خود را وارد کنید"
                                    dir="rtl"
                                    type='email'
                                    name="email"
                                />
                                <div className={'grid grid-cols-2 gap-3'}>
                                    <PasswordInput
                                        label="رمز عبور"
                                        placeholder="رمز عبور خود را وارد کنید"
                                        type="password"
                                        name='password'
                                        required
                                        dir="rtl"
                                    />
                                    <PasswordInput
                                        label="تکرار رمز عبور"
                                        placeholder="رمز عبور را دوباره وارد کنید"
                                        type="password"
                                        required
                                        dir="rtl"
                                    />
                                </div>
                                <Spoiler showLabel="دارم" hideLabel="" maxHeight={20}>
                                    <TextInput
                                        label="کد معرف"
                                        placeholder="کد معرف دوستان خود را وارد کنید"
                                        dir="rtl"
                                        defaultValue={params.get('ref')?.toString() || ""}
                                        name="refId"
                                    />
                                </Spoiler>
                                <Button loading={loading} type="submit" fullWidth
                                    className="mt-4 bg-secondary text-white hover:bg-secondary-dark">
                                    ثبت نام
                                </Button>
                            </div>
                        </form>
                    )}
                    <br />
                    <Text size="sm" className="mt-6 text-center">
                        {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت نام کرده‌اید؟'}{' '}
                        <Anchor component="button" type="button" onClick={toggleForm}
                            className="text-secondary hover:text-secondary-dark">
                            {isLogin ? 'ثبت نام کنید' : 'وارد شوید'}
                        </Anchor>
                    </Text>
                </div>
                <div className={'hidden lg:block'}>
                    <img
                        src={'/design/sliders/lg-01.jpg'}
                        style={{
                            maxWidth: "600px",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginSignupForm;