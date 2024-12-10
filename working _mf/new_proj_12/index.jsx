// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Web vitals tracking (optional)
import { CssBaseline } from '@mui/material'; // Optional: Normalize CSS for better cross-browser consistency.

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* This makes sure the app uses a consistent baseline style */}
    <App />
  </React.StrictMode>,
  rootElement
);

// Optionally measure performance
reportWebVitals();
