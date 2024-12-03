import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './TestPage.css'; // If you have separate styles for the Test Page

const TestPage = () => {
  return (
    <div>
      <Navbar /> {/* Using Navbar component */}
      <h1>This is the Test Page</h1>
      {/* Add other content as necessary */}
    </div>
  );
};

export default TestPage;
