import React, { useState } from "react";

interface StatCardProps {
  title: string;
  icon: string;
  value: number;
  unit: string;
  description: string;
  percentage: number;
}

const backgroundColor = [
  'css-points-container-background-color',
  'css-points-container-background-color'
]

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon,
  value,
  unit,
  percentage,
  description,
}) => {
  const [offSet, setOffset] = useState(
    { width: `${percentage.toString()}`, height: `${percentage.toString()}` });
    console.log(percentage);
    
    
   return (
    <div
      className={`bg-base-300 rounded-full m-auto flex justify-center item-center 
        flex-col bg-gradient-to-r from-cyan-500 to-blue-500 
        text-white h-[${percentage.toString()}rem] w-[${percentage.toString()}rem]`}
    >
      <span className="stat-title font-semibold uppercase 
      whitespace-normal leading-3 text-sm opacity-100 
      text-center text-gray-100">
        <div className="inline text-lg mr-2 text-center">{icon}</div>
        {title}
      </span>
      <span className="stat-value overflow-hidden text-center">
        {value} <span className="unit">{unit}</span>
      </span>
      <span className="stat-desc whitespace-normal 
      text-center opacity-100 text-gray-200">
        {description}
      </span>
    </div>
  );
};

export default StatCard;
