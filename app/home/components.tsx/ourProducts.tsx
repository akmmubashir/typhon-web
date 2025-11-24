import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProducts = () => {
  //   const productsData = [
  //     {
  //       id: 1,
  //       title: "Space Frames",
  //       // img: "/assets/products/space-frames.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "PEB Components",
  //       // img: "/assets/products/peb-components.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "Steel Trusses",
  //       // img: "/assets/products/steel-trusses.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 4,
  //       title: "Polycarbonate Roofing",
  //       // img: "/assets/products/polycarbonate-roofing.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 5,
  //       title: "Tensile Fabrics",
  //       // img: "/assets/products/tensile-fabrics.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 6,
  //       title: "Metal Roofing Sheets",
  //       // img: "/assets/products/metal-roofing-sheets.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 7,
  //       title: "Sandwich Panels",
  //       // img: "/assets/products/sandwich-panels.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 8,
  //       title: "Steel Walkways & Staircases",
  //       // img: "/assets/products/steel-walkways-staircases.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //     {
  //       id: 9,
  //       title: "Custom Engineered Steel Works",
  //       // img: "/assets/products/custom-engineered-steel-works.jpg"
  //       img: "/assets/services/steel-structural-fabrication.jpg",
  //     },
  //   ];
  return (
    <div className="grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px_40px] max-lg:gap-[40px_0] items-center">
      <div className="col-span-7 max-lg:col-span-full">
        <SubHeading title="Engineered for Strength, Safety & Longevity" />
        <Heading title="Products & Structural Solutions" />
        <div>
          <Paragraph
            title="At Typhon, we provide a comprehensive range of high-precision roofing and steel structure solutions designed to meet the evolving needs of industrial, commercial, institutional, and infrastructural projects. Every product we manufacture and install is backed by strong engineering principles, advanced fabrication methods, and a commitment to delivering structures that stand the test of time."
            className={"text-[#2a2a2a]"}
          />
          <Paragraph
            title="Our solutions are crafted to ensure superior durability, performance, safety, and aesthetic appeal, making Typhon a trusted partner across Kerala, Tamil Nadu, and Karnataka. Whether you need large-scale steel buildings or specialized roofing systems, we deliver end-to-end solutions—from concept to completion."
            className="text-[#2a2a2a] mt-3 max-lg:mt-2"
          />
        </div>
        <div className="">
          <Link
            href={"/about"}
            className="uppercase bg-black/10 hover:bg-black/20 border border-black/10 text-black font-medium text-[16px] max-lg:text-[14px] p-[10px_20px] rounded-md mt-4 inline-block"
          >
            know more
          </Link>
        </div>
      </div>
      <div className="col-span-5 max-lg:col-span-full relative">
        <Image
          src="/assets/products/product2.jpg"
          alt="About Us"
          width={600}
          height={400}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="w-2/5 absolute bottom-[-60px] max-lg:-bottom-5 right-[50px] max-lg:right-5 shadow-lg">
          <Image
            src="/assets/products/product4.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
        <div className="w-2/5 absolute top-[-60px] max-lg:-top-10 left-[-50px] max-lg:-left-4 shadow-lg">
          <Image
            src="/assets/products/product3.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
      </div>
      <div className="col-span-full grid grid-cols-12">
        <div className="col-span-4 max-lg:col-span-full"></div>
      </div>
    </div>
  );
};

export default OurProducts;
