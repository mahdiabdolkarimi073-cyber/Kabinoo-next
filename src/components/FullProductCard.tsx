'use client';

import React, {ReactNode, useMemo} from 'react';
import { products } from "@/hard-code";
import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from 'next/link';
import { FullProduct } from '@/app/(landing)/admin/products/type';
import { backend } from '@/utils/api';


export const GlobalAddToCard = (product: FullProduct, e: any) => {
    try { e?.preventDefault(); } catch { };
    if (!window.user) window.throw("لطفا ابتدا وارد حساب کاربری خود شوید!")

    backend("/user/cart", "POST", {
        productId: product.id
    }).finally(()=>{
        window.location.href = "/user/cart"
    })
}

function FullProductCard(props: FullProduct & { onAddToCart?: () => void, link?: string,actions?: ReactNode }) {
    const {
        images,
        category,
        name,
        price,
        onAddToCart = GlobalAddToCard
    } = props;


    return (
        <Link href={props.link || `/product/${props.id}`}>
            <div
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm md:max-w-md mx-auto my-4 md:my-8 font-inter text-right"
                dir="rtl">
                {/* Product Image Section */}
                <div className="w-full">
                    <img
                        src={images[0] || "https://placehold.co/300x300/D1987B/637570?text=PRODUCT"}
                        alt={name}
                        className="w-full h-52 object-cover rounded-t-lg"
                    />
                </div>
                <div className="p-6 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">
                            {category?.name}
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">{name}</h2>

                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 7V4a2 2 0 0 1 2-2h3m7 0h3a2 2 0 0 1 2 2v3m0 7v3a2 2 0 0 1-2 2h-3m-7 0H6a2 2 0 0 1-2-2v-3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                                <span className="text-gray-600 text-sm">متریال: {props.material?.name || "نامشخص"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" fill={props.color?.hex || "#ccc"} /></svg>
                                </span>
                                <span className="text-gray-600 text-sm">رنگ: {props.color?.hex ? <span style={{ background: props.color.hex, borderRadius: '50%', display: 'inline-block', width: 16, height: 16, border: '1px solid #ccc', verticalAlign: 'middle' }} /> : "نامشخص"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 10h6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                                <span className="text-gray-600 text-sm">جزئیات: {props.detail?.name || "نامشخص"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" /></svg>
                                </span>
                                <span className="text-gray-600 text-sm">ابعاد: {props.x}x{props.y}x{props.z} سانتی‌متر</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                                <span className="text-gray-600 text-sm">زمان تحویل: {props.deliveryDays} روز کاری</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* Price and Button Section */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-start flex-col">
                            {!!props.offPercent && (
                                <span className="text-gray-400 line-through ml-2">
                                    {props.price.toLocaleString('fa') + " "}
                                    ریال
                                </span>
                            )}
                            <span className="text-secondary font-bold text-xl">
                                {props.finalPrice.toLocaleString('fa') + " "}
                                تومان
                            </span>
                        </div>
                        {props.actions || (
                            <Button
                                onClick={e => onAddToCart(props, e)}
                                className=""
                                rightSection={<IconShoppingCart />}
                            >
                                سبد خرید
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FullProductCard;