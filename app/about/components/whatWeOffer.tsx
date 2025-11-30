import React from "react";
import Image from "next/image";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";

const WhatWeOffer = () => {
  const features = [
    {
      id: 1,
      title: "Quality First",
      description:
        "We maintain rigorous quality control at every stage, ensuring durable, precise, and high-performing structures that stand the test of time.",
      icon: "/assets/common/quality-first.png",
      iconC: "/assets/common/quality-first-c.png",
    },
    {
      id: 2,
      title: "Integrity in Everything",
      description:
        "Honest communication, transparent processes, and ethical workmanship form the backbone of how we operate and serve our clients.",
      icon: "/assets/common/integrity-in-everything.png",
      iconC: "/assets/common/integrity-in-everything-c.png",
    },
    {
      id: 3,
      title: "Innovation in Engineering",
      description:
        "We embrace modern technologies, advanced fabrication methods, and creative problem-solving to deliver efficient, future-ready structural solutions.",
      icon: "/assets/common/innovation-in-engineering.png",
      iconC: "/assets/common/innovation-in-engineering-c.png",
    },
    {
      id: 4,
      title: "Safety Above All",
      description:
        "Our team follows strict safety protocols during fabrication and erection, ensuring secure work environments and structurally safe outcomes.",
      icon: "/assets/common/safety-above-all.png",
      iconC: "/assets/common/safety-above-all-c.png",
    },
  ];

  return (
    <div className="bg-[#0b0d26] w-full">
      <div className="bg-white h-[200px] max-2xl:h-[120px] max-lg:h-20 w-full"></div>
      <div className="px-[120px] max-2xl:px-[100px] max-lg:px-20 max-md:px-5 flex flex-col">
        <div className="mt-[-200px] max-2xl:mt-[-120px] max-lg:-mt-20 overflow-hidden shadow-lga relative">
          <Image
            src="/assets/common/what-we-offer.webp"
            alt="Our Values"
            width={1200}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />
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
          <div className="col-span-12 grid grid-cols-12 gap-[30px] max-md:gap-[30px_0]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="col-span-3 max-2xl:col-span-6 max-md:col-span-full flex flex-col gap-2 group"
              >
                <div className="w-20 h-20 max-lg:w-[60px] max-lg:h-[60px] max-lg:bg-[#1a203e] max-lg:overflow-hidden rounded-full flex justify-center items-center max-lg:p-2">
                  <Image
                    src={feature.iconC}
                    className="w-full h-full group-hover:hidden"
                    alt={feature.title + " icon"}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={feature.icon}
                    className="w-full h-full hidden group-hover:block"
                    alt={feature.title + " icon"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap gap-1">
                  <h4 className="text-white font-semibold text-[20px] max-lg:text-[18px] max-md:text-[16px]">
                    {feature.title}
                  </h4>
                  <p className="text-[#9ba2ad] text-[16px] max-lg:text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
