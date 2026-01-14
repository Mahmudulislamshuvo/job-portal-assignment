import { Building, Calculator, DollarSign, MapPin } from "lucide-react";
import { useState } from "react";
import { useAppliedJobsQuery } from "../../features/api/apiSlice";

const RecentAooliedJobs = () => {
  const [queries, setQueries] = useState({
    status: "",
    date: "",
    sort: "",
  });

  const { data, isLoading, error } = useAppliedJobsQuery(queries);

  console.log(data);

  return (
    <>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Applications</h2>
          <a
            href="#"
            className="text-sm text-[hsl(var(--color-primary))] hover:underline"
          >
            View All
          </a>
        </div>
        <div className="space-y-4">
          {/* <!-- Application 1 --> */}
          <div className="border border-[hsl(var(--color-border))] rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <Building className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <a href="job-details.html" className="hover:underline">
                        Senior Full Stack Developer
                      </a>
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      TechCorp Solutions
                    </p>
                  </div>
                  <span className="badge badge-success">Under Review</span>

                  {/* <span class="badge badge-success">Under Review</span>

                  <span class="badge badge-info">Interview Scheduled</span>

                  <span class="badge badge-warning">Pending</span> */}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[hsl(var(--color-muted-foreground))] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calculator className="h-3 w-3" />
                    Applied on Nov 28, 2025
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    $120k - $180k
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="job-details.html"
                    className="btn btn-outline text-xs h-8"
                  >
                    View Job
                  </a>
                  <button className="btn btn-ghost text-xs h-8">
                    Withdraw Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentAooliedJobs;
