'use client';

import StyledDiv from "@/style-stuff/StyledDiv";
import { useWindowScroll } from "@mantine/hooks";

export default function HSticky() {
    const [{ y }] = useWindowScroll();
    return (
        <StyledDiv
            important
            base={'body > header.header'}
            style={{
                boxShadow: y > 50 ? '0 4px 20px rgba(0,0,0,0.15)' : '0 1px 8px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s ease',
            }}
        />
    );
}
