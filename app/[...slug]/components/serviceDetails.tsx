import Banner from "@/app/components/banner";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import ContactSection from "@/app/components/contactSection";
import Faq from "@/app/components/faq";
import Testimonials from "@/app/components/testimonials";
import WhyChooseUs from "@/app/components/whyChooseUs";
import Image from "next/image";
import React from "react";

type Props = {
  details: {
    id: number;
    title: string;
    description: string;
    img: string;
  };
  location: string;
  type: string;
  service: string;
};

const ServiceDetails = (props: Props) => {
  return (
    <React.Fragment>
      <Banner
        title={
          <>
            {props.details.title} in{" "}
            <span className="text-[#fa4729]">{props.location}</span>
          </>
        }
        // tagLine="Learn more about our company"
        img={"/assets/common/defaultBanner.webp"}
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      <div className="bg-white grid grid-cols-12 items-center gap-[60px] max-2xl:gap-10 max-lg:gap-[20px_0] p-[80px_120px] max-2xl:p-[80px_100px] max-lg:p-[60px_80px] max-md:p-[40px_20px]">
        <div className="col-span-7 max-2xl:col-span-6 max-lg:col-span-full flex flex-col gap-6">
          <div>
            <Heading title={<>{props.details.title}</>} />
            <Paragraph title={props.details.description} />
          </div>
          <div>
            <SubHeading title={"Features"} className="text-[#fa4729]" />
          </div>
        </div>
        <div className="col-span-5 max-2xl:col-span-6 max-lg:col-span-full">
          <div className="rounded-[20px] overflow-hidden">
            <Image
              src={props.details.img}
              alt={props.details.title + " Image"}
              width={1000}
              height={600}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <ContactSection title="Request a Callback" service={props.service} />
      <WhyChooseUs />
      <Faq />
      <Testimonials />
    </React.Fragment>
  );
};

export default ServiceDetails;
