import BulkActions from "./jobManageSubCompo/BulkActions";
import FilterAndSearch from "./jobManageSubCompo/FilterAndSearch";
import JobsTable from "./jobManageSubCompo/JobsTable";
import PageHeader from "./jobManageSubCompo/PageHeader";
import Pagination from "./jobManageSubCompo/Pagination";

const JobManage = () => {
  return (
    <>
      {/* <!-- Main Content --> */}
      <main className="container mx-auto px-4 py-8">
        <PageHeader />
        <FilterAndSearch />
        <div className="card overflow-hidden">
          <JobsTable />
          <BulkActions />
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default JobManage;