import { Typography, Stack } from "@mui/material";



export default function Footer() {
    return(
        <Stack 
        display={'flex'}
        flexDirection={"column"}
        alignItems={'center'}
        justifyItems={'center'}
        bottom={0}
        
        >
            <Typography>
                2024 - Culture Compass, Inc. All rights reserved.
                6 Pancras Sq, London NIC 4AG
            </Typography>
            <Typography>
                Terms | Privacy | Security
            </Typography>
        </Stack>
    )
}