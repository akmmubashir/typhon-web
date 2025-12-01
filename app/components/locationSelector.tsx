import React, { useEffect, useState } from "react";
import { locationsList } from "../utils/data/locations";

const LocationSelector = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("selectedLocation");
    if (stored) {
      setTimeout(() => setSelected(stored), 0);
      return;
    }

    function setNearestLocation(lat: number, lon: number) {
      function haversine(
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
      ) {
        const toRad = (x: number) => (x * Math.PI) / 180;
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      }
      let minDist = Infinity;
      let nearest = locationsList[0];
      for (const loc of locationsList) {
        if (
          typeof loc.latitude === "number" &&
          typeof loc.longitude === "number"
        ) {
          const dist = haversine(lat, lon, loc.latitude, loc.longitude);
          if (dist < minDist) {
            minDist = dist;
            nearest = loc;
          }
        }
      }
      setSelected(nearest.id.toString());
      localStorage.setItem("selectedLocation", nearest.id.toString());
      window.dispatchEvent(new Event("locationChanged"));
    }

    // Try browser geolocation first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setNearestLocation(pos.coords.latitude, pos.coords.longitude);
        },
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
          if (
            typeof data.latitude === "number" &&
            typeof data.longitude === "number"
          ) {
            setNearestLocation(data.latitude, data.longitude);
          } else if (data.latitude && data.longitude) {
            setNearestLocation(Number(data.latitude), Number(data.longitude));
          } else {
            // fallback: try to match by state, then district
            const found = locationsList.find(
              (loc) =>
                loc.state.toLowerCase() === (data.region || "").toLowerCase() ||
                loc.district.toLowerCase() === (data.city || "").toLowerCase()
            );
            if (found) {
              setSelected(found.id.toString());
              localStorage.setItem("selectedLocation", found.id.toString());
              window.dispatchEvent(new Event("locationChanged"));
            }
          }
        })
        .catch(() => {});
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocation = e.target.value;
    const locationName = locationsList.find(loc => loc.id.toString() === newLocation)?.name || "";
    
    setSelected(newLocation);
    localStorage.setItem("selectedLocation", newLocation);
    
    // Get current pathname and update it with new location
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Replace first segment with new location name (lowercase, spaces to hyphens)
    if (pathSegments.length > 0) {
      pathSegments[0] = locationName.toLowerCase().replace(/\s+/g, '-');
      const newPath = '/' + pathSegments.join('/');
      window.location.href = newPath;
    } else {
      window.location.reload();
    }
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
