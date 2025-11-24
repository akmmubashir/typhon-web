import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Paragraph } from "./common";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-[#2563eb]/10 grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px]">
        <div className="col-span-3 max-md:col-span-full flex flex-col justify-start gap-2.5">
          <Link href="/" className="w-fit">
            <Image
              src={"/assets/common/logo.png"}
              alt="Logo"
              className="w-full h-[70px] max-lg:h-[50px] object-contain"
              width={400}
              height={100}
            />
          </Link>
          <Paragraph
            title="Typhon delivers high-quality roofing and steel structure solutions across Kerala, Tamil Nadu, and Karnataka. We specialize in space frames, PEB buildings, tensile roofing, and sandwich panel systems—engineered for durability, precision, and long-term performance. Built for generations."
            className=""
          />
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
      </div>
      <div className="p-5 text-center bg-black/80">
        <Paragraph
          title="© 2025 Typhon. All rights reserved"
          className="text-white!"
        />
      </div>
    </React.Fragment>
  );
};

export default Footer;
