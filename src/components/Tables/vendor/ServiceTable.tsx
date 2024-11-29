"use client";
import React, { useState } from "react";
import { ServiceData as orderData } from "@/components/Data";
import { ServiceHeader as headers } from "@/components/Data";
import { MdDelete, MdToggleOn, MdToggleOff } from "react-icons/md";
import Link from "next/link";

const ServiceTable = () => {
  const [orderList, setOrderList] = useState(orderData);
  const toggleStatus = (index: number): void => {
    setOrderList((prevOrderList) =>
      prevOrderList.map((order, i) =>
        i === index ? { ...order, Status: !order.Status } : order,
      ),
    );
  };
  const deleteOrder = (index: number): void => {
    setOrderList((prevOrderList) =>
      prevOrderList.filter((_, i) => i !== index),
    );
  };
  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <p className="mb-4 text-xl font-semibold text-black dark:text-white">
          Services
        </p>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white"
                >
                  {header}
                </th>
              ))}
              <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Service_Name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Service_Type}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Duration}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Prof_Fees}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button
                    onClick={() => toggleStatus(index)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {order.Status ? (
                      <MdToggleOn size={40} className="text-green-500" />
                    ) : (
                      <MdToggleOff size={40} className="text-gray-400" />
                    )}
                  </button>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <Link
                    href={{
                      pathname: `/service`,
                      query: {
                        id: index,
                        ServiceName: order.Service_Name,
                        ServiceType: order.Service_Type,
                        Duration: order.Duration,
                        ProfFees: order.Prof_Fees,
                      },
                    }}
                  >
                    <p className="text-[#3C50E0]">Edit</p>
                  </Link>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button onClick={() => deleteOrder(index)}>
                    <MdDelete size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;
