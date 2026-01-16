import { MapPin, Clock, Users, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetOpenJobsQuery } from "../../../../features/api/apiSlice";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";
import { getFormatSalary } from "../../../../utils/getFormatSalary";

const OpenPositions = () => {
  const { data, isLoading, error } = useGetOpenJobsQuery();

  const jobs = data?.data?.slice(0, 5) || [];

  if (isLoading) return <div className="text-center p-4">Loading jobs...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-500">Something went wrong!</div>
    );

  return (
    <>
      <div className="card p-6" id="jobs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Open Positions</h2>
          <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"} available
          </span>
        </div>

        <div className="space-y-4">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <article
                key={job.id}
                className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link
                        to={`/job-details/${job.id}`}
                        className="hover:underline"
                      >
                        {job.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted {getTimeFromNow(job.createdAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.applicants} applicants
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost p-2 shrink-0" title="Save job">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3 line-clamp-2">
                  {job.description}
                </p>

                {/* Tags Section: Type, WorkMode, and Skills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">{job.type}</span>
                  <span className="badge badge-outline">{job.workMode}</span>
                  {/* স্কিলগুলো লুপ করা হচ্ছে */}
                  {job.skills?.slice(0, 3).map((skill, index) => (
                    <span key={index} className="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--color-border))]">
                  <span className="text-sm font-semibold text-[hsl(var(--color-primary))]">
                    ${getFormatSalary(job.salaryMin, job.salaryMax)}/{" "}
                    {job.salaryPeriod === "Yearly" ? "yr" : "mo"}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`/job-details/${job.id}`}
                      className="btn btn-outline text-sm"
                    >
                      View Details
                    </Link>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              No open positions found.
            </div>
          )}
        </div>

        {/* View All Jobs Link */}
        <div className="mt-6 text-center">
          <Link to="/all-jobs" className="btn btn-outline">
            View All Open Positions
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OpenPositions;
