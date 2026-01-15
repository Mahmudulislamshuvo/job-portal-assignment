import { useState } from "react";
import ApplicationCard from "./subComponents/ApplicationCard";
import FiltersSidebar from "./subComponents/FiltersSidebar";
import LoadMoreButton from "./subComponents/LoadMoreButton";
import PageHeader from "./subComponents/PageHeader";
import SortAndFilter from "./subComponents/SortAndFilter";
import { useAppliedJobsQuery } from "../../../../features/api/apiSlice";
import AppliedJobsSkeliton from "../../../skelitons/AppliedJobsSkeliton";

const JOBS_PER_PAGE = 8;

const AppliedJobs = () => {
  const [query, setQuery] = useState({
    date: "",
    sort: "",
    status: "",
  });
  const [visibleJobs, setVisibleJobs] = useState(JOBS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + JOBS_PER_PAGE);
  };

  const { data: filteredData, error, isLoading } = useAppliedJobsQuery(query);
  const { data: allData } = useAppliedJobsQuery({
    date: "",
    sort: "",
    status: "",
  });

  const counts = {
    New: 0,
    Shortlisted: 0,
    Interviewed: 0,
    Rejected: 0,
    Hired: 0,
  };

  allData?.data?.forEach((job) => {
    if (Object.prototype.hasOwnProperty.call(counts, job.status)) {
      counts[job.status]++;
    }
  });

  if (isLoading) {
    return <AppliedJobsSkeliton />;
  }

  if (error) {
    return <div>Error loading applied jobs.</div>;
  }

  const jobsToDisplay = filteredData?.data?.slice(0, visibleJobs) || [];
  const hasMoreJobs =
    filteredData?.data && visibleJobs < filteredData.data.length;

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <PageHeader allData={allData} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <FiltersSidebar setQuery={setQuery} jobCounts={counts} />
          <div className="lg:col-span-3 space-y-4">
            <SortAndFilter query={query} setQuery={setQuery} />
            {jobsToDisplay.map((job) => (
              <ApplicationCard key={job.id} job={job} />
            ))}
            {hasMoreJobs && <LoadMoreButton onLoadMore={handleLoadMore} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default AppliedJobs;
