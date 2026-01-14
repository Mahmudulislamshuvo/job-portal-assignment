import {
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  Eye,
  MapPin,
  X,
} from "lucide-react";
import { getFormatMonthYear } from "../../../../utils/getFormatMonthYear";
import { Link } from "react-router-dom";
import { useDeleteMyJobApplicationMutation } from "../../../../features/api/apiSlice";

const ApplicationCard = ({ job }) => {
  const [deleteMyJobApplication, { isLoading }] =
    useDeleteMyJobApplicationMutation();

  const handleDeleteApplication = async (id) => {
    console.log(id);

    if (window.confirm("Are you sure you want to withdraw your application?")) {
      try {
        await deleteMyJobApplication(id).unwrap();
      } catch (error) {
        console.error("Failed to withdraw application: ", error);
      }
    }
  };

  return (
    <div className="card p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        <div className="shrink-0">
          <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
            {job?.job?.company?.logoUrl ? (
              <img
                src={job?.job?.company?.logoUrl}
                alt={job?.job?.company?.name || "Company Logo"}
              />
            ) : (
              <Building2 className="h-8 w-8 text-[hsl(var(--color-primary))]" />
            )}
          </div>
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">
                <span className="hover:text-[hsl(var(--color-primary))]">
                  {job?.job?.title || "Frontend Developer"}
                </span>
              </h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
                <a
                  href="company-profile.html"
                  className="hover:text-[hsl(var(--color-primary))]"
                >
                  {job?.job?.company?.name || "Tech Solutions Inc."}
                </a>
              </p>
            </div>

            {/* Status */}
            <span
              className={`${
                job?.status === "under_review"
                  ? "badge badge-warning"
                  : job?.status === "Shortlisted"
                  ? "badge badge-info"
                  : job?.status === "Interviewed"
                  ? "badge badge-purple"
                  : job?.status === "Hired"
                  ? "badge badge-success"
                  : job?.status === "Rejected"
                  ? "badge badge-danger"
                  : job?.status === "Withdrawn"
                  ? "badge badge-outline"
                  : ""
              }`}
            >
              {job?.status}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job?.job?.company?.location || "New York, USA"}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {job?.job?.type || "Full-time"}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              `${job?.job?.salaryMin} - ${job?.job?.salaryMax}`
            </span>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-[hsl(var(--color-muted-foreground))]">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {`Applied on ${getFormatMonthYear(job?.createdAt)}`}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                to={`/job-details/${job?.jobId}`}
                className="btn btn-outline text-sm h-9"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Job
              </Link>
              {job?.status === "New" && (
                <button
                  onClick={() => handleDeleteApplication(job?.id)}
                  className="btn btn-outline text-sm h-9 text-red-600 hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-2" />
                  {isLoading ? "Withdrawing..." : "Withdraw"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
