import React from "react";
import {
  Heading,
  LinkButton,
  Paragraph,
  SubHeading,
} from "@/app/components/common";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-12 p-[120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px] max-lg:gap-[30px_0] items-center">
      <div className="col-span-5 max-lg:col-span-full relative">
        <Image
          src="/assets/common/about1.webp"
          alt="About Us"
          width={600}
          height={400}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="w-2/5 absolute bottom-[-60px] max-lg:-bottom-5 right-[50px] max-lg:right-5 shadow-lg">
          <Image
            src="/assets/common/about2.webp"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
        <div className="w-2/5 absolute top-[-60px] max-lg:-top-10 left-[-50px] max-lg:-left-4 shadow-lg">
          <Image
            src="/assets/common/about3.webp"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl mt-4"
          />
        </div>
      </div>
      <div className="col-span-7 max-lg:col-span-full">
        <SubHeading title="who we are" className="uppercase" />
        <Heading title="About Typhon" />
        <div>
          <Paragraph
            title="Typhon is a trusted roofing and structural engineering company offering end-to-end services, including the design, manufacturing, and installation of advanced steel structures. With years of experience and a skilled workforce of welders, fabricators, and erection experts, we consistently deliver premium-quality projects across South India."
            className={"text-[#2a2a2a]"}
          />
          <Paragraph
            title="Our innovative approach and modern engineering practices help us complete high-performing structural projects in a fraction of the typical timeline—without compromising on quality"
            className="text-[#2a2a2a] mt-3 max-lg:mt-2"
          />
        </div>
        <div className="">
          <LinkButton title="know more" link="/about" className="uppercase" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
