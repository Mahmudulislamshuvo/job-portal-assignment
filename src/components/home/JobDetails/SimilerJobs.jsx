import { CgCode } from "react-icons/cg";
import { Link } from "react-router-dom";

const SimilerJobs = ({ data }) => {
  return (
    <>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
        <div className="space-y-4">
          {/* <!-- Similar Job 1 --> */}
          {data?.map((job) => (
            <article
              key={job.id}
              className="border-b border-[hsl(var(--color-border))] pb-4 last:border-0 last:pb-0"
            >
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                    {job.company.logoUrl ? (
                      <img
                        src={job.company.logoUrl}
                        alt={job.company.name}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <CgCode className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">
                    <a href="job-details.html" className="hover:underline">
                      {job.title}
                    </a>
                  </h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
                    {job.company.name} • {job.company.location} • {job.type}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[hsl(var(--color-primary))]">
                      {`$${job.salaryMin} - $${job.salaryMax} Yearly`}
                    </span>
                    <Link
                      to={`/job-details/${job.id}`}
                      className="text-sm text-[hsl(var(--color-primary))] hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default SimilerJobs;
