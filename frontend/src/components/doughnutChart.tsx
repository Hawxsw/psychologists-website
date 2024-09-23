import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");
    setIsDarkTheme(theme);
  }, []);

  const data = {
    labels: ["Total Atendimento", "Total Pedidos"],
    datasets: [
      {
        data: [10, 20],
        backgroundColor: isDarkTheme
          ? ["#60a5fa", "#4ade80"]
          : ["#3b82f6", "#22c55e"],
        hoverBackgroundColor: isDarkTheme
          ? ["#60a5fa", "#4ade80"]
          : ["#3b82f6", "#22c55e"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: isDarkTheme ? "#fff" : "#000",
          boxWidth: 15,
        },
      },
      tooltip: {
        backgroundColor: isDarkTheme ? "#333" : "#f9fafb",
        titleColor: isDarkTheme ? "#fff" : "#000",
        bodyColor: isDarkTheme ? "#fff" : "#000",
      },
    },
  };

  return (
    <div className="dark:bg-gray-800 bg-white text-black dark:text-white p-4 rounded-lg w-full max-w-xs sm:max-w-md mx-auto flex flex-col items-center">
      <div className="flex items-center space-x-4 text-xs sm:text-base">
        <span className="text-blue-400">● Total Atendimento</span>
        <span className="text-green-400">● Total Pedidos</span>
      </div>
      <div className="relative w-full h-48 sm:h-64">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4 space-y-2 w-full">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 bg-blue-400 inline-block rounded-full" />
            <span className="text-black dark:text-white">
              Total Atendimento
            </span>
          </div>
          <span className="text-black dark:text-white font-bold">10%</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 bg-green-400 inline-block rounded-full" />
            <span className="text-black dark:text-white">Total Pedidos</span>
          </div>
          <span className="text-black dark:text-white font-bold">20%</span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChartComponent;
