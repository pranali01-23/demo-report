// src/api.js
import axios from 'axios';

const API_URL = 'https://your.api.endpoint';

export const fetchReportData = async (reportName, dateTime) => {
    const response = await axios.get(`${API_URL}/reports/${reportName}`, { params: { dateTime } });
    return response.data;
};
