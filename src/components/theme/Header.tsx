'use client';

import React, { useEffect } from 'react';
import { Burger, Button, Drawer, ScrollArea } from "@mantine/core";
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
    { name: 'مشاوره', link: '/counseling' },
    { name: 'درخواست طراحی', link: '/design/request' },
    { name: 'مقالات', link: '/articles' }
];

function Header(props: any) {
    const [open, { toggle, close }] = useDisclosure(false);
    const pathname = usePathname();

    useEffect(() => {
        close();
    }, [pathname]);

    return (
        <header className="max-w-[100%] md:max-w-5xl header bg-gradient-primary backdrop-blur p-3 md:p-4 px-4! md:px-5! lg:px-10! flex items-center transition-all justify-between rounded-none md:rounded-2xl lg:rounded-4xl shadow-lg mx-auto mt-0 md:mt-4 relative lg:top-4 z-50">
            {/* Burger menu on the right (for RTL: visually right = start) */}
            <div className="md:hidden flex items-center">
                <Burger onClick={toggle} opened={open} size="sm" color="white" />
            </div>

            {/* Logo centered on mobile, left on desktop */}
            <div className="flex items-center flex-1 md:flex-none justify-center md:justify-start">
                <Link href={'/'}>
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="h-10 md:h-13 lg:h-20 w-auto"
                    />
                </Link>
            </div>

            {/* Desktop nav centered */}
            <div className="flex items-center justify-center flex-grow">
                <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-white text-sm lg:text-lg font-medium">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="relative text-sm lg:text-base pb-1 border-b-2 border-transparent hover:border-white transition-colors duration-200 whitespace-nowrap"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Desktop dashboard button */}
            <div className="hidden md:block">
                <DashboardButton />
            </div>

            {/* Mobile drawer */}
            <Drawer
                opened={open}
                onClose={close}
                position="right"
                size="85%"
                padding="md"
                classNames={{
                    body: "p-0",
                    content: "bg-white"
                }}
                overlayProps={{ className: "backdrop-blur-sm" }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <Burger onClick={close} opened={false} size="sm" />
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="flex flex-col gap-1 p-4">
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
