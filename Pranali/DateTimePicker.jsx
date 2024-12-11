import React from 'react';
import 'react-datetime/css/react-datetime.css'; // Import default styling
import Datetime from 'react-datetime';
import { Button, TextField } from '@mui/material';

const DateTimePicker = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    if (date.isValid()) {
      setSelectedDate(date.toDate());
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedDate);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(props) => (
          <TextField {...props} fullWidth label="Select Date & Time" />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginLeft: '16px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default DateTimePicker;
