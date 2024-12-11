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

  // Function to create an array of time options with 30-minute intervals
  const getTimeOptions = () => {
    const options = [];
    const baseDate = new Date();
    for (let i = 0; i < 48; i++) {
      const date = new Date(baseDate.setMinutes(baseDate.getMinutes() + 30 * i));
      options.push(date);
    }
    return options;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm"
        renderInput={(props) => (
          <TextField {...props} fullWidth label="Select Date & Time" />
        )}
        // Disable all other times except the options with 30 minutes interval
        inputProps={{ 
          list: "time-options" 
        }}
      />
      <datalist id="time-options">
        {getTimeOptions().map((time, index) => (
          <option key={index} value={time.toISOString()} />
        ))}
      </datalist>
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
