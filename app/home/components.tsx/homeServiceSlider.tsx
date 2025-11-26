"use client";
import { Paragraph, SubHeading } from "@/app/components/common";
import { ArrowLeft, ArrowRight } from "@/app/components/icons";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

type Service = {
  id: number;
  title: string;
  description: string;
  img: string;
};

type Props = {
  servicesData: Service[];
  autoplayIntervalMs?: number;
};

const HomeServiceSlider = ({
  servicesData,
  autoplayIntervalMs = 3500,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1440) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = servicesData.length;

  // Create infinite loop by cloning slides
  const extendedServices = [
    ...servicesData.slice(-slidesToShow),
    ...servicesData,
    ...servicesData.slice(0, slidesToShow),
  ];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, autoplayIntervalMs);
  }, [autoplayIntervalMs, handleNext]);

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      // Reset position for infinite scroll without transition
      if (currentIndex >= totalSlides + 1) {
        setIsTransitioning(false);
        setTimeout(() => setCurrentIndex(1), 50);
      } else if (currentIndex <= 0) {
        setIsTransitioning(false);
        setTimeout(() => setCurrentIndex(totalSlides), 50);
      } else {
        setIsTransitioning(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalSlides]);

  // Autoplay
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [resetAutoplay]);

  const getSlideWidth = () => {
    if (slidesToShow === 1) return 100;
    if (slidesToShow === 2) return 50;
    return 33.333;
  };

  const getGapClass = () => {
    if (slidesToShow === 1) return "gap-0";
    if (slidesToShow === 2) return "gap-2.5";
    return "gap-5";
  };

  return (
    <div className="w-full col-span-7 max-lg:col-span-full">
      <div className="overflow-hidden pb-5">
        <div
          className={`flex ${getGapClass()} ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              currentIndex *
              (getSlideWidth() +
                (slidesToShow === 3 ? 1.667 : slidesToShow === 2 ? 0.625 : 0))
            }%)`,
          }}
        >
          {extendedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="shrink-0 group"
              style={{ width: `${getSlideWidth()}%` }}
            >
              <div className="bg-white rounded-xl shadow-md flex flex-col h-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  aria-disabled="true"
                  height={250}
                  className="object-cover  w-full h-[200px] max-xl:h-[180px] group-hover:scale-105 transition-transform duration-300 max-sm:h-[180px]"
                />
                <Link
                  href={`/india/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="p-5 max-2xl:p-[15px] max-md:p-4 h-full"
                >
                  <SubHeading title={service.title} className="line-clamp-2" />
                  <Paragraph
                    title={service.description}
                    className="text-black line-clamp-2"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end max-sm:justify-center">
        <div className="flex gap-2.5">
          <button
            onClick={handlePrev}
            // disabled={isTransitioning}
            className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] cursor-pointer text-white px-3 py-2 rounded-full text-sm max-sm:px-2 max-sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ArrowLeft
              size="w-6 h-6 max-sm:w-5 max-sm:h-5"
              color="stroke-white"
              stroke="1.5"
            />
          </button>
          <button
            onClick={handleNext}
            // disabled={isTransitioning}
            className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] cursor-pointer text-white px-3 py-2 rounded-full text-sm max-sm:px-2 max-sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ArrowRight
              size="w-6 h-6 max-sm:w-5 max-sm:h-5"
              color="stroke-white"
              stroke="1.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSlider;
