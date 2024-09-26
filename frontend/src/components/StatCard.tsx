import React, { useState } from "react";

interface StatCardProps {
  title: string;
  icon: string;
  value: number;
  unit: string;
  description: string;
  percentage: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon,
  value,
  unit,
  percentage,
  description,
}) => {
  const [{width, height}, serSffsetWidth] = useState(
    { width: 150 + percentage, height: 150 + percentage });

   return (
    <div
      className={`p-4 h-fit bg-base-300 rounded-2xl flex flex-col 
    bg-gradient-to-r from-cyan-500 to-blue-500 text-white 
    h-[${height}px] w-[${width}px]
    
    `}
    >
      <span className="stat-title font-semibold uppercase whitespace-normal leading-3 text-sm opacity-100 text-gray-100">
        <div className="inline text-lg mr-2">{icon}</div>
        {title}
      </span>
      <span className="stat-value overflow-hidden">
        {value} <span className="unit">{unit}</span>
      </span>
      <span className="stat-desc whitespace-normal opacity-100 text-gray-200">
        {description}
      </span>
    </div>
  );
};

export default StatCard;
