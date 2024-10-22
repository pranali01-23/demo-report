import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

function TabMenu({ value, onChange }) {
    return (
        <AppBar position="static">
            <Tabs value={value} onChange={onChange}>
                <Tab label="Report 1" />
                <Tab label="Report 2" />
                <Tab label="Report 3" />
            </Tabs>
        </AppBar>
    );
}

export default TabMenu;
