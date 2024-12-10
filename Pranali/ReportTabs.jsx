import React, { useState } from 'react';
import { Tab, Tabs, Typography, AppBar, Paper } from '@mui/material';
import ReportTab from './ReportTab';
import DateTimePicker from './DateTimePicker';
import './ReportTabs.css'; // CSS file for specific tab styling

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
      <AppBar position="static" color="transparent">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Report 1" />
          <Tab label="Report 2" />
          <Tab label="Report 3" />
          <Tab label="Report 4" />
          <Tab label="Report 5" />
        </Tabs>
      </AppBar>
      <Typography component="div" role="tabpanel">
        <ReportTab reportId={selectedTab} dateTime={dateTime} />
      </Typography>
    </Paper>
  );
};

export default ReportTabs;
