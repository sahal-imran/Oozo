import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';


function Footer() {
    return (
        <>
            <Box component={'div'} id='Footer' sx={{ width: '100%', minHeight: '100vh' }} >
            </Box>
            <Box component={'div'} sx={{ width: '100%', height: '80px', backgroundColor: '#7656BD',mt:-1 }} >
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Box sx={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <AnchorLink sx={{ color: '#FFFFFF' }} href="#">
                            <BsTwitter size={30} />
                        </AnchorLink>
                        <AnchorLink sx={{ color: '#FFFFFF', mx: 2 }} href="#">
                            <BsInstagram size={30} />
                        </AnchorLink>
                        <AnchorLink sx={{ color: '#FFFFFF' }} href="#">
                            <BsDiscord size={30} />
                        </AnchorLink>
                    </Box>
                    <Typography variant="h4" sx={{ color: 'white', fontFamily: 'Thertole', fontSize: '20px', lineHeight: '35px' }} component="div">
                        © 2022 Quirkies
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer;