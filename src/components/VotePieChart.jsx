// components/VotePieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register everything
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const VotePieChart = ({ movies }) => {
  const distribution = {
    low: 0,
    medium: 0,
    good: 0,
    excellent: 0,
  };

  movies.forEach((movie) => {
    const vote = movie.vote_average;
    if (vote < 3) distribution.low++;
    else if (vote < 6) distribution.medium++;
    else if (vote < 8) distribution.good++;
    else distribution.excellent++;
  });

  const total = Object.values(distribution).reduce((a, b) => a + b, 0);

  const data = {
    labels: ["0–3 (Low)", "3–6 (Medium)", "6–8 (Good)", "8–10 (Excellent)"],
    datasets: [
      {
        data: [
          distribution.low,
          distribution.medium,
          distribution.good,
          distribution.excellent,
        ],
        backgroundColor: ["#ef4444", "#facc15", "#4ade80", "#3b82f6"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
        },
      },
      datalabels: {
        color: "#fff",
        formatter: (value) => {
          if (total === 0) return "0%";
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Vote Average Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default VotePieChart;
