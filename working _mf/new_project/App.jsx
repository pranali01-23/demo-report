import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import TestPage from './TestPage';
import ReportTable from './ReportTable';
import TabMenu from './TabMenu';
import './styles.css'; // Importing CSS for styles

const App = () => {
  const tabs = [
    { id: '1', title: 'Report', submenu: ['SubMenu 1', 'SubMenu 2'] },
    { id: '2', title: 'Test', submenu: ['SubMenu A', 'SubMenu B'] },
  ];

  const handleSelect = (id) => {
    console.log(`Selected tab: ${id}`);
  };

  return (
    <Router>
      <div>
        <TabMenu tabs={tabs} onSelect={handleSelect} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<ReportTable reportData={[]} />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
