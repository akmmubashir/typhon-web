import React from "react";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";

const AboutContent = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[80px_120px] max-2xl:p-[80px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px]">
      <div className="w-2/3 max-2xl:w-4/5 max-lg:w-full">
        <SubHeading
          title="Built for Generations"
          className="text-center uppercase"
        />
        <Heading
          title="About Typhon Pvt Ltd"
          className="text-center lg:font-bold!"
        />
        <div className="flex flex-col gap-4 max-lg:gap-3">
          <Paragraph
            title={
              <>
                Typhon is a trusted roofing and steel structure solutions
                provider offering high-performance, durable, and innovative
                construction systems across{" "}
                <span className="font-medium text-[#fa4729]">
                  Kerala, Tamil Nadu, and Karnataka.
                </span>{" "}
                With years of technical expertise and a strong commitment to
                engineering excellence, we design, manufacture, and install
                advanced roofing and structural systems that meet global quality
                standards.
              </>
            }
            className={"text-[#2a2a2a] text-center max-lg:text-justify"}
          />
          <Paragraph
            title="Our solutions include Space Frame Structures, Pre-Engineered Buildings (PEB), Tensile Architecture, Sandwich Panel Roofing, Steel Fabrication and a variety of custom structural systems tailored to industrial, commercial, institutional, and public infrastructure projects."
            className={"text-[#2a2a2a] text-center max-lg:text-justify"}
          />
          <Paragraph
            title="Typhon is built on the belief that structures should be strong, sustainable, and designed to last for generations. Every project we deliver combines careful engineering, skilled workmanship, and modern design thinking."
            className={"text-[#2a2a2a] text-center max-lg:text-justify"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
