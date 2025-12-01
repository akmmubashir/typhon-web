import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Paragraph, SubHeading } from "@/app/components/common";
import { productsData } from "@/app/utils/data/products";
import WhyChooseUs from "@/app/components/whyChooseUs";
import Faq from "@/app/components/faq";
import Banner from "@/app/components/banner";

type Props = {
  location: string;
};

const ProductsList = (props: Props) => {
  return (
    <React.Fragment>
      <Banner
        title={`Products`}
        // tagLine="Learn more about our company"
        img={"/assets/common/productBanner.webp"}
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      <div className="p-[80px_120px] max-2xl:p-[80px_100px] max-lg:p-[60px_80px] max-md:p-[40px_20px]">
        <div className="flex flex-col items-center">
          <Heading
            title={
              <>
                {" "}
                High-Quality Roofing & Structural Products in{" "}
                <span className="text-[#fa4729]">
                  {props.location.charAt(0).toUpperCase() +
                    props.location.slice(1)}
                </span>
              </>
            }
            className="text-center"
          />
          <Paragraph
            title={`Typhon supplies a complete range of advanced roofing and steel structural products for industrial, commercial, and institutional projects in ${
              props.location.charAt(0).toUpperCase() + props.location.slice(1)
            } and surrounding regions. Engineered with precision and built using premium-grade materials, our products are designed to deliver long-term durability, load efficiency, resistance to weather conditions, and superior structural performance. Whether you're working on a factory expansion, commercial building, warehouse development, or architectural structure, our products help you achieve faster construction timelines with uncompromised quality.`}
            className="text-[#2a2a2a] text-center w-3/4 max-md:w-full mb-10 max-lg:mb-6"
          />
        </div>
        <div className="grid grid-cols-12 gap-10 max-xl:gap-[30px]">
          {productsData.map((product) => (
            <Link
              href={`/${props.location
                .toLowerCase()
                .replace(/ /g, "-")}/products/${product.title
                .toLowerCase()
                .replace(/ /g, "-")}`}
              key={product.id}
              className="bg-transparent col-span-3 max-2xl:col-span-4 max-lg:col-span-6 max-md:col-span-full flex flex-col items-center text-center overflow-hidden shadow-lg rounded-xl group"
            >
              <div className="w-full h-[200px] overflow-hidden relative bg-transparent">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={400}
                  height={250}
                  className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <SubHeading
                  title={product.title}
                  className="bg-white absolute -bottom-4 mb-0! p-2.5 left-0 rounded-[0_20px_0_0] uppercase border-[0_0_0_1.5px] border-white group-hover:border-[#fa4729] transition-border duration-300"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full rounded-b-xl border-[0_1.5px_1.5px] border-white group-hover:border-[#fa4729] transition-border duration-300">
                <p className="text-start text-[16px] max-lg:text-[14px] line-clamp-2 p-2.5">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <Faq />
    </React.Fragment>
  );
};

export default ProductsList;
