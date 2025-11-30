import React, { useEffect, useState } from "react";
import { locationsList } from "../utils/data/locations";

const LocationSelector = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("selectedLocation");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(stored);
      return;
    }
    // Try browser geolocation first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {}, // skip browser geolocation for now
        () => fetchByIP(),
        { timeout: 5000 }
      );
    } else {
      fetchByIP();
    }
    function fetchByIP() {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          // Try to match by state, then district
          const found = locationsList.find(
            (loc) =>
              loc.state.toLowerCase() === (data.region || "").toLowerCase() ||
              loc.district.toLowerCase() === (data.city || "").toLowerCase()
          );
          if (found) {
            setSelected(found.id.toString());
            localStorage.setItem("selectedLocation", found.id.toString());
          }
        })
        .catch(() => {});
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    localStorage.setItem("selectedLocation", e.target.value);
  };

  return (
    <div className={`${className} rounded-md`}>
      <select
        name="location"
        value={selected}
        onChange={handleChange}
        className={`bg-transparent focus:outline-none text-[16px] font-medium w-full`}
      >
        {locationsList.map((loc) => (
          <option key={loc.id} value={loc.id} className="text-black">
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
