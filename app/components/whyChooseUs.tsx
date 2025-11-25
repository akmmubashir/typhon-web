import React from "react";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyChooseUsPoints = [
    { id: 1, text: "Decades of industry experience" },
    { id: 2, text: "Fast track execution and timely delivery" },
    { id: 3, text: "Certified welders & skilled technicians" },
    { id: 4, text: "End to end design, engineering & erection services" },
    { id: 5, text: "High quality materials ensuring long term durability" },
    {
      id: 6,
      text: "Large scale operations across Kerala, Tamil Nadu & Karnataka",
    },
    { id: 7, text: "Competitive pricing without compromising quality" },
    { id: 8, text: "Strong safety standards and protocols" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#0b0d26] grid grid-cols-12 p-[80px_120px] max-2xl:p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[40px_10px] max-lg:gap-[30px_0] items-center">
      <div className="w-[170px] max-lg:w-[100px] absolute left-1/3 -translate-x-1/2 max-md:left-[330px] top-[-60px] rotate-180">
        <Image
          src="/assets/common/vector1.png"
          alt="Our Team"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[170px] max-lg:w-[100px] absolute left-2/5 max-md:left-4/5 -bottom-2.5 max-lg:-bottom-5 ">
        <Image
          src="/assets/common/vector2.png"
          alt="Our Team"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[170px] max-lg:w-[100px] absolute left-0 max-md:left-[-30px] bottom-[-60px] rotate-45">
        <Image
          src="/assets/common/vector3.png"
          alt="Our Team"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-6 max-lg:col-span-full flex flex-col relative z-10 max-lg:order-2">
        <SubHeading
          title="Experience. Innovation. Precision. Quality."
          className="text-[#fa4729]"
        />
        <Heading
          title="Why Choose Typhon"
          className="text-white font-bold! text-[40px]! max-2xl:text-[36px]! max-lg:text-[26px]! mb-3!"
        />
        <Paragraph
          title="With a highly experienced team and state-of-the-art fabrication abilities, Typhon stands out for:"
          className="text-[#f1f1f1]"
        />
        <div className="flex flex-col gap-4 mt-6">
          {whyChooseUsPoints.map((point) => (
            <div key={point.id} className="flex gap-2">
              <div className="bg-white rounded-full w-1 aspect-square"></div>
              <Paragraph title={point.text} className="text-white" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-6 max-lg:col-span-full relative flex items-center max-lg:order-1">
        <Image
          src="/assets/common/whychooseus.jpg"
          alt="About Us"
          width={600}
          height={400}
          className="object-cover w-3/5 h-full rounded-xl"
        />
        <div className="w-3/4 absolute right-0 top-1/2 -translate-y-1/2 shadow-lg">
          <Image
            src="/assets/common/whychooseus1.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
