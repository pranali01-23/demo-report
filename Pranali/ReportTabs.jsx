import React, { useState } from 'react';
import { Tab, Tabs, Typography, AppBar, Paper, Box } from '@mui/material';
import ReportTab from './ReportTab';
import DateTimePicker from './DateTimePicker';
import './ReportTabs.css';

const REPORTS = [
  { label: 'IMS', id: 0 },
  { label: 'SP', id: 1 },
  { label: 'Control-M', id: 2 },
  { label: 'JHS', id: 3 },
  { label: 'Change Monitoring', id: 4 },
];

const ReportTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleDateTimeSubmit = (date) => {
    setDateTime(date);
  };

  return (
    <Paper variant="outlined" className="tabs-container">
      <DateTimePicker onSubmit={handleDateTimeSubmit} />
      <Box display="flex">
        <AppBar position="static" color="transparent" sx={{ width: '200px' }}>
          <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange}>
            {REPORTS.map((report) => (
              <Tab key={report.id} label={report.label} />
            ))}
          </Tabs>
        </AppBar>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {REPORTS[selectedTab].label} Data
          </Typography>
          <ReportTab reportId={selectedTab} dateTime={dateTime} />
        </Box>
      </Box>
    </Paper>
  );
};

export default ReportTabs;
