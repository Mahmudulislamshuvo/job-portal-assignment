import { useState } from "react";
import { useGetCompanyJobQuery } from "../../../features/api/apiSlice";
import BulkActions from "./jobManageSubCompo/BulkActions";
import FilterAndSearch from "./jobManageSubCompo/FilterAndSearch";
import JobsTable from "./jobManageSubCompo/JobsTable";
import PageHeader from "./jobManageSubCompo/PageHeader";
import Pagination from "./jobManageSubCompo/Pagination";

const JobManage = () => {
  const [query, setQuery] = useState({
    page: 1, //number
    limit: 10, //number
    search: "",
    status: "", //Active, Closed, Archived
    sort: "",
  });
  const { data, isLoading, error } = useGetCompanyJobQuery(query);

  console.log(data);

  return (
    <>
      {/* <!-- Main Content --> */}
      <main className="container mx-auto px-4 py-8">
        <PageHeader />
        <FilterAndSearch />
        <div className="card overflow-hidden">
          <JobsTable data={data} />
          <BulkActions />
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default JobManage;
