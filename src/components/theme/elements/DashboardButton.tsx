'use client';

import useUser, { handleUserLogout } from "@/utils/hooks/useUser";
import {
    ActionIcon,
    Button,
    Menu,
    MenuDropdown,
    MenuItem,
    MenuTarget,
} from "@mantine/core";
import {
    IconKey,
    IconLogin,
    IconLogout,
    IconShoppingCart,
    IconUser
} from "@tabler/icons-react";
import Link from "next/link";

function DashboardButton() {
    const user = useUser();
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
            <Menu width={200} >
                <MenuTarget>
                    <Button rightSection={<IconLogin className={'mr-2 opacity-60'} />} color={'secondary'} className={'flex-1 rounded-r-none! font-normal! max-w-none'}>
                        <p className={'truncate'}>{user.name}</p>
                    </Button>
                </MenuTarget>
                <MenuDropdown className='p-2!'>
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
