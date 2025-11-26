"use client";
import React, { useState } from "react";
import { SubHeading } from "@/app/components/common";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  img: string;
};

type Props = {
  productsData: Product[];
  initialVisible?: number; // starting number of tiles
  loadMoreCount?: number; // increment per click
};

const HomeProductsList = ({
  productsData,
  initialVisible = 3,
  loadMoreCount = 4,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const visible = productsData.slice(0, visibleCount);
  const hasMore = visibleCount < productsData.length;

  const handleShowMore = () => {
    setVisibleCount((count) =>
      Math.min(count + loadMoreCount, productsData.length)
    );
  };

  return (
    <div className="col-span-full lg:mt-10 max-lg:order-3">
      <div className="grid grid-cols-12 gap-[30px]">
        {visible.map((product) => (
          <Link
            href={`/india/products/${product.title
              .toLowerCase()
              .replace(/ /g, "-")}`}
            key={product.id}
            className="relative col-span-3 max-lg:col-span-6 max-md:col-span-full flex flex-col items-center text-center overflow-hidden shadow-lg rounded-xl bg-white group"
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
            <SubHeading
              title={product.title}
              className="bg-white absolute bottom-0 mb-0! p-2.5 left-0 rounded-[0_20px_0_0] uppercase"
            />
          </Link>
        ))}
        {hasMore && (
          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-full gap-[30px]">
            <button
              onClick={handleShowMore}
              className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden shadow-lg rounded-xl bg-linear-to-br from-[#fa4729] to-[#db2b0e] text-white group cursor-pointer h-[200px] hover:scale-[1.02] transition-transform duration-300"
              aria-label="Show more products"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-4xl font-bold leading-none">+</span>
                <span className="text-[18px] font-semibold tracking-wide">
                  Show More
                </span>
                <span className="text-white/80 text-sm">
                  Load more products
                </span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeProductsList;
