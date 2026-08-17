
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
import { questions } from "@/hard-code";

async function Page(props: any) {

    const [products = [], categories = [], comments = []] = await Promise.all([
        backend<FullProduct[]>("/public/products?_include=category,color,detail,material").then(e => e.data),
        backend<FullProduct['category'][]>("/public/categories?count=products").then(e => e.data),
        backend<FullProduct['comments']>('/public/products/comments').then(e => e.data)
    ]);
    

    return (
        <div className={'container mx-auto'}>
            <HSticky />
            <br />
            <div className={'relative mt-2'}>
                <img
                    src={'/design/sliders/lg-00.jpg'}
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
                            <h2 className="text-lg md:text-2xl">همراه شما هستیم</h2>
                            <p className={'text-base md:text-xl'}>تا فضایی شیک و کاربردی خلق کنیم!</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <TextCard
                title={'کابینو'}
                subtitle={'فراتر از طراحی'}
                description={'شرکت ما با سالها تجربه در زمینه طراحی و ساخت انواع کابینت، کمد و میز، خدمات منحصر به فردی را برای مشتریان عزیز ارائه می‌دهد. تیم ما با استفاده از متریال باکیفیت و طراحی‌های مدرن، به شما کمک می‌کند تا فضای داخلی منزل یا محل کار خود را به شکلی شیک و انواع کابینت و کمد دیواری ودکوراسیون منزل و مغازه با اقساط 36 ماهه'}
                footer={(
                    <Link href='/about'>
                        <Button className={'mt-5!'}>
                            باما بیشتر اشنا شوید
                        </Button>
                    </Link>
                )}
                reverse
            />
            <TextCard
                title={'خودت طراحی کن!'}
                subtitle={'قابلیت سفارشی سازی سفارش'}
                description={'در مجموعه ما، شما می‌توانید دنیای طراحی خانه خود را به دست بگیرید؛ از ایده‌پردازی تا خلق یک فضای منحصر به فرد. همه چیز در اختیار شماست. میتونی نیاز و خواسته ات را با سلیقه خودت طراحی کنی.'}
                footer={(
                    <Link href='/design'>
                        <Button className={'mt-5!'}>
                            طراحی کن
                        </Button>
                    </Link>
                )}
                image={'/design/sliders/sm-02.jpg'}
            />
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
                {questions.map((q, i) => (
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