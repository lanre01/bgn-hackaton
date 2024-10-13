import { AppBar, Button, Box, Stack, Typography } from "@mui/material";

export default function Navbar() {


    return (
    <Stack  sx={{ 
        bgcolor: "black", 
        display: "flex",
        color: 'white',
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "10px",
        
     }}>
        <Typography>The thing</Typography>
        <Box>
            <Button color="white" >About</Button>
            <Button color="white">Quiz</Button>
            <Button color="white">Facts</Button>
            <Button color="white">Daily Grill</Button>
        </Box>

    </Stack>)
}


/**
 * sx={{
    ':hover': {
      bgcolor: 'primary.light', // theme.palette.primary.main
      color: 'white',
    },
  }}
 */