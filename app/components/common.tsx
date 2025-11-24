import React from "react";
import Link from "next/link";

export const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={`${className ? className : "text-black"
        } text-[28px] max-2xl:text-[24px] max-lg:text-[20px] font-semibold mb-2`}
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
      className={`${className
        } text-[#fa4729] uppercase text-[18px] max-lg:text-[16px] font-semibold mb-2 max-lg:mb-1`}
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
    <p className={`${className} text-[16px] max-lg:text-[14px]`}>{title}</p>
  );
};
export const LinkButton = ({
  title,
  className,
  link,
}: {
  title: string;
  className?: string;
  link?: string;
}) => {
  return (
    <Link
      href={link ? link : "/"}
      className={`cursor-pointer bg-[#fa4729] hover:bg-[#db2b0e] text-white font-medium text-[16px] max-lg:text-[14px] p-[10px_20px] rounded-md mt-4 inline-block ${className ? className : ""
        }`}
    >
      {title}
    </Link>
  );
};
export const CommonButton = ({
  title,
  className,
  onClick,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer bg-[#fa4729] hover:bg-[#db2b0e] text-white font-medium text-[16px] max-lg:text-[14px] p-[10px_20px] rounded-md mt-4 inline-block ${className ? className : ""
        }`}
    >
      {title}
    </button>
  );
};
