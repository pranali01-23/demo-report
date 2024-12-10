import React from 'react';
import { Container } from '@mui/material';
import ReportTabs from './components/ReportTabs';
import './App.css'; // Import CSS file

const App = () => {
  return (
    <Container maxWidth="lg" className="app-container">
      <h1 className="app-title">Report Viewer</h1>
      <ReportTabs />
    </Container>
  );
};

export default App;
