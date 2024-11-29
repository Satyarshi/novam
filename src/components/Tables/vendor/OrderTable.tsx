"use client";
import React from "react";
import { OrderData as orderData } from "@/components/Data";
import { OrderHeader as headers } from "@/components/Data";
import Link from "next/link";

interface Filters {
  fromDate: string;
  toDate: string;
  service: string;
  status: string;
}

interface OrderTableProps {
  filters: Filters;
}

const OrderTable: React.FC<OrderTableProps> = ({ filters }) => {
  const filteredData = orderData.filter((order) => {
    const { fromDate, toDate, service, status } = filters;

    return (
      (!fromDate || new Date(order.Order_Date) >= new Date(fromDate)) &&
      (!toDate || new Date(order.Order_Date) <= new Date(toDate)) &&
      (!service || order.Service === service) &&
      (!status || order.Status === status)
    );
  });
  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <p className="mb-4 text-xl font-semibold text-black dark:text-white">
          Orders Report
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
            {filteredData.map((order, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Order_Date}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.User_ID}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Order_ID}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.Status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : order.Status === "In Progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.Status}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Service}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <Link
                    href={{
                      pathname: `/vendor/details`,
                      query: {
                        orderDateTime: order.Order_Date,
                        status: order.Status,
                        userId: order.User_ID,
                        orderId: order.Order_ID,
                        assignedLawyer: "ABC",
                        serviceRequested: order.Service,
                        showDocument: true,
                      },
                    }}
                  >
                    <p className="text-[#3C50E0]">View</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
