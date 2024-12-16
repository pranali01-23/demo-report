import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  CircularProgress,
} from '@mui/material';
import DateTimePicker from './DateTimePicker'; // Keep this import as is
import ReportTab from './components/ReportTab';
import './styles/ReportTabs.css';
import './styles/styles.css';
import Navbar from './components/Navbar'; // Import the Navbar component

// Sample report data configuration
const REPORTS = [
  {
    label: 'IMS transaction status report',
    id: 0,
    columns: ['PSB_Code', 'RETCD', 'TRANS_NAMES', 'TRN_ST'],
    api: 'https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=ims_trans',
    requiresDateTime: true,
  },
  {
    label: 'Online transaction report',
    id: 1,
    columns: ['ACTIVE', 'FAIL', 'MAXQ', 'PROCEDURE', 'QUED', 'STATUS', 'TIMEOUT', 'WLM_ENV'],
    api: 'https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=sp_trans',
    requiresDateTime: true,
  },
  {
    label: 'Control monitoring report',
    id: 2,
    columns: ['DATE', 'END_TIMESTAMP', 'FAILURE_COUNT', 'JOB_NAME', 'JOB_STATUS', 'ORDERID', 'START_TIMESTAMP'],
    api: 'https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=control_m',
    requiresDateTime: false,
  },
  {
    label: 'JHS report',
    id: 3,
    columns: ['DATE', 'FAILURE', 'JOB', 'RC', 'STATUS'],
    api: 'https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=jhs&date=12/01/2024',
    requiresDateTime: true,
  },
  {
    label: 'Change monitoring report',
    id: 4,
    columns: ['COMPONENT_NAME', 'DATE', 'REGION', 'RELEASE_CONTAINER', 'TIME_MST', 'TYPE'],
    api: 'https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=change_monitoring',
    requiresDateTime: false,
  },
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

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    const formattedOnlyDate = `${month}/${day}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${formattedOnlyDate}&time=${formattedTime}`; // Format DateTime for API

    setLoading(true); // Start loading
    try {
      const response = await fetch(`${reportApi}&date=${formattedDate}`);
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
    <div className="report_container">
      <Navbar /> {/* Using Navbar component */}
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <Box padding={2}>
              {REPORTS.map((report, index) => (
                <Button
                  key={report.id}
                  onClick={() => handleTabChange(index)}
                  color={selectedTab === index ? 'primary' : 'inherit'}
                  sx={{
                    width: '100%',
                    marginBottom: '8px',
                    p: 2,
                    boxShadow: selectedTab === index ? 2 : 1,
                    backgroundColor: selectedTab === index ? 'primary.main' : 'white',
                    color: selectedTab === index ? 'white' : 'black',
                  }}
                >
                  {report.label}
                </Button>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box padding={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  {REPORTS[selectedTab].label}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                {/* Conditionally render the DateTimePicker based on report's requirement */}
                {REPORTS[selectedTab].requiresDateTime && (
                  <DateTimePicker onSubmit={handleDateTimeSubmit} />
                )}
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
    </div>
  );
};

export default ReportTabs;
