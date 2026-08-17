'use client';

import useIsMobile from "@/utils/hooks/useIsMobile";
import {Button, Popover, PopoverDropdown, PopoverTarget} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconDots} from "@tabler/icons-react";
import {ReactNode} from "react";

function ResponsivePopover(props: {
    children: ReactNode
}) {
    const isMobile = useIsMobile();
    const [opened, {open,close}] = useDisclosure();
    const prevent = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    return isMobile ? (
        <Popover closeOnEscape closeOnClickOutside opened={opened} onClose={close} >
            <PopoverTarget>
                <Button size={'compact-sm'} color={'#f6f6f6'} radius={'xl'} onClick={()=>{
                    open()
                }}>
                    <IconDots className={'text-black'} />
                </Button>
            </PopoverTarget>
            <PopoverDropdown onClick={e => {
                const {target} = e;
                if ('tagName' in target) {
                    if (target.tagName !== 'INPUT') {
                        close();
                    }
                }

            }} className={'z-[99]!'}>
                {props.children}
            </PopoverDropdown>
        </Popover>
    ):props.children;
};

export default ResponsivePopover;