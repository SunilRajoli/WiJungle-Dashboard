import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import axios from 'axios';
import Graph from './Graph';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/dummy_data.json');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom 
      sx={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
        }}>
        WiJungle Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Graph data={data} graphType="histogram" xField="src_ip" title="Source IP Histogram" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Graph data={data} graphType="histogram" xField="dest_ip" title="Destination IP Histogram" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Graph data={data} graphType="bar" xField="proto" yField="flow_id" title="Protocol Usage" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Graph data={data} graphType="scatter" xField="src_port" yField="dest_port" colorField="severity" title="Port Scatter Plot" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
