import type React from "react";

interface CardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const Card = ({ title, value, change, isPositive, icon }: CardProps) => {
  return (
    <div className="flex items-center rounded-sm border dark:bg-gray-800 bg-white text-black dark:text-white p-4 shadow-default md:p-6 lg:p-5 xl:p-7.5 transition-transform duration-200 hover:scale-105">
      <div className="icon text-2xl mr-4 flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h2 className="text-xs font-bold md:text-sm">{value}</h2>
        <p
          className={`text-xs md:text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </p>
        <p className="text-xs md:text-sm">{title}</p>
      </div>
    </div>
  );
};

export default Card;
