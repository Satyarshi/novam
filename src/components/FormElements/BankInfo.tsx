import React, { useRef, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

interface BankInfoForm {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  reEnterAccountNumber: string;
  ifscCode: string;
  panNumber: string;
  cancelledCheque: File | null;
  panCardImage: File | null;
}

const BankInfo: React.FC = () => {
  const [formData, setFormData] = useState<BankInfoForm>({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    reEnterAccountNumber: "",
    ifscCode: "",
    panNumber: "",
    cancelledCheque: null,
    panCardImage: null,
  });

  const cancelledChequeInputRef = useRef<HTMLInputElement | null>(null);
  const panCardImageInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleDeleteFile = (fieldName: keyof BankInfoForm) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: null,
    }));

    // Reset the input field's value programmatically
    if (fieldName === "cancelledCheque" && cancelledChequeInputRef.current) {
      cancelledChequeInputRef.current.value = "";
    }
    if (fieldName === "panCardImage" && panCardImageInputRef.current) {
      panCardImageInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Bank Information saved successfully!");
  };

  const handleReset = () => {
    setFormData({
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      reEnterAccountNumber: "",
      ifscCode: "",
      panNumber: "",
      cancelledCheque: null,
      panCardImage: null,
    });

    // Reset the input fields
    if (cancelledChequeInputRef.current) {
      cancelledChequeInputRef.current.value = "";
    }
    if (panCardImageInputRef.current) {
      panCardImageInputRef.current.value = "";
    }
  };

  const renderFilePreview = (file: File | null, fieldName: keyof BankInfoForm) => {
    if (!file) return null;

    return (
      <div className="relative w-1/2 cursor-pointer rounded-md border-2 p-3">
        <div className="flex flex-col items-start gap-2 justify-between sm:flex-row">
          <IoDocumentTextOutline size={30} />
          <div>
            <p className="text-black dark:text-white">{file.name}</p>
            <p>{(file.size / 1024).toFixed(2)} KB</p>
            <a
              href={URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Click to view
            </a>
          </div>
          <MdOutlineDelete
            size={30}
            onClick={() => handleDeleteFile(fieldName)}
            className="cursor-pointer"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-5 my-8 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Bank Information
            </h3>
          </div>
          <div className="p-7">
            <form onSubmit={handleSubmit}>
              {/* Account and Bank Name Fields */}
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="accountHolderName"
                  >
                    Account Holder Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="accountHolderName"
                    id="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                    placeholder="Enter account holder name"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="bankName"
                  >
                    Bank Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="bankName"
                    id="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="Enter bank name"
                  />
                </div>
              </div>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                {/* Account Number */}
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="accountNumber"
                  >
                    Account Number
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="accountNumber"
                    id="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Enter account number"
                  />
                </div>

                {/* Re-Enter Account Number */}
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="reEnterAccountNumber"
                  >
                    Re-Enter Account Number
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="reEnterAccountNumber"
                    id="reEnterAccountNumber"
                    value={formData.reEnterAccountNumber}
                    onChange={handleInputChange}
                    placeholder="Re-enter account number"
                  />
                </div>
              </div>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="ifscCode"
                  >
                    IFSC Code
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="ifscCode"
                    id="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    placeholder="Enter IFSC code"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="panNumber"
                  >
                    PAN Number
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="panNumber"
                    id="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    placeholder="Enter PAN number"
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className="mb-5.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Cancelled Cheque Image
                </label>
                <input
                  type="file"
                  name="cancelledCheque"
                  ref={cancelledChequeInputRef}
                  className="mb-3 w-full"
                  onChange={handleFileChange}
                />
                {renderFilePreview(formData.cancelledCheque, "cancelledCheque")}
              </div>

              <div className="mb-5.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  PAN Card Image
                </label>
                <input
                  type="file"
                  name="panCardImage"
                  ref={panCardImageInputRef}
                  className="mb-3 w-full"
                  onChange={handleFileChange}
                />
                {renderFilePreview(formData.panCardImage, "panCardImage")}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
