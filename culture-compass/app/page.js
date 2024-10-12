'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";


export const DEFAULT_DISTANCE_IN_KM = "100";

/*navigator.geolocation.getCurrentPosition()*/

const containerStyle = {
  width: "100%",
  height: "400px",
};

async function getLatLonForCity(city) {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    city + ",LONDON"
  )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
  const geocodeResponse = await fetch(geocodeUrl);
  const geocodeData = await geocodeResponse.json();
  const { lat, lng } = geocodeData.results[0].geometry.location;
  return { lon: lng, lat };
}

export const Place = {
  name: "",
  address: "",
  latitude: 0,
  longitude: 0
};


const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    // Check if the script already exists
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // Check if the script is already added but not loaded yet
    const existingScript = document.getElementById('google-maps');
    if (existingScript) {
      existingScript.addEventListener('load', resolve);
      existingScript.addEventListener('error', reject);
      return;
    }

    // Otherwise, create and add the script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.id = 'google-maps';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

const Map = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 12,
        });

        // Add a marker for the place
        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: "Location",
        });
      }
    };
    loadGoogleMapsScript().then(loadMap).catch((error) => {
      console.error("Failed to load Google Maps script", error);
    });
    }, [latitude, longitude]);

  return <div ref={mapRef} style={containerStyle} />;
};

export default function Home() {
  const [places, setPlaces] = useState([
    {
      name: "Burger City",
      address: "999 Some Street, New York",
      latitude: 40.7121,
      longitude: -74.005
    }
  ]);
  const lawal = true
  if(lawal) {
    console.log("lawal is smart")
  }
  const [city, setCity] = useState(""); // To store the city name
  const [latitude, setLatitude] = useState(51.5074); // Default latitude
  const [longitude, setLongitude] = useState(-0.1278); // Default longitude



  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const { lat, lon } = await getLatLonForCity(city);
      setLatitude(lat);
      setLongitude(lon);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <h1>Places Map</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Show Map</button>

      <Map latitude={latitude} longitude={longitude} />
    </div>
  );
}


/**
 * We use a Promise in the `loadGoogleMapsScript` function to handle the dynamic loading of the Google Maps script. 
 * This ensures that we only attempt to initialize the map once the script has fully loaded, preventing errors where 
 * `window.google.maps` might be undefined if the script hasn't finished loading.
 * 
 * - First, we check if the script is already loaded (by checking if `window.google.maps` exists).
 * - If the script is present but hasn't loaded yet, we attach event listeners to wait for the `load` event.
 * - If the script isn't in the DOM, we dynamically create and append it, waiting for the `onload` event to resolve the Promise.
 * 
 * By using a Promise, we can wait for the script to be ready and initialize the map without race conditions or async errors.
 */

