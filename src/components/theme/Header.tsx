'use client';

import React, { useEffect } from 'react';
import { Burger, Drawer, ScrollArea } from "@mantine/core";
import Link from "next/link";
import DashboardButton from './elements/DashboardButton';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

const menuItems = [
    { name: 'خانه', link: '/' },
    { name: 'طراحی کن', link: '/design' },
    { name: 'محاسبه‌گر', link: '/calc' },
    { name: 'نمونه کارها', link: '/portfolio' },
    { name: 'فروشگاه', link: '/shop' },
    { name: 'درخواست تماس تلفنی', link: '/counseling' },
    { name: 'ارتباط با ما', link: '/contact' },
    { name: 'جستجو', link: '/search' },
    { name: 'درخواست طراحی', link: '/design/request' },
    { name: 'مقالات', link: '/articles' },
    { name: 'کاتالوگ', link: '/catalog' }
];

function Header(props: any) {
    const [open, { toggle, close }] = useDisclosure(false);
    const pathname = usePathname();

    useEffect(() => {
        close();
    }, [pathname]);

    return (
        <header
            className="header bg-gradient-primary backdrop-blur px-3 sm:px-4 lg:px-6 py-2.5 lg:py-3 flex items-center justify-between gap-2 lg:gap-4 shadow-lg sticky top-0 z-50"
            dir="rtl"
        >
            {/* Logo — right side in RTL */}
            <Link href={'/'} className="flex items-center shrink-0">
                <img
                    src="/logo.png"
                    alt="Company Logo"
                    className="h-9 sm:h-11 lg:h-14 w-auto max-w-[120px] lg:max-w-[150px]"
                />
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-1.5 xl:gap-3 text-white text-sm xl:text-base font-medium overflow-x-auto no-scrollbar">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`relative whitespace-nowrap shrink-0 pb-1 border-b-2 transition-colors duration-200 ${
                            pathname === item.link
                                ? 'border-white font-bold'
                                : 'border-transparent hover:border-white/70'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Desktop dashboard — left side in RTL */}
            <div className="hidden lg:block shrink-0 min-w-[110px]">
                <DashboardButton />
            </div>

            {/* Mobile burger — left side in RTL */}
            <button
                onClick={toggle}
                className="lg:hidden flex items-center justify-center w-10 h-10 shrink-0 text-white"
                aria-label="منو"
            >
                <Burger opened={open} size="sm" color="white" />
            </button>

            {/* Mobile drawer */}
            <Drawer
                opened={open}
                onClose={close}
                position="right"
                size="80%"
                padding="md"
                classNames={{
                    body: "p-0",
                    content: "bg-white"
                }}
                overlayProps={{ className: "backdrop-blur-sm" }}
            >
                <div className="flex flex-col h-full" dir="rtl">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <Burger onClick={close} opened={false} size="sm" />
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="flex flex-col gap-1 p-3">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className={`text-gray-800 text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/10 transition ${
                                        pathname === item.link ? 'bg-primary/10 text-primary font-bold' : ''
                                    }`}
                                    onClick={close}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="p-4 border-t border-gray-200">
                        <DashboardButton />
                    </div>
                </div>
            </Drawer>
        </header>
    )
}

export default Header;
