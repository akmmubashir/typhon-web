"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const linksData = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Projects", url: "/projects" },
    { title: "Contact", url: "/contact" },
  ];

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
              : "/assets/common/logo-white.png"
          }
          alt="Logo"
          className="w-full h-[70px] max-lg:h-[50px] object-contain"
          width={400}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-5 max-lg:hidden">
        {linksData.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`uppercase font-medium text-[16px] ${
              !scrolled
                ? "text-white hover:text-[#2563eb]"
                : "text-black hover:text-[#2563eb]"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="cursor-pointer bg-[#2563eb] hover:bg-[#1e40af] text-white text-[16px] max-lg:text-[14px] p-[10px_20px] max-lg:p-[6px_14px] rounded">
          Let&apos;s Talk
        </button>
      </div>
    </div>
  );
};

export default Header;
