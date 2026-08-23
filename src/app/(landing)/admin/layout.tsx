'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import useBackend from "@/utils/hooks/useBackend";
import { IconCategory, IconColorFilter, IconCube, IconCash, IconDashboard, IconDiscount, IconList, IconListCheck, IconListDetails, IconListLetters, IconListNumbers, IconMenuOrder, IconMessage, IconUserHeart, IconUsers, IconUserShield, IconVariable, IconNotebook } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { redirect } from "next/navigation";
import { useInterval } from "@/utils/hooks/useEffects";


function Layout(props: any) {
    const user = useUser();
    const { data: chats = [], refetch } = useBackend<any[]>("/admin/chat?_include=user");

    useInterval(() => {
        refetch();
    }, 5000);

    const unansweredCount = chats.filter((c: any) => !c.answered).length;
    const chatBadge = unansweredCount > 0 ? (
        <Badge color="red" size="sm" variant="filled" className="animate-pulse">
            {unansweredCount.toLocaleString("fa")}
        </Badge>
    ) : undefined;

    if (!user?.isAdmin) redirect("/");
    return (
        <Dashboard
            title='پنل ادمین'
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                    showList: true,
                },
                {
                    label: "محصولات",
                    href: "products",
                    icon: IconList,
                    children: [
                        { label: "لیست محصولات", href: "products", icon: IconList },
                        { label: "متریال محصولات", href: "products/material", icon: IconCube },
                        { label: "جزئیات محصولات", href: "products/detail", icon: IconListDetails },
                        { label: "رنگ های محصولات", href: "products/color", icon: IconColorFilter },
                        { label: "دسته بندی محصولات", href: "products/category", icon: IconCategory },
                    ]
                },
                {
                    label: "نمونه کارها",
                    href: "portfolio",
                    icon: IconListLetters
                },
                {
                    label: "سفارشات و درخواست‌ها",
                    href: "order",
                    icon: IconListCheck,
                    children: [
                        { label: "سفارشات", href: "order", icon: IconListCheck },
                        { label: "درخواست های طراحی", href: "request", icon: IconListNumbers },
                    ]
                },
                {
                    label: "کاربران و ارتباطات",
                    href: "user",
                    icon: IconUsers,
                    badge: chatBadge,
                    children: [
                        { label: "کاربران", href: "user", icon: IconUsers },
                        { label: "نویسندگان", href: "author", icon: IconNotebook },
                        { label: "تیکت ها", href: "ticket", icon: IconUserShield },
                        { label: "مشاوره ها", href: "advice", icon: IconUserHeart },
                        { label: "چت آنلاین", href: "chat", icon: IconMessage, badge: chatBadge },
                    ]
                },
                {
                    label: "سایر تنظیمات",
                    href: "variable",
                    icon: IconVariable,
                    children: [
                        { label: "محتوای صفحه اصلی", href: "homepage", icon: IconDashboard },
                        { label: "متغیر ها", href: "variable", icon: IconVariable },
                        { label: "کد های تخفیف", href: "offCodes", icon: IconDiscount },
                        { label: "قیمت‌های محاسبه‌گر", href: "prices", icon: IconCash },
                    ]
                },
            ]}
            prefix="admin"
        />
    )
}

export default Layout;
