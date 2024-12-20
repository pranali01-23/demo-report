import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  CircularProgress,
} from '@mui/material';
import DateTimePicker from './DateTimePicker';
import ReportTab from './ReportTab';

// Sample report data configuration
const REPORTS = [
  { label: 'IMS', id: 0, columns: ['Name', 'Detail', 'Status'], api: '/api/ims' },
  { label: 'SP', id: 1, columns: ['Item', 'Description'], api: '/api/sp' },
  { label: 'Control-M', id: 2, columns: ['Task', 'Priority', 'Result'], api: '/api/controlm' },
  { label: 'JHS', id: 3, columns: ['Job Name', 'Job ID', 'Execution Time'], api: '/api/jhs' },
  { label: 'Change Monitoring', id: 4, columns: ['Change ID', 'Status', 'Owner'], api: '/api/changeMonitoring' },
];

const ReportTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
    fetchReportData(dateTime, newValue); // Fetch data for the new report immediately
  };

  const handleDateTimeSubmit = (date) => {
    setDateTime(date);
    fetchReportData(date, selectedTab); // Fetch data on submitting new date
  };

  const fetchReportData = async (date, reportId) => {
    const reportApi = REPORTS[reportId].api;
    const formattedDate = date.toISOString(); // Format DateTime for API

    setLoading(true); // Start loading
    try {
      const response = await fetch(`${reportApi}?datetime=${formattedDate}`);
      const data = await response.json();
      setReportData(data);
    } catch (error) {
      console.error('Error fetching report data:', error);
      setReportData([]); // Reset data on error
    }
    setLoading(false); // End loading
  };

  useEffect(() => {
    fetchReportData(dateTime, selectedTab); // Fetch data for the initial load
  }, []); // Empty dependency to run once on mount

  return (
    <Paper variant="outlined" className="tabs-container" style={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {REPORTS.map((report, index) => (
              <Button
                key={report.id}
                onClick={() => handleTabChange(index)}
                variant={selectedTab === index ? 'contained' : 'outlined'}
                color={selectedTab === index ? 'primary' : 'inherit'}
                sx={{
                  width: '100%',
                  marginBottom: '8px',
                  p: 2,
                  boxShadow: selectedTab === index ? 2 : 1,
                  backgroundColor: selectedTab === index ? 'primary.main' : 'white',
                  color: selectedTab === index ? 'white' : 'black',
                  '&:hover': {
                    backgroundColor: selectedTab === index ? 'primary.dark' : 'grey.200',
                    transform: 'translateY(-2px)', // Little pop-up effect on hover
                  },
                }}
              >
                {report.label}
              </Button>
            ))}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Box padding={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  {REPORTS[selectedTab].label} Data
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <DateTimePicker onSubmit={handleDateTimeSubmit} />
              </Grid>
              
              <Grid item xs={12}>
                {loading ? (
                  <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '200px' }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <ReportTab
                    columns={REPORTS[selectedTab].columns}
                    data={reportData}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReportTabs;
