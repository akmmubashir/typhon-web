import React from "react";
import { Heading, SubHeading } from "./common";
import Faqlist from "./faqlist";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      Q: "What type of roofing solutions do you provide?",
      A: "We offer space frames, PEB buildings, tensile roofing, sandwich panels, and steel fabrication.",
    },
    {
      id: 2,
      Q: "Which locations do you serve?",
      A: "Kerala, Tamil Nadu, and Karnataka.",
    },
    {
      id: 3,
      Q: "Are your structures weather-resistant?",
      A: "Yes. All structures are engineered for long-term durability, safety, and weather resistance.",
    },
    {
      id: 4,
      Q: "Do you offer custom steel structure designs?",
      A: "Absolutely. We provide fully customized solutions based on project requirements.",
    },
  ];
  return (
    <div className="grid grid-cols-12 p-[80px_120px] max-2xl:p-[80px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-10 max-lg:gap-[20px_0] items-center">
      <div className="col-span-full flex flex-col justify-center items-center text-center">
        <Heading title="Frequently Asked Questions" className="" />
        <SubHeading
          title="Answers to Common Roofing & Structural Queries"
          className="text-[#fa4729] mb-0! uppercase"
        />
      </div>
      <Faqlist faqData={faqData} />
    </div>
  );
};

export default Faq;
