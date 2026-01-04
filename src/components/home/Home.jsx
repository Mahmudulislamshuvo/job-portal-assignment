import ErrorGettingMore from "./ErrorGettingMore";
import JobCardGrid from "./JobCardGrid";
import LoadMoreButton from "./LoadMoreButton";
import NotFound from "./NotFound";
import ResultHeader from "./ResultHeader";
import SearchFilter from "./SearchFilter";

const Home = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Hero Section --> */}
        <section className="mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Dream Job
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover thousands of job opportunities from top companies. Your
              next career move starts here.
            </p>
          </div>
        </section>

        {/* <!-- Search and Filters --> */}

        <SearchFilter />

        {/* <!-- Results Header --> */}
        <ResultHeader />

        {/* <!-- Job Cards Grid --> */}
        <JobCardGrid />

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
