import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import { servicesData } from "@/app/utils/data/services";
import WhyChooseUs from "@/app/components/whyChooseUs";
import Faq from "@/app/components/faq";
import Banner from "@/app/components/banner";

type Props = {
  location: string;
};

const ServiceList = (props: Props) => {
  return (
    <React.Fragment>
      <Banner
        title={"Services"}
        // tagLine="Learn more about our company"
        img={"/assets/common/serviceBanner.webp"}
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      <div className="p-[80px_120px] max-2xl:p-[80px_100px] max-lg:p-[60px_80px] max-md:p-[40px_20px]">
        <div className="flex flex-col items-center">
          <Heading
            title={
              <>
                {" "}
                Roofing & Steel Structure Services in{" "}
                <span className="text-[#fa4729]">
                  {props.location.charAt(0).toUpperCase() +
                    props.location.slice(1)}
                </span>
              </>
            }
            className="text-center"
          />
          <Paragraph
            title={`Typhon provides complete roofing and steel structure solutions for industries, factories, commercial buildings, institutions, real estate developers, and infrastructure projects across ${
              props.location.charAt(0).toUpperCase() + props.location.slice(1)
            }. Our services are designed to deliver speed, safety, and engineering precision—ensuring your project runs smoothly from design to installation. With a dedicated team of welders, fabricators, engineers, and erection specialists, we execute every service with unmatched craftsmanship and quality.`}
            className="text-[#2a2a2a] text-center w-3/4 max-md:w-full mb-10 max-lg:mb-6"
          />
        </div>
        <div className="grid grid-cols-12 gap-10 max-xl:gap-[30px]">
          {servicesData.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="col-span-3 max-2xl:col-span-4 max-lg:col-span-6 max-md:col-span-full group"
            >
              <div className="bg-white rounded-xl shadow-lg group-hover:shadow-xl flex flex-col h-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  aria-disabled="true"
                  height={250}
                  className="object-cover  w-full h-[200px] max-xl:h-[180px] group-hover:scale-105 transition-transform duration-300 max-sm:h-[180px]"
                />
                <Link
                  href={`/${props.location
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="p-5 max-2xl:p-[15px] max-md:p-4 h-full"
                >
                  <SubHeading
                    title={service.title}
                    className="line-clamp-2 uppercase"
                  />
                  <Paragraph
                    title={service.description}
                    className="text-black line-clamp-2"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <Faq />
    </React.Fragment>
  );
};

export default ServiceList;
