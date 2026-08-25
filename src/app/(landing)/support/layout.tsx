'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import useBackend from "@/utils/hooks/useBackend";
import { IconMessage, IconPhoneCall, IconStar, IconUserEdit, IconTicket, IconDashboard } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { redirect } from "next/navigation";
import { useInterval } from "@/utils/hooks/useEffects";

function Layout(props: any) {
    const user = useUser();
    const { data: chats = [], refetch } = useBackend<any[]>("/support/chat?_include=user");

    useInterval(() => {
        refetch();
    }, 5000);

    const unansweredCount = chats.filter((c: any) => !c.answered).length;
    const chatBadge = unansweredCount > 0 ? (
        <Badge color="red" size="sm" variant="filled" className="animate-pulse">
            {unansweredCount.toLocaleString("fa")}
        </Badge>
    ) : undefined;

    if (!user) return null;
    if (!user.isAdmin && !user.isSupport) redirect("/");

    return (
        <Dashboard
            title='پنل پشتیبانان'
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                    showList: true,
                },
                {
                    label: "چت‌های آنلاین",
                    href: "chat",
                    icon: IconMessage,
                    badge: chatBadge,
                },
                {
                    label: "درخواست‌های مشاوره تلفنی",
                    href: "advice",
                    icon: IconPhoneCall,
                },
                {
                    label: "نظرات کاربران",
                    href: "comment",
                    icon: IconStar,
                },
                {
                    label: "تیکت‌ها",
                    href: "ticket",
                    icon: IconTicket,
                    children: [
                        { label: "لیست تیکت‌ها", href: "ticket", icon: IconTicket },
                    ]
                },
                {
                    label: "ویرایش اطلاعات کاربران",
                    href: "users",
                    icon: IconUserEdit,
                },
                {
                    label: "ویرایش اطلاعات",
                    href: "profile",
                    icon: IconUserEdit,
                },
            ]}
            prefix="support"
        />
    )
}

export default Layout;
