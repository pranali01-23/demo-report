import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const [activeReport, setActiveReport] = useState("ims transaction status");
  const [salesData, setSalesData] = useState([]);
  // console.log(">>>>>><<<<", salesData);
  const [inventoryData, setInventoryData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //   }
  // };
  const fetchSalesData = async () => {
    try {
      // const response = await axios.get("https://api.example.com/sales");
      const response = await axios.get("https://mfbatchreporting-dev.aexp.com/mf_batch_report?report_name=ims_trans");
      // console.log("getting data>>>>>"+response.data);
      setSalesData(response.data);
    } catch (error) {

      setError("Failed to fetch IMS Transaction Status Data");
      setOpenSnackbar(true);
    }
  };

  const fetchInventoryData = async () => {
    try {
      // const response = await axios.get("https://api.example.com/inventory");
      const response = await axios.get("http://127.0.0.1:5000/sp_trans");
      setInventoryData(response.data);
    } catch (error) {
      setError("Failed to fetch Online Transaction Status-SP- Data");
      setOpenSnackbar(true);
    }
  };

  const fetchCustomerData = async () => {
    try {
      // const response = await axios.get("https://api.example.com/customers");
      const response = await axios.get("http://127.0.0.1:5000/change_monitoring");
      setCustomerData(response.data);
    } catch (error) {
      setError("Failed to fetch Change Monitoring Data");
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    if (activeReport === "ims transaction status") fetchSalesData();
    if (activeReport === "online transaction") fetchInventoryData();
    if (activeReport === "change monitoring") fetchCustomerData();
  }, [activeReport]);

  const renderReport = () => {
    switch (activeReport) {
      case "ims transaction status":

        return (
          <TableContainer component={Paper}>
            <Table aria-label="ims transaction status report">
              <TableHead>
                <TableRow>
                  <TableCell>TRN</TableCell>
                  <TableCell>ST</TableCell>
                  <TableCell>RETCD</TableCell>
                  <TableCell>PSB</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.TRN}</TableCell>
                    <TableCell>{data.ST}</TableCell>
                    <TableCell>{data.RETCD}</TableCell>
                    <TableCell>{data.PSB}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      case "online transaction":
        return (
          <TableContainer component={Paper}>
            <Table aria-label="online transaction report">
              <TableHead>
                <TableRow>
                  <TableCell>PROCEDURE</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>ACTIVE</TableCell>
                  <TableCell>QUED</TableCell>
                  <TableCell>MAXQ</TableCell>
                  <TableCell>TIMEOUT</TableCell>
                  <TableCell>FAIL</TableCell>
                  <TableCell>WLM_ENV</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventoryData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.PROCEDURE}</TableCell>
                    <TableCell>{data.STATUS}</TableCell>
                    <TableCell>{data.ACTIVE}</TableCell>
                    <TableCell>{data.QUED}</TableCell>
                    <TableCell>{data.MAXQ}</TableCell>
                    <TableCell>{data.TIMEOUT}</TableCell>
                    <TableCell>{data.FAIL}</TableCell>
                    <TableCell>{data.WLM_ENV}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      case "change monitoring":
        return (
          <TableContainer component={Paper}>
            <Table aria-label="change monitoring">
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell>TIME(MST)</TableCell>
                  <TableCell>COMPONENT-NAME</TableCell>
                  <TableCell>TYPE</TableCell>
                  <TableCell>REGION</TableCell>
                  <TableCell>RELEASE-CONTAINER</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.DATE}</TableCell>
                    <TableCell>{data.TIME}</TableCell>
                    <TableCell>{data.COMPONENT_NAME}</TableCell>
                    <TableCell>{data.TYPE}</TableCell>
                    <TableCell>{data.REGION}</TableCell>
                    <TableCell>{data.RELEASE_CONTAINER}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      default:
        return null;
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Reports Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <Box padding={2}>
              <Typography variant="h6">Select Report</Typography>
              <Button
                variant="contained"
                color={activeReport === "ims transaction status" ? "primary" : "default"}
                onClick={() => setActiveReport("ims transaction status")}
                fullWidth
                style={{ margin: "10px 0" }}
              >
                IMS Transaction Status Data Report
              </Button>
              <Button
                variant="contained"
                color={activeReport === "online transaction" ? "primary" : "default"}
                onClick={() => setActiveReport("online transaction")}
                fullWidth
                style={{ margin: "10px 0" }}
              >
                Online Transaction Status-SP Report
              </Button>
              <Button
                variant="contained"
                color={activeReport === "change monitoring" ? "primary" : "default"}
                onClick={() => setActiveReport("change monitoring")}
                fullWidth
                style={{ margin: "10px 0" }}
              >
                Change Monitoring Report
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              {activeReport.charAt(0).toUpperCase() + activeReport.slice(1)} Report
            </Typography>
            {renderReport()}
          </Paper>
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
