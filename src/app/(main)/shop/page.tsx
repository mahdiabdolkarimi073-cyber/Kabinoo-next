'use client';

import React, {useMemo, useState} from 'react';
import Carousel from "@/components/Carousel";
import {products} from "@/hard-code";
import {CarouselSlide} from "@mantine/carousel";
import {Badge, Button, RangeSlider, Tooltip} from "@mantine/core";
import ResponsivePopover from "@/components/responsive/ResponsivePopover";
import useBackend from '@/utils/hooks/useBackend';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import FullProductCard from '@/components/FullProductCard';
import {FullProduct} from '@/app/(landing)/admin/products/type';
import {useDelayedEffect} from '@/utils/hooks/useEffects';
import {
    IconColorFilter,
    IconCube,
    IconError404,
    IconFilter,
    IconGripVertical,
    IconMoneybag,
    IconRuler, IconStar
} from '@tabler/icons-react';
import Loading from '@/no-side/Loading';

type T = { name: string, id: string }

function Page(props: any) {
    const searchParams = useSearchParams();
    const {data: allColors = []} = useBackend<(T & {
        hex?: string,
        src?: string
    })[]>("/public/products/items?id=color");
    const {data: categories = []} = useBackend<(T & { slug: string, image?: string })[]>("/public/categories");
    const {data: allMaterials = []} = useBackend<T[]>("/public/products/items?id=material");
    const {data: allDetails = []} = useBackend<T[]>("/public/products/items?id=detail");

    const [selectedColor, setSelectedColor] = useState<typeof allColors[number]>();
    const selectedCategory = useMemo(() => {
        return categories.find(o => o.id === searchParams.get("category"));
    }, [categories, searchParams]);
    const [selectedMaterial, setSelectedMaterial] = useState<typeof allMaterials[number]>();
    const [selectedDetail, setSelectedDetail] = useState<typeof allDetails[number]>();
    const [priceRange, setPriceRange] = useState<[number, number]>()
    const [widthRange, setWidthRange] = useState<[number, number]>();
    const [payload, setPayload] = useState<string>("");
    const {data: products = [], refetch, loading} = useBackend<FullProduct[]>(`/public/products/filter?${payload}`)

    useDelayedEffect(() => {
        const p: Record<string, string> = Object.fromEntries(Object.entries({
            priceRange: priceRange?.join(","),
            widthRange: widthRange?.join(","),
            category: selectedCategory?.id,
            detail: selectedDetail?.id,
            color: selectedColor?.id,
            material: selectedMaterial?.id
        }).filter(o => !!o[1])) as any;
        setPayload(new URLSearchParams(p).toString());
    }, [selectedDetail, selectedMaterial, selectedColor, selectedCategory, priceRange, widthRange], 300)

    return (
        <div className={'container mx-auto my-10'}>
            <h2>دسته بندی ها</h2>
            <Carousel slidePerView={7} className={'my-3'}>
                {categories.map((o, i) => (
                    <CarouselSlide>
                        <Link href={`/shop?category=${o.id}`}
                              className={'relative overflow-hidden my-5 center flex-col rounded-2xl'} key={i}>
                            <img
                                style={{
                                    width: "100%",
                                    maxWidth: "250px",
                                    height: "auto",
                                    aspectRatio: "1"
                                }}
                                className={'object-cover '}
                                src={o.image}
                            />
                            <div
                                className={`absolute left-0 right-0 bottom-0 mx-auto h-16 center ${selectedCategory?.id === o.id ? "bg-primary/90 text-white" : "bg-white/30"} w-full`}>
                                <div className={'center'}>
                                    <h3>{o.name}</h3>
                                </div>
                            </div>
                        </Link>
                    </CarouselSlide>
                ))}
            </Carousel>
            <br/>
            <br/>
            <div className={'flex flex-col lg:flex-row gap-3'}>

                <div
                    className={'lg:max-w-72 lg:w-72 flex flex-wrap lg:flex-col justify-between! md:justify-start! relative! min-w-[300px]  pl-5'}>
                    <div className="items-center flex gap-3 border-b pb-4 border-gray-300">
                        <div className={'bg-primary/30 p-2 rounded-xl text-primary'}>
                            <IconFilter size={20}/>
                        </div>
                        <h3>فیلتر ها</h3>
                    </div>
                    <div>
                        <ResponsivePopover>
                            <div className={'max-w-[70vw]! relative! border-gray-300'}>
                                <br/>
                                <div className="flex gap-2 items-center mb-2">
                                    <div className={'bg-secondary/30 p-1.5 rounded-xl text-secondary'}>
                                        <IconColorFilter size={20}/>
                                    </div>
                                    <p className={'mb-1'}>رنگ</p>
                                </div>
                                <div className="flex gap-3 flex-wrap min-w-52">
                                    {allColors.map((c, i) => (
                                        <Tooltip label={c.name}>
                                            <div
                                                onClick={(e) => {
                                                    setSelectedColor(c.id === selectedColor?.id ? undefined : c);
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    return false;
                                                }}
                                                style={{
                                                    cursor: 'pointer',
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "100%",
                                                    background: c.hex?.startsWith("#") ? c.hex : `#${c.hex}`
                                                }}
                                                key={i}
                                                className={`border overflow-hidden border-2 ${selectedColor?.id === c?.id ? "border-red-400 scale-105" : "border-gray-400"}`}
                                            >
                                                {!!c.src && <img className="w-full h-full object-cover rounded-full"
                                                                 src={c.src}/>}
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                                <br/>
                                <div className="flex gap-2 items-center mb-2">
                                    <div className={'bg-secondary/30 p-1.5 rounded-xl text-secondary'}>
                                        <IconCube size={20}/>
                                    </div>
                                    <p className={'mb-1'}>متریال</p>
                                </div>
                                <div className="flex gap-3 flex-wrap min-w-52">
                                    {allMaterials.map(item => (
                                        <Badge
                                            onClick={() => setSelectedMaterial(selectedMaterial?.id === item.id ? undefined : item)}
                                            size='lg'
                                            className='cursor-pointer!'
                                            key={item.id} color={selectedMaterial?.id === item.id ? "primary" : "gray"}>
                                            {item.name}
                                        </Badge>
                                    ))}
                                </div>
                                <br/>
                                <br/>
                                <div className="flex gap-2 items-center mb-3">
                                    <div className={'bg-secondary/30 p-1.5 rounded-xl text-secondary'}>
                                        <IconMoneybag size={20}/>
                                    </div>
                                    <p className={'mb-1'}>قیمت</p>
                                </div>
                                <RangeSlider
                                    onChange={setPriceRange}
                                    color="secondary"
                                    min={0}
                                    className='relative!'
                                    max={2_000_000_000}
                                    label={RLabel}
                                    step={10_000_000}
                                    radius={'md'}
                                    thumbSize={25}
                                    classNames={{
                                        thumb: "border-2!"
                                    }}
                                    thumbChildren={[<IconGripVertical size={20} key="1"/>,
                                        <IconGripVertical size={20} key="2"/>]}
                                />
                                <br/>
                                <br/>
                                <div className="flex gap-2 items-center mb-3">
                                    <div className={'bg-secondary/30 p-1.5 rounded-xl text-secondary'}>
                                        <IconRuler size={20}/>
                                    </div>
                                    <p className={'mb-1'}>عرض</p>
                                </div>
                                <RangeSlider
                                    onChange={setWidthRange}
                                    color="secondary"
                                    min={0}
                                    radius={'md'}
                                    thumbSize={25}
                                    classNames={{
                                        thumb: "border-2!"
                                    }}
                                    thumbChildren={[<IconGripVertical size={20} key="1"/>,
                                        <IconGripVertical size={20} key="2"/>]}
                                    max={290}
                                    step={1}
                                    label={e => e.toLocaleString('fa') + " سانت"}
                                />
                                <br/>
                                <div className="flex gap-2 items-center mb-3">
                                    <div className={'bg-secondary/30 p-1.5 rounded-xl text-secondary'}>
                                        <IconStar size={20}/>
                                    </div>
                                    <p className={'mb-1'}>خصوصیات</p>
                                </div>
                                <div className="flex gap-3 flex-wrap min-w-52">
                                    {allDetails.map(item => (
                                        <Badge
                                            onClick={() => setSelectedDetail(selectedDetail?.id === item.id ? undefined : item)}
                                            size='lg'
                                            className='cursor-pointer!'
                                            key={item.id} color={selectedDetail?.id === item.id ? "gray" : "primary"}>
                                            {item.name}
                                        </Badge>
                                    ))}
                                </div>
                                <br/>
                                <Button onClick={refetch}>
                                    اعمال فیلتر
                                </Button>
                            </div>
                        </ResponsivePopover>
                    </div>
                </div>
                {loading ? <Loading/> : (
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:grid-cols-4 px-3'}>
                        {products.map((o, i) => (
                            <FullProductCard
                                key={i}
                                {...o}
                            />
                        ))}
                        {products.map((o, i) => (
                            <FullProductCard
                                key={i}
                                {...o}
                            />
                        ))}
                        {products.map((o, i) => (
                            <FullProductCard
                                key={i}
                                {...o}
                            />
                        ))}

                        {products.map((o, i) => (
                            <FullProductCard
                                key={i}
                                {...o}
                            />
                        ))}
                        {products.map((o, i) => (
                            <FullProductCard
                                key={i}
                                {...o}
                            />
                        ))}
                    </div>
                )}
                {(!loading && !products.length) && (
                    <div className='min-h-46 center flex-col! mx-auto'>
                        <IconError404 size={100}/>
                        <h1>موردی یافت نشد</h1>
                    </div>
                )}

            </div>
        </div>
    );
}

const RLabel = (n: number, _n = 0) => {
    const L = ['هزار', "میلیون", "میلیارد"];

    const n1 = n / 1000;
    if (n1 >= 1000) return RLabel(n1, _n + 1);

    return `${n1} ${L[_n] || ""}`
}

export default Page;