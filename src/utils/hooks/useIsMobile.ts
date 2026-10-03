'use client';


import {useViewportSize} from '@mantine/hooks';
import {useContext, useMemo} from 'react';
import GlobalContext from "@/app/GlobalContext";


function useIsMobile( maxWidth?: number) {
    const { width } = useViewportSize();
    const {device} = useContext(GlobalContext)

	return useMemo(() => {
        if (width === 0) return device !== "desktop";
        return width <= (maxWidth || 756);
    }, [width,device]);
};

export default useIsMobile;
