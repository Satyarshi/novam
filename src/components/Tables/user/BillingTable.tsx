import React from "react";
import { BillingData as orderData } from "@/components/Data";
import { BillingHeader as headers } from "@/components/Data";
import { FiFileText } from "react-icons/fi";

// Define filter props type
interface Filters {
  fromDate: string;
  toDate: string;
  service: string;
  status: string;
  productStatus: string;
}

interface BillingTableProps {
  filters: Filters;
}

const BillingTable: React.FC<BillingTableProps> = ({ filters }) => {
  const filteredData = orderData.filter((order) => {
    const { fromDate, toDate, service, status, productStatus } = filters;

    return (
      (!fromDate || new Date(order.Order_Date) >= new Date(fromDate)) &&
      (!toDate || new Date(order.Order_Date) <= new Date(toDate)) &&
      (!service || order.Service_Requested === service) &&
      (!status || order.Status === status) &&
      (!productStatus || order.Order_Status === productStatus)
    );
  });

  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <p className="mb-4 text-xl font-semibold text-black dark:text-white">
          All Transactions
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
            </tr>
          </thead>
          <tbody>
            {filteredData.map((order, index) => (
              <tr key={index}>
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
                  {order.Assigned_Lawyer}
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
                  {order.Service_Requested}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      order.Order_Status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.Order_Status}
                  </span>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Order_Value}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <FiFileText className="h-5 w-5 text-gray-600" />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Invoice_No}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.Transaction_No}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingTable;
