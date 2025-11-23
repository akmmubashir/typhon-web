import React from "react";
import Header from "../components/header";
import HeroSection from "./components.tsx/heroSection";
import AboutSection from "./components.tsx/aboutSection";
import OurServices from "./components.tsx/ourServices";

const HomePage = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <OurServices />
    </div>
  );
};

export default HomePage;
