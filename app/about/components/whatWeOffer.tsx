import React from "react";
import Image from "next/image";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";

const WhatWeOffer = () => {
  return (
    <div className="bg-[#0b0d26] w-full">
      <div className="bg-white h-[200px] max-2xl:h-[120px] max-lg:h-20 w-full"></div>
      <div className="px-[120px] max-2xl:px-[100px] max-lg:px-20 max-md:px-5 flex flex-col">
        <div className="mt-[-200px] max-2xl:mt-[-120px] max-lg:-mt-20 overflow-hidden shadow-lg">
          <Image
            src="/assets/about/aboutBanner.webp"
            alt="Our Values"
            width={1200}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-12 gap-20 max-2xl:gap-10 max-xl:gap-[20px_0] max-md:gap-[20px_0] py-20 max-2xl:py-[60px] max-lg:py-[60px] max-md:py-[50px] text-white items-end">
          <div className="col-span-6 max-xl:col-span-full">
            <Heading
              title={"What We Offer"}
              className="text-white! text-[16px]! max-lg:text-[14px]! uppercase"
            />
            <SubHeading
              title={
                <>
                  Comprehensive Roofing & <br /> Steel Structure Solutions
                </>
              }
              className="text-white! font-bold! text-[40px]! max-2xl:text-[36px]! max-xl:text-[30px]! max-lg:text-[26px]! max-md:text-[26px]! mb-0!"
            />
          </div>
          <div className="col-span-6 max-xl:col-span-full">
            <Paragraph
              title="At Typhon, every project is built on strong principles and modern engineering practices. What we offer goes beyond roofing and steel structures—we deliver reliability, craftsmanship, and long-term value. Our approach focuses on maintaining the highest standards at each stage of design, fabrication, and installation. With a skilled team, high-grade materials, and a commitment to continuous improvement, we ensure every structure reflects our promise of durability, performance, and trust."
              className="text-[#9ba2ad]!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
