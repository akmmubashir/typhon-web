"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { QuotesIcon } from "./icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  feedback: string;
  avatar: string;
};

type Props = {
  testimonialsData: Testimonial[];
  autoplaySpeed?: number;
};

const TestimonialsSlider = ({
  testimonialsData,
  autoplaySpeed = 5000,
}: Props) => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: false,
    fade: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="transition-colors testimonial-dot rounded-full" />
    ),
  };

  return (
    <div className="w-full testimonials-slider-wrapper">
      <style jsx global>{`
        .testimonials-slider-wrapper .slick-dots li button:before {
          display: none;
        }
        .testimonials-slider-wrapper
          .slick-dots
          li.slick-active
          .testimonial-dot {
          background-color: #fa4729;
          width: 0.5rem;
          height: 0.5rem;
        }
        .testimonials-slider-wrapper .slick-dots li .testimonial-dot {
          background-color: #ffffff;
          width: 0.5rem;
          height: 0.5rem;
        }
        .testimonials-slider-wrapper .slick-dots li {
          width: 0.5rem;
          height: 0.5rem;
        }
        .testimonials-slider-wrapper .testimonial-dot {
          opacity: 1;
        }
      `}</style>
      <Slider ref={sliderRef} {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="flex flex-col items-start max-sm:px-4 max-sm:py-8">
              <div className="flex gap-10 max-lg:gap-5">
                <div>
                  <QuotesIcon className="fill-[#fa4729] w-10 h-10" />
                </div>
                <div>
                  <p className="text-[#9ba2ad] text-[16px] max-lg:text-[14px] leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                  <div className="flex gap-3 justify-start items-center">
                    <div>
                      <div className="w-16 h-16 max-lg:w-12 max-lg:h-12 aspect-square rounded-full overflow-hidden shadow-lg">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <h4 className="text-[20px] max-lg:text-[16px] font-semibold text-[#fa4729]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#9ba2ad] text-[14px] max-2xl:text-[14px]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
