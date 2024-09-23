"use client";
import Card from "@/components/Card";
import LineChartComponent from "@/components/LineChartComponent";
import { FaEye, FaDollarSign, FaUserCheck, FaUsers } from "react-icons/fa";
import DoughnutChartComponent from "../doughnutChart";
import LeadsReport from "../leadsReport";
import { ToDoList } from "../toDoList ";

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#F1F5F9] dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card
          title="Atendimentos Feitos"
          value="$3.456K"
          change="0.43%"
          isPositive={true}
          icon={<FaEye />}
        />
        <Card
          title="Atendimentos a Fazer"
          value="$45.2K"
          change="4.35%"
          isPositive={true}
          icon={<FaDollarSign />}
        />
        <Card
          title="Nota dos Clientes"
          value="4.5/5"
          change="2.59%"
          isPositive={true}
          icon={<FaUserCheck />}
        />
        <Card
          title="Total de Clientes"
          value="3.456"
          change="0.95%"
          isPositive={false}
          icon={<FaUsers />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dark:bg-gray-800 bg-white text-black dark:text-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-start space-y-2 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-blue-400">● Total Atendimento</span>
              <span className="text-green-400">● Total Pedidos</span>
            </div>
          </div>
          <LineChartComponent />
        </div>

        <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-lg">
          <DoughnutChartComponent />
        </div>
      </div>
      <div className="space-y-6 mt-6">
        <LeadsReport />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}
