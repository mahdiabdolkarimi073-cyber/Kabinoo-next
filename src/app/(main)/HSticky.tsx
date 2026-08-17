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
                ...(
                    y < 50 ? {
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                        top: 0,
                        marginTop: 0
                    } : {}
                ),
                position: "absolute",
                left: 0,
                right: 0
            }}
        />
    );
}