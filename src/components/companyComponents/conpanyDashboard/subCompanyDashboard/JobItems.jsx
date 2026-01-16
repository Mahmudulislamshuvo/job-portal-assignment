import { Briefcase, Clock, Edit, Eye, MapPin } from "lucide-react";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";

const JobItems = ({ jobData }) => {
  console.log(jobData);

  return (
    <>
      <div className="p-6 hover:bg-[hsl(var(--color-accent))] transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold mb-1">
              <a href="#" className="hover:text-[hsl(var(--color-primary))]">
                {jobData?.title}
              </a>
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[hsl(var(--color-muted-foreground))]">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {jobData?.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                {jobData?.type}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {getTimeFromNow(jobData?.createdAt)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-[hsl(var(--color-muted-foreground))]">
              <span className="font-semibold text-[hsl(var(--color-foreground))] pr-1">
                {jobData?.applicants}
              </span>
              applicants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-outline text-xs h-8">
              <Eye className="h-3 w-3 mr-1" />
              View
            </button>
            <button className="btn btn-outline text-xs h-8">
              <Edit className="h-3 w-3 mr-1" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItems;
