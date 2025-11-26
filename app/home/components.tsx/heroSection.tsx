import React from "react";
import { CommonButton } from "@/app/components/common";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full mt-[-110px] max-lg:mt-[-77px] relative flex p-[120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[60px_20px]"
      style={{
        backgroundImage: "url(/assets/common/home.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top gradient black overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      {/* Left gradient black overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      {/* Optional content container */}
      <div className="relative z-10 mt-auto w-3/5 max-2xl:w-4/5 max-lg:w-full flex flex-col gap-3">
        <h2 className="text-white text-[24px] max-xl:text-[20px] uppercase font-medium">
          Built for Generations
        </h2>
        <h1 className="text-white text-[62px] max-lg:text-[32px] font-extrabold leading-[1.1] max-lg:leading-[1.2]">
          Premium Roofing & Steel Structure Solutions
        </h1>
        <p className="text-white text-[16px] max-lg:text-[14px]">
          Delivering reliable, durable, and innovative roofing and structural
          works across Kerala, Tamil Nadu & Karnataka. From space frames to PEB
          structures and tensile architecture, Typhon ensures quality
          craftsmanship with unmatched precision.
        </p>
        <div className="flex gap-4 max-lg:gap-2.5">
          <CommonButton title="Get a Free Quote" />
          <Link
            href="/projects"
            className="bg-white/10 hover:bg-white/20 border border-white/50 text-white font-medium text-[16px] max-lg:text-[14px] p-[10px_20px] rounded-md mt-4 inline-block"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
