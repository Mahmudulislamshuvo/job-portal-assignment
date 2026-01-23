import { useState } from "react";
import { useGetApplicanstQuery } from "../../../features/api/apiSlice";
import ApplicantCard from "./subApplicants/ApplicantCard";
import CompanyFilterSidebar from "./subApplicants/CompanyFilterSidebar";
import AllApplicantsSkeliton from "../../skelitons/AllApplicantsSkeliton";
import { ChevronRight, SearchX, Loader2 } from "lucide-react"; // Added Loader2 for spinner
import { Link } from "react-router-dom";

const AllApplicants = () => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    status: "",
    sort: "",
    search: "",
    experienceLevel: "",
  });

  // 1. Get isFetching to handle loading state during page change
  const { data, isLoading, error, isFetching } = useGetApplicanstQuery(query);

  const handleClearFilters = () => {
    setQuery((prev) => ({
      ...prev,
      status: "",
      search: "",
      experienceLevel: "",
      page: 1,
    }));
  };

  const handleLoadMore = () => {
    setQuery((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  if (isLoading) return <AllApplicantsSkeliton />;
  if (error) return <p className="text-red-500">Something went wrong...</p>;

  // 2. Destructure pagination data from your API response
  const applicantsList = data?.data || [];
  const totalPages = data?.totalPages || 1;
  const currentPage = data?.currentPage || 1;

  // 3. Logic: Is there a next page?
  const hasMoreData = currentPage < totalPages;

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* Header Section (Unchanged) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
            <Link
              to={"/company-dashboard"}
              className="hover:text-[hsl(var(--color-primary))]"
            >
              Dashboard
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[hsl(var(--color-foreground))]">
              Applicants
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Job Applicants</h1>
              <p className="text-[hsl(var(--color-muted-foreground))]">
                Review and manage applicants
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <CompanyFilterSidebar query={query} setQuery={setQuery} />

          <div className="lg:col-span-3">
            {applicantsList.length > 0 ? (
              <>
                <div className="space-y-4">
                  {applicantsList.map((applicant) => (
                    <ApplicantCard key={applicant.id} applicant={applicant} />
                  ))}
                </div>

                {/* 4. Dynamic Button Section */}
                <div className="mt-8 text-center pb-8">
                  <button
                    onClick={handleLoadMore}
                    disabled={!hasMoreData || isFetching} // Disable if no more data OR currently loading
                    className={`btn ${
                      hasMoreData
                        ? "btn-outline"
                        : "btn-disabled opacity-50 cursor-not-allowed bg-gray-100 border-gray-200 text-gray-400"
                    } min-w-50`}
                  >
                    {isFetching ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading...
                      </span>
                    ) : hasMoreData ? (
                      "Load Next Page"
                    ) : (
                      "No More Data Available"
                    )}
                  </button>

                  {/* Optional: Page Indicator */}
                  <p className="text-xs text-muted-foreground mt-2">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
              </>
            ) : (
              /* No Results Found UI (Unchanged) */
              <div className="card p-12 flex flex-col items-center justify-center text-center h-full min-h-100">
                <div className="bg-[hsl(var(--color-muted))] p-4 rounded-full mb-4">
                  <SearchX className="h-10 w-10 text-[hsl(var(--color-muted-foreground))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mb-2">
                  No applicants found
                </h3>
                <p className="text-[hsl(var(--color-muted-foreground))] max-w-sm mb-6">
                  We couldn't find any applicants matching your current
                  criteria. Try adjusting your filters or search for something
                  else.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllApplicants;
