import React from "react";
import { MapPin, Clock, Users, Bookmark, ArrowRight } from "lucide-react";

const OpenPositions = () => {
  return (
    <>
      <div className="card p-6" id="jobs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Open Positions</h2>
          <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
            15 jobs available
          </span>
        </div>
        <div className="space-y-4">
          {/* */}
          <article className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  <a href="job-details.html" className="hover:underline">
                    Senior Full Stack Developer
                  </a>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted 2 days ago
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    47 applicants
                  </span>
                </div>
              </div>
              <button className="btn-ghost p-2 shrink-0" title="Save job">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3">
              We're looking for an experienced Full Stack Developer to join our
              dynamic team. You'll be working on cutting-edge web applications
              using React, Node.js, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-secondary">Full-time</span>
              <span className="badge badge-outline">Remote</span>
              <span className="badge badge-outline">React</span>
              <span className="badge badge-outline">Node.js</span>
              <span className="badge badge-outline">TypeScript</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--color-border))]">
              <span className="text-sm font-semibold text-[hsl(var(--color-primary))]">
                $120k - $180k
              </span>
              <div className="flex gap-2">
                <a href="job-details.html" className="btn btn-outline text-sm">
                  View Details
                </a>
                <button className="btn btn-primary text-sm">Apply Now</button>
              </div>
            </div>
          </article>

          {/* */}
          <article className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  <a href="job-details.html" className="hover:underline">
                    DevOps Engineer
                  </a>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Austin, TX
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted 1 week ago
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    61 applicants
                  </span>
                </div>
              </div>
              <button className="btn-ghost p-2 shrink-0" title="Save job">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3">
              Build and maintain our cloud infrastructure using AWS, Kubernetes,
              and Terraform. Help us scale our platform to serve millions of
              users worldwide.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-secondary">Full-time</span>
              <span className="badge badge-outline">Remote</span>
              <span className="badge badge-outline">AWS</span>
              <span className="badge badge-outline">Kubernetes</span>
              <span className="badge badge-outline">Docker</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--color-border))]">
              <span className="text-sm font-semibold text-[hsl(var(--color-primary))]">
                $130k - $170k
              </span>
              <div className="flex gap-2">
                <a href="job-details.html" className="btn btn-outline text-sm">
                  View Details
                </a>
                <button className="btn btn-primary text-sm">Apply Now</button>
              </div>
            </div>
          </article>

          {/* */}
          <article className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  <a href="job-details.html" className="hover:underline">
                    Product Manager
                  </a>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted 3 days ago
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    38 applicants
                  </span>
                </div>
              </div>
              <button className="btn-ghost p-2 shrink-0" title="Save job">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3">
              Lead product strategy and execution for our enterprise platform.
              Work with engineering, design, and stakeholders to deliver
              exceptional products.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-secondary">Full-time</span>
              <span className="badge badge-outline">Hybrid</span>
              <span className="badge badge-outline">Product Strategy</span>
              <span className="badge badge-outline">Agile</span>
              <span className="badge badge-outline">Leadership</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--color-border))]">
              <span className="text-sm font-semibold text-[hsl(var(--color-primary))]">
                $140k - $190k
              </span>
              <div className="flex gap-2">
                <a href="job-details.html" className="btn btn-outline text-sm">
                  View Details
                </a>
                <button className="btn btn-primary text-sm">Apply Now</button>
              </div>
            </div>
          </article>

          {/* */}
          <article className="border border-[hsl(var(--color-border))] rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  <a href="job-details.html" className="hover:underline">
                    UI/UX Designer
                  </a>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    New York, NY
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted 5 days ago
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    29 applicants
                  </span>
                </div>
              </div>
              <button className="btn-ghost p-2 shrink-0" title="Save job">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-3">
              Design intuitive and beautiful user experiences for our suite of
              products. Experience with Figma and design systems required.
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-secondary">Full-time</span>
              <span className="badge badge-outline">Remote</span>
              <span className="badge badge-outline">Figma</span>
              <span className="badge badge-outline">Design Systems</span>
              <span className="badge badge-outline">Prototyping</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--color-border))]">
              <span className="text-sm font-semibold text-[hsl(var(--color-primary))]">
                $90k - $140k
              </span>
              <div className="flex gap-2">
                <a href="job-details.html" className="btn btn-outline text-sm">
                  View Details
                </a>
                <button className="btn btn-primary text-sm">Apply Now</button>
              </div>
            </div>
          </article>
        </div>

        {/* */}
        <div className="mt-6 text-center">
          <a href="../index.html" className="btn btn-outline">
            View All Open Positions
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default OpenPositions;
