import React from "react";
import { Heading, Paragraph } from "./common";
import Link from "next/link";
import { socialData } from "../utils/data/social";
import Form from "./form";
type Props = {
  title?: string;
};
const ContactSection = (props: Props) => {
  return (
    <div className="bg-[#f8f8f8] grid grid-cols-12 p-[100px_120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[100px] max-2xl:gap-[60px] max-lg:gap-[30px_0] items-center">
      <div className="col-span-4 max-lg:col-span-full justify-center flex flex-col gap-6 max-lg:gap-[20px_0]">
        <Heading
          title={props.title ?? "Contact Section"}
          className="text-[#181d4e]"
        />
        <div className=" flex flex-col gap-3">
          <Paragraph
            title={`785 15h Street, Office 478, \n Berlin, De 81566`}
            className="text-[#5a5a67]"
          />
          <div>
            <Link
              href="mailto:contact@example.com"
              className="text-[#fa4729] hover:underline underline-offset-4 text-[18px] max-lg:text-[16px] font-medium"
            >
              contact@example.com
            </Link>
          </div>
          <div className="">
            <Link
              href="tel:+917559096327"
              className="text-[#181d4e] text-[22px] max-lg:text-[18px] font-medium hover:underline underline-offset-4"
            >
              +91 75590 96327
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          {socialData.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-[#fa4729]/10 rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#db2b0e]/15 transition-colors duration-300"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-8 max-lg:col-span-full grid grid-cols-12 gap-10 max-lg:gap-[20px_0]">
        <Form />
      </div>
    </div>
  );
};

export default ContactSection;
