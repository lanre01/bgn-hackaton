'use client'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Button, Modal, Typography, Grid } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '100%'
};

var center = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};

const GoogleMapComponent = ({ facts, lat, lng }) => {

    const [open, setOpen] = useState(false);
    const [context, setcontext] = useState("");
    

    const showModal = (context) => {
        setcontext(context)
        setOpen(true)
    }

    

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat, lng}}
        zoom={17}
      >
        {facts.map((fact, index) => (
          <Marker key={index} position={{ lat: fact.lat, lng: fact.lng }} 
          onClick={() => showModal(fact.context)}
          />
        ))}
      </GoogleMap>

      <Modal 
  open={open} 
  onClose={() => {
    setOpen(false);
    setcontext("");
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      maxHeight: 400, // Ensures the modal doesn't get too tall
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      overflowY: 'auto' // Makes the content scrollable if it exceeds maxHeight
    }}
  >
    <Typography>
      {context}
    </Typography>
  </Box>
</Modal>

    
    </LoadScript>
  );
};

export default GoogleMapComponent;
