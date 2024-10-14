'use client'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import quiz from '../Resources/Images';
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
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([])
    const [answer, setAnswer] = useState("");
    const [answerColor, setAnswerColor] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [click, setClick] = useState(true);

    const showModal = (question, choices, answer) => {
        console.log("lawal");
        setAnswer(answer)
        setQuestion(question)
        setChoices(choices);
        setOpen(true)
    }

    const checkResult = (choice) => {
        if (choice === answer) {
          setHidden(false);
          setSelectedAnswer(choice);
        } else {
          setHidden(false);
          setSelectedAnswer(choice);
        }
      };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat, lng}}
        zoom={17}
      >
        {facts.map((fact, index) => (
          <Marker key={index} position={{ lat: fact.lat, lng: fact.lng }} 
          onClick={() => showModal(fact.question, fact.options, fact.answer)}
          />
        ))}
      </GoogleMap>

      <Modal open={open} onClose={() => {
        setOpen(false)
        setAnswer("")
        setQuestion("")
        setChoices([]);
        setClick(true)
        }}
        
        >
        <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
          
        >
            <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography color={'black'}variant="h6" textAlign="center">{question}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              {choices.map((choice, index) => (
                <Grid item xs={4} key={index}>
                  <Button
                    fullWidth
                    variant="contained"
                    color={selectedAnswer === choice ? (choice === answer ? 'success' : 'error') : 'primary'}
                    onClick={() => 
                        {
                            if(!click) return;
                            checkResult(choice); 
                            setClick(false)}}
                  >
                    {choice}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {!hidden && (
            <Grid margin={'20px'}item xs={12} textAlign="center" boxShadow={5}>
              <Typography color={'black'} variant="outlined">Correct Answer: {answer}</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
    
    </LoadScript>
  );
};

export default GoogleMapComponent;
