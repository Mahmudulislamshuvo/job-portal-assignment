import { Building, Calendar, DollarSign, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // লিংকের জন্য
import {
  useAppliedJobsQuery,
  useDeleteMyJobApplicationMutation,
} from "../../features/api/apiSlice";
import { getFormatMonthYear } from "../../utils/getFormatMonthYear";
import { getFormatSalary } from "../../utils/getFormatSalary";

const RecentApliedJobs = () => {
  const [queries] = useState({
    status: "",
    date: "",
    sort: "Newest First",
  });
  const [deleteApplication, { isLoading: isDeleting }] =
    useDeleteMyJobApplicationMutation();
  const { data, isLoading } = useAppliedJobsQuery(queries);

  // show 3 jobs only
  const recentApplications = data?.data?.slice(0, 3) || [];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "New":
        return "badge-info";
      case "Shortlisted":
        return "badge-warning";
      case "Interviewed":
        return "badge-primary";
      case "Hired":
        return "badge-success";
      case "Rejected":
        return "badge-destructive";
      default:
        return "badge-secondary";
    }
  };

  if (isLoading) return <div className="card p-6">Loading...</div>;

  const handleWithdrewApplication = async (applicationId) => {
    const response = await deleteApplication(applicationId);
    if (response?.data?.success === true) {
      console.log("Application withdrawn successfully.");
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Applications</h2>
        <Link
          to="/applied-jobs"
          className="text-sm text-[hsl(var(--color-primary))] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {recentApplications.length > 0 ? (
          recentApplications.map((app) => (
            <div
              key={app.id}
              className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Company Logo / Icon */}
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center overflow-hidden">
                    {app.job.company.logoUrl ? (
                      <img
                        src={app.job.company.logoUrl}
                        alt={app.job.company.name}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <Building className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold mb-1">
                        <Link
                          to={`/jobs/${app.job.id}`}
                          className="hover:underline"
                        >
                          {app.job.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {app.job.company.name}
                      </p>
                    </div>
                    {/* Status Badge */}
                    <span
                      className={`badge ${getStatusBadgeClass(app.status)}`}
                    >
                      {app.status}
                    </span>
                  </div>

                  {/* Metadata: Location, Date, Salary */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {app.job.workMode === "Remote"
                        ? "Remote"
                        : app.job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Applied on{" "}
                      {getFormatMonthYear(app.appliedAt)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {getFormatSalary(app.job.salaryMin, app.job.salaryMax)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/job-details/${app.job.id}`}
                      className="btn btn-outline text-xs h-8"
                    >
                      View Job
                    </Link>
                    {app.status === "New" && (
                      <button
                        onClick={() => handleWithdrewApplication(app.id)}
                        className="btn btn-ghost text-xs h-8"
                      >
                        {isDeleting ? "Withdrawing..." : "Withdraw Application"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-center py-4 text-muted-foreground">
            No applications found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentApliedJobs;
