"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";


const ECommerce: React.FC = () => {
  return (
    <>
      <p className="text-2xl font-bold text-black dark:text-white py-5">This Week&#39;s Overview</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats title="Total Clients" total="590" rate="+2.5%" levelUp />
          
        <CardDataStats title="Total Lawyers" total="234" rate="+1.5%" levelDown />
          

        <CardDataStats title="Total Active Services" total="24" rate="+0.5%" levelUp />
          
      </div>

      <div className="mt-4 grid grid-cols-10 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <div className="col-span-12 xl:col-span-6">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
