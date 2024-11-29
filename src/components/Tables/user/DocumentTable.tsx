"use client";
import React from "react";
import { DocumentData as orderData } from "@/components/Data";
import { DocumentHeader as headers } from "@/components/Data";
import { FaRegEdit } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
const DocumentTable = () => {
  return (
    <div className="box rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white"
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
            {orderData.map((order, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.orderId}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.documentName}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.assignedLawyer}
                </td>

                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {order.documentLinks.map((link, i) => (
                    <div
                      key={i}
                      className="relative mb-2 w-full cursor-pointer rounded-md border-2 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        {" "}
                        <IoDocumentTextOutline size={20} />
                        <div>
                          <p>{link.fileName}</p>{" "}
                          <div className="text-sm text-gray-500">
                            {link.size}
                          </div>
                          <a
                            href={link.url}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to view
                          </a>
                        </div>
                        <IoMdDownload size={20} />
                      </div>
                    </div>
                  ))}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button className="mr-2">
                    <FaRegEdit size={20} />
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

export default DocumentTable;
