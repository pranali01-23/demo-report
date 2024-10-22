// import React from 'react';
import React, { useState, useEffect } from 'react';
import TabMenu from './components/TabMenu';
import TabContent from './components/TabContent';
import './App.css';

export function App(props) {
  const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data.reports))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <TabMenu value={value} onChange={handleChange} />
            <div style={{ padding: '20px' }}>
                <TabContent value={value} data={data} />
            </div>
        </div>
    );
}

// Log to console
console.log('Hello console')