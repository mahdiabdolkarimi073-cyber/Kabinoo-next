'use client';
import {
    IconColorSwatch,
    IconDashboard,
    IconKey,
    IconListCheck,
    IconMessage,
    IconNotebook,
    IconShoppingBag,
    IconShoppingCart,
    IconUser,
    IconUserShield,
    IconContract,
    IconFile,
    IconHeadphones,
    IconWallet,
} from '@tabler/icons-react';
import useUser from '@/utils/hooks/useUser';
import Dashboard from '@/components/Dashboard';

const navigationItems = [
    {
        label: 'داشبورد',
        icon: IconDashboard,
        href: '',
        showList: true,
    },
    {
        label: 'سفارشات و خرید',
        icon: IconShoppingBag,
        href: 'order',
        children: [
            {label: 'سبد خرید', icon: IconShoppingCart, href: 'cart'},
            {label: 'سفارشات', icon: IconShoppingBag, href: 'order'},
        ],
    },
    {
        label: 'درخواست‌ها و طراحی',
        icon: IconListCheck,
        href: 'request',
        children: [
            {label: 'درخواست ها', icon: IconListCheck, href: 'request'},
            {label: 'طراحی ها', icon: IconColorSwatch, href: 'design'},
        ],
    },
    {
        label: 'پشتیبانی و ارتباط',
        icon: IconMessage,
        href: 'chat',
        children: [
            {label: 'چت آنلاین', icon: IconMessage, href: 'chat'},
            {label: 'تیکت ها', icon: IconUserShield, href: 'ticket'},
        ],
    },
    {
        label: 'اطلاعات کاربری',
        icon: IconUser,
        href: 'info'
    },
    {
        label: 'تغییر رمز عبور',
        icon: IconKey,
        href: 'password'
    },
    {
        label: 'کیف پول',
        icon: IconWallet,
        href: 'wallet'
    },
    {
        label: 'قراردادهای من',
        icon: IconContract,
        href: 'contract',
    },
    {
        label: 'فایل‌های قرارداد',
        icon: IconFile,
        href: 'contract-file',
    },
];

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    const user = useUser();
    return <Dashboard
        navItems={[
            ...navigationItems,
            user?.isAuthor ? {
                label: "پنل نویسنده",
                icon: IconNotebook,
                href: '../author'
            } : undefined,
            user?.isAdmin ? {
                label: "پنل ادمین",
                icon: IconKey,
                href: '../admin'
            } : undefined,
            user?.isShopManager ? {
                label: "پنل مدیر فروشگاه",
                icon: IconShoppingBag,
                href: '../shop-manager'
            } : undefined,
            user?.isSupport ? {
                label: "پنل پشتیبانی",
                icon: IconHeadphones,
                href: '../support'
            } : undefined,
            user?.isContractManager ? {
                label: "پنل مدیریت قراردادها",
                icon: IconContract,
                href: '../contract-manager'
            } : undefined
        ].filter(o => !!o)}
        prefix="user"
        children={children}
    />
}