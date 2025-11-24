"use client";
import React, { useState } from 'react'
import { SubHeading } from '@/app/components/common'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
    id: number;
    title: string;
    img: string;
};

type Props = {
    productsData: Product[];
    initialVisible?: number; // starting number of tiles
    loadMoreCount?: number;  // increment per click
};

const HomeProductsList = ({ productsData, initialVisible = 7, loadMoreCount = 4 }: Props) => {
    const [visibleCount, setVisibleCount] = useState(initialVisible);
    const visible = productsData.slice(0, visibleCount);
    const hasMore = visibleCount < productsData.length;

    const handleShowMore = () => {
        setVisibleCount(count => Math.min(count + loadMoreCount, productsData.length));
    };

    return (
        <div className="col-span-full mt-10">
            <div className="grid grid-cols-12 gap-[30px]">
                {visible.map(product => (
                    <Link
                        href={`/products/${product.title.toLowerCase().replace(/ /g, '-')}`}
                        key={product.id}
                        className="relative col-span-3 max-lg:col-span-6 max-sm:col-span-full flex flex-col items-center text-center overflow-hidden shadow-lg rounded-xl bg-white group"
                    >
                        <div className="w-full h-[200px] overflow-hidden rounded-lg">
                            <Image
                                src={product.img}
                                alt={product.title}
                                width={400}
                                height={250}
                                className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <SubHeading title={product.title} className="bg-white absolute bottom-0 mb-0! p-2.5 left-0 rounded-[0_20px_0_0]" />
                    </Link>
                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleShowMore}
                        className="cursor-pointer px-8 py-3 rounded-full bg-[#fa4729] hover:bg-[#db2b0e] text-white font-semibold text-[16px] shadow-md transition-colors duration-300"
                        aria-label="Show more products"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomeProductsList