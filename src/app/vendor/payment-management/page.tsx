import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PaymentTable from "@/components/Tables/vendor/PaymentTable";

const ServiceManagement: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Service Management" />
      <div className="flex flex-col gap-10">
        <PaymentTable />
      </div>
    </DefaultLayout>
  );
};

export default ServiceManagement;
