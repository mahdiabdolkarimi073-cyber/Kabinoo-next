import {backend} from "@/utils/api";
import {Badge} from "@mantine/core";
import Link from "next/link";

type T = { image?: string, name: string, id: string, parentId: string, children: T[] }

// Function to generate random dimensions for masonry effect
const getRandomDimensions = (index: number) => {
    // Use index as seed for consistent randomization
    const seed = index * 9301 + 49297;
    const random = (seed % 233280) / 233280;

    // Define possible heights and widths
    const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80'];
    const colSpans = ['col-span-1', 'col-span-1', 'col-span-2']; // More single columns for better layout

    const heightIndex = Math.floor(random * heights.length);
    const colSpanIndex = Math.floor((random * 1000) % colSpans.length);

    return {
        height: heights[heightIndex],
        colSpan: colSpans[colSpanIndex]
    };
};

export default async function Page(props: any) {
    const {category: _c} = await props.searchParams;
    const [
        categories = [],
        portfolio = [] as T[]
    ] = await Promise.all([
        backend("/public/portfolio/categories").then(e => e.data as T[]),
        backend(`/public/portfolio${_c ? "?categoryId=" + _c+"&category.parentId="+_c+"&condition_type=or" : ""}`).then(e => e.data as T[])
    ]);
    const category = [...categories, ...categories.map(o => o.children).flat()].find(o => o.id === _c);
    const parent = categories.find(o => o.id === category?.parentId) || category;

    return (
        <div className='container mx-auto my-6 md:my-10 px-2 sm:px-4'>
            <div className='center flex-col! gap-3'>
                <p>دسته بندی ها</p>
                <div className='center gap-3 flex-wrap'>
                    {categories.map(o => (
                        <Link key={o.id} href={category?.id === o.id ? "./portfolio" : `?category=${o.id}`}>
                            <Badge
                                size='lg'
                                className="cursor-pointer! transition-all duration-300 hover:scale-105"
                                color={category?.id === o.id ? "secondary" : "primary"}
                            >
                                {o.name}
                            </Badge>
                        </Link>
                    ))}
                </div>
                <div className='center gap-3 flex-wrap'>
                    {parent?.children?.map(o => (
                        <Link key={o.id} href={category?.id === o.id ? "./portfolio" : `?category=${o.id}`}>
                            <Badge
                                size='lg'
                                className="cursor-pointer! transition-all duration-300 hover:scale-105"
                                color={category?.id === o.id ? "secondary" : "primary"}
                            >
                                {o.name}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-4 md:h-6" />

            {/* Beautiful Masonry Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 auto-rows-max'>
                {portfolio.map((o, index) => {
                    const dimensions = getRandomDimensions(index);
                    return (

                            <div
                                key={o.id}
                                className={`
                                relative rounded-xl overflow-hidden shadow-lg 
                                hover:shadow-2xl transition-all duration-500 
                                hover:scale-105 hover:-rotate-1 group
                                ${dimensions.height} ${dimensions.colSpan}
                            `}
                            >
                                <a href={o.image} target={"_blank"}>
                                <img
                                    src={o.image}
                                    alt={o.name}
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />

                                {/* Gradient overlay */}
                                <div
                                    className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>

                                {/* Text overlay */}
                                <div
                                    className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                                    <div
                                        className='text-white font-semibold text-sm md:text-base lg:text-lg drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                                        {o.name}
                                    </div>
                                </div>

                                {/* Shimmer effect on hover */}
                                <div
                                    className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12'/>
                                </a>
                            </div>

                    );
                })}
            </div>

            {/* Empty state */}
            {portfolio.length === 0 && (
                <div className='text-center py-20'>
                    <p className='text-gray-500 text-lg'>هیچ پروژه‌ای در این دسته‌بندی یافت نشد</p>
                </div>
            )}
        </div>
    );
}