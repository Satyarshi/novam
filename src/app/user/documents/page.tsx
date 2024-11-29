import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DocumentTable from "@/components/Tables/user/DocumentTable";
const Documents = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Documents" />

      <div className="flex flex-col gap-10">
        <DocumentTable />
      </div>
    </DefaultLayout>
  );
};

export default Documents;
