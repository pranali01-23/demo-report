import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker as MuiDateTimePicker, DatePicker } from '@mui/x-date-pickers';

const DateTimePicker = ({ onSubmit, onlyDate }) => {
  const [dateTime, setDateTime] = useState(new Date());

  const handleSubmit = () => {
    onSubmit(dateTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {onlyDate ? (
        <>
          <DatePicker
            label="Select Date"
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      ) : (
        <>
          <MuiDateTimePicker
            label="Select Date and Time"
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
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
