import React from "react";
import { FiFileText } from "react-icons/fi";

import {
  services,
  status,
  productStatus,
  category,
  specialization,
} from "@/components/Data";

interface Filters {
  fromDate: string;
  toDate: string;
  service: string;
  category: string;
  specialization: string;
  status: string;
  productStatus: string;
}

interface FilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  showProductStatus: boolean;
  showSpecialization: boolean;
  showCategory: boolean;
  showService: boolean;
}

const FilterData: React.FC<FilterProps> = ({
  filters,
  setFilters,
  showProductStatus,
  showSpecialization,
  showCategory,
  showService,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Search Filters:", filters);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="from-date" className="text-gray-600">
          From:
        </label>
        <input
          id="from-date"
          name="fromDate"
          type="date"
          value={filters.fromDate}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="to-date" className="text-gray-600">
          To:
        </label>
        <input
          id="to-date"
          name="toDate"
          type="date"
          value={filters.toDate}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Conditionally render service dropdown */}
      {showService && (
        <select
          name="service"
          value={filters.service}
          onChange={handleInputChange}
          className="rounded-lg border px-2 py-3"
        >
          <option value="">Select Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      )}
      {/* Conditionally render category dropdown */}
      {showCategory && (
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="rounded-lg border px-2 py-3"
        >
          <option value="">Select Category</option>
          {category.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
      {/* Conditionally render specialization dropdown */}
      {showSpecialization && (
        <select
          name="specialization"
          value={filters.specialization}
          onChange={handleInputChange}
          className="rounded-lg border px-2 py-3"
        >
          <option value="">Select Specialization</option>
          {specialization.map((specialization, index) => (
            <option key={index} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
      )}
      <select
        name="status"
        value={filters.status}
        onChange={handleInputChange}
        className="rounded-lg border px-2 py-3"
      >
        <option value="">Select Status</option>
        {status.map((stat, index) => (
          <option key={index} value={stat}>
            {stat}
          </option>
        ))}
      </select>

      {/* Conditionally render Product Status dropdown */}
      {showProductStatus && (
        <select
          name="productStatus"
          value={filters.productStatus}
          onChange={handleInputChange}
          className="rounded-lg border px-2 py-3"
        >
          <option value="">Select Product Status</option>
          {productStatus.map((prodStatus, index) => (
            <option key={index} value={prodStatus}>
              {prodStatus}
            </option>
          ))}
        </select>
      )}

      <button
        onClick={handleSearch}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
      <button className="rounded-lg border bg-white px-2 py-2">
        <FiFileText className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default FilterData;
