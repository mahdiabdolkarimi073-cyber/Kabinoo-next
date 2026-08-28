'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import { IconDashboard, IconContract, IconListCheck, IconUsers, IconCalendarTime, IconAlertTriangle, IconUserEdit, IconSpeakerphone, IconClipboardList } from "@tabler/icons-react";
import { redirect } from "next/navigation";

function Layout(props: any) {
    const user = useUser();

    if (!user) return null;
    if (!user.isAdmin && !user.isContractManager) redirect("/");

    return (
        <Dashboard
            title='پنل مدیریت قراردادها'
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                },
                {
                    label: "درخواست‌های طراحی",
                    href: "request",
                    icon: IconClipboardList,
                },
                {
                    label: "قراردادها",
                    href: "contract",
                    icon: IconContract,
                },
                {
                    label: "اقساط",
                    href: "installments",
                    icon: IconCalendarTime,
                    children: [
                        { label: "لیست اقساط", href: "installments", icon: IconCalendarTime },
                        { label: "اقساط معوق", href: "installments/late", icon: IconAlertTriangle },
                    ]
                },
                {
                    label: "مشتریان",
                    href: "users",
                    icon: IconUsers,
                },
                {
                    label: "اعلان به مشتریان",
                    href: "announcement",
                    icon: IconSpeakerphone,
                },
                {
                    label: "ویرایش اطلاعات",
                    href: "profile",
                    icon: IconUserEdit,
                },
            ]}
            prefix="contract-manager"
        />
    )
}

export default Layout;
