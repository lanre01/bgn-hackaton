'use client'
import Navbar from './Components/Navbar';
import { useEffect, useRef, useState } from "react";
import { Box, Button, CssBaseline, Modal, Stack, TextField} from '@mui/material';
import Footer from './Components/Footer';
import GoogleMapComponent from './Components/AMap'
import facts2 from './Components/facts';


export default function Home() {


  const [city, setCity] = useState(""); // To store the city name
  const [latitude, setLatitude] = useState(50.134); // Default latitude
  const [longitude, setLongitude] = useState(-6.1240); // Default longitude
  const [facts, setFacts] = useState([])

  const [open, setOpen] = useState(false);



  


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

    const getQuestionsAndFact = async () => {
      try {
        const res = await fetch('/api/questions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Ensure the server understands JSON
            },
            body: JSON.stringify({
              lat: 52.924116, //latitude,  
              lng: -1.21926, //longitude  
            })
          });
          
        const mapData = await res.json();
        const factsArray = mapData.facts;

        setFacts(factsArray);
 
      } catch(e) {
          console.log(e);
      }
    } 

    getQuestionsAndFact().then(console.log(facts)).catch((error) => console.log(error));

  }, [latitude, longitude])

  return (

    <Box
    minHeight={'100vh'}
    minWidth={'100vw'}
    display={'flex'}
    flexDirection={'column'}
    bgcolor={'white'}
    gap={'5px'}
    >
      <Navbar></Navbar>

      <Box
      flex={1}
      display={'flex'}
      flexDirection={'column'}
      gap={'5px'}
      >
        <Box
        display={'flex'}
        justifyContent={'center'}
        
        >
          <TextField
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
          <Button variant='contained' color='white' onClick={handleSearch}>Show Map</Button>

        </Box>
        <Box
        height={'100vh'}
        width={'100vw'}
        >
          <GoogleMapComponent facts={ facts2 } lat={51.53338} lng={-0.12605} />
        </Box>


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
