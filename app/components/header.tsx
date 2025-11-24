"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CommonButton } from "./common";
import { navigation } from "../utils/data/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize state if already scrolled
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full flex items-center justify-between sticky top-0 z-50 p-[20px_120px] max-2xl:p-[20px_100px] max-lg:p-[10px_80px] max-md:p-[10px_20px] transition-colors duration-300 ${
        scrolled ? "bg-white backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src={
            scrolled
              ? "/assets/common/logo.png"
              : "/assets/common/logo-mixed.png"
          }
          alt="Logo"
          className="w-full h-[70px] max-lg:h-[50px] object-contain"
          width={400}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-5 max-lg:hidden">
        {navigation.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`uppercase font-medium text-[16px] ${
              !scrolled
                ? "text-white hover:text-[#fa4729]"
                : "text-black hover:text-[#fa4729]"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        <CommonButton title=" Let's Talk" />
      </div>
    </div>
  );
};

export default Header;
