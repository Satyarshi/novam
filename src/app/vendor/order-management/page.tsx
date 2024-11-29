"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderTable from "@/components/Tables/vendor/OrderTable";
import FilterData from "@/components/FilterData";

interface Filters {
  fromDate: string;
  toDate: string;
  service: string;
  specialization: string;
  category: string;
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
      {/* SwitchTransition & CSSTransition for fade effect */}

      <div className="flex flex-col gap-10">
        <FilterData
          filters={filters}
          setFilters={setFilters}
          showProductStatus={false}
          showCategory={false}
          showSpecialization={false}
          showService={true}
        />
        <OrderTable filters={filters} />
      </div>
    </DefaultLayout>
  );
};

export default OrderManagement;
