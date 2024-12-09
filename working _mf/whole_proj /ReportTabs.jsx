// src/ReportTabs.js
import React from 'react';
import { Tabs, Tab } from '@mui/material';

const ReportTabs = ({ value, onChange, reportNames }) => {
    return (
        <Tabs value={value} onChange={onChange} orientation="vertical">
            {reportNames.map((name) => (
                <Tab key={name} label={name} />
            ))}
        </Tabs>
    );
};

export default ReportTabs;
