'use client';

import {createTheme} from "@mantine/core";

const mantineTheme = createTheme({
    primaryColor: "primary",
    colors: {
        primary: Array.from({length: 10}).map(()=>"var(--primary)") as any,
        secondary: Array.from({length: 10}).map(()=>"var(--secondary)") as any,
        accent: Array.from({length: 10}).map(()=>"var(--accent)") as any,
    },
    radius: {
        "sm": "16px"
    },
    black: "var(--text)",
    fontFamily: "var(--yekanBakh)",
});

export default mantineTheme
