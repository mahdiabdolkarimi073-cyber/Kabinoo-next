'use client';

import React, { useMemo, useState } from 'react';
import { Button, Rating, Textarea, TextInput } from "@mantine/core";
import { products } from "@/hard-code";
import ProductCard from "@/app/(main)/ProductCard";
import { FullProduct } from '@/app/(landing)/admin/products/type';
import useUser from '@/utils/hooks/useUser';
import { backend } from '@/utils/api';
import { useRouter } from 'next/navigation';
import FullProductCard, { GlobalAddToCard } from '@/components/FullProductCard';
import Link from 'next/link';

function Product({ product, similarProducts = [] }: {
    product: FullProduct,
    similarProducts: FullProduct[]
}) {
    const user = useUser();
    const comments = (product.comments || []).filter(comment => comment.accepted);
    const [mainImage, setMainImage] = useState(product.images[0] || "");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const finalOthers = useMemo(() => ({
        "رنگ": product?.color?.name,
        "متریال": product?.material?.name,
        "جزئیات": product?.detail?.name,
        ...product.others || {},
    }), [product])

    const handleAddComment = (e: FormData) => {
        const data = Object.fromEntries(e.entries())
        backend("/public/products/comment", "POST", {
            ...data,
            product: product.id
        }).finally(() => {
            router.refresh();
        })
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl  min-h-screen" dir="rtl"> {/* dir="rtl" for right-to-left */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* گالری تصاویر محصول */}
                <div className="lg:col-span-1 flex flex-col items-center">
                    <div className="w-full max-w-lg mb-4 p-4 bg-white rounded-lg flex justify-center items-center">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-auto object-contain rounded-lg max-h-96"
                            onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/F8F8F8/000000?text=PRODUCT'; }}
                        />
                    </div>
                    <div className="flex space-x-2 space-x-reverse overflow-x-auto pb-2 px-2 lg:px-0 w-full justify-center"> {/* space-x-reverse for RTL thumbnails */}
                        {product.images?.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`تصویر کوچک ${index + 1}`}
                                className={`w-20 h-20 object-cover border-2 cursor-pointer rounded-md transition-all duration-200 ${mainImage === image ? 'border-accent ring-2 ring-accent' : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                onClick={() => setMainImage(image)}
                                onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/F0F0F0/888888?text=تصویر'; }}
                            />
                        ))}
                    </div>
                </div>

                {/* جزئیات و اقدامات محصول */}
                <div className="lg:col-span-2 flex flex-col p-4 bg-white rounded-lg shadow-9-md">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{product.name}</h1>
                    <p className="text-gray-600 text-lg mb-4">{product.category?.name}</p>

                    {/* امتیاز و نظرات */}
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400" dir="ltr"> {/* Force LTR for stars */}
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'fill-gray-300'}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-700 mr-2 text-sm">
                            {product.rating} ({product?.comments?.length} نظر)
                        </span>
                    </div>

                    {/* بخش قیمت */}
                    <div className="mb-6 border-b pb-4">
                        {product.offPercent ? (
                            <>
                                <p className="text-gray-500 line-through text-xl">
                                    {product.price.toLocaleString('fa') + " "}
                                    تومان
                                </p>
                                <div className="flex items-center mt-1">
                                    <span className="text-accent text-4xl font-bold ml-3">
                                        {product.finalPrice.toLocaleString("fa") + " "}
                                        تومان
                                    </span>
                                    <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full shadow-9-sm">
                                        {product.offPercent}% تخفیف
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="text-4xl font-bold text-gray-900">
                                {product.price.toLocaleString("fa") + " "}
                                ریال
                            </p>
                        )}
                        <p className="text-accent text-lg font-medium mt-2">
                            <span className="inline-block w-3 h-3 bg-accent rounded-full ml-2"></span>
                            زمان تحویل {product.deliveryDays} کاری
                        </p>
                    </div>

                    {/* ویژگی‌های کلیدی */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">ویژگی‌های کلیدی:</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 pr-4"> {/* pr-4 for RTL list */}
                            {Object.entries(finalOthers).map(([_, feature], index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-accent ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex gap-3 justify-center lg:justify-start items-center flex-wrap'>
                        {/* دکمه افزودن به سبد خرید */}
                        <Button size={'lg'} onClick={e => GlobalAddToCard(product, e)}>
                            <svg className="w-6 h-6 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            افزودن به سبد خرید
                        </Button>
                        {product?.designId && (
                            <Link href={"/design?id="+product.designId}>
                                <Button size={'lg'} color='secondary'>
                                    شخصی سازی
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* بخش توضیحات */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-9-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-3">توضیحات محصول</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    {product.description}
                </p>
            </div>

            {/* بخش مشخصات */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-9-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-3">مشخصات فنی</h2>
                <div className="overflow-x-auto max-w-sm ">
                    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 max-w-sm text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    ویژگی
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    جزئیات
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Object.entries(finalOthers).map(([key, value]) => (
                                <tr key={key} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {key}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* بخش نظرات */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-9-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">نظرات مشتریان ({comments.length})</h2>

                {/* فرم نظر جدید */}
                <form action={handleAddComment} className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">ارسال نظر</h3>

                    <TextInput
                        name="author"
                        label="نام شما"
                        required
                        defaultValue={user?.name}
                    />

                    <div className="my-4">
                        <label htmlFor="commentText" className="block text-sm font-medium text-gray-700 mb-1">نظر شما</label>
                        <Textarea
                            name='content'
                            minRows={5}
                            placeholder="نظرات خود را در مورد این محصول به اشتراک بگذارید..."
                            required
                            autosize
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="commentRating" className="block text-sm font-medium text-gray-700 mb-1">امتیاز شما</label>
                        <Rating size={'xl'} name='rating' />
                    </div>
                    <Button
                        color={'primary'}
                        size={'md'}
                        type="submit"

                    >
                        ارسال نظر
                    </Button>
                </form>

                {comments.length > 0 ? (
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                <div className="flex items-center mb-2">
                                    <p className="font-semibold text-gray-900 ml-3">{comment.author}</p> {/* ml-3 for RTL */}
                                    <div className="flex text-yellow-400" dir="ltr"> {/* Force LTR for stars */}
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < comment.rate ? 'fill-current' : 'fill-gray-300'}`}
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs mr-auto">{new Date(comment.created_at).toLocaleDateString('fa')}</span> {/* mr-auto for RTL */}
                                </div>
                                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">هنوز نظری ثبت نشده است. اولین نفری باشید که نظر خود را ثبت می‌کنید!</p>
                )}
            </div>

            {/* بخش محصولات مشابه */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-9-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">محصولات مشابه</h2>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 2xl:grid-cols-3'}>
                    {similarProducts.slice(0, 6).map((o, i) => (
                        <FullProductCard
                            key={i}
                            {...o}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;