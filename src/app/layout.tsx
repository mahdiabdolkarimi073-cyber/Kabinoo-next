import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";
import { getUser } from "@/no-side/user";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import React, { ReactNode } from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

export const metadata: Metadata = {
    title: "Kabinoo - کابینو"
};

export default async function RootLayout(props: any) {

    const [user, _headers] = await Promise.all([
        getUser()
            .catch(() => undefined),
        headers()
    ])

    const parsedUserAgent = userAgent({
        headers: _headers
    })
    const device = parsedUserAgent?.device?.type || "desktop";

    return (
        <html lang="fa" dir={'rtl'} {...mantineHtmlProps}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <ColorSchemeScript defaultColorScheme="light" />
            </head>
            <body>
                <LayoutProvider
                    windowProps={{
                        user,
                        device: device as "desktop"
                    }}
                >
                    {props.children}
                </LayoutProvider>
            </body>
        </html>
    );
}