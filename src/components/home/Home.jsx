import { useState } from "react";
import { useGetAllJobsQuery } from "../../features/api/apiSlice";
import ErrorGettingMore from "./ErrorGettingMore";
import JobCardGrid from "./JobCardGrid";
import LoadMoreButton from "./LoadMoreButton";
import NotFound from "./NotFound";
import ResultHeader from "./ResultHeader";
import SearchFilter from "./SearchFilter";
import TitleAndDes from "./TitleAndDes";

const Home = () => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    search: "",
    type: "",
    experienceLevel: "",
    minSalary: "",
    maxSalary: "",
    skills: "",
    sort: "",
  });

  const { data, error, isLoading } = useGetAllJobsQuery(query);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Hero Section --> */}
        <TitleAndDes />

        {/* <!-- Search and Filters --> */}
        <SearchFilter query={query} setQuery={setQuery} />

        {/* <!-- Results Header --> */}
        <ResultHeader jobsData={data} />

        {/* <!-- Job Cards Grid --> */}
        {error ? (
          <ErrorGettingMore />
        ) : !isLoading && data?.data?.length === 0 ? (
          <NotFound />
        ) : (
          <JobCardGrid data={data} isLoading={isLoading} />
        )}

        {/* Load more button */}
        <LoadMoreButton query={query} setQuery={setQuery} />
      </main>
    </>
  );
};

export default Home;
