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
      className={`${
        className ? className : "text-black"
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
      className={`${
        className ? className : "text-[#fa4729]"
      } uppercase text-[18px] max-lg:text-[16px] font-semibold mb-2 max-lg:mb-1`}
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
