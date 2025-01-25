import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, Filler } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
Chart.register(Filler);

const LineGraph = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date), // Corrected to 'labels' and 'item.date'
    datasets: [
      {
        label: 'Tesla stock price', // Corrected 'Label' to 'label'
        data: data.map((item) => item.price),
        borderColor: 'rgba(255,99,132,1)', // Fixed the color format
        backgroundColor: 'rgba(255,99,132,0.2)', // Fixed the color to match borderColor
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tesla stock price over time',
      },
    },
  };

  return <div className='charts'><Line data={chartData} options={options} /></div>;
};

export default LineGraph;
