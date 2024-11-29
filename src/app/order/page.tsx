"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderTable from "@/components/Tables/OrderTable";
import FilterData from "@/components/FilterData";

interface Filters {
  fromDate: string;
  toDate: string;
  service: string;
  category: string;
  specialization: string;
  status: string;
  productStatus: string;
}
const OrderManagement: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    fromDate: "",
    toDate: "",
    service: "",
    status: "",
    productStatus: "",
    category: "",
    specialization: "",
  });
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Order Management" />

      <div className="flex flex-col gap-10">
        <FilterData
          filters={filters}
          setFilters={setFilters}
          showProductStatus={true}
          showCategory={true}
          showSpecialization={false}
          showService={false}
        />
        <OrderTable filters={filters} />
      </div>
    </DefaultLayout>
  );
};

export default OrderManagement;
