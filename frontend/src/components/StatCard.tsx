import React from "react";

interface StatCardProps {
  title: string;
  icon: string;
  value: number;
  unit: string;
  description: string;
  percentage: number;
  index: number;
}

const backgroundColor = [
  "css-points-container-background-color ml-1",
  "css-ranking-container-background-color mr-1",
];

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon,
  value,
  unit,
  percentage,
  description,
  index
}) => {
  const getBackgroundColor = index % 2 === 0 ? backgroundColor[0] : backgroundColor[1];

  return (
    <div
      className={`${getBackgroundColor} rounded-full m-auto flex justify-center item-center 
        flex-col text-white`}
      style={{ width: `${percentage}rem`, height: `${percentage}rem` }}
    >
      <span
        className="stat-title font-semibold uppercase 
      whitespace-normal leading-3 text-sm opacity-100 
      text-center text-gray-100"
      >
        <div className="inline text-lg mr-2 text-center">{icon}</div>
        {title}
      </span>
      <span className="stat-value overflow-hidden text-center">
        {value} <span className="unit">{unit}</span>
      </span>
      <span
        className="stat-desc whitespace-normal 
      text-center opacity-100 text-gray-200"
      >
        {description}
      </span>
    </div>
  );
};

export default StatCard;
