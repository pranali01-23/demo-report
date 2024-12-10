// src/components/DateTimePicker.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DateTimePicker = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    if (selectedDate) {
      onSubmit(selectedDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <MuiDateTimePicker
            label="Select Date & Time"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
