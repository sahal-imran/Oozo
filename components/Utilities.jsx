import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Zoom } from 'react-reveal';
import Fade from 'react-reveal'

function Utilities() {
    return (
        <Box id={'Utilities'} component={'div'} sx={{ width: '100%', backgroundImage: "linear-gradient(#FFB9B7, #BFDDFC)", minHeight: '100vh', py: 4 }} >
            <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Zoom cascade>
                    <Box component={'div'} sx={{ position: 'relative' }} >
                        <Image
                            src="/assets/utilities.png"
                            alt="Logo"
                            width={800}
                            height={150}
                            objectFit={'cover'}
                        />
                        <Typography className='centered' variant="h1" sx={{
                            color: '#7656BD', fontFamily: 'ThertoleRegular', fontSize: {
                                sm: '150px',
                                xs: '100px'
                            }
                        }} component="div">
                            Utilities
                        </Typography>
                    </Box>
                </Zoom>
                <Box sx={{
                    width: '100%', flexGrow: 1
                }}>
                    <Grid container rowSpacing={{ md: 2 }} columnSpacing={{ xs: 0, sm: 2, md: 4 }}>
                        <Grid item md={6}>
                        <Fade bottom cascade>
                            <Box component={'div'} sx={{ position: 'relative', width: '100%', height: '100%' }} >
                                <Image
                                    src={'/assets/u1.png'}
                                    width={600}
                                    height={600}
                                    objectFit={'cover'}
                                />
                                <Typography variant="h6" sx={{
                                    ml: 2, width: '60%', m: 'auto', color: '#7656BD', fontSize: {
                                        sm: '18px',
                                        xs: '12px'
                                    }, position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'
                                }} component="div">
                                    Owning an Elfz allows you to vote on community-driven features, guide the direction of the program, products and events. This makes our roadmap collaborative to be decided by the project founders and Elfooz holders via the elfooz village.
                                </Typography>
                            </Box>
                                </Fade>
                        </Grid>
                        <Grid item md={6}>
                        <Fade bottom cascade>
                            <Box component={'div'} sx={{ position: 'relative', width: '100%', height: '100%' }} >
                                <Image
                                    src={'/assets/u2.png'}
                                    width={600}
                                    height={600}
                                    objectFit={'contain'}
                                />
                                <Typography variant="h6" sx={{
                                    color: '#7656BD', fontSize: {
                                        sm: '18px',
                                        xs: '12px'
                                    }, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                                }} component="div">
                                    We return 10% of all ETH raised to the our community through contests, raffles
                                </Typography>
                            </Box>
                                </Fade>
                        </Grid>
                        <Grid item md={6}>
                        <Fade bottom cascade>
                            <Box component={'div'} sx={{ position: 'relative', width: '100%', height: '100%' }} >
                                <Image
                                    src={'/assets/u3.png'}
                                    width={600}
                                    height={600}
                                    objectFit={'contain'}
                                />
                                <Typography variant="h6" sx={{
                                    color: '#7656BD', fontSize: {
                                        sm: '18px',
                                        xs: '12px'
                                    }, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                                }} component="div">
                                    The community will decide what utilities they want most and when
                                </Typography>
                            </Box>
                                </Fade>
                        </Grid>
                        <Grid item md={6}>
                        <Fade bottom cascade>
                            <Box component={'div'} sx={{ position: 'relative', width: '100%', height: '100%' }} >
                                <Image
                                    src={'/assets/u4.png'}
                                    width={790}
                                    height={600}
                                    objectFit={'contain'}
                                />
                                <Typography variant="h6" sx={{
                                    color: '#7656BD', fontSize: {
                                        sm: '18px',
                                        xs: '12px'
                                    }, position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'
                                }} component="div">
                                    Roadmap will be updated according to the community's comments and ideas. 1 NFT = 1 Vote.
                                </Typography>
                            </Box>
                                </Fade>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Utilities;