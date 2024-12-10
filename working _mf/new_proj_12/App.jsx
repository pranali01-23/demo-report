// src/App.js
import React, { useState } from 'react';
import { Container } from '@mui/material';
import DateTimePicker from './components/DateTimePicker';
import ReportTabs from './components/ReportTabs';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Container maxWidth="md">
      <h1>Report Dashboard</h1>
      <DateTimePicker onSubmit={setSelectedDate} />
      <ReportTabs selectedDate={selectedDate} />
    </Container>
  );
}

export default App;
