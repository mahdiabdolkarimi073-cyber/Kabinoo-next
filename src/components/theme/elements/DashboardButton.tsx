'use client';

import useUser, { handleUserLogout } from "@/utils/hooks/useUser";
import {
    ActionIcon,
    Button,
    Menu,
    MenuDropdown,
    MenuItem,
    MenuTarget,
    Popover,
    PopoverDropdown,
    PopoverTarget
} from "@mantine/core";
import {
    IconKey,
    IconLogin,
    IconLogout,
    IconPassword,
    IconSettings,
    IconShoppingCart,
    IconUser
} from "@tabler/icons-react";
import Link from "next/link";

function DashboardButton() {
    const user = useUser();
    return !user ? (
        <Link href={'/auth'}>
            <Button rightSection={<IconLogin className={'mr-2 opacity-60'} />} color={'secondary'} className={'md:block hidden font-normal!'}>
                ورود
            </Button>
            {/*a*/}
        </Link>
    ) : (
        <div className={'flex items-stretch justify-center'}>
            <ActionIcon component={Link} href={'/user/cart'} color={'accent'} className={'md:block hidden rounded-l-none! font-normal! w-10!'} classNames={{
                root: "h-auto!"
            }}>
                <IconShoppingCart className={'mr-2'} />
            </ActionIcon>
            <Menu width={200} >
                <MenuTarget>
                    <Button rightSection={<IconLogin className={'mr-2 opacity-60'} />} color={'secondary'} className={'md:block hidden  rounded-r-none! font-normal! max-w-30'}>
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