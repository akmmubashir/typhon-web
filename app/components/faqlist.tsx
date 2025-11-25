"use client";
import React, { useState } from "react";

type Props = {
  faqData: {
    id: number;
    Q: string;
    A: string;
  }[];
};

const Faqlist = ({ faqData }: Props) => {
  const [activeId, setActiveId] = useState(faqData[0]?.id);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? id : id)); // always set to clicked id (single open)
  };

  return (
    <div className="col-span-full w-full flex flex-col justify-center items-center">
      {faqData.map((item) => {
        const open = item.id === activeId;
        return (
          <div key={item.id} className="group w-2/4 max-lg:w-full">
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={open}
              className={`cursor-pointer w-full flex justify-between text-left py-5 focus:outline-none ${
                !open ? "border-b border-gray-200 items-center" : "items-start"
              }`}
            >
              <span className="font-semibold text-[#181d4e] text-[24px] max-2xl:text-[20px] max-lg:text-[16px]">
                {item.Q}
              </span>
              <span
                className={`ml-4 transition-transform duration-300 text-4xl leading-[0.5] ${
                  open ? "rotate-45 text-[#fa4729]" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out border-b border-black/60 ${
                open ? "max-h-[400px] opacity-100 pb-4" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="text-[16px] max-lg:text-[14px] text-[#5a5a67]">
                {item.A}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqlist;
