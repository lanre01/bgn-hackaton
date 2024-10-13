'use client'

import React, { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { Box } from "@mui/material";



export default function NewMap({latitude, longitude}) {

    const mapRef = useRef(null);

    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                version: 'quarterly',
            });

            const { Map } = await loader.importLibrary('maps');
            

            const options = {
                center: { lat: latitude, lng: longitude },
                zoom: 17,
                mapId: 'NEXT_MAPS',
                gestureHandling: 'none', // Disable all user gestures (scroll, drag, touch)
                zoomControl: false, // Disable zoom control   
            };

            const map = new Map(mapRef.current, options);


        }
        initializeMap();
        console.log(latitude)
    }, [latitude, longitude]);
    

    return (
        <Box // Ensure the map container has proper dimensions
            ref={mapRef}
            sx={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative' // Make the map fill its container
                
            }}
        >
        </Box>
    );
}