import {
  useAppliedJobsQuery,
  useGetJobRecomendationQuery,
} from "../../../features/api/apiSlice";
import UserDashboardSkeleton from "../../skelitons/UserDashboardSkeleton";
import DashboardTile from "./DashboardTile";
import RecentApliedJobs from "./RecentApliedJobs";
import RecomandedJobs from "./RecomandedJobs";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  const { data: appliedJobsData, isLoading: isAppliedJobsLoading } =
    useAppliedJobsQuery({
      status: "",
      date: "",
      sort: "Newest First",
    });

  const { data: recomandedJobsData, isLoading: isRecomandedJobsLoading } =
    useGetJobRecomendationQuery();

  const isLoading = isAppliedJobsLoading || isRecomandedJobsLoading;

  if (isLoading) {
    return <UserDashboardSkeleton />;
  }
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Welcome Section --> */}
        <DashboardTile />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Main Content Column --> */}
          <div className="lg:col-span-2 space-y-6">
            {/* <!-- Recent Applications --> */}
            <RecentApliedJobs appliedJobs={appliedJobsData?.data || []} />

            {/* <!-- Recommended Jobs --> */}
            <RecomandedJobs recomandedJobs={recomandedJobsData?.data || []} />
          </div>

          {/* <!-- Sidebar Column --> */}
          <Sidebar />
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
