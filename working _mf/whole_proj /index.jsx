// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReportPage from './ReportPage'; // Importing your main report page component
import { CssBaseline } from '@mui/material'; // Material UI component for baseline styles
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize your primary color
        },
        secondary: {
            main: '#dc004e', // Customize your secondary color
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ReportPage /> {/* Render the ReportPage component here */}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root') // Ensure there's a div with id "root" in your index.html
);
