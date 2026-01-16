import {
  useGetApplicanstQuery,
  useGetCompanyJobQuery,
  useGetDashboardStateQuery,
  useGetLoggedInCompanyInfoQuery,
} from "../../../features/api/apiSlice";
import CompanyDashboardHeafer from "./subCompanyDashboard/CompanyDashboardHeafer";
import CompanyQuickActions from "./subCompanyDashboard/CompanyQuickActions";
import DashboardStatCard from "./subCompanyDashboard/CompanyState";

import JobItems from "./subCompanyDashboard/JobItems";
import RecentApplication from "./subCompanyDashboard/RecentApplication";
import TipsCard from "./subCompanyDashboard/TipsCard";

const CompanyDashboard = () => {
  const {
    data: stateData,
    isLoading: isStateLoading,
    // error: stateError,
  } = useGetDashboardStateQuery();

  const { data: openJobsData, isLoading: IsJobsDataLoading } =
    useGetCompanyJobQuery();

  const { data: applicantsData, isLoading: isAplicantsLoading } =
    useGetApplicanstQuery();

  const { data: loggedInCompanyData, isLoading: isLoadingLoggedCompanyData } =
    useGetLoggedInCompanyInfoQuery();

  if (
    isStateLoading ||
    IsJobsDataLoading ||
    isAplicantsLoading ||
    isLoadingLoggedCompanyData ||
    loggedInCompanyData
  ) {
    <p>Loading......</p>;
  }

  const recentApplicantsData = applicantsData?.data?.slice(0, 3);

  console.log(recentApplicantsData);

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Welcome Section --> */}
        <CompanyDashboardHeafer />

        {/* <!-- Stats Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardStatCard
            type="activeJobs"
            value={stateData?.data?.activeJobs}
          />

          <DashboardStatCard
            type="totalApplicants"
            value={stateData?.data?.totalApplicants}
          />

          <DashboardStatCard
            type="pendingReviews"
            value={stateData?.data?.pendingReviews}
          />

          <DashboardStatCard
            type="shortLists"
            value={stateData?.data?.shortLists}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Main Content Column --> */}
          <div className="lg:col-span-2 space-y-6">
            {/* <!-- Recent Jobs --> */}
            <div className="card">
              <div className="p-6 border-b border-[hsl(var(--color-border))]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Job Posts</h2>
                  <a
                    href="#"
                    className="text-sm text-[hsl(var(--color-primary))] hover:underline"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="divide-y divide-[hsl(var(--color-border))]">
                {/* <!-- Job Item 1 --> */}
                {openJobsData?.data?.map((job) => (
                  <JobItems key={job.id} jobData={job} />
                ))}
              </div>
            </div>

            {/* <!-- Recent Applicants --> */}
            <div className="card">
              <div className="p-6 border-b border-[hsl(var(--color-border))]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Applicants</h2>
                  <a
                    href="#"
                    className="text-sm text-[hsl(var(--color-primary))] hover:underline"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="divide-y divide-[hsl(var(--color-border))]">
                {/* <!-- Applicant 1 --> */}
                <RecentApplication applicantsData={recentApplicantsData} />
              </div>
            </div>
          </div>

          {/* <!-- Sidebar Column --> */}
          <div className="lg:col-span-1 space-y-6">
            {/* <!-- Quick Actions --> */}
            <CompanyQuickActions />

            {/* <!-- Tips Card --> */}
            <TipsCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyDashboard;
