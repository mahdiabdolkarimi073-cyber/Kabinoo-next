'use client';
import Dashboard from "@/components/Dashboard";
import useUser from "@/utils/hooks/useUser";
import { IconCategory, IconList, IconListCheck, IconDashboard, IconShoppingBag, IconSpeakerphone, IconUserEdit } from "@tabler/icons-react";
import { redirect } from "next/navigation";

function Layout(props: any) {
    const user = useUser();

    if (!user) return null;
    if (!user.isAdmin && !user.isShopManager) redirect("/");

    return (
        <Dashboard
            title='پنل مدیران فروشگاه'
            children={props.children}
            navItems={[
                {
                    label: "داشبورد",
                    href: "",
                    icon: IconDashboard,
                },
                {
                    label: "محصولات",
                    href: "products",
                    icon: IconShoppingBag,
                    children: [
                        { label: "لیست محصولات", href: "products", icon: IconList },
                        { label: "دسته‌بندی محصولات", href: "products/category", icon: IconCategory },
                    ]
                },
                {
                    label: "سفارشات",
                    href: "order",
                    icon: IconListCheck,
                },
                {
                    label: "اعلان به مشتریان",
                    href: "announcement",
                    icon: IconSpeakerphone,
                },
                {
                    label: "ویرایش اطلاعات",
                    href: "profile",
                    icon: IconUserEdit,
                },
            ]}
            prefix="shop-manager"
        />
    )
}

export default Layout;
