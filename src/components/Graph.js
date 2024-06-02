import React from 'react';
import { Bar, Scatter } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data, graphType, xField, yField, colorField, title }) => {
  const processData = () => {
    const labels = [...new Set(data.map(item => item[xField]))];
    const values = labels.map(label => data.filter(item => item[xField] === label).length);
    return {
      labels,
      datasets: [{
        label: title,
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {graphType === 'histogram' && <Bar data={processData()} options={options} />}
        {graphType === 'bar' && <Bar data={processData()} options={options} />}
        {graphType === 'scatter' && <Scatter data={processData()} options={options} />}
      </CardContent>
    </Card>
  );
};

export default Graph;
