const RecomandedJobs = () => {
  return (
    <>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <a
            href="../index.html"
            className="text-sm text-[hsl(var(--color-primary))] hover:underline"
          >
            Browse All Jobs
          </a>
        </div>
        <div className="space-y-4">
          {/* <!-- Recommended Job 1 --> */}
          <article className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <i
                    data-lucide="cpu"
                    className="h-6 w-6 text-[hsl(var(--color-primary))]"
                  ></i>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <a href="job-details.html" className="hover:underline">
                        Full Stack JavaScript Developer
                      </a>
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      WebTech Industries
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3">
                  Join our team to build scalable web applications using modern
                  JavaScript frameworks.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Remote</span>
                  <span className="badge badge-outline">React</span>
                  <span className="badge badge-outline">Node.js</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[hsl(var(--color-muted-foreground))]">
                    <span className="flex items-center gap-1">
                      <i data-lucide="map-pin" className="h-3 w-3"></i>
                      Remote
                    </span>
                    <span className="font-semibold text-[hsl(var(--color-primary))]">
                      $115k - $165k
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="job-details.html"
                      className="btn btn-outline text-xs h-8"
                    >
                      View Details
                    </a>
                    <button className="btn btn-primary text-xs h-8">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default RecomandedJobs;
