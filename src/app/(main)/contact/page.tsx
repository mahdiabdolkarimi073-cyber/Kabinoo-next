import { Button, Card, SimpleGrid } from "@mantine/core";
import { IconHeadphones, IconMessage, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

const contactOptions = [
    { title: "درخواست تماس تلفنی", description: "شماره خود را ثبت کنید تا کارشناسان ما با شما تماس بگیرند.", icon: IconPhone, href: "/counseling" },
    { title: "گفت‌وگوی آنلاین", description: "سوال خود را برای تیم پشتیبانی بفرستید و پاسخ بگیرید.", icon: IconMessage, href: "/" },
    { title: "راهنمایی تخصصی", description: "برای انتخاب محصول و طراحی فضای خود از کارشناسان کابینو کمک بگیرید.", icon: IconHeadphones, href: "/design/request" },
];

export default function ContactPage() {
    return (
        <main className="container mx-auto py-6 md:py-14 px-2 sm:px-4" dir="rtl">
            <section className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div className="p-6 md:p-12">
                        <span className="text-sm font-bold text-primary">ارتباط با کابینو</span>
                        <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-5xl">همراه شما برای ساختن یک فضای بهتر</h1>
                        <p className="mt-5 leading-8 text-gray-600">این صفحه در حال آماده‌سازی است. فعلاً می‌توانید از راه‌های زیر با ما در ارتباط باشید تا همکاران ما راهنمایی‌تان کنند.</p>
                        <Link href="/counseling">
                            <Button mt="xl" size="md" radius="xl">ثبت درخواست تماس</Button>
                        </Link>
                    </div>
                    <img src="/design/home_banner.jpg" alt="فضای داخلی طراحی‌شده توسط کابینو" className="h-full min-h-72 w-full object-cover" />
                </div>
            </section>
            <section className="mt-8 md:mt-12">
                <h2 className="text-center text-2xl font-bold text-gray-800">چطور می‌توانیم کمکتان کنیم؟</h2>
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="xl">
                    {contactOptions.map(({ title, description, icon: Icon, href }) => (
                        <Card key={title} withBorder radius="xl" padding="xl" className="transition hover:-translate-y-1 hover:shadow-md">
                            <Icon size={34} className="text-primary" />
                            <h3 className="mt-4 text-lg font-bold text-gray-800">{title}</h3>
                            <p className="mt-2 min-h-14 text-sm leading-7 text-gray-600">{description}</p>
                            <Link href={href} className="mt-5 inline-block font-bold text-primary">مشاهده و ادامه ←</Link>
                        </Card>
                    ))}
                </SimpleGrid>
            </section>
        </main>
    );
}
