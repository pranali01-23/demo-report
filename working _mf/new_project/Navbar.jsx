import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Company
        </Typography>
        <Button color="inherit" onClick={() => navigate('/app')}>App</Button>
        <Button color="inherit" onClick={() => navigate('/test')}>Test</Button>
        <Button color="inherit" onClick={handleMenuClick}>
          More
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleMenuClose(); navigate('/more1') }}>More 1</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate('/more2') }}>More 2</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate('/more3') }}>More 3</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
