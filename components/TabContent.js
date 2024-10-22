// src/components/TabContent.js
import React from 'react';

function TabContent({ value, data }) {
    const report = data[value];
    return (
        <div>
            <h2>{report.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{report.id}</td>
                        <td>{report.name}</td>
                        <td>{report.date}</td>
                        <td>{report.value}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabContent;