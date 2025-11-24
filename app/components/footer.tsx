import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Paragraph, SubHeading } from "./common";
import { navigation } from "../utils/data/navigation";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-[#db2b0e]/85 grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px_40px] max-lg:gap-[40px_0] items-start">
        <div className="col-span-3 max-lg:col-span-full flex flex-col justify-start gap-2.5">
          <Link href="/" className="w-fit">
            <Image
              src={"/assets/common/logo-white.png"}
              alt="Logo"
              className="w-full h-[70px] max-lg:h-[50px] object-contain"
              width={400}
              height={100}
            />
          </Link>
          <Paragraph
            title="Typhon delivers high-quality roofing and steel structure solutions across Kerala, Tamil Nadu, and Karnataka. We specialize in space frames, PEB buildings, tensile roofing, and sandwich panel systems—engineered for durability, precision, and long-term performance. Built for generations."
            className="text-white"
          />
        </div>
        <div className="col-span-9 max-lg:col-span-full flex flex-wrap max-lg:flex-col justify-end gap-[60px] max-lg:gap-[20px_0]">
          <div className="">
            <SubHeading title="Quick Links" className="text-white" />
            {navigation.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white text-[16px] max-lg:text-[14px] block mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="">
            <SubHeading title="Our Services" className="text-white" />
            {navigation.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white block mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="">
            <SubHeading title="Our Prodects" className="text-white" />
            {navigation.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white block mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="">
            <SubHeading title="Social Profiles" className="text-white" />
            {navigation.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-white block mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 text-center bg-[#2a2a2a]">
        <Paragraph
          title="© 2025 Typhon. All rights reserved"
          className="text-white!"
        />
      </div>
    </React.Fragment>
  );
};

export default Footer;
