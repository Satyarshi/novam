"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

interface OrderDetailsProps {
  orderDateTime: string;
  status: string;
  userId: string;
  orderId: string;
  assignedLawyer: string;
  serviceRequested: string;
  showDocument: boolean;
}
interface Document {
  id: number;
  name: string;
  file: File;
}

const MyOrder: React.FC<OrderDetailsProps> = ({
  orderDateTime,
  status,
  userId,
  orderId,
  assignedLawyer,
  serviceRequested,
  showDocument,
}) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentName, setDocumentName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploadVisible, setUploadVisible] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!documentName || !file) {
      alert("Please provide a document name and select a file.");
      return;
    }

    const newDocument: Document = {
      id: Date.now(),
      name: documentName,
      file: file,
    };

    setDocuments([...documents, newDocument]);
    setDocumentName("");
    setFile(null);
    setUploadVisible(false); // Hide the upload form after upload
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleEdit = (id: number) => {
    const doc = documents.find((doc) => doc.id === id);
    if (doc) {
      setDocumentName(doc.name);
      setFile(doc.file);
      setDocuments(documents.filter((d) => d.id !== id));
      setUploadVisible(true); // Show the form with pre-filled values for editing
    }
  };

  return (
    <>
      <Breadcrumb pageName="My Order" />
      <div className="flex flex-col gap-4 md:flex-row">
        <div>
          <div className="max-w-3xl rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
            <p className="mb-2 text-xl font-semibold text-black dark:text-white">
              Order Details
            </p>
            <hr />
            <div className="flex flex-wrap justify-between">
              <div>
                <div className="my-2">
                  <span className="font-medium text-[#1C2434] dark:text-white">
                    Order Date & Time:
                  </span>{" "}
                  {orderDateTime}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-[#1C2434] dark:text-white">
                    User ID:
                  </span>{" "}
                  {userId}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-[#1C2434] dark:text-white">
                    Order ID:
                  </span>{" "}
                  {orderId}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-[#1C2434] dark:text-white">
                    Assigned Lawyer:
                  </span>{" "}
                  {assignedLawyer}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-[#1C2434] dark:text-white">
                    Service Requested:
                  </span>{" "}
                  {serviceRequested}
                </div>
              </div>
              <div className="my-2">
                <span className="font-medium text-[#1C2434] dark:text-white">
                  Status:
                </span>{" "}
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                    status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : status === "In Progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-3xl rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
            <p className="my-2 text-xl font-semibold text-black dark:text-white">
              Upload Documents
            </p>
            <hr />
            <p className="my-4 text-sm text-[#7A818F]">
              <span className="font-semibold text-black dark:text-white">
                Note:
              </span>{" "}
              All documents you upload will be deleted 30 days after project
              completion.
            </p>
            <button
              onClick={() => setUploadVisible(true)}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            >
              Add New
            </button>

            {documents.length > 0 && (
              <div className="mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-100 dark:bg-meta-4">
                      <th className="p-2 text-left">Document Name</th>
                      <th className="p-2 text-left">Document Link</th>
                      <th className="p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id} className="border-b">
                        <td className="p-2">{doc.name}</td>
                        <td className="p-2">
                          <div className="relative w-11/12 cursor-pointer rounded-md border-2 p-3 sm:w-11/12 xl:w-9/12">
                            <div className="flex flex-col items-start gap-2 sm:flex-row">
                              <IoDocumentTextOutline size={30} />
                              <div>
                                <p className="text-black dark:text-white">
                                  {doc.file.name}
                                </p>
                                <p>{(doc.file.size / 1024).toFixed(2)} KB</p>
                                <a
                                  href={URL.createObjectURL(doc.file)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600"
                                >
                                  Click to view
                                </a>
                              </div>
                              <MdOutlineDelete
                                size={30}
                                onClick={() => handleDelete(doc.id)}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <img
                            src="/images/icon/edit.svg"
                            alt="edit"
                            onClick={() => handleEdit(doc.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {isUploadVisible && (
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="Document Name"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                  className="mb-2 h-1/2 w-full rounded border border-stroke bg-gray px-2 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                />
                <div className="relative w-full cursor-pointer border-2 border-dashed p-4 text-center hover:border-gray-400">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full opacity-0"
                  />
                  <div className="flex flex-col items-center text-sm text-gray-600">
                    <img src="/images/icon/Icon frame.svg" alt="upload" />
                    <p>
                      <span className="text-[#004AAB]">Click to upload</span> or
                      drag and drop
                    </p>
                    <p>(Max. File size: 25 MB)</p>
                  </div>
                </div>
                <div className="flex h-1/2 space-x-2">
                  <button
                    onClick={handleUpload}
                    className="rounded-lg bg-blue-500 px-4 py-4 text-white hover:bg-blue-600"
                  >
                    Upload
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {showDocument ? (
          <div className="h-max max-w-3xl rounded-lg bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
            <p className="my-2 text-xl font-semibold text-black dark:text-white">
              Uploaded Documents
            </p>
            <hr />
            <p className="my-4 text-sm text-[#7A818F]">
              <span className="font-semibold text-black dark:text-white">
                Note:
              </span>{" "}
              All documents you upload will be deleted 30 days after project
              completion.
            </p>

            {documents.length > 0 && (
              <div className="mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-100 dark:bg-meta-4">
                      <th className="p-4 text-left">Document Name</th>
                      <th className="p-4 text-left">Document Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id} className="border-b">
                        <td className="p-4">{doc.name}</td>
                        <td className="p-4">
                          <div className="relative w-11/12 cursor-pointer rounded-md border-2 p-3 sm:w-11/12 xl:w-9/12">
                            <div className="flex flex-col items-start gap-4 sm:flex-row">
                              <IoDocumentTextOutline size={30} />
                              <div>
                                <p className="text-black dark:text-white">
                                  {doc.file.name}
                                </p>
                                <p>{(doc.file.size / 1024).toFixed(2)} KB</p>
                                <a
                                  href={URL.createObjectURL(doc.file)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600"
                                >
                                  Click to view
                                </a>
                              </div>
                              <MdOutlineDelete
                                size={30}
                                onClick={() => handleDelete(doc.id)}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MyOrder;
