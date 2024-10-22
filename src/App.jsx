import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const reports = [
  { id: 1, name: 'Report 1', date: '2023-10-01', value: '$1000' },
  { id: 2, name: 'Report 2', date: '2023-10-02', value: '$2000' },
  { id: 3, name: 'Report 3', date: '2023-10-03', value: '$3000' },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (index) => {
    setSelectedTab(index);
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Reports Dashboard
          </Typography>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            {reports.map((report, index) => (
              <Tab key={index} label={report.name} />
            ))}
          </Tabs>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {reports.map((report, index) => (
              <MenuItem key={index} onClick={() => handleMenuClose(index)}>
                {report.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Report Table */}
      <Box padding={2}>
        <Typography variant="h5" gutterBottom>
          {reports[selectedTab].name}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{reports[selectedTab].id}</TableCell>
                <TableCell align="center">{reports[selectedTab].name}</TableCell>
                <TableCell align="center">{reports[selectedTab].date}</TableCell>
                <TableCell align="center">{reports[selectedTab].value}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', background: '#f1f1f1' }}>
        <Typography variant="subtitle1" color="textSecondary">
          © 2023 Reports Dashboard
        </Typography>
      </footer>
    </Box>
  );
}

export default App;
