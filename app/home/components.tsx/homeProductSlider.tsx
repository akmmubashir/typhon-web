"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowLeft, ArrowRight } from '@/app/components/icons'

type Props = {
    productsData: {
        id: number;
        title: string;
        img: string;
    }[];
}

const HomeProductSlider = ({ productsData }: Props) => {
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    const prev = () => sliderRef.current?.slickPrev();
    const next = () => sliderRef.current?.slickNext();

    return (
        <div className="w-full slick-product-slider">
            <style jsx global>{`
              .slick-product-slider .slick-slide > div { padding: 0 12px; }
              .slick-product-slider .slick-list { margin: 0 -12px; }
              @media (max-width: 768px) {
                .slick-product-slider .slick-slide > div { padding: 0 8px; }
                .slick-product-slider .slick-list { margin: 0 -8px; }
              }
              @media (max-width: 640px) {
                .slick-product-slider .slick-slide > div { padding: 0 4px; }
                .slick-product-slider .slick-list { margin: 0 -4px; }
              }
            `}</style>
            <Slider ref={sliderRef} {...settings}>
                {productsData.map(product => (
                    <div key={product.id}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-full h-[200px] overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-[#fa4729] font-semibold text-[20px] mt-4">{product.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="w-full flex justify-end mt-4 max-sm:justify-center">
                <div className="flex gap-2.5">
                    <button onClick={prev} aria-label="Previous" className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] text-white px-3 py-2 rounded-full text-sm">
                        <ArrowLeft size="w-6 h-6" color="stroke-white" stroke="1.5" />
                    </button>
                    <button onClick={next} aria-label="Next" className="aspect-square bg-[#fa4729] hover:bg-[#db2b0e] text-white px-3 py-2 rounded-full text-sm">
                        <ArrowRight size="w-6 h-6" color="stroke-white" stroke="1.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeProductSlider