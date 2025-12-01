import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner"; 
import ProductsList from "./components/productsList";
import ServiceList from "./components/serviceList";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  console.log("===ss===", slug[1]);

  return (
    <div className="bg-white w-full">
      <Header />
      <Banner
        title={slug[1] || "Page"}
        // tagLine="Learn more about our company"
        img={
          slug[1] === "services"
            ? "/assets/common/serviceBanner.webp"
            : slug[1] === "products"
            ? "/assets/common/productBanner.webp"
            : "/assets/common/defaultBanner.webp"
        }
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      {slug[1] === "products" && <ProductsList location={slug[0]} />}
      {slug[1] === "services" && <ServiceList location={slug[0]} />}
      <Footer />
    </div>
  );
};

export default page;
