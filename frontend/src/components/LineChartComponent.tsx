import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PaymentsOverviewChart() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");
    setIsDarkTheme(theme);
  }, []);

  const labels = [
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Atendimento",
        data: [65, 59, 80, 81, 56, 55, 40, 48, 60, 70, 75, 80],
        borderColor: "#4B77BE",
        backgroundColor: "rgba(75, 119, 190, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Total Pedidos",
        data: [40, 48, 40, 19, 86, 27, 90, 80, 70, 60, 50, 40],
        borderColor: "#5C9BD1",
        backgroundColor: "rgba(92, 155, 209, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: isDarkTheme ? "white" : "black",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.8)",
      },
      title: {
        display: true,
        text: "Atendimentos",
        color: isDarkTheme ? "white" : "black",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: isDarkTheme ? "white" : "black",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: isDarkTheme ? "white" : "black",
        },
      },
    },
  };

  return (
    <div className="dark:bg-gray-800 bg-white text-black dark:text-white p-4 rounded-lg w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full h-64 md:h-80">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
