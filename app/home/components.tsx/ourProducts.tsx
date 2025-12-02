"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Heading,
  LinkButton,
  Paragraph,
  SubHeading,
} from "@/app/components/common";
import HomeProductsList from "./homeProductsList";
import { productsData } from "@/app/utils/data/products";
import { locationsList } from "@/app/utils/data/locations";
// import HomeProductSlider from "./homeProductSlider";

const OurProducts = () => {
  const [location, setLocation] = useState<string>("chennai");

  useEffect(() => {
    // Get initial location from localStorage
    const storedLocationId = localStorage.getItem("selectedLocation");
    if (storedLocationId) {
      const locationObj = locationsList.find(
        (loc) => loc.id.toString() === storedLocationId
      );
      if (locationObj) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocation(locationObj.name.toLowerCase().replace(/\s+/g, "-"));
      }
    }

    // Listen for location changes
    const handleLocationChange = () => {
      const storedLocationId = localStorage.getItem("selectedLocation");
      if (storedLocationId) {
        const locationObj = locationsList.find(
          (loc) => loc.id.toString() === storedLocationId
        );
        if (locationObj) {
          setLocation(locationObj.name.toLowerCase().replace(/\s+/g, "-"));
        }
      }
    };

    window.addEventListener("locationChanged", handleLocationChange);
    return () =>
      window.removeEventListener("locationChanged", handleLocationChange);
  }, []);

  return (
    <div className="grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px_40px] max-lg:gap-[40px_0] items-center">
      <div className="col-span-7 max-lg:col-span-full  max-lg:order-2">
        <SubHeading
          title="Engineered for Strength, Safety & Longevity"
          className="uppercase"
        />
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
          <LinkButton
            title="know more"
            link={`/${location}/products`}
            className="uppercase"
          />
        </div>
      </div>
      <div className="col-span-5 max-lg:col-span-full relative max-lg:order-1">
        <Image
          src="/assets/products/product2.webp"
          alt="About Us"
          width={600}
          height={400}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="w-2/5 absolute bottom-[-60px] max-lg:-bottom-5 right-[50px] max-lg:right-5 shadow-lg">
          <Image
            src="/assets/products/product4.webp"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
        <div className="w-2/5 absolute top-[-60px] max-lg:-top-10 left-[-50px] max-lg:-left-4 shadow-lg">
          <Image
            src="/assets/products/product3.webp"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
      </div>
      <HomeProductsList productsData={productsData} />
    </div>
  );
};

export default OurProducts;
