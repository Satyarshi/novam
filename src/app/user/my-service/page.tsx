"use client";
import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MyServiceTable from "@/components/Tables/user/MyserviceTable";
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
const MyService: React.FC = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    fromDate: "",
    toDate: "",
    service: "",
    status: "",
    productStatus: "",
    category: "",
    specialization: "",
  });


  const handleToggle = (view: string) => {
    setIsCurrent(view === "current-orders");
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Services" />

      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => handleToggle("current-orders")}
          className={`rounded-lg px-4 py-2 ${
            isCurrent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Current Orders
        </button>
        <button
          onClick={() => handleToggle("past-orders")}
          className={`rounded-lg px-4 py-2 ${
            !isCurrent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          Past Orders
        </button>
      </div>

      {/* SwitchTransition & CSSTransition for fade effect */}
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isCurrent ? "current-orders" : "past-orders"}
          timeout={300}
          classNames="fade"
        >
          <div className="flex flex-col gap-10">
          <FilterData filters={filters} setFilters={setFilters} showProductStatus={false} showCategory={false} showSpecialization={false} showService={true}/>
            {isCurrent ? (
              <>
                <MyServiceTable filters={filters}/>
              </>
            ) : (
              <></>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>

      {/* CSS for fade transition */}
      <style jsx>{`
        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default MyService;
