import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';





// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
     <Navbar />
     <Main />
      <Footer />
    </ThemeProvider>
  );
}