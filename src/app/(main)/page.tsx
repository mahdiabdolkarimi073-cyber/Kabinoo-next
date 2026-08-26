
import Image from "next/image";
import AppConfig from "@/config";
import TextCard from "@/app/(main)/TextCard";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Button } from "@mantine/core";
import ProductCard from "@/app/(main)/ProductCard";
import Carousel from "@/components/Carousel";
import { CarouselSlide } from "@mantine/carousel";
import Comment from "@/app/(main)/Comment";
import HSticky from "./HSticky";
import { backend } from "@/utils/api";
import { FullProduct } from "../(landing)/admin/products/type";
import FullProductCard from "@/components/FullProductCard";
import Link from "next/link";
import { questions as fallbackQuestions } from "@/hard-code";

type Faq = { id: string; question: string; answer: string; sortOrder: number; enabled: boolean };
type Announcement = { id: string; title: string; content: string; created_at: string };

type HomepageContent = {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonLabel: string;
    buttonHref: string;
    enabled: boolean;
};

const fallbackContent: HomepageContent[] = [
    { key: "announcement", title: "اطلاعیه کابینو", subtitle: "ثبت سفارش و مشاوره طراحی", description: "برای دریافت مشاوره رایگان و اطلاع از شرایط سفارش با ما در ارتباط باشید.", image: "", buttonLabel: "دریافت مشاوره", buttonHref: "/counseling", enabled: true },
    { key: "hero", title: "Kabinoo", subtitle: "همراه شما هستیم", description: "تا فضایی شیک و کاربردی خلق کنیم!", image: "/design/sliders/lg-00.jpg", buttonLabel: "شروع طراحی", buttonHref: "/design", enabled: true },
    { key: "about", title: "کابینو", subtitle: "فراتر از طراحی", description: "با تجربه و دقت، فضای کاربردی و زیبایی برای خانه شما می‌سازیم.", image: "/design/image1.png", buttonLabel: "آشنایی بیشتر", buttonHref: "/about", enabled: true },
    { key: "design", title: "خودت طراحی کن!", subtitle: "قابلیت سفارشی‌سازی سفارش", description: "از ایده تا اجرا، جزئیات فضای اختصاصی خود را انتخاب کنید.", image: "/design/sliders/sm-02.jpg", buttonLabel: "طراحی کن", buttonHref: "/design", enabled: true },
    { key: "calculator", title: "قبل از تصمیم، حسابش کن", subtitle: "برآورد هوشمند هزینه", description: "با چند انتخاب ساده، دید اولیه‌ای از هزینه پروژه‌تان به دست آورید.", image: "/design/calc-bg.png", buttonLabel: "محاسبه قیمت", buttonHref: "/calc", enabled: true },
    { key: "shop", title: "برای خانه‌ات انتخاب کن", subtitle: "فروشگاه محصولات چوبی", description: "مدل‌های آماده را ببینید و برای فضای خودتان سفارش دهید.", image: "/design/image2.png", buttonLabel: "ورود به فروشگاه", buttonHref: "/shop", enabled: true },
    { key: "counseling", title: "شروع یک فضای خوب با یک گفت‌وگو", subtitle: "مشاوره رایگان طراحی", description: "کارشناسان کابینو برای انتخاب بهتر کنار شما هستند.", image: "/design/sliders/sm-04.jpg", buttonLabel: "دریافت مشاوره", buttonHref: "/counseling", enabled: true },
    { key: "contact", title: "با کابینو در ارتباط باشید", subtitle: "پاسخ‌گوی شما هستیم", description: "برای دریافت راهنمایی، پیگیری سفارش یا مطرح کردن درخواست خود، با ما در ارتباط باشید.", image: "/design/home_banner.jpg", buttonLabel: "ارتباط با ما", buttonHref: "/contact", enabled: true },
];

