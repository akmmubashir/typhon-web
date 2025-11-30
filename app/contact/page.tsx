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
      mapSrc: `<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.346851097423!2d76.33374475!3d10.054488749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764516134397!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />`,
    },
    {
      id: 2,
      name: "Chennai",
      address: "MEPZ SEZ, Tambaram, Chennai, Tamil Nadu, India",
      mapSrc: `<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.346851097423!2d76.33374475!3d10.054488749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764516134397!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />`,
    },
    {
      id: 3,
      name: "Bangalore",
      address: "MG Road, Bangalore, Karnataka, India",
      mapSrc: `<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.346851097423!2d76.33374475!3d10.054488749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764516134397!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />`,
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
      <ContactSection title="Get in Touch" />
      <LocationMaps locations={locationsList} />
      <Footer />
    </div>
  );
};

export default page;
