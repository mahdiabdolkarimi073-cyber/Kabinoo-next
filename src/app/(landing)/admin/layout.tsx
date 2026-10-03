'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import useBackend from "@/utils/hooks/useBackend";
import { IconCategory, IconColorFilter, IconCube, IconCash, IconDashboard, IconDiscount, IconList, IconListCheck, IconListDetails, IconListLetters, IconListNumbers, IconMessage, IconUserHeart, IconUsers, IconUserShield, IconVariable, IconNotebook, IconSettings, IconHome, IconContract, IconBook, IconChartBar, IconCheck, IconSpeakerphone, IconCreditCard, IconShoppingBag, IconReceipt, IconBell, IconFile, IconHeadphones } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { redirect } from "next/navigation";
import { useInterval } from "@/utils/hooks/useEffects";
import { useRef, useEffect } from "react";


function Layout(props: any) {
    const user = useUser();
    const { data: chats = [], refetch } = useBackend<any[]>("/admin/chat?_include=user");
    const prevUnansweredCount = useRef(0);

    useInterval(() => {
        refetch();
    }, 5000);

    const unansweredCount = chats.filter((c: any) => !c.answered).length;

    useEffect(() => {
        if (unansweredCount > prevUnansweredCount.current && prevUnansweredCount.current !== 0) {
            try {
                new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=').play().catch(() => {});
            } catch {}
        }
        prevUnansweredCount.current = unansweredCount;
    }, [unansweredCount]);

    const chatBadge = unansweredCount > 0 ? (
        <Badge color="red" size="sm" variant="filled" className="animate-pulse">
            {unansweredCount.toLocaleString("fa")}
        </Badge>
    ) : undefined;

    if (!user?.isAdmin) redirect("/");
    return (
        <Dashboard
            title='پنل مدیریت'
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                },
                {
                    label: "آمار سایت",
                    href: "stats",
                    icon: IconChartBar,
                },
                {
                    label: "فروشگاه و محصولات",
                    href: "products",
                    icon: IconList,
                    children: [
                        { label: "لیست محصولات", href: "products", icon: IconList },
                        { label: "دسته‌بندی محصولات", href: "products/category", icon: IconCategory },
                        { label: "متریال محصولات", href: "products/material", icon: IconCube },
                        { label: "جزئیات محصولات", href: "products/detail", icon: IconListDetails },
                        { label: "رنگ‌های محصولات", href: "products/color", icon: IconColorFilter },
                    ]
                },
                {
                    label: "سفارشات و فروش",
                    href: "order",
                    icon: IconListCheck,
                    children: [
                        { label: "لیست سفارشات", href: "order", icon: IconListCheck },
                        { label: "خریدهای فروشگاه", href: "purchases", icon: IconShoppingBag },
                        { label: "تراکنش‌های سایت", href: "payments", icon: IconReceipt },
                        { label: "درخواست‌های طراحی", href: "request", icon: IconListNumbers },
                        { label: "انواع درخواست طراحی", href: "request-type", icon: IconListLetters },
                    ]
                },
                {
                    label: "کاربران و پشتیبانی",
                    href: "user",
                    icon: IconUsers,
                    badge: chatBadge,
                    children: [
                        { label: "کاربران", href: "user", icon: IconUsers },
                        { label: "نویسندگان", href: "author", icon: IconNotebook },
                        { label: "تیکت‌ها", href: "ticket", icon: IconUserShield },
                        { label: "درخواست‌های تماس تلفنی", href: "advice", icon: IconUserHeart },
                        { label: "درخواست‌های مشاوره", href: "counseling", icon: IconHeadphones },
                        { label: "چت آنلاین", href: "chat", icon: IconMessage, badge: chatBadge },
                        { label: "نظرات کاربران", href: "comment", icon: IconMessage },
                        { label: "سوالات متداول", href: "faq", icon: IconMessage },
                    ]
                },
                {
                    label: "نمونه کارها",
                    href: "portfolio",
                    icon: IconListLetters
                },
                {
                    label: "قراردادها و اقساط",
                    href: "contract",
                    icon: IconContract,
                    children: [
                        { label: "لیست قراردادها", href: "contract", icon: IconContract },
                        { label: "قراردادهای مشتریان", href: "user-contracts", icon: IconContract },
                        { label: "فایل‌های قرارداد", href: "contract-file", icon: IconFile },
                        { label: "لیست اقساط", href: "installments", icon: IconCreditCard },
                        { label: "بررسی چک‌ها", href: "check", icon: IconCheck },
                    ]
                },
                {
                    label: "ارتباط با مشتریان",
                    href: "announcement",
                    icon: IconSpeakerphone,
                    children: [
                        { label: "اطلاعیه‌های سایت", href: "announcement", icon: IconSpeakerphone },
                        { label: "اطلاعیه‌های مشتریان", href: "notification", icon: IconBell },
                        { label: "ارسال اطلاعیه پیامکی", href: "sms", icon: IconMessage },
                    ]
                },
                {
                    label: "مقالات",
                    href: "article",
                    icon: IconBook,
                },
                {
                    label: "تنظیمات و قیمت‌ها",
                    href: "variable",
                    icon: IconSettings,
                    children: [
                        { label: "محتوای صفحه اصلی", href: "homepage", icon: IconHome },
                        { label: "کاتالوگ دیجیتال", href: "catalog", icon: IconBook },
                        { label: "قیمت‌های محاسبه‌گر", href: "prices", icon: IconCash },
                        { label: "قیمت‌های طراحی", href: "design-prices", icon: IconCash },
                        { label: "کدهای تخفیف", href: "offCodes", icon: IconDiscount },
                        { label: "متغیرها", href: "variable", icon: IconVariable },
                    ]
                },
            ]}
            prefix="admin"
        />
    )
}

export default Layout;
