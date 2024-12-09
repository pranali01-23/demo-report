// src/api.js
import axios from 'axios';

// Replace these with your actual API URLs
const API_URLS = {
    'Report1': 'https://api.example.com/report1',
    'Report2': 'https://api.example.com/report2',
    'Report3': 'https://api.example.com/report3',
    'Report4': 'https://api.example.com/report4',
    'Report5': 'https://api.example.com/report5',
};

export const fetchReportData = async (reportName, dateTime) => {
    try {
        const response = await axios.get(API_URLS[reportName], {
            params: { dateTime: dateTime.toISOString() } // Pass the selected date/time as a parameter.
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${reportName}:`, error);
        throw error; // Rethrow to handle this in your component
    }
};
