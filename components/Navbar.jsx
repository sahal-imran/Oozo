import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-scroll";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import AnchorLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box component={'div'} sx={{ position: 'relative', zIndex: 9999, width: '100%', backgroundColor: '#7656BD' }} >
      <Container maxWidth="lg" sx={{ zIndex: 5, height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, }} >
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'center', alignItems: 'center'
        }} >
          <Link
            duration={500}
            className={"navLink"}
            to={'Home'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            HOME
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'Discover'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            Discover
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'Utilities'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            Utilities
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'FAQ'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            FAQ
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} component={'div'} >
          <Image
            src="/assets/elfooz.png"
            alt="Logo"
            width={200}
            height={65}
            objectFit={'contain'}
          />
        </Box>
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'center', alignItems: 'center', zIndex: 10
        }} >
          <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 1 }} href="#">
            <Image
              src="/assets/twitter.png"
              alt="Logo"
              width={70}
              height={70}
              objectFit={'containr'}
            />
          </AnchorLink>
          <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 1 }} href="#">
            <Image
              src="/assets/instagram.png"
              alt="Logo"
              width={70}
              height={70}
              objectFit={'contain'}
            />
          </AnchorLink>
          <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="#">
            <Image
              src="/assets/discord.png"
              alt="Logo"
              width={70}
              height={70}
              objectFit={'contain'}
            />
          </AnchorLink>
          <Button sx={{ p: 0, mt: 2 }} variant="text">
            <Box component={'div'} sx={{ position: 'relative' }} >
              <Image
                src="/assets/mintBtn1.png"
                alt="Logo"
                width={260}
                height={70}
                objectFit="contain"
              />
              <Typography className='centeredBtn' variant="body1" sx={{ color: '#FFFFFF', fontFamily: 'Thertole', fontSize: '25px', lineHeight: '42px',textTransform:'uppercase' }} gutterBottom component="div">
                Mint
              </Typography>
            </Box>
          </Button>
        </Box>
        {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '50px', cursor: 'pointer', display: {
            md: 'none'
          }
        }} /> : < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: '#FFFFFF', fontSize: '50px', cursor: 'pointer'
        }} />}
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer'
      >
        <Box component={'div'} sx={{
          width: '100%', height: '100vh', pt: 4,
          display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundColor: '#0A1227'
        }} >
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, p: 2, mb: 4 }} >
            <Image
              src="/assets/elfooz.png"
              alt="Logo"
              width={180}
              height={65}
              objectFit={'contain'}
            />
          </Box>
          <Box className='navlinks' sx={{
            width: '100%',
            display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column'
          }} >
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'Home'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              HOME
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'Discover'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              Discover
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'Utilities'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              Utilities
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'FAQ'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              FAQ
            </Link>
          </Box>
          <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', mt: 4 }} >
            <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 1 }} href="#">
              <Image
                src="/assets/twitter.png"
                alt="Logo"
                width={60}
                height={60}
                objectFit={'containr'}
              />
            </AnchorLink>
            <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 1 }} href="#">
              <Image
                src="/assets/instagram.png"
                alt="Logo"
                width={60}
                height={60}
                objectFit={'contain'}
              />
            </AnchorLink>
            <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="#">
              <Image
                src="/assets/discord.png"
                alt="Logo"
                width={60}
                height={60}
                objectFit={'contain'}
              />
            </AnchorLink>
          </Box>
          <Button sx={{ color: '#C4D971', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }} variant="text">
            <Image
              src="/assets/mintBtn.png"
              alt="Logo"
              width={210}
              height={70}
              objectFit={'contain'}
            />
            {/* <img style={{width:'190px',height:'66px'}} src="assets/mintBtn.png" alt="" /> */}
          </Button>
        </Box>
      </Drawer>
    </Box>
  </>
}

export default Navbar;
