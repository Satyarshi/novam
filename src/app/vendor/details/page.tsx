"use client"
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MyOrder from "@/components/Tables/user/MyOrder";
import { useSearchParams } from "next/navigation";  // Updated import

export default function Home() {
  const searchParams = useSearchParams();  // Use useSearchParams instead of useRouter

  // Access query parameters
  const orderDateTime = searchParams.get("orderDateTime");
  const status = searchParams.get("status");
  const userId = searchParams.get("userId");
  const orderId = searchParams.get("orderId");
  const assignedLawyer = searchParams.get("assignedLawyer");
  const serviceRequested = searchParams.get("serviceRequested");
  const showDocument = searchParams.get("showDocument");

  return (
    <>
      <DefaultLayout>
        <MyOrder
          orderDateTime={orderDateTime || ""}
          status={status || ""}
          userId={userId || ""}
          orderId={orderId || ""}
          assignedLawyer={assignedLawyer || ""}
          serviceRequested={serviceRequested || ""}
          showDocument={showDocument === "true"}
        />
      </DefaultLayout>
    </>
  );
}
