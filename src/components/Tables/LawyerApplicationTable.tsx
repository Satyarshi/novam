import React from "react";
import { lawyerManagementData as orderData } from "../Data";
import { FaWhatsapp } from "react-icons/fa";
import { lawyerMangagementHeader as headers } from "../Data";
import { FiFileText } from "react-icons/fi";

const LawyerApplicationTable = () => {
  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <p className="mb-4 text-xl font-semibold text-black dark:text-white">
          Expert Application
        </p>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="min-w-[210px] px-4 py-4 font-medium text-black dark:text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.Action === "Approve"
                        ? "bg-green-100 text-green-600"
                        : order.Action === "Waiting List"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.Action}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Email}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center">
                    <FaWhatsapp className="mr-2 text-green-500" />
                    {order.Phone_No}
                  </div>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Order_Date}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Expert_ID}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.Online_Status === "Active"
                        ? "bg-green-100 text-green-600"
                        : order.Online_Status === "Full"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.Online_Status}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.City}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.State}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Specialization}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Bar_Council_ID}
                </td>
                <td className="flex justify-center border-b border-[#eee] px-4 py-6 dark:border-strokedark">
                  <FiFileText className="h-5 w-5 text-gray-600" />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Prof_Type}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Degree}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Language}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Bank_Name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Acc_Holder_Name}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Acc_No}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.IFSC_Code}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.PAN_Number}
                </td>
                <td className="flex justify-center border-b border-[#eee] px-4 py-6 dark:border-strokedark">
                  <FiFileText className="h-5 w-5 text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LawyerApplicationTable;
