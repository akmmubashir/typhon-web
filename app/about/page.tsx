import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";

const page = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Banner
        title="About Us"
        tagLine="Learn more about our company"
        img="/assets/about/aboutBanner.webp"
        titleClass="uppercase"
        tagLineClass="uppercase"
      />
      <Footer />
    </div>
  );
};

export default page;
