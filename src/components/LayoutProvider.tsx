'use client';

import React, {ComponentProps, ReactNode} from 'react';
import {DirectionProvider, MantineProvider, ScrollArea} from "@mantine/core";
import mantineTheme from "@/style-stuff/mantine-theme";
import OverrideWindow from "@/share/OverrideWindow";
import {ModalsProvider} from "@mantine/modals";
import GlobalContext from "@/app/GlobalContext";
import { Notifications } from '@mantine/notifications';


function LayoutProvider(props: {
    windowProps?: ComponentProps<typeof OverrideWindow>,
    children: ReactNode
}) {
    return (
        <DirectionProvider initialDirection={'rtl'} >
            <MantineProvider theme={mantineTheme} defaultColorScheme={'light'} forceColorScheme={'light'}>
                <Notifications />
                <ModalsProvider labels={{
                    confirm: "تایید",
                    cancel: "لغو"
                }} modalProps={{
                    scrollAreaComponent: ScrollArea.Autosize
                }}>
                    <GlobalContext value={{
                        ...props.windowProps || {}
                    }}>
                        <OverrideWindow {...(props.windowProps || {}) as any} />
                        {props.children}
                    </GlobalContext>
                </ModalsProvider>
            </MantineProvider>
        </DirectionProvider>
    );
}

export default LayoutProvider;