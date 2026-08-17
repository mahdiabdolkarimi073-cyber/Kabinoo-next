'use client';;
import Loading from '@/no-side/Loading';
import { backend } from '@/utils/api';
import generateRandomString from '@/utils/string';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Configurator from './test/Configurator';
import { useRouter } from 'next/navigation';
import StyledDiv from '@/style-stuff/StyledDiv';

const Categories = { Library: 1, TvStand: 2, Console: 3, Closet: 4, ShoesBox: 5, Drawer: 6, Open: 7, BedSideTable: 9 }
export const CategoriesReverse = Object.fromEntries(
    Object.entries(Categories).map(([key, value]) => [value, key])
);

export const CategoriesLabels = [
    {
        "name": "کتابخانه",
        "image": "//cdn.idero.ir/file/product/3/3BO6KKP2_icon.jpg",
        "id": "Library"
    },
    {
        "name": "میز تلویزیون",
        "image": "//cdn.idero.ir/file/product/E/EQ1XFU38_icon.jpg",
        "id": "TvStand"
    },
    {
        "name": "میز کنسول",
        "image": "//cdn.idero.ir/file/product/0/099GTI1E_icon.jpg",
        "id": "Console"
    },
    {
        "name": "کمد",
        "image": "//cdn.idero.ir/file/product/E/E5ZCDVSK_icon.jpg",
        "id": "Closet"
    },
    {
        "name": "جاکفشی",
        "image": "//cdn.idero.ir/file/product/6/6YHE99E2_icon.jpg",
        "id": "ShoesBox"
    },
    {
        "name": "دراور",
        "image": "//cdn.idero.ir/file/product/2/2IEFVA5F_icon.jpg",
        "id": "Drawer"
    },
    {
        "name": "اپن",
        "image": "https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "id": "Open"
    }
] as const;

const CategoryCard = ({ name, image }: any) => {
    return (
        <StyledDiv
            base="c"
            className="relative cursor-pointer transition-all w-full max-w-64 h-48 sm:h-56 md:h-64 bg-cover border-1 border-primary bg-center rounded-lg overflow-hidden shadow-lg"
            style={{
                backgroundImage: `url('${image}')`,
                ",.c:hover *,.c:hover": {
                    background: "var(--accent)",
                    borderColor: "var(--accent)"
                }
            }} // Set the background image dynamically
        >
            <div className="absolute bottom-0 w-full text-center bg-primary bg-opacity-50 text-white p-2 text-lg font-semibold rounded-b-lg">
                {name} {/* Display the name prop */}
            </div>
        </StyledDiv>
    );
};

function Page(props: any) {
    const params = useSearchParams();
    const category = useMemo(() => (
        params.get("category")
    ), [params]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [design, setDesign] = useState<any>();

    useEffect(() => {
        if (params.has('id')) {
            backend("/public/design/" + params.get('id')).then(e => {
                if (!e.ok) {
                    window.location.href = "/design"
                    window.throw("خطا در دریافت اطلاعات");
                }
                setDesign(e?.data);
                router.push("?category=" + e?.data?.slug)
                window.localStorage.setItem("InitObject", JSON.stringify({ Configurator: JSON.stringify(e.data?.data) }))
            }).finally(() => {
                setLoading(false)
            })
        } else if (params.has("category")) {
            setLoading(false);
        } else setLoading(false);
    }, [params]);

    if (loading && !params.has('id')) return <Loading />

    return category ? (
        <div className='container mx-auto'>
            <Configurator
                category={Categories[category as keyof typeof Categories] || window.throw("خطا در بررسی اطلاعات")}
                data={design?.data}
                onSave={data => {
                    const { finalPrice, content, imageData: image, categoryId } = data;
                    const category = CategoriesReverse[categoryId];
                    const obj = JSON.parse(content);
                    const id = params.get('id');
                    setLoading(true);
                    backend("/user/design" + (!!id ? "/" + id : ""), !!id ? "PUT" : "POST", {
                        slug: category,
                        price: finalPrice,
                        data: obj,
                        image,
                        name: !!id ? undefined : `طراحی ${CategoriesLabels.find(o => o.id === category)?.name} ${generateRandomString()}`
                    }).then((e) => {
                        if (!e.ok) window.throw(e.message || "خطا");

                        backend("/user/cart", "POST", {
                            customDesignId: e?.data?.id
                        }).finally(() => {
                            window.location.href = "/user/cart"
                        })
                    })
                }}
            />
        </div>
    ) : (
        <div className={'flex flex-col gap-3 my-10 container mx-auto'}>
            <h2 className={'text-center mb-3'}>دسته بندی ها</h2>
            <div className={'grid-items gap-3 gap-y-10'}>
                {CategoriesLabels.map((l, i) => (
                    <div onClick={() => {
                        window.localStorage.removeItem("InitObject");
                        router.push("?category=" + l.id)
                    }} className='flex justify-center'>
                        <CategoryCard {...l} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;