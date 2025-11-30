import React from "react";

type Props = {
  locations: {
    id: number;
    name: string;
    address: string;
    mapSrc: string;
  }[];
};

const LocationMaps = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 p-[100px_120px] max-2xl:p-[100px] max-lg:p-[60px_80px] max-md:p-[50px_20px] gap-[60px] max-2xl:gap-20 max-lg:gap-[30px_0]">
        <div className="col-span-4">
          <div className="rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.346851097423!2d76.33374475!3d10.054488749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764516134397!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMaps;
