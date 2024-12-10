import React from 'react';
import { Container } from '@mui/material';
import ReportTabs from './components/ReportTabs';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Container>
      <h1 className="app-title">Report Viewer</h1>
      <ReportTabs />
    </Container>
  );
};

export default App;
