import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useMediaQuery } from '@mui/material';

const Nav = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  const [isMobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!isMobileNav);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: isMobile ? '6.5rem' : '2rem', display: isMobile ? 'block' : 'none', width: '2rem'}}
          >
            <MenuIcon onClick={toggleMobileNav} />
            <ul style={{ listStyle: 'none', textAlign: 'left', display: isMobileNav ? 'block' : 'none', padding: 0, }}>
              <li><Button color="inherit" size='medium'>Login</Button></li>
              <li><Button color="inherit" size='medium'>Register</Button></li>
            </ul>
          </IconButton>
          <Typography variant="h6" component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', textTransform: 'uppercase', display: isMobileNav ? 'none' : 'flex' }}
          >
            Taskflow
          </Typography>
          <Button color="inherit" size='medium' sx={{ display: isMobile ? 'none' : 'block'}}>Login</Button>
          <Button color="inherit" size='medium' sx={{ display: isMobile ? 'none' : 'block'}}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;