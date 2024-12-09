// src/ReportPage.js
import React, { useEffect, useState } from 'react';
import ReportTabs from './ReportTabs';
import ReportTable from './ReportTable';
import Loader from './Loader';
import PaginationControl from './PaginationControl';
import ExportButton from './ExportButton';
import DateTimePicker from './DateTimePicker';
import { Box, Button } from '@mui/material';
import { fetchReportData } from './api';

const ALL_REPORTS = ['Report1', 'Report2', 'Report3', 'Report4', 'Report5'];

const ReportPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [dateTime, setDateTime] = useState(new Date());
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(10);
    const [currentReport, setCurrentReport] = useState(ALL_REPORTS[0]);

    useEffect(() => {
        const loadDefaultData = async () => {
            setLoading(true);
            const data = await fetchReportData(currentReport, dateTime);
            setTotalPages(Math.ceil(data.length / pageSize));
            setReportData(data);
            setLoading(false);
        };
        loadDefaultData();
    }, [currentReport, dateTime]);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setCurrentReport(ALL_REPORTS[newValue]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = await fetchReportData(currentReport, dateTime);
        setTotalPages(Math.ceil(data.length / pageSize));
        setReportData(data);
        setLoading(false);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentData = reportData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <Box display="flex" padding={2}>
            <ReportTabs value={selectedTab} onChange={handleTabChange} reportNames={ALL_REPORTS} />
            <Box flexGrow={1} marginLeft={2}>
                <Box display="flex" alignItems="center" marginBottom={2}>
                    <DateTimePicker value={dateTime} onChange={setDateTime} />
                    <Button variant="contained" onClick={handleSubmit} style={{ marginLeft: '10px' }}>
                        Submit
                    </Button>
                    <ExportButton data={currentData} style={{ marginLeft: '10px' }} />
                </Box>

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <ReportTable reportData={currentData} />
                        <PaginationControl count={totalPages} page={currentPage} onPageChange={handlePageChange} />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default ReportPage;
