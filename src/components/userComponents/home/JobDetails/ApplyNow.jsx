import { FiSend } from "react-icons/fi";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";

const ApplyNow = ({ job, handleApply }) => {
  return (
    <>
      <div className="card p-6 lg:sticky lg:top-24">
        <div className="space-y-4">
          <div className="text-center pb-4 border-b border-[hsl(var(--color-border))]">
            <p className="text-2xl font-bold text-[hsl(var(--color-primary))] mb-1">
              ${job?.salaryMin} - ${job?.salaryMax}
            </p>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Per {job?.salaryPeriod}
            </p>
          </div>

          <button
            onClick={handleApply}
            className="btn btn-primary w-full text-base flex items-center justify-center"
          >
            <FiSend className="h-4 w-4 mr-2" />
            Apply Now
          </button>

          <div className="pt-4 border-t border-[hsl(var(--color-border))] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[hsl(var(--color-muted-foreground))]">
                Applicants
              </span>
              <span className="font-medium">{job?.applicants}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[hsl(var(--color-muted-foreground))]">
                Posted
              </span>
              <span className="font-medium">
                {getTimeFromNow(job?.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
