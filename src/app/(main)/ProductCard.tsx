'use client';

import React, {useMemo} from 'react';
import {products} from "@/hard-code";
import {Button} from "@mantine/core";
import {IconShoppingCart} from "@tabler/icons-react";
import Link from 'next/link';

function ProductCard(props: typeof products[number] & { onAddToCart?: () => void }) {
    const {
        image: imageSrc,
        category,
        title: name,
        description,
        price,
        onAddToCart
    } = props;
    const originalPrice = useMemo(() => (
        Math.round(price / 1000)
    ), [price])
    const currentPrice = originalPrice - 1000;


    return (
        <Link href={'/product'}>
            <div
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto my-8 font-inter text-right"
                dir="rtl">
                {/* Product Image Section */}
                <div className="w-full">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-52 object-cover rounded-t-lg"
                    />
                </div>
                <div className="p-6 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-500 uppercase text-xs tracking-widest mb-2">
                            {category}
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">{name}</h2>
                        <br/>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-5">
                            {description}
                        </p>
                    </div>
                    <br/>
                    {/* Price and Button Section */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center flex-col">
                            {originalPrice && (
                                <span className="text-gray-400 line-through ml-2">
                                    {originalPrice.toLocaleString('fa') + " "}
                                    ریال
                                </span>
                            )}
                            <span className="text-secondary font-bold text-xl">
                                 {currentPrice.toLocaleString('fa') + " "}
                                ریال
                            </span>
                        </div>
                        <Button
                            onClick={onAddToCart}
                            className=""
                            rightSection={<IconShoppingCart/>}
                        >
                            سبد خرید
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;