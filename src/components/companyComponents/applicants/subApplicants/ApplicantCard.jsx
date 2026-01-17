import {
  Briefcase,
  CalendarRange,
  Eye,
  FileText,
  Mail,
  UserCheck,
  XCircle,
} from "lucide-react";
import ApplicantsImage from "./ApplicantsImage";
import { getExperienceYear } from "../../../../utils/getExperienceYear";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";
import { useUpdateJobStatusMutation } from "../../../../features/api/apiSlice";
import { useState } from "react";
import LoadingSpinner from "../../../commonComponents/LoadingSpinner";

const ApplicantCard = ({ applicant }) => {
  const [upadateJobStatus, { isLoading }] = useUpdateJobStatusMutation();
  const [actionType, setActionType] = useState(null);

  const handleActionsApplicanStatus = async (jobId, status) => {
    if (applicant.status === status) return;
    setActionType(status);

    try {
      const response = await upadateJobStatus({
        jobId,
        data: { status },
      }).unwrap();
      if (response?.success === true) {
        console.log("Status updated", response);
      }
    } catch (error) {
      console.log("ApplicantCard", error);
    } finally {
      setActionType(null);
    }
  };

  // console.log(applicant);

  return (
    <>
      <div className="card p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <ApplicantsImage applicant={applicant} />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {applicant?.user?.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {applicant?.user?.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />{" "}
                    {getExperienceYear(applicant?.user?.experienceLevel)}{" "}
                    experience
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarRange className="h-3 w-3" />
                    {getTimeFromNow(applicant?.createdAt)}
                  </span>
                </div>
              </div>
              <span
                className={`${
                  applicant?.status === "under_review"
                    ? "badge badge-warning"
                    : applicant?.status === "Shortlisted"
                      ? "badge badge-info"
                      : applicant?.status === "Interviewed"
                        ? "badge badge-purple"
                        : applicant?.status === "Hired"
                          ? "badge badge-success"
                          : applicant?.status === "Rejected"
                            ? "badge badge-danger"
                            : applicant?.status === "Withdrawn"
                              ? "badge badge-outline"
                              : "badge badge-info"
                }`}
              >
                {applicant?.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge badge-secondary">JavaScript</span>
              <span className="badge badge-secondary">React</span>
              <span className="badge badge-secondary">Node.js</span>
              <span className="badge badge-secondary">TypeScript</span>
              <span className="badge badge-secondary">AWS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="btn btn-outline text-sm h-9">
                {/* Got User ID userId here */}
                <Eye className="h-3 w-3 mr-2" />
                View Profile
              </a>
              <a
                href={applicant?.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm h-9"
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </a>

              <button
                onClick={() =>
                  handleActionsApplicanStatus(applicant.id, "Shortlisted")
                }
                disabled={isLoading}
                className="btn btn-primary text-sm h-9"
              >
                <UserCheck className="h-3 w-3 mr-2" />
                {isLoading && actionType === "Shortlisted" ? (
                  <LoadingSpinner />
                ) : (
                  "Shortlist"
                )}
              </button>
              <button
                onClick={() =>
                  handleActionsApplicanStatus(applicant.id, "Rejected")
                }
                disabled={isLoading}
                className="btn btn-outline text-sm h-9 text-red-600 hover:text-red-600"
              >
                <XCircle className="h-3 w-3 mr-2" />
                {isLoading && actionType === "Rejected" ? (
                  <LoadingSpinner />
                ) : (
                  "Reject"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
