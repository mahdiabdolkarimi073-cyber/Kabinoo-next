import React from 'react';
import Header from "@/components/theme/Header";
import Footer from "@/components/theme/Footer";
import LiveChatButton from "@/components/theme/elements/LiveChatButton";

function Layout(props: any) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            <LiveChatButton />
        </>
    );
}

export default Layout;