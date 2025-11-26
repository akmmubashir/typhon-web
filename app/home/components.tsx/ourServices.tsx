import React from "react";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import Image from "next/image";
import HomeServiceSlider from "./homeServiceSlider";

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      title: "Space Frame Structures",
      description: "Lightweight, high-strength architectural systems",
      img: "/assets/services/space-frame-structures.webp",
    },
    {
      id: 2,
      title: "PEB (Pre-Engineered Buildings)",
      description: "Fast, efficient, and durable steel buildings",
      img: "/assets/services/pre-engineered-buildings.webp",
    },
    {
      id: 3,
      title: "Tensile Roofing Architecture",
      description: "Aesthetic, modern, and weather-resistant structures",
      img: "/assets/services/tensile-roofing-architecture.webp",
    },
    {
      id: 4,
      title: "Sandwich Panel Roofing",
      description: "Energy-efficient and insulated roofing systems",
      img: "/assets/services/sandwich-panel-roofing.webp",
    },
    {
      id: 5,
      title: "Steel Structural Fabrication",
      description:
        "Precision-built components manufactured to the highest standards",
      img: "/assets/services/steel-structural-fabrication.webp",
    },
    {
      id: 6,
      title: "Commercial & Industrial Roofing",
      description:
        "Long-lasting solutions for factories, malls, warehouses, and more",
      img: "/assets/services/commercial-industrial-roofing.webp",
    },
  ];
  return (
    <div className="bg-[#0b0d26] grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[40px_30px] max-lg:gap-[30px_0] items-start">
      <div className="col-span-full flex flex-col justify-center items-center text-center">
        <Heading title="Our Core Services" className="text-white" />
        <SubHeading
          title="Complete Roofing & Structural Solutions Under One Roof"
          className="text-[#fa4729]"
        />
        <Paragraph
          title="We provide a wide range of specialized services tailored for industrial, commercial, and institutional sectors:"
          className="text-[#f1f1f1]"
        />
      </div>
      <div className="col-span-5 max-lg:col-span-full -rotate-y-180">
        <Image
          src={"/assets/services/service.webp"}
          alt="service"
          width={400}
          height={250}
          className="object-cover w-full rounded-[20px_60px] max-lg:hidden"
        />
        <Image
          src={"/assets/services/serviceMob.webp"}
          alt="service"
          width={400}
          height={250}
          className="object-cover w-full rounded-[20px_60px] lg:hidden"
        />
      </div>
      <HomeServiceSlider servicesData={servicesData} />
    </div>
  );
};

export default OurServices;
