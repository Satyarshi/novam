import React from "react";
import { FiFileText } from "react-icons/fi";

const ConsolidateFilter: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center space-x-2">
          <label htmlFor="from-date" className="text-gray-600">
            Order Completion Date:
          </label>
          <input
            id="from-date"
            type="date"
            className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="to-date" className="text-gray-600">
            To:
          </label>
          <input
            id="to-date"
            type="date"
            className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
          Generate Report
        </button>
        <button className="rounded-lg border bg-white px-2 py-2">
          <FiFileText className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ConsolidateFilter;
