 import React from 'react';
 //import ReactDOM from 'react-dom';
 import ReactDOM from 'react-dom/client';
 //import './styles/App.css';
 // import './index.css';
 import App from './App';
 // import 'bootstrap/dist/css/bootstrap.min.css';
 import { CssBaseline } from '@mui/material';
 
 // ReactDOM.render(
 //   <React.StrictMode>
 //     <CssBaseline />
 //     <App />
 //   </React.StrictMode>,
 //   document.getElementById('root')
 // );
 
 const root = document.getElementById('root');
 if (!root) {
   console.error('React root not found');
   const p = document.createElement('p');
   p.textContent = 'React root not found';
   document.body.appendChild(p);
 } else {
   ReactDOM.createRoot(root).render(<App />);
 }
