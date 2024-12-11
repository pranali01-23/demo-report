import React from 'react';
import { TextField } from '@mui/material';
import { DateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateTimePicker = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <MUIDateTimePicker
      label="Select Date & Time"
      value={selectedDate}
      onChange={handleDateChange}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
};

export default DateTimePicker;
