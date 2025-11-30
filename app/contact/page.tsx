import React from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Header from "../components/header";
import Faq from "../components/faq";

const page = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Banner
        title="Contact Us"
        // tagLine="Learn more about our company"
        img="/assets/common/contactBanner.webp"
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
