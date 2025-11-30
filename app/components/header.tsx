"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CommonButton } from "./common";
import { navigation } from "../utils/data/navigation";
import LocationSelector from "./locationSelector";
import { ToggleIcon } from "./icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize state if already scrolled
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

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
              currentPath === link.url ? "text-[#fa4729]!" : ""
            } ${
              !scrolled
                ? `text-white hover:text-[#fa4729]`
                : `text-black hover:text-[#fa4729]`
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <LocationSelector
          className={`max-lg:hidden p-[10px_14px] ${
            scrolled ? "bg-[#13163D] text-white" : "bg-white text-[#2a2a2a]"
          }`}
        />
        <div className="max-lg:hidden">
          <CommonButton title="Let's Talk" className="mt-0!" />
        </div>
        <div className="lg:hidden">
          <button
            className="bg-[#fa4729] hover:bg-[#db2b0e] p-1 rounded"
            onClick={() => setShowNav((v) => !v)}
          >
            <ToggleIcon className="w-6 h-6 fill-white" />
          </button>
        </div>
        {showNav && (
          <div className="absolute inset-0 z-50 bg-black/60 flex lg:hidden w-screen h-screen">
            <div className="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col gap-4 shadow-lg">
              <div className="flex gap-1 justify-between">
                <div>
                  <Image
                    src={"/assets/common/logo.png"}
                    alt="Logo"
                    className="w-full h-[70px] max-lg:h-[50px] object-contain"
                    width={400}
                    height={100}
                  />
                </div>
                <button
                  className="self-end mb-4"
                  onClick={() => setShowNav(false)}
                >
                  <span className="text-4xl">×</span>
                </button>
              </div>
              <LocationSelector
                className={`bg-[#13163D] text-white p-[10px_10px]`}
              />
              <div className="flex flex-col gap-3">
                {navigation.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className={`font-medium text-[16px] ${
                      currentPath === link.url
                        ? "text-[#fa4729]!"
                        : "text-[#2a2a2a]"
                    } hover:text-[#fa4729]`}
                    onClick={() => setShowNav(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex-1" onClick={() => setShowNav(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
