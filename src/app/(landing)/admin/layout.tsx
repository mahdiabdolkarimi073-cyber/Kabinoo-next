'use client';;
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import { IconCategory, IconColorFilter, IconCube, IconCash, IconDashboard, IconDiscount, IconList, IconListCheck, IconListDetails, IconListLetters, IconListNumbers, IconMenuOrder, IconMessage, IconUserHeart, IconUsers, IconUserShield, IconVariable } from "@tabler/icons-react";
import { redirect } from "next/navigation";


function Layout(props: any) {
    const user = useUser();
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
                    children: [
                        { label: "کاربران", href: "user", icon: IconUsers },
                        { label: "تیکت ها", href: "ticket", icon: IconUserShield },
                        { label: "مشاوره ها", href: "advice", icon: IconUserHeart },
                        { label: "چت آنلاین", href: "chat", icon: IconMessage },
                    ]
                },
                {
                    label: "سایر تنظیمات",
                    href: "variable",
                    icon: IconVariable,
                    children: [
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