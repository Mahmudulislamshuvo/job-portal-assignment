const JobCardGrid = () => {
  return (
    <>
      <div className="grid gap-4 md:gap-6">
        {/* <!-- Job Card 1 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            {/* <!-- Company Logo --> */}
            <div className="shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <i
                  data-lucide="building-2"
                  className="h-8 w-8 text-primary"
                ></i>
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
                      Senior Full Stack Developer
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      TechCorp Solutions
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="map-pin" className="h-4 w-4"></i>
                      San Francisco, CA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="clock" className="h-4 w-4"></i>
                      Posted 2 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                We're looking for an experienced Full Stack Developer to join
                our dynamic team. You'll be working on cutting-edge web
                applications using React, Node.js, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">TypeScript</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $120k - $180k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <i data-lucide="users" className="h-4 w-4"></i>
                    47 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default JobCardGrid;
