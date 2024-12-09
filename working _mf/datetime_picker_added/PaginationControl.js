// PaginationControl.js
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControl = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <Stack spacing={2}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, page) => onPageChange(page)}
                variant="outlined"
                shape="rounded"
            />
        </Stack>
    );
};

export default PaginationControl;
