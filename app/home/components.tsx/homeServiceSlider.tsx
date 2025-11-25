"use client";
import { Paragraph, SubHeading } from "@/app/components/common";
import { ArrowLeft, ArrowRight } from "@/app/components/icons";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplayIntervalMs,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="w-full col-span-7 max-lg:col-span-full slick-slider-wrapper">
      <style jsx global>{`
        .slick-slider-wrapper .slick-dots li button:before {
          display: none;
        }
        .slick-slider-wrapper .slick-dots li.slick-active .slick-dot-btn {
          background-color: #fa4729;
        }
        .slick-slider-wrapper .slick-slide > div {
          padding: 0 10px;
        }
        .slick-slider-wrapper .slick-list {
          margin: 0 -10px;
        }
        @media (max-width: 768px) {
          .slick-slider-wrapper .slick-slide > div {
            padding: 0 5px;
          }
          .slick-slider-wrapper .slick-list {
            margin: 0 -5px;
          }
        }
        @media (max-width: 640px) {
          .slick-slider-wrapper .slick-slide > div {
            padding: 0;
          }
          .slick-slider-wrapper .slick-list {
            margin: 0;
          }
        }
      `}</style>
      <Slider ref={sliderRef} {...settings}>
        {servicesData.map((service) => (
          <div key={service.id} className="pb-5 group">
            <div className="bg-white rounded-xl shadow-md flex flex-col h-full overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="object-cover w-full h-[200px] group-hover:scale-105 transition-transform duration-300 max-sm:h-[180px]"
              />
              <Link
                href={service.title.toLowerCase().replace(/\s+/g, "-")}
                className="p-5 max-sm:p-4 h-full"
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
      </Slider>
      <div className="w-full flex justify-end max-sm:justify-center">
        <div className="flex gap-2.5">
          <button
            onClick={handlePrev}
            className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] cursor-pointer text-white px-3 py-2 rounded-full text-sm max-sm:px-2 max-sm:py-2"
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
            className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] cursor-pointer text-white px-3 py-2 rounded-full text-sm max-sm:px-2 max-sm:py-2"
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
