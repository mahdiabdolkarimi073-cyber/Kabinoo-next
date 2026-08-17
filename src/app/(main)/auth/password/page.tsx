import React from 'react';
import ResetPassword from "@/app/(main)/auth/password/ResetPassword";

async function Page(props: any) {
    const {phone} = await props.searchParams;
    return (
        <div className={'max-w-sm mx-auto my-20'}>
            <ResetPassword phone={phone} />
        </div>
    );
}

export default Page;