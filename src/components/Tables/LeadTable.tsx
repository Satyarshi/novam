import React from "react";
import { leadData as orderData } from "../Data";
import { FaWhatsapp } from "react-icons/fa";
import { leadHeader as headers } from "../Data";
import { MdDelete } from "react-icons/md";


const LeadTable = () => {
  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <p className="mb-4 text-xl font-semibold text-black dark:text-white">
          Lead Report
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
            {orderData.map((order, index) => (
              <tr key={index}>
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
                  {order.Lead_Date}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Concerned_Area}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Device}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Service}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Product_Name}
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

export default LeadTable;
