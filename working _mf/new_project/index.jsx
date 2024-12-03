import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';

const root = document.getElementById('root');
if (!root) {
  console.error('React root not found');
  const p = document.createElement('p');
  p.textContent = 'React root not found';
  document.body.appendChild(p);
} else {
  ReactDOM.createRoot(root).render(<App />);
}
