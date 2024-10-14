import { Typography, Stack } from "@mui/material";



export default function Footer() {
    return(
        <Stack 
        display={'flex'}
        flexDirection={"column"}
        alignItems={'center'}
        justifyItems={'center'}
        bgcolor={'black'}
        color={'white'}
        
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