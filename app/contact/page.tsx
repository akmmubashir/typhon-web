import React from "react";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Header from "../components/header";
import ContactSection from "../components/contactSection";
import LocationMaps from "./components/locationMaps";

const page = () => {
  const locationsList = [
    {
      id: 1,
      name: "Kochi",
      address: "KINFRA Kalmassery ,Kochi, Kerala, India",
      mapSrc: "https://maps.google.com/?q=123+5th+Ave,+New+York,+NY+10001",
    },
    {
      id: 2,
      name: "Chennai",
      address: "",
      mapSrc: "https://maps.google.com/?q=123+5th+Ave,+New+York,+NY+10001",
    },
    {
      id: 3,
      name: "Bangalore",
      address: "",
      mapSrc: "https://maps.google.com/?q=123+5th+Ave,+New+York,+NY+10001",
    },
  ];
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
      <ContactSection />
      <LocationMaps locations={locationsList} />
      <Footer />
    </div>
  );
};

export default page;
