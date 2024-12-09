// src/ExportButton.js
import React from 'react';
import Button from '@mui/material/Button';

const ExportButton = ({ data }) => {
    const exportToCSV = () => {
        const csvData = data.map(row =>
            Object.values(row).join(',')
        ).join('\n');

        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <Button variant="outlined" onClick={exportToCSV}>Export CSV</Button>;
};

export default ExportButton;
