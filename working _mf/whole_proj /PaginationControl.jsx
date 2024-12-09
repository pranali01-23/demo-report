// src/PaginationControl.js
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControl = ({ count, page, onPageChange }) => {
    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={(_, p) => onPageChange(p)} />
        </Stack>
    );
};

export default PaginationControl;
