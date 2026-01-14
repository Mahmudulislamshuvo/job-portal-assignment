import { useAppliedJobsQuery } from "../../../features/api/apiSlice";
import AppliedJobsSkeliton from "../../skelitons/AppliedJobsSkeliton";
import ApplicationCard from "./subComponents/ApplicationCard";
import FiltersSidebar from "./subComponents/FiltersSidebar";
import LoadMoreButton from "./subComponents/LoadMoreButton";
import PageHeader from "./subComponents/PageHeader";
import SortAndFilter from "./subComponents/SortAndFilter";

const AppliedJobs = () => {
  const { data, error, isLoading } = useAppliedJobsQuery();
  console.log(data);

  if (isLoading) {
    return <AppliedJobsSkeliton />;
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <PageHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <FiltersSidebar />
          <div className="lg:col-span-3 space-y-4">
            <SortAndFilter />
            {data?.data?.map((job) => (
              <ApplicationCard key={job.id} job={job} />
            ))}
            <LoadMoreButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default AppliedJobs;
