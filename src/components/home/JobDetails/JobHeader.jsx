import { BiUnlink } from "react-icons/bi";
import { FiMapPin, FiClock, FiBookmark } from "react-icons/fi";
import { getTimeFromNow } from "../../../utils/getTimeFromNow";

const JobHeader = ({ job }) => {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="h-20 w-20 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center overflow-hidden">
            {job.company?.logoUrl ? (
              <img
                src={job.company.logoUrl}
                alt={job.company.name}
                className="h-full w-full object-contain"
              />
            ) : (
              <BiUnlink className="h-10 w-10 text-[hsl(var(--color-primary))]" />
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-[hsl(var(--color-muted-foreground))]">
                <span className="text-lg font-medium hover:text-[hsl(var(--color-primary))] cursor-pointer">
                  {job.company?.name}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiClock className="h-4 w-4" />
                  {getTimeFromNow(job.createdAt)}
                </span>
              </div>
            </div>
            <button className="btn-ghost p-2 shrink-0" title="Save job">
              <FiBookmark className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-secondary">{job.type}</span>
            <span className="badge badge-outline">{job.workMode}</span>
            <span className="badge badge-outline">
              {job.experienceLevel} Level
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
