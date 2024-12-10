// src/components/ReportTabs.js
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Typography, Box, CircularProgress, Pagination } from '@mui/material';
import axios from 'axios';

const ReportTabs = ({ selectedDate }) => {
  const reports = ['Report 1', 'Report 2', 'Report 3', 'Report 4', 'Report 5'];
  const [value, setValue] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };

  const fetchData = async () => {
    if (!selectedDate) return;
    
    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/report/${value + 1}`, {
        params: {
          date: selectedDate.toISOString(),
          page: page,
          limit: 10, // or any number you want for pagination
        },
      });
      setReportData(response.data.results);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate, value, page]);

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="report tabs">
        {reports.map((report, index) => (
          <Tab key={index} label={report} />
        ))}
      </Tabs>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Typography variant="h6">{reports[value]} Data:</Typography>
          {reportData.map((report, index) => (
            <Typography key={index}>{report.title || report.name}</Typography>
          ))}
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            variant="outlined"
          />
        </Box>
      )}
    </div>
  );
};

export default ReportTabs;
