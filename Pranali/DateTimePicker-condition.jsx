import React from 'react';
import 'react-datetime/css/react-datetime.css'; // Import default styling
import Datetime from 'react-datetime';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const DateTimePicker = ({ onSubmit, selectedReport }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleDateChange = (date) => {
    if (date.isValid()) {
      setSelectedDate(date.toDate());
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    const finalDate = new Date(selectedDate);
    if (selectedTime) {
      // set the time based on user's choice
      const [hours, minutes] = selectedTime.split(':');
      finalDate.setHours(hours);
      finalDate.setMinutes(minutes);
    }
    onSubmit(finalDate);
  };

  // Function to create an array of time options with 30-minute intervals
  const getTimeOptions = () => {
    const options = [];
    for (let i = 0; i < 48; i++) {
      const minutes = i * 30;
      const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
      const mins = (minutes % 60).toString().padStart(2, '0');
      options.push(`${hours}:${mins}`);
    }
    return options;
  };

  const renderDateTimeFields = () => {
    if (selectedReport === 'IMS' || selectedReport === 'SP') {
      return (
        <>
          <Datetime
            value={selectedDate}
            onChange={handleDateChange}
            dateFormat="YYYY-MM-DD"
            inputProps={{ placeholder: "Select Date" }}
          />
          <FormControl fullWidth style={{ marginTop: '16px' }}>
            <InputLabel>Time</InputLabel>
            <Select value={selectedTime} onChange={handleTimeChange} label="Time">
              {getTimeOptions().map((time, index) => (
                <MenuItem key={index} value={time}>{time}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </>
      );
    }
    if (selectedReport === 'JHS' || selectedReport === 'Change Monitoring') {
      return (
        <>
          <Datetime
            value={selectedDate}
            onChange={handleDateChange}
            dateFormat="YYYY-MM-DD"
            inputProps={{ placeholder: "Select Date" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </>
      );
    }
    return null; // If the report is Control-M, return nothing
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {renderDateTimeFields()}
    </div>
  );
};

export default DateTimePicker;
