import React, { useState } from 'react';
import { Tab, Tabs, Typography, AppBar, Box, Button, Grid, Paper } from '@mui/material';
import DateTimePicker from './DateTimePicker';
import ReportTab from './ReportTab';

const REPORTS = [
  { label: 'IMS', id: 0, columns: ['Name', 'Detail', 'Status'] },
  { label: 'SP', id: 1, columns: ['Item', 'Description'] },
  { label: 'Control-M', id: 2, columns: ['Task', 'Priority', 'Result'] },
  { label: 'JHS', id: 3, columns: ['Job Name', 'Job ID', 'Execution Time'] },
  { label: 'Change Monitoring', id: 4, columns: ['Change ID', 'Status', 'Owner'] },
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
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <AppBar position="static" color="transparent">
            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {REPORTS.map((report) => (
                <Tab key={report.id} label={report.label} />
              ))}
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={10}>
          <Box padding={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <DateTimePicker onSubmit={handleDateTimeSubmit} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('Submit clicked!')}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  {REPORTS[selectedTab].label} Data
                </Typography>
                <ReportTab
                  reportId={selectedTab}
                  dateTime={dateTime}
                  columns={REPORTS[selectedTab].columns}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReportTabs;
