import React from 'react';
import Box from '@mui/material/Box';
import { Fade } from 'react-reveal';

function Gallery() {
    return (
        <Box component={'div'} sx={{ position:'relative',zIndex:1, width: '100%', minHeight: '80vh', mt: {
            md:"-500px",
            sm:'-600px',
            xs:'-700px'
        } }} >
            <Fade cascade left>
            <img style={{width:'100%'}} src="assets/gallery.png" alt="gallery" />
            </Fade>
        </Box>
    )
}

export default Gallery;