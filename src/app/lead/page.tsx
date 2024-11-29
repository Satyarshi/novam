import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LeadTable from "@/components/Tables/LeadTable";
import { FiFileText } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
const LeadManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lead Management" />

      <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 p-4 rounded-md flex-wrap">
      <div className="flex items-center space-x-2">
        <label htmlFor="from-date" className="text-gray-600">From:</label>
        <input
          id="from-date"
          type="date"
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="to-date" className="text-gray-600">To:</label>
        <input
          id="to-date"
          type="date"
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
        <FiSearch className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="text-gray-600 focus:outline-none"
        />
      </div>
      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md focus:outline-none hover:bg-blue-600">
        Search
      </button>
      <button className="rounded-lg border bg-white px-2 py-2">
        <FiFileText className="h-5 w-5 text-gray-600" />
      </button>
    </div>
        <LeadTable />
      </div>
    </DefaultLayout>
  );
};

export default LeadManagement;

