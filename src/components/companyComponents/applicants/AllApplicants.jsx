import { useState } from "react";
import { useGetApplicanstQuery } from "../../../features/api/apiSlice";
import ApplicantCard from "./subApplicants/ApplicantCard";
import CompanyFilterSidebar from "./subApplicants/CompanyFilterSidebar";

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

  const { data: allApplicantsData, isLoading: isallApplicantsDataLoading } =
    useGetApplicanstQuery();

  if (isLoading) return <p>Loading......</p>;

  if (error) return <p>Something Error......</p>;

  // console.log(data);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Page Header --> */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
            <a
              href="company-dashboard.html"
              className="hover:text-[hsl(var(--color-primary))]"
            >
              Dashboard
            </a>
            <i data-lucide="chevron-right" className="h-4 w-4"></i>
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
          {/* <!-- Filters Sidebar --> */}
          <CompanyFilterSidebar
            query={query}
            setQuery={setQuery}
            allApplicantsData={allApplicantsData}
          />

          {/* <!-- Applicants List --> */}
          <div className="lg:col-span-3">
            {/* <!-- Applicant Cards --> */}
            <div className="space-y-4">
              {/* <!-- Applicant 1 --> */}
              {data?.data?.map((applicant) => (
                <ApplicantCard key={applicant.id} applicant={applicant} />
              ))}
            </div>

            {/* <!-- Load More --> */}
            <div className="mt-6 text-center">
              <button className="btn btn-outline">
                <i data-lucide="loader" className="h-4 w-4 mr-2"></i>
                Load More Applicants
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AllApplicants;
