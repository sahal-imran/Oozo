import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-reveal';

function Discover() {
    return (
        <Box id={'Discover'} component={'div'} sx={{
            width: '100%', backgroundColor: '#C4D971', backgroundImage: {
                sm: 'unset',
                xs: "linear-gradient(#c4d971, #FFB9B7)"
            }, minHeight: '100vh', mt: -1
        }} >
            <Container maxWidth="lg" sx={{ zIndex: 5, height: '100vh', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                <Fade cascade bottom>
                    <Typography variant="h2" sx={{
                        color: '#7656BD', fontFamily: 'ThertoleRegular', mt: 8, fontSize: {
                            md: '3.75rem',
                            sm: '3rem',
                            xs: '2rem'
                        }
                    }} gutterBottom component="div">
                        Descover A<br /><Box sx={{ color: '#FFFFFF', fontFamily: 'ThertoleRegular' }} component={'span'} >
                            Collection of <Box sx={{ color: '#7656BD', fontFamily: 'ThertoleRegular' }} component={'span'} >
                                10,000</Box></Box><br /> ELFOOZ
                    </Typography>
                </Fade>
            </Container>
        </Box>
    )
}

export default Discover;