import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = () => {
    onSubmit(startDate);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default DateTimePicker;
