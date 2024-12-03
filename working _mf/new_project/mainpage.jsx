import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Handlers for menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Material-UI AppBar */}
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

      {/* Main Content */}
      <div className="landing-page">
        <h1>Welcome to the Main Landing Page</h1>
        <div className="button-container">
          <div className="interactive-box" onClick={() => navigate('/app')}>
            Go to App Page
          </div>
          <div className="interactive-box" onClick={() => navigate('/test')}>
            Go to Test Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
