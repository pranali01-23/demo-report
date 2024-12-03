import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Main Landing Page</h1>
      <div className="button-container">
        <div className="interactive-box" onClick={() => navigate('/app')}>
          Go to App Page
        </div>
        <div className="interactive-box" onClick={() => navigate('/test')}>
          Go to Test Page
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
