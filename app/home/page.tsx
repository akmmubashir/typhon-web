import React from "react";
import Header from "../components/header";
import HeroSection from "./components.tsx/heroSection";
import AboutSection from "./components.tsx/aboutSection";
import OurServices from "./components.tsx/ourServices";
import OurProducts from "./components.tsx/ourProducts";
import Footer from "../components/footer";
import WhyChooseUs from "./components.tsx/whyChooseUs";

const HomePage = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <OurServices />
      <OurProducts />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;
