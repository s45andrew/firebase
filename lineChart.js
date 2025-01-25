import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = ({ tesla }) => {
  if (!tesla) {
    return <div>Loading...</div>; // Display a loading message if tesla is undefined
  }
 tesla = [...tesla].reverse()
  const teslamax = Math.max(...tesla.map(item => item.price));
  const teslamin = Math.min(...tesla.map(item => item.price));
  const sampleData = [];
  tesla.forEach(item => {
    sampleData.push(item.price);
  });

  const formattedDates = tesla.map(item => {
    const date = new Date(item.date);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

 const roundMin = Math.round(teslamin/10)*10;
 const minWithMargin =Math.ceil(roundMin+(roundMin*-0.07));
 const roundMax = Math.round(teslamax /10) *10;
 const maxWithMargin =Math.ceil(roundMax+(roundMax*0.07) )
 const canvasData = {
    labels: formattedDates,
    datasets: [
      {
        label: "Tesla Stock Price",
        borderColor: "navy",
        pointRadius: 0,
        fill: true,
        backgroundColor: 'yellow',
        lineTension: 0.4,
        data: sampleData,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: minWithMargin,
        max: maxWithMargin,
        ticks: {
          stepSize: 10,
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "10rem",
    maxWidth: "540px",
    width: "100%",
    border: "0px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;
