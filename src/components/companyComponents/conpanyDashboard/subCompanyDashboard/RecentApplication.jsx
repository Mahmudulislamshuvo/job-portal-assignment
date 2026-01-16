import { Check, Download, Eye, User } from "lucide-react";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";

const RecentApplication = ({ applicantsData }) => {
  if (!applicantsData?.length) return <p>No apllicants available yet</p>;

  console.log(applicantsData);

  return (
    <>
      {applicantsData.map((applicant) => (
        <div
          key={applicant.id}
          className="p-6 hover:bg-[hsl(var(--color-accent))] transition-colors"
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="h-12 w-12 rounded-full overflow-hidden bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
              {applicant.user?.profilePictureUrl ? (
                <img
                  src={applicant.user.profilePictureUrl}
                  alt={applicant.user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <User className="h-6 w-6 text-[hsl(var(--color-primary))]" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold mb-1">{applicant.user?.name}</h3>

                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                    Applied for{" "}
                    <span className="font-medium text-[hsl(var(--color-foreground))]">
                      {applicant.job?.title}
                    </span>
                  </p>
                </div>

                <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {getTimeFromNow(applicant.createdAt)}
                </span>
              </div>

              {/* Status badge */}
              <div className="mb-3">
                <span className="badge badge-secondary">
                  {applicant.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="btn btn-primary text-xs h-8">
                  <Check className="h-3 w-3 mr-1" />
                  Shortlist
                </button>

                <button className="btn btn-outline text-xs h-8">
                  <Eye className="h-3 w-3 mr-1" />
                  View Profile
                </button>

                <a
                  href={applicant.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-xs h-8"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentApplication;
