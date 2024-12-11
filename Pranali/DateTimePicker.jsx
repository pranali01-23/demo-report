import React from 'react';
import 'react-datetime/css/react-datetime.css'; // Import default styling
import Datetime from 'react-datetime';
import { TextField } from '@mui/material';

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
    <div>
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(props) => <TextField {...props} fullWidth />}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: '16px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default DateTimePicker;
