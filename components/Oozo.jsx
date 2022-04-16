import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Fade } from 'react-reveal';

function Oozo() {
    return (
        <>
            <Box component={'div'} sx={{
                width: '100%', backgroundColor: '#FFB9B7', height: '200px', mt: {
                    md: "-500px",
                    sm: '-600px',
                    xs: '-600px'
                }
            }} >
            </Box>
            <Box id='oozo' component={'div'} sx={{ width: '100%', minHeight: '100vh' }} >
                <Container maxWidth="lg" sx={{
                    height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <Box component={'div'} sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', width: {
                            md: '70%',
                            xs: '100%'
                        }, position: 'relative', zIndex: 9,
                    }} >
                        <Fade top cascade>
                            {/* <Image
                            src="/assets/oozo.png"
                            alt="Logo"
                            width={500}
                            height={500}
                            objectFit={'contain'}
                        /> */}
                            <img style={{ width: '100%' }} src="assets/oozo.png" alt="Oozo" />
                        </Fade>
                    </Box>
                    <Box component={'div'} sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'start', width: {
                            md: '60%',
                            xs: '100%'
                        }, flexDirection: 'column'
                    }} >
                        <Fade left cascade>
                            <Typography variant="h3" sx={{ color: '#FFFFFF', fontFamily: 'ThertoleRegular', fontSize: '90px', lineHeight: '106.17px' }} component="div">
                                HELLO i’m
                                Oozo
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#FFFFFF', fontFamily: 'Thertole', fontSize: '25px', lineHeight: '30px' }} gutterBottom component="div">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                            <Button sx={{ p: 0, mt:2 }} variant="text">
                                <Box component={'div'} sx={{ position: 'relative' }} >
                                    <Image
                                        src="/assets/discoverBtn.png"
                                        alt="Logo"
                                        width={260}
                                        height={70}
                                        objectFit="contain"
                                    />
                                    <Typography className='centered' variant="body1" sx={{ color: '#FFFFFF', fontFamily: 'Thertole', fontSize: '25px', lineHeight: '30px' }} gutterBottom component="div">
                                        Discover
                                    </Typography>
                                </Box>
                            </Button>
                        </Fade>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Oozo;