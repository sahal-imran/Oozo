import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-reveal';

function FAQ() {
    return (
        <Box id={'FAQ'} component={'div'} sx={{ width: '100%', backgroundImage: "linear-gradient(#BFDDFC,#7656BD ,#7656BD)", minHeight: '100vh', py: 4, position: 'relative' }} >
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', position: 'relative' }} >
                <Box component={'div'} sx={{ position: 'relative' }} >
                    <Image
                        src="/assets/FAQ.png"
                        alt="Logo"
                        width={350}
                        height={200}
                        objectFit={'contain'}
                    />
                    <Typography className='centered' variant="h1" sx={{ color: '#7656BD', fontFamily: 'ThertoleRegular', fontSize: '190px' }} component="div">
                        FAQ
                    </Typography>
                </Box>
                <Fade cascade bottom>
                    <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', border: '3px solid white', p: 4, mt: 8 }} >
                        <Typography variant="h4" sx={{ color: '#5A3AA0', fontFamily: 'ThertoleRegular', fontSize: '50px', fontWeight: 600, lineHeight: '55px' }} gutterBottom component="div">
                            What are quirkies?
                        </Typography>
                        <Typography variant="h4" sx={{ color: 'white', fontFamily: 'AbyssinicaSIL-R', fontSize: '24px', lineHeight: '35px' }} component="div">
                            Quirkies are a collection of 5,000 unique characters minted on the Ethereum Blockchain. Quirkies are your personal companion and will become your metaverse persona, so make sure you get a hold of a Quirkie which you feel represents you. Quirkies are created by our team artist through several hundred traits of quirkiness.
                        </Typography>
                    </Box>
                </Fade>
                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', border: '3px solid white', p: 4, mt: 4 }} >
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: '#5A3AA0', fontFamily: 'ThertoleRegular', fontSize: '50px', fontWeight: 600, lineHeight: '55px' }} gutterBottom component="div">
                            When Mint?
                        </Typography>
                    </Fade>
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: 'white', fontFamily: 'AbyssinicaSIL-R', fontSize: '24px', lineHeight: '35px' }} component="div">
                            Whitelist 10th Feb 6pm EST
                            Public 10th Feb 8pm EST
                        </Typography>
                    </Fade>
                </Box>
                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', border: '3px solid white', p: 4, mt: 4 }} >
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: '#5A3AA0', fontFamily: 'ThertoleRegular', fontSize: '50px', fontWeight: 600, lineHeight: '55px' }} gutterBottom component="div">
                            How many quirkies exist and how much to mint one?
                        </Typography>
                    </Fade>
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: 'white', fontFamily: 'AbyssinicaSIL-R', fontSize: '24px', lineHeight: '35px' }} component="div">
                            Only 5,000 quirkies will ever exist, although it is rumoured that they will find their lifelong companions in the future. 0.05 eth will be require to befriend your very own Qurikie
                        </Typography>
                    </Fade>
                </Box>
                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', border: '3px solid white', p: 4, mt: 4 }} >
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: '#5A3AA0', fontFamily: 'ThertoleRegular', fontSize: '50px', fontWeight: 600, lineHeight: '55px' }} gutterBottom component="div">
                            How many can I mint?
                        </Typography>
                    </Fade>
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: 'white', fontFamily: 'AbyssinicaSIL-R', fontSize: '24px', lineHeight: '35px' }} component="div">
                            If you have been whitelisted you can mint 2 Quirkies in the 2 hour whitelist window. Once the public sale opens anyone can mint 5 per transaction.
                        </Typography>
                    </Fade>
                </Box>
                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', border: '3px solid white', p: 4, mt: 4 }} >
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: '#5A3AA0', fontFamily: 'ThertoleRegular', fontSize: '50px', fontWeight: 600, lineHeight: '55px' }} gutterBottom component="div">
                            How do I mint?
                        </Typography>
                    </Fade>
                    <Fade cascade bottom>
                        <Typography variant="h4" sx={{ color: 'white', fontFamily: 'AbyssinicaSIL-R', fontSize: '24px', lineHeight: '35px' }} component="div">
                            Connect your Metamask wallet on our website and choose the amount of Quirkies you wish to mint. Your quirkies will then appear in your Opensea profile wallet. The official Opensea link will be provided closer to mint.
                        </Typography>
                    </Fade>
                </Box>
                <Box component={'div'} sx={{display:{
                    md:'flex',
                    xs:'none'
                },justifyContent:'center',alignItems:'center'}} className="qusetionMark">
                    <Image
                        src="/assets/question.png"
                        alt="Logo"
                        width={400}
                        height={600}
                        objectFit={'contain'}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default FAQ;