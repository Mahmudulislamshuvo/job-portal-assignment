import { useState } from "react";
import { useGetApplicanstQuery } from "../../../features/api/apiSlice";
import ApplicantCard from "./subApplicants/ApplicantCard";
import CompanyFilterSidebar from "./subApplicants/CompanyFilterSidebar";
import AllApplicantsSkeliton from "../../skelitons/AllApplicantsSkeliton";
import { ChevronRight, SearchX } from "lucide-react"; // Imported Lucide icons
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

  const { data, isLoading, error } = useGetApplicanstQuery(query);

  const handleClearFilters = () => {
    setQuery((prev) => ({
      ...prev,
      status: "",
      search: "",
      experienceLevel: "",
      page: 1,
    }));
  };

  if (isLoading) return <AllApplicantsSkeliton />;

  if (error) return <p className="text-red-500">Something went wrong...</p>;

  const hasApplicants = data?.data?.length > 0;

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* */}
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
          {/* */}
          <CompanyFilterSidebar query={query} setQuery={setQuery} />

          {/* */}
          <div className="lg:col-span-3">
            {hasApplicants ? (
              <>
                {/* */}
                <div className="space-y-4">
                  {data.data.map((applicant) => (
                    <ApplicantCard key={applicant.id} applicant={applicant} />
                  ))}
                </div>

                {/* */}
                <div className="mt-6 text-center">
                  <button className="btn btn-outline">
                    Load More Applicants
                  </button>
                </div>
              </>
            ) : (
              /* */
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
