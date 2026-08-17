'use client';

import React, { useEffect } from 'react';
import { Burger, Button, Drawer } from "@mantine/core";
import { IconLogin } from "@tabler/icons-react";
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
    { name: 'بلاگ', link: '/blog' }
];

function Header(props: any) {
    const [open, { toggle, close }] = useDisclosure(false);
    const pathname = usePathname();


    useEffect(()=>{
        close();
    }, [pathname]);

    return (
        <header className="max-w-[95%] md:max-w-5xl header bg-gradient-primary backdrop-blur p-4 px-5! lg:px-10! flex items-center transition-all justify-between rounded-2xl lg:rounded-4xl shadow-lg mx-auto mt-4 relative lg:top-4 z-10">
            <div className="flex items-center">
                <Link href={'/'}>
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="h-13 lg:h-20 w-auto ml-4"
                    />
                </Link>
            </div>

            <div className="flex items-center justify-center flex-grow">
                <nav className="hidden md:flex items-center gap-5 text-white text-lg font-medium">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="relative text-base pb-1 border-b-2 border-transparent hover:border-white transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="hidden md:block">
                <DashboardButton />
            </div>

            <div className="md:hidden">
                <Burger onClick={toggle} opened={open} />
            </div>

            <Drawer
                opened={open}
                onClose={close}
                position="right"
                size="xs"
                padding="md"
                classNames={{
                    body: "p-0",
                    content: "bg-white"
                }}
                overlayProps={{ className: "backdrop-blur-sm" }}
            >
                <div className="flex flex-col gap-4 p-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-gray-800 text-base lg:text-lg font-medium py-2 px-2 rounded hover:bg-primary/10 transition"
                            onClick={close}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4">
                        <DashboardButton />
                    </div>
                </div>
            </Drawer>
        </header>
    )
}

export default Header;