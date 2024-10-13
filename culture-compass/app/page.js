'use client'
import Navbar from './Components/Navbar';
import { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, TextField} from '@mui/material';
import Footer from './Components/Footer';

const containerStyle = {
  width: "100vw", // Use full width of the parent container
  height: "100vh", // Use full height of the parent container
  position: "relative", // To allow overlaying inputs/buttons on top
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
          // We might want to consider switching off the gesturehanding and zoomControl off for the user
          //gestureHandling: 'none', // Disable all user gestures (scroll, drag, touch)
          //zoomControl: false, // Disable zoom control
          zoom: 17,
          mapTypeId: 'satellite',
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

  return <div ref={mapRef} style={containerStyle}/>;
};

export default function Home() {

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

  useEffect(() => {
    if (!navigator.geolocation) {
      //setError('Geolocation is not supported by your browser');
    } else {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          //setError('Unable to retrieve your location');
        });
        
        
    }
  }, [])

  return (
    <Box 
    display={'flex'}
    //gridTemplateRows={"auto 1fr auto"}
    flexDirection={"column"}
    minHeight={"100vh"}
    >
      <Navbar></Navbar>
      <Box>
        <Box 
        padding={"5px"}
        display={"flex"}
        justifyContent={"center"}
        >
          <TextField
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
          <Button variant='outlined' color='white' onClick={handleSearch}>Show Map</Button>
        </Box>
       
        <Map latitude={latitude} longitude={longitude} />
        
      </Box> 
      <Footer></Footer>
    </Box>
    
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