async function Page(props: any) {

    const [products = [], categories = [], comments = [], homepageResponse, faqResponse, announcementsResponse] = await Promise.all([
        backend<FullProduct[]>("/public/products?_include=category,color,detail,material").then(e => e.data),
        backend<FullProduct['category'][]>("/public/categories?count=products").then(e => e.data),
        backend<FullProduct['comments']>('/public/products/comments').then(e => e.data),
        backend<HomepageContent[]>('/public/homepage'),
        backend<Faq[]>('/public/faq'),
        backend<Announcement[]>('/public/announcement')
    ]);
    const content = homepageResponse.ok && homepageResponse.data?.length ? homepageResponse.data : fallbackContent;
    const byKey = (key: string) => content.find(item => item.key === key && item.enabled) || fallbackContent.find(item => item.key === key)!;
    const faqs = faqResponse.ok && faqResponse.data?.length ? faqResponse.data.map(f => ({ q: f.question, answer: f.answer })) : fallbackQuestions;
    const announcements = announcementsResponse.ok ? (announcementsResponse.data || []) : [];
    

    return (
        <div className={'container mx-auto'}>
            <HSticky />
            <div className="mt-4 rounded-2xl bg-primary px-5 py-4 text-white shadow-md" dir="rtl">
                {announcements.length > 0 ? (
                    <Link href="/announcements" className="block transition hover:opacity-90">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className="font-bold">{announcements[0].title}</p>
                                <p className="mt-1 text-sm text-white/85 line-clamp-2">{announcements[0].content}</p>
                            </div>
                            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-primary">مشاهده اطلاعیه‌ها</span>
                        </div>
                    </Link>
                ) : byKey("announcement").title && (
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div><p className="font-bold">{byKey("announcement").title}</p><p className="mt-1 text-sm text-white/85">{byKey("announcement").description}</p></div>
                        {byKey("announcement").buttonLabel && <Link href={byKey("announcement").buttonHref} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-primary transition hover:bg-white/90">{byKey("announcement").buttonLabel}</Link>}
                    </div>
                )}
            </div>
            <br />
            <div className={'relative mt-2'}>
                <img
                    src={byKey("hero").image}
                    className={'w-full rounded-2xl md:rounded-3xl min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[60vh] object-cover'}
                    alt={'خانه'}
                />
                <div className={'overlay center lg:justify-start! p-2 md:p-0'}>
                    <div className={'bg-secondary/70 backdrop-blur-lg rounded-2xl md:rounded-4xl lg:rounded-r-none! p-3 md:p-6 w-full md:min-w-md'}>
                        <div className={' flex items-end flex-col mb-2 md:mb-4'}>
                            <div className="center items-end! gap-2 md:gap-4">
                                <h1 className="text-xl md:text-4xl">Kabinoo</h1>
                                <Image
                                    alt={AppConfig.title}
                                    width={50}
                                    height={50}
                                    src={'/logo.png'}
                                    className="md:!w-[70px] md:!h-[70px]"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl">{byKey("hero").subtitle}</h2>
                            <p className={'text-base md:text-xl'}>{byKey("hero").description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <TextCard
                title={byKey("about").title}
                subtitle={byKey("about").subtitle}
                description={byKey("about").description}
                footer={(
                    <Link href='/about'>
                        <Button className={'mt-5!'}>
                            {byKey("about").buttonLabel}
                        </Button>
                    </Link>
                )}
                reverse
            />
            <TextCard
                title={byKey("contact").title}
                subtitle={byKey("contact").subtitle}
                description={byKey("contact").description}
                image={byKey("contact").image}
                footer={(
                    <Link href={byKey("contact").buttonHref}>
                        <Button className={'mt-5!'}>
                            {byKey("contact").buttonLabel}
                        </Button>
                    </Link>
                )}
                reverse
            />
            <TextCard
                title={byKey("design").title}
                subtitle={byKey("design").subtitle}
                description={byKey("design").description}
                footer={(
                    <Link href='/design'>
                        <Button className={'mt-5!'}>
                            {byKey("design").buttonLabel}
                        </Button>
                    </Link>
                )}
                image={byKey("design").image}
            />
            <div className="mt-6 md:mt-10" />
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4" aria-label="خدمات کابینو">
                {(["calculator", "shop", "counseling"] as const).map((key) => {
                    const item = byKey(key);
                    return (
                        <Link
                            href={item.buttonHref}
                            key={key}
                            className="kabinoo-service-card group relative min-h-56 overflow-hidden rounded-3xl bg-primary text-white shadow-md transition-transform hover:-translate-y-1"
                        >
                            <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105" />
                            <div className="relative flex h-full min-h-56 flex-col justify-end gap-2 bg-black/35 p-5">
                                <span className="text-sm text-white/85">{item.subtitle}</span>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-sm leading-6 text-white/90">{item.description}</p>
                                <span className="mt-2 font-bold text-white kabinoo-service-arrow">{item.buttonLabel} ←</span>
                            </div>
                        </Link>
                    );
                })}
            </section>
            <div className="mt-6 md:mt-10" />
            <h2 className={'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-4'}>محبوب ترین محصولات</h2>
            <Carousel>
                {products.map((p, i) => (
                    <CarouselSlide key={i}>
                        <FullProductCard  {...p} />
                    </CarouselSlide>
                ))}
            </Carousel>
            <div className="mt-6 md:mt-12" />
            <h2 className={'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-4'}>دسته بندی ها</h2>
            <Carousel slidePerView={4}>
                {categories.map((o, i) => {
                    const image = o?.image || `/design/sliders/sm-0${i % 8}.jpg`;
                    return (
                        <CarouselSlide
                            key={o?.id}
                            className={'relative my-5 mb-10'}
                        >
                            <Link
                                href={`/shop?category=${o?.id}`}
                                className={`relative ${i % 2 === 0 ? "bg-accent/50" : "bg-primary/50"} block rounded-2xl shadow overflow-hidden`}>
                                <img
                                    src={image}
                                    alt={'Image'}
                                    className={'h-full w-full absolute left-0 -z-10'}
                                />
                                <div className={'backdrop-blur w-full  center flex-col gap-5  p-3'}>
                                    <div className='relative'>
                                        <img
                                            src={image}
                                            alt={'Image'}
                                            className={'object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mx-auto'}
                                        />
                                    </div>
                                    <div className={''}>
                                        <h4 className={'text-center text-white text-2xl!'}>{o?.name}</h4>
                                    </div>
                                </div>
                            </Link>
                        </CarouselSlide>
                    );
                })}
            </Carousel>
            <div className="mt-6 md:mt-12" />
            <h2 className={'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-5'}>نظرات کاربران</h2>
            <Carousel>
                {comments.map((o, i) => (
                    <CarouselSlide key={i}>
                        <Comment {...o}
                            avatar={i % 2 === 0 ? "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"} />
                    </CarouselSlide>
                ))}
            </Carousel>
            <div className="mt-6 md:mt-12" />
            <h2 className={'text-center text-lg! md:text-2xl! lg:text-4xl! mb-3 md:mb-5'}>سوالات متداول</h2>

            <Accordion variant="separated" className={'grid grid-cols-1 lg:grid-cols-2 gap-5'}>
                <AccordionItem value={`q-`} className={'hidden'}></AccordionItem>
                {faqs.map((q, i) => (
                    <div>
                        <AccordionItem className={'bg-accent! text-white!'} value={`q-${i}`} key={i}>
                            <AccordionControl >
                                <p className={'line-clamp-1 truncate text-white!'}>{q.q}</p>
                            </AccordionControl>
                            <AccordionPanel>
                                <p className={'font-bold mb-3'}>{q.q}</p>
                                {q.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    </div>
                ))}
            </Accordion>
        </div>
    );
}

export default Page;