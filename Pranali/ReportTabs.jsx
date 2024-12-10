import React, { useState } from 'react';
import { Tab, Tabs, Typography, AppBar } from '@mui/material';
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
    // Fetch data from API based on selected tab and date
  };

  return (
    <div className="container">
      <DateTimePicker onSubmit={handleDateTimeSubmit} />
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Report 1" className="tab-label" />
          <Tab label="Report 2" className="tab-label" />
          <Tab label="Report 3" className="tab-label" />
          <Tab label="Report 4" className="tab-label" />
          <Tab label="Report 5" className="tab-label" />
        </Tabs>
      </AppBar>
      <Typography component="div" role="tabpanel">
        <ReportTab reportId={selectedTab} dateTime={dateTime} />
      </Typography>
    </div>
  );
};

export default ReportTabs;
