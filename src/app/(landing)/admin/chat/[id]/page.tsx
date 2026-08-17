import UserChatComponent from "@/app/(landing)/user/UserChat";
import { backend } from "@/utils/api";
import { Button } from "@mantine/core";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Page(props: any) {
    const { id } = await props.params;
    return (
        <div className='max-w-lg mx-auto my-auto flex flex-col items-center gap-5'>
            <UserChatComponent userId={id} />
        </div>
    );
}