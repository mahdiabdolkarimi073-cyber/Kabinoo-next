'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import { IconArticle, IconDashboard, IconUser } from "@tabler/icons-react";
import { redirect } from "next/navigation";

function Layout(props: any) {
    const user = useUser();
    if (user === undefined) return null;
    if (user && !user.isAuthor) redirect("/");

    return (
        <Dashboard
            title="پنل نویسنده"
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                },
                {
                    label: "مقالات",
                    href: "article",
                    icon: IconArticle,
                },
                {
                    label: "اطلاعات کاربری",
                    href: "profile",
                    icon: IconUser,
                },
            ]}
            prefix="author"
        />
    );
}

export default Layout;
