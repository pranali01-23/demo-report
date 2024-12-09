import React, { useState } from 'react';
import ReportTable from './ReportTable';
import DateTimePicker from './DateTimePicker';
import Loader from './Loader';
import PaginationControl from './PaginationControl';
import ExportButton from './ExportButton';
import { Button, Box } from '@mui/material';

const ReportPage = ({ reportData }) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // Assuming each page shows 10 items

    const handleSubmit = () => {
        setLoading(true);
        // Add your submit logic here
        setLoading(false);
    };

    const handleExport = () => {
        // Your export logic here
        console.log("Exporting report...");
    };

    const totalPages = Math.ceil(reportData.length / pageSize);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentData = reportData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div>
            <Box display="flex" alignItems="center" mb={2}>
                <DateTimePicker value={dateTime} onChange={setDateTime} />
                <Button variant="contained" onClick={handleSubmit} style={{ marginLeft: '10px' }}>
                    Submit
                </Button>
                <ExportButton onClick={handleExport} />
            </Box>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <ReportTable reportData={currentData} />
                    <PaginationControl
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default ReportPage;
