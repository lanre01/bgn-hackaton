import { AppBar, Button, Box, Stack, Typography} from "@mui/material";
import Image from "next/image";

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
        <Box>
            <Image
            src="/culture-compass/app/Resources/CC_LOGO.png" // Use absolute path from the public folder
            alt="Culture Compass Logo"
            width={250} // Set the width you need
            height={100} // Set the height to maintain aspect ratio
          />
          </Box>
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