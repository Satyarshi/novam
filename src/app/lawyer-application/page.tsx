import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LawyerApplicationTable from "@/components/Tables/LawyerApplicationTable";
import { FiFileText } from "react-icons/fi";

const LawyerApplication = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Lawyer Application" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-4 p-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="from-date" className="text-gray-600">
              From:
            </label>
            <input
              id="from-date"
              type="date"
              className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="to-date" className="text-gray-600">
              To:
            </label>
            <input
              id="to-date"
              type="date"
              className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <select className="rounded-lg border px-2 py-3">
            <option>Select Specialization</option>
          </select>
          <select className="rounded-lg border px-2 py-3">
            <option>Select Status</option>
          </select>
          <select className="rounded-lg border px-2 py-3">
            <option>Select State</option>
          </select>
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
            Search
          </button>
          <button className="rounded-lg border bg-white px-2 py-2">
            <FiFileText className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <LawyerApplicationTable />
      </div>
    </DefaultLayout>
  );
};

export default LawyerApplication;
