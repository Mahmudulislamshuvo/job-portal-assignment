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

  console.log("query", query);
  console.log("data", data);

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
        <JobCardGrid data={data} isLoading={isLoading} error={error} />

        {/* <!-- Load More / Pagination --> */}
        <LoadMoreButton />

        {/* <!-- Error State Example (Hidden by default, shown on error) --> */}
        <ErrorGettingMore />

        {/* <!-- Empty State Example (Hidden by default, shown when no results) --> */}
        <NotFound />
      </main>
    </>
  );
};

export default Home;
