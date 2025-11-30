import React from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Header from "../components/header";
import ContactSection from "../components/contactSection";
import LocationMaps from "./components/locationMaps";
import { locationsList } from "../utils/data/locations";

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
      <ContactSection title="Get in Touch" />
      <LocationMaps locations={locationsList} />
      <Footer />
    </div>
  );
};

export default page;
