import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg dark:bg-boxdark">
      <div className="space-y-3">
        <h4 className="text-2xl font-bold text-black dark:text-white">{total}</h4>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">{title}</p>
        <div className="flex items-center mt-2">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              levelUp ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
            }`}
          >
            {rate}
          </span>
          <span className="text-xs text-gray-500 ml-1">Since last week</span>
        </div>
      </div>
      <div className="w-12 h-12">
        <CircularProgressbar
          value={25} 
          styles={buildStyles({
            pathColor: "#4F46E5",
            trailColor: "#E0E7FF",
          })}
        />
      </div>
    </div>
  );
};

export default CardDataStats;
