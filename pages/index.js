import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Discover from "../components/Discover";
import Gallery from "../components/Gallery";
import Oozo from "../components/Oozo";
import Utilities from "../components/Utilities";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1500,
    },
  },
});

function index() {
  return <ThemeProvider theme={theme}>
    <Navbar />
    <HeroSection />
    <Discover />
    <Gallery />
    <Oozo />
    <Utilities />
    <FAQ />
    <Footer />
  </ThemeProvider>
}

export default index;
