import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import ReportTab from './ReportTab';
import DateTimePicker from './DateTimePicker';

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
    <div>
      <DateTimePicker onSubmit={handleDateTimeSubmit} />
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Report 1" />
        <Tab label="Report 2" />
        <Tab label="Report 3" />
        <Tab label="Report 4" />
        <Tab label="Report 5" />
      </Tabs>
      <Typography component="div" role="tabpanel">
        <ReportTab reportId={selectedTab} dateTime={dateTime} />
      </Typography>
    </div>
  );
};

export default ReportTabs;
