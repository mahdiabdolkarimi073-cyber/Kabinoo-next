import React from 'react';
import Header from "@/components/theme/Header";
import Footer from "@/components/theme/Footer";
import UserChatComponent from '../(landing)/user/UserChat';
import { ActionIcon, Popover, PopoverDropdown, PopoverTarget } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';

function Layout(props: any) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            <div style={{
                position: "fixed"
            }} className='bottom-4 left-4 lg:left-10 lg:bottom-10 z-20'>
                <Popover position='top-start' closeOnEscape closeOnClickOutside>
                    <PopoverTarget>
                        <ActionIcon size='lg' radius={'xl'} className="shadow-lg">
                            <IconMessage size={24} />
                        </ActionIcon>
                    </PopoverTarget>
                    <PopoverDropdown className='shadow border w-[90vw] max-w-[340px]'>
                        <div className='w-full'>
                            <h3 className='mb-1'>چت آنلاین</h3>
                            <div className='h-80 md:h-96'>
                                <UserChatComponent />
                            </div>
                        </div>
                    </PopoverDropdown>
                </Popover>
            </div>
        </>
    );
}

export default Layout;