import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <div>
        <AppBar color="success" position="relative">
          <Toolbar>
            <Typography 
            sx={{ fontStyle: "italic" }} 
            variant="h6" 
            fontSize="16px"
            letterSpacing='1px'
            color="inherit" 
            noWrap>
                Membaca Al-Quran Dengan Senang Dan Semangat
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Navbar;
