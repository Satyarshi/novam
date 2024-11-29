import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ServiceTable from "@/components/Tables/vendor/ServiceTable";

const ServiceManagement: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Service Management" />
      <div className="flex flex-col gap-10">
        <ServiceTable />
      </div>
    </DefaultLayout>
  );
};

export default ServiceManagement;
