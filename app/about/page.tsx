import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Faq from "../components/faq";
import Testimonials from "../components/testimonials";
import AboutContent from "./components/aboutContent";
import WhatWeOffer from "./components/whatWeOffer";

const page = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Banner
        title="About Us"
        // tagLine="Learn more about our company"
        img="/assets/common/aboutBanner.webp"
        titleClass="uppercase mt-8"
        tagLineClass="uppercase"
      />
      <AboutContent />
      <WhatWeOffer />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
