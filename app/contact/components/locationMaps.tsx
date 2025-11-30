import React from "react";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";

type Props = {
  locations: {
    id: number;
    name: string;
    address: string;
    mapSrc: string;
  }[];
};

const LocationMaps = (props: Props) => {
  return (
    <div className="grid grid-cols-12 p-[100px_120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-10 max-lg:gap-[30px] max-md:gap-[30px_0]">
      <div className="col-span-full flex flex-col items-center justify-center">
        <SubHeading
          title="Our Top Locations"
          className="text-[#2a2a2a]! text-center uppercase"
        />
        <Heading
          title="Delivering Structural Excellence Across India"
          className="text-[#fa4729]! text-center"
        />
        <Paragraph
          title="Typhon proudly serves clients across Kerala, Tamil Nadu, and Karnataka, providing advanced roofing and steel structure solutions to industrial, commercial, and institutional projects. With a strong presence in multiple regions, we ensure quick response times, smooth coordination, and efficient project execution. Our widespread operational network allows us to deliver the same level of quality, precision, and service excellence—no matter where your project is located."
          className="w-2/3 max-md:w-full text-center"
        />
      </div>
      {props.locations.map((item) => (
        <div
          key={item.id}
          className="col-span-4 max-2xl:col-span-6 max-md:col-span-full flex flex-col gap-2.5"
        >
          <div
            className="rounded-[20px] max-lg:rounded-lg overflow-hidden"
            dangerouslySetInnerHTML={{ __html: item.mapSrc }}
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-[22px] max-lg:text-[20px] max-md:text-[18px] font-semibold text-[#fa4729]">
              {item.name}
            </h6>
            <p className="text-[#2a2a2a] text-[16px] max-md:text-[14px]">
              {item.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationMaps;
