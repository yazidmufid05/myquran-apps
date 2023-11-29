import React from 'react';
import { Box, Typography, Link  } from "@mui/material"

const Footer = () => {
    function Copyright() {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
              RUZIDAB
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    return (
        <>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Tiada Alasan Untuk Tidak Membaca Al-Quran
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Teknologi Semakin Berkembang, Membaca Al-Quran Juga Harus Berkembang
        </Typography>
        <Copyright />
      </Box>
        </>
    );
}

export default Footer;
