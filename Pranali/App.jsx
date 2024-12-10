import React from 'react';
import { Container } from '@mui/material';
import ReportTabs from './components/ReportTabs';

const App = () => {
  return (
    <Container>
      <h1>Report Viewer</h1>
      <ReportTabs />
    </Container>
  );
};

export default App;
