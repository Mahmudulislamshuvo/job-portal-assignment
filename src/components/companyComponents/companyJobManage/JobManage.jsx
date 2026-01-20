import { useState } from "react";
import {
  useDeleteJobMutation,
  useGetCompanyJobQuery,
} from "../../../features/api/apiSlice";
import BulkActions from "./jobManageSubCompo/BulkActions";
import FilterAndSearch from "./jobManageSubCompo/FilterAndSearch";
import JobsTable from "./jobManageSubCompo/JobsTable";
import PageHeader from "./jobManageSubCompo/PageHeader";
import Pagination from "./jobManageSubCompo/Pagination";
import { ErrorToast, SuccessToast } from "../../../hooks/toastify";

const JobManage = () => {
  const [query, setQuery] = useState({
    page: 1, //number
    limit: 10, //number
    search: "",
    status: "", //Active, Closed, Archived
    sort: "",
  });
  const { data, isLoading, error } = useGetCompanyJobQuery(query);
  const [deleteJob, { isLoading: isJobDeleting }] = useDeleteJobMutation();
  const [deleteJobIds, setSeleteJobIds] = useState([]);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const handleDeleteJob = async (id = null) => {
    const targetIds = id ? [id] : deleteJobIds;

    if (targetIds.length === 0) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      const deletePromises = targetIds.map((jobId) =>
        deleteJob(jobId).unwrap(),
      );
      await Promise.all(deletePromises);

      SuccessToast("Job Deleted Successfully");

      // Clearing checked ids
      if (id) {
        setSeleteJobIds((prev) => prev.filter((itemId) => itemId !== id));
      } else {
        setSeleteJobIds([]);
      }
    } catch (error) {
      ErrorToast(
        error?.data?.message || "Failed to delete job(s). Please try again.",
      );
    }
  };

  return (
    <>
      {/* <!-- Main Content --> */}
      <main className="container mx-auto px-4 py-8">
        <PageHeader />
        <FilterAndSearch query={query} setQuery={setQuery} />
        <div className="card overflow-hidden">
          <JobsTable
            data={data}
            setSeleteJobIds={setSeleteJobIds}
            deleteJobIds={deleteJobIds}
            handleDeleteJob={handleDeleteJob}
          />
          {deleteJobIds.length > 0 && (
            <BulkActions
              handleDeleteJob={handleDeleteJob}
              isJobDeleting={isJobDeleting}
            />
          )}

          <Pagination />
        </div>
      </main>
    </>
  );
};

export default JobManage;
