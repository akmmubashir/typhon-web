"use client";
import { Paragraph, SubHeading } from "@/app/components/common";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Service = {
    id: number;
    title: string;
    description: string;
    img: string;
};

type Props = {
    servicesData: Service[];
    autoplayIntervalMs?: number; // optional override
};

const HomeServiceSlider = ({
    servicesData,
    autoplayIntervalMs = 3500,
}: Props) => {
    const [itemsPerView, setItemsPerView] = useState(3);
    // Start at first real slide index after leading clones
    const [currentIndex, setCurrentIndex] = useState(itemsPerView);
    const [enableTransition, setEnableTransition] = useState(true);
    const intervalRef = useRef<number | null>(null);
    const prevItemsPerViewRef = useRef(itemsPerView);

    // Build extended data with clones for infinite effect
    const extendedData = [
        ...servicesData.slice(-itemsPerView),
        ...servicesData,
        ...servicesData.slice(0, itemsPerView),
    ];
    const realSlidesStart = itemsPerView;
    const realSlidesEnd = itemsPerView + servicesData.length - 1;

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            let newItems: number;
            if (w < 640) newItems = 1;
            else if (w < 1024) newItems = 2;
            else newItems = 3;
            if (newItems !== prevItemsPerViewRef.current) {
                const oldItems = prevItemsPerViewRef.current;
                // Map currentIndex to real slide index then rebuild position
                const realIndex =
                    (currentIndex - oldItems + servicesData.length) % servicesData.length;
                prevItemsPerViewRef.current = newItems;
                setItemsPerView(newItems);
                // Defer without transition to avoid flicker
                requestAnimationFrame(() => {
                    setEnableTransition(false);
                    setCurrentIndex(newItems + realIndex);
                    requestAnimationFrame(() => setEnableTransition(true));
                });
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex, servicesData.length]);

    // Autoplay advancing one by one (infinite)
    useEffect(() => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, autoplayIntervalMs);
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [autoplayIntervalMs, itemsPerView]);

    // Handle boundary jumps after transition end
    const handleTransitionEnd = () => {
        if (currentIndex > realSlidesEnd) {
            // Passed end clones, jump back to start real
            setEnableTransition(false);
            setCurrentIndex(realSlidesStart);
            requestAnimationFrame(() => setEnableTransition(true));
        } else if (currentIndex < realSlidesStart) {
            // Passed start clones, jump to end real
            setEnableTransition(false);
            setCurrentIndex(realSlidesEnd);
            requestAnimationFrame(() => setEnableTransition(true));
        }
    };

    const next = () => setCurrentIndex((i) => i + 1);
    const prev = () => setCurrentIndex((i) => i - 1);

    // Real index for dots
    const realActiveIndex =
        (currentIndex - itemsPerView + servicesData.length) % servicesData.length;
    const goTo = (realIndex: number) => {
        setCurrentIndex(itemsPerView + realIndex);
    };

    const trackTranslatePercent = -(currentIndex * (100 / itemsPerView));

    return (
        <div className="w-full col-span-7 max-lg:col-span-full">
            {/* Slider viewport */}
            <div className="relative overflow-hidden w-full">
                <div
                    onTransitionEnd={handleTransitionEnd}
                    className={`flex ${enableTransition
                            ? "transition-transform duration-700 ease-in-out"
                            : ""
                        }`}
                    style={{ transform: `translateX(${trackTranslatePercent}%)` }}
                >
                    {extendedData.map((service, idx) => (
                        <div
                            key={idx + "-" + service.id}
                            className="p-[0_15px] max-md:p-0"
                            style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                        >
                            <div className="bg-white p-5 rounded-lg shadow-md flex flex-col h-full">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-[200px] rounded-md mb-4"
                                />
                                <SubHeading title={service.title} />
                                <Paragraph
                                    title={service.description}
                                    className="text-black"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation arrows */}
            </div>
            {/* Dots navigation */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {servicesData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-3 w-3 rounded-full transition-colors ${i === realActiveIndex
                                ? "bg-[#2563eb]"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
            <div className="w-full flex justify-end">
                <div className="flex gap-2.5">
                    <button
                        onClick={prev}
                        className=" bg-[#2563eb] hover:bg-[#1e40af] cursor-pointer text-white px-3 py-2 rounded-full text-sm"
                        aria-label="Previous"
                    >
                        ◀
                    </button>
                    <button
                        onClick={next}
                        className=" bg-[#2563eb] hover:bg-[#1e40af] cursor-pointer text-white px-3 py-2 rounded-full text-sm"
                        aria-label="Next"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceSlider;
