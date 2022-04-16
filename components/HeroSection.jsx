import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { Fade } from 'react-reveal';

function HeroSection() {
    return (
        <Box id={'Home'} component={'div'} sx={{ width: '100%', backgroundColor: '#7656BD', mt: -1 }} >
            <Fade cascade bottom>
                <img style={{ width: '100%', height: '100%',position:'relative',zIndex:999 }} src="assets/characters.png" alt="" />
            </Fade>
            <Box component={'div'} sx={{
                display: {
                    md: 'block',
                    xs: 'none'
                },width:'100%'
            }} className="hello">
                <Image
                    src="/assets/HELLO.png"
                    alt="Logo"
                    width={1800}
                    height={600}
                    objectFit={'cover'}
                />
            </Box>
        </Box>
    )
}

export default HeroSection;