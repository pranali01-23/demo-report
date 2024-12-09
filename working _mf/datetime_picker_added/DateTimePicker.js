// DateTimePicker.js
import React from 'react';
import { TextField } from '@mui/material';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';

const DateTimePicker = ({ value, onChange }) => {
    return (
        <DesktopDateTimePicker
            label="Select Date & Time"
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
        />
    );
};

export default DateTimePicker;
