"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BillingTable from "@/components/Tables/user/BillingTable";
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

const Billing: React.FC = () => {
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
      <Breadcrumb pageName="Billing & Invoice" />

      <div className="flex flex-col gap-10">
        <FilterData filters={filters} setFilters={setFilters} showProductStatus={true} showCategory={false} showSpecialization={false} showService={true}/>
        <BillingTable filters={filters} />
      </div>
    </DefaultLayout>
  );
};

export default Billing;
