"use client";
import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ConsolidateTable from "@/components/Tables/ConsolidateTable";
import ConsolidateFilter from "@/components/Payment/ConsolidateFilter";
import IndividualTable from "@/components/Tables/IndividualTable";

const Payment = () => {
  const [isConsolidated, setIsConsolidated] = useState(true);

  const handleToggle = (view: string) => {
    setIsConsolidated(view === "consolidated");
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Payment Analysis" />

      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => handleToggle("individual")}
          className={`rounded-lg px-4 py-2 ${
            !isConsolidated
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => handleToggle("consolidated")}
          className={`rounded-lg px-4 py-2 ${
            isConsolidated
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Consolidated
        </button>
      </div>

      {/* SwitchTransition & CSSTransition for fade effect */}
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isConsolidated ? "consolidated" : "individual"}
          timeout={300}
          classNames="fade"
        >
          <div className="flex flex-col gap-10">
            {isConsolidated ? (
              <>
                <ConsolidateFilter />
                <ConsolidateTable />
              </>
            ) : (
              <>
                <div className="mt-4">
                  <div className="">
                    <select
                      className="rounded-lg border px-4 py-3"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select User
                      </option>
                      <option value="1">Ram Lakhan Sharma (8328980020)</option>
                      <option value="2">Other User (1234567890)</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <ConsolidateFilter />
                <IndividualTable />
              </>
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

export default Payment;
