"use client";
import React, { useState } from "react";
import orderData, { category } from "../Data";
import { MdDelete, MdToggleOn, MdToggleOff } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { headers } from "../Data";

interface Filters {
  fromDate: string;
  toDate: string;
  status: string;
  category: string;
  productStatus: string;
}
interface OrderTableProps {
  filters: Filters;
}
const OrderTable: React.FC<OrderTableProps> = ({ filters }) => {
  const [orderList, setOrderList] = useState(orderData);
  const filteredData = orderList.filter((order) => {
    const { fromDate, toDate, status, category, productStatus } = filters;

    return (
      (!fromDate || new Date(order.orderDate) >= new Date(fromDate)) &&
      (!toDate || new Date(order.orderDate) <= new Date(toDate)) &&
      (!status || order.status === status) &&
      (!category || order.category === category)&&
      (!productStatus || order.orderStatus === productStatus)
    );
  });

  const toggleTDS = (index: number): void => {
    setOrderList((prevOrderList) =>
      prevOrderList.map((order, i) =>
        i === index ? { ...order, tds: !order.tds } : order,
      ),
    );
  };
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
                  className="min-w-[210px] px-4 py-4 font-medium text-black dark:text-white"
                >
                  {header}
                </th>
              ))}
              <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((order, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.email}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center">
                    <FaWhatsapp className="mr-2 text-green-500" />
                    {order.phone}
                  </div>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.orderDate}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.userId}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.orderId}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.assignedLawyer}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : order.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.city}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.state}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.concernedArea}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.device}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.category}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.subCategory}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.orderStatus === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.saleValue}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.couponCode}
                </td>

                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.couponDiscount}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.cgst}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.sgst}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.igst}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.orderValue}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button
                    onClick={() => toggleTDS(index)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {order.tds ? (
                      <MdToggleOn size={40} className="text-green-500" />
                    ) : (
                      <MdToggleOff size={40} className="text-gray-400" />
                    )}
                  </button>
                </td>
                {/* Invoice Icon */}
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <FiFileText className="h-5 w-5 text-gray-600" />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.invoiceNo}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.transactionNo}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.razorpayOrderId}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.razorpayPaymentId}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button>
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

export default OrderTable;
