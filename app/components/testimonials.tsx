import React from "react";
import Image from "next/image";
import { Heading, SubHeading } from "./common";
import TestimonialsSlider from "./testimonialsSlider";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Example Corp",
      feedback:
        "Typhon Structures provided us with exceptional service and top-quality products. Their team was professional and attentive to our needs.",
      avatar: "/assets/common/about1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager, BuildIt Inc.",
      feedback:
        "We were impressed with Typhon's expertise and commitment to quality. Our project was completed on time and exceeded our expectations.",
      avatar: "/assets/common/about1.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Operations Head, SteelWorks Ltd.",
      feedback:
        "Typhon's innovative solutions and skilled workforce made a significant difference in our construction project. Highly recommended!",
      avatar: "/assets/common/about1.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Director, ConstructCo",
      feedback:
        "From design to installation, Typhon Structures demonstrated professionalism and excellence. Their attention to detail ensured a flawless execution.",
      avatar: "/assets/common/about1.jpg",
    },
  ];
  const listData = [
    { id: 1, title: "Projects", count: "25" },
    { id: 2, title: "Peoples", count: "65" },
    { id: 3, title: "Years", count: "04" },
    { id: 4, title: "Offices", count: "03" },
  ];
  return (
    <div className="flex flex-col">
      <div className="w-full relative">
        <Image
          src="/assets/common/testimonials.png"
          alt="Testimonials"
          className="w-full"
          width={1200}
          height={800}
        />
        <div className="bg-[#13163D] flex flex-col gap-10 max-lg:gap-5 lg:absolute bottom-[-60px] left-0 w-2/5 max-2xl:w-3/5 max-xl:w-4/5 max-lg:w-full p-[120px] max-2xl:p-[100px] max-lg:p-[60px_80px_80px] max-md:p-[50px_20px_80px]">
          <div>
            <SubHeading
              title="Trusted by Businesses Across South India"
              className="uppercase"
            />
            <Heading
              title="Client Testimonials"
              className="text-white font-bold! text-[40px]! max-2xl:text-[36px]! max-lg:text-[26px]! mb-0!"
            />
          </div>
          <TestimonialsSlider testimonialsData={testimonialsData} />
        </div>
      </div>
      <div className="bg-[#0b0d26] grid grid-cols-12 p-[120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px] max-lg:gap-[30px_0] items-center">
        {listData.map((item) => (
          <div
            key={item.id}
            className="col-span-3 max-lg:col-span-6 relative flex justify-center items-center"
          >
            <p className="font-extrabold text-[140px] max-lg:text-[100px] leading-[0.8] text-white/10">
              {item.count}
            </p>
            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-white uppercase font-semibold text-[24px] max-lg:text-[18px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
