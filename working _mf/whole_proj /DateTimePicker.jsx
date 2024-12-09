// src/DateTimePicker.js
import React from 'react';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import DesktopDateTimePicker from '@mui/x-date-pickers/DesktopDateTimePicker';

const DateTimePicker = ({ value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDateTimePicker
                label="Select Date & Time"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default DateTimePicker;
