'use client';

import useUser, { handleUserLogout } from "@/utils/hooks/useUser";
import {
    ActionIcon,
    Button,
    Divider,
    Menu,
    MenuDropdown,
    MenuItem,
    MenuLabel,
    MenuTarget,
} from "@mantine/core";
import {
    IconKey,
    IconLogin,
    IconLogout,
    IconShoppingCart,
    IconUser,
    IconShield,
    IconShoppingBag,
    IconHeadphones,
    IconFileContract,
    IconArticle,
} from "@tabler/icons-react";
import Link from "next/link";

function DashboardButton() {
    const user = useUser();

    const panelLinks: { label: string; href: string; icon: typeof IconShield }[] = [];
    if (user?.isAdmin) panelLinks.push({ label: "پنل مدیریت", href: "/admin", icon: IconShield });
    if (user?.isShopManager) panelLinks.push({ label: "پنل مدیر فروشگاه", href: "/shop-manager", icon: IconShoppingBag });
    if (user?.isContractManager) panelLinks.push({ label: "پنل مدیریت قراردادها", href: "/contract-manager", icon: IconFileContract });
    if (user?.isSupport) panelLinks.push({ label: "پنل پشتیبانی", href: "/support", icon: IconHeadphones });
    if (user?.isAuthor) panelLinks.push({ label: "پنل نویسنده", href: "/author", icon: IconArticle });

    return !user ? (
        <Link href={'/auth'} className="block w-full">
            <Button rightSection={<IconLogin className={'mr-2 opacity-60'} />} color={'secondary'} className={'w-full font-normal!'}>
                ورود
            </Button>
        </Link>
    ) : (
        <div className={'flex items-stretch justify-center w-full'}>
            <ActionIcon component={Link} href={'/user/cart'} color={'accent'} className={'rounded-l-none! font-normal! w-12!'} classNames={{
                root: "h-auto!"
            }}>
                <IconShoppingCart className={'mr-2'} />
            </ActionIcon>
            <Menu width={240} >
                <MenuTarget>
                    <Button rightSection={<IconLogin className={'mr-2 opacity-60'} />} color={'secondary'} className={'flex-1 rounded-r-none! font-normal! max-w-none'}>
                        <p className={'truncate'}>{user.name}</p>
                    </Button>
                </MenuTarget>
                <MenuDropdown className='p-2!'>
                    {panelLinks.length > 0 && (
                        <>
                            <MenuLabel>پنل‌های مدیریت</MenuLabel>
                            {panelLinks.map((panel) => (
                                <MenuItem key={panel.href} component={Link} href={panel.href} leftSection={<panel.icon size={20} />}>
                                    {panel.label}
                                </MenuItem>
                            ))}
                            <Divider my={6} />
                        </>
                    )}
                    <MenuItem component={Link} href='/user' leftSection={<IconUser size={20} />}>
                        حساب کاربری
                    </MenuItem>
                    <MenuItem component={Link} href='/user/password' leftSection={<IconKey size={20} />}>
                        تغییر رمزعبور
                    </MenuItem>
                    <MenuItem onClick={handleUserLogout as any} color='red' leftSection={<IconLogout size={20} />}>
                        خروج
                    </MenuItem>
                </MenuDropdown>
            </Menu>
        </div>
    )
}

export default DashboardButton;
