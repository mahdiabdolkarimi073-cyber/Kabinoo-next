'use client';

import React from 'react';
import Loading from "@/no-side/Loading";
import {useDelayedEffect} from "@/utils/hooks/useEffects";
import {useRouter, useSearchParams} from "next/navigation";
import {backend} from "@/utils/api";

function Page(props: any) {
    const params = useSearchParams();
    const router = useRouter();

    useDelayedEffect(() => {
        const code = params.get("offCode");
        const address = params.get("address");
        if (!address) {
            router.push(`/user/address?next=create-order&offCode=${code || ""}`);
            return;
        }
        backend("/user/order", "POST", {
            offCode: code,
            addressId: address
        })
            .then(e => {
                if (e.ok) router.push("/user/order/" + e?.data?.id)
                else {
                    alert("خطا در ساخت سفارش")
                    alert(e?.message);
                    router.push("/user/cart");
                }
            })
    }, [params])

    return <Loading text={'درحال ساخت درخواست...'}/>;
}

export default Page;