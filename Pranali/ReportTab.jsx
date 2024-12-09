import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CircularProgress,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const ReportTab = ({ reportId, dateTime }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`YOUR_API_URL/endpoint/${reportId}?date=${dateTime}`);
        setData(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reportId, dateTime, page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  if (loading) return <CircularProgress className="loading" />;

  return (
    <Paper elevation={1} className="report-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Detail</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.detail}</TableCell>
                <TableCell align="left">{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <Button onClick={handlePrevPage} disabled={page === 1} color="primary">
          Previous
        </Button>
        <span>{` Page ${page} of ${totalPages} `}</span>
        <Button onClick={handleNextPage} disabled={page === totalPages} color="primary">
          Next
        </Button>
      </div>
    </Paper>
  );
};

export default ReportTab;
