'use client'

import React, { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { Box, Container, Modal, Typography } from "@mui/material";



export default function NewMap({latitude, longitude}) {
    const [questions, setQuestions] = useState();
    const [open, setOpen] = useState(false);
    const [question, setQuestion] = useState("");

    const mapRef = useRef(null);

    const openModal = (index) =>  {
        setQuestion(questions[index]);
    }


    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                version: 'quarterly',
            });

            const { Map, Ad } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await loader.importLibrary('marker');

            const options = {
                center: { lat: latitude, lng: longitude },
                zoom: 17,
                mapId: 'NEXT_MAPS',
                gestureHandling: 'none', // Disable all user gestures (scroll, drag, touch)
                zoomControl: false, // Disable zoom control   
            };

            const map = new Map(mapRef.current, options);

            // Create an Advanced Marker with an image
            const markerElement = document.createElement('div');
            markerElement.innerHTML = `
                <img src="/Resources/CC_LOGO.png" alt="Marker Image" 
                style="width: 50px; height: 50px; cursor: pointer;" />
            `;

            // Define marker options
            const advancedMarker = new AdvancedMarkerElement({
                position: { lat: latitude, lng: longitude }, // Marker position
                content: markerElement, // Custom marker with image
                map: map, // Add marker to the map
            });

            // Create an Info Window (to show information when marker is clicked)
            /* const infoWindow = new window.google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px;">
                        <h3>Marker Info</h3>
                        <p>This is additional info about the marker object.</p>
                    </div>
                `,
            }); */

            // Add a click listener to the marker
            markerElement.addEventListener('click', () => {
                // Open the Info Window on marker click
                //infoWindow.open(map, advancedMarker);
                setQuestions("what is your name")
            });



        }
        initializeMap();
        console.log(latitude)
    }, [latitude, longitude]);
    

    return (
        <Box>
            <Modal open={open}>
                <Box display={'flex'} flexDirection={'row'}>
                    {question.questions.map((ques, index) => (
                        <Typography key={index}>{ques}</Typography>
                    ))}
                </Box>
            </Modal>
            <Box // Ensure the map container has proper dimensions
            ref={mapRef}
            sx={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative' // Make the map fill its container
                
            }}
            >
            </Box>
        </Box>
        
    );
}