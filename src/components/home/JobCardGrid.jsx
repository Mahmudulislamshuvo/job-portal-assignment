import { BsFillBuildingsFill } from "react-icons/bs";
import { getTimeFromNow } from "../../utils/getTimeFromNow";
import JobCardSkeleton from "../skelitons/JobGridSkeliton";
import { Link } from "react-router-dom";

const JobCardGrid = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:gap-6">
        {/* Render 5 or 6 skeletons to fill the screen */}
        {[...Array(5)].map((_, index) => (
          <JobCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // 2. Handle Error State (Optional but recommended)
  if (error) {
    return (
      <div className="text-red-500 text-center">Something went wrong!</div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:gap-6">
        {data?.data?.map((job) => (
          <article
            key={job.id}
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* <!-- Company Logo --> */}
              <div className="shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  {job.company.logoUrl ? (
                    <img
                      src={job.company.logoUrl}
                      alt={`${job.company.name} Logo`}
                      className="h-12 w-12 object-contain"
                    />
                  ) : (
                    <BsFillBuildingsFill className="h-8 w-8 text-primary" />
                  )}
                </div>
              </div>

              {/* <!-- Job Details --> */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <a
                        href="job-seeker/job-details.html"
                        className="hover:underline"
                      >
                        {job.title}
                      </a>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <a
                        href="company-profile.html"
                        className="hover:text-primary font-medium"
                      >
                        {job.company.name}
                      </a>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <i data-lucide="map-pin" className="h-4 w-4"></i>
                        {job.company.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <i data-lucide="clock" className="h-4 w-4"></i>
                        {getTimeFromNow(job.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-secondary">{job.type}</span>
                  {job.skills?.map((skill, index) => (
                    <span key={index} className="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-primary">
                      {`$${job.salaryMin} - $${job.salaryMax}`}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <i data-lucide="users" className="h-4 w-4"></i>
                      {job.applicants} applicants
                    </span>
                  </div>
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default JobCardGrid;
