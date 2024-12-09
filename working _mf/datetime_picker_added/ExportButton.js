// ExportButton.js
import React from 'react';
import Button from '@mui/material/Button';

const ExportButton = ({ onClick }) => {
    return <Button variant="outlined" onClick={onClick}>Export Report</Button>;
};

export default ExportButton;
