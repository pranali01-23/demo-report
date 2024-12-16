import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import DateTimePicker from '@mui/x-date-pickers/DateTimePicker';
import DatePicker from '@mui/x-date-pickers/DatePicker';

const DateTimePicker = ({ onSubmit, onlyDate }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleSubmit = () => {
    onSubmit(selectedDateTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {onlyDate ? (
        <>
          <DatePicker
            label="Select Date"
            value={selectedDateTime}
            onChange={(newValue) => setSelectedDateTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      ) : (
        <>
          <DateTimePicker
            label="Select Date and Time"
            value={selectedDateTime}
            onChange={(newValue) => setSelectedDateTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </LocalizationProvider>
  );
};

export default DateTimePicker;
