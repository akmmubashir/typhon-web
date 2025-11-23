import React from "react";

export const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={`text-[28px] max-2xl:text-[24px] max-lg:text-[20px] uppercase font-semibold mb-2 ${
        className ? className : "text-black"
      }`}
    >
      {title}
    </h2>
  );
};
export const SubHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h6
      className={`uppercase text-[18px] max-lg:text-[16px] font-semibold mb-2 max-lg:mb-1 ${
        className ? className : "text-[#2563eb]"
      }`}
    >
      {title}
    </h6>
  );
};
export const Paragraph = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <p className={`text-[16px] max-lg:text-[14px] ${className}`}>{title}</p>
  );
};
