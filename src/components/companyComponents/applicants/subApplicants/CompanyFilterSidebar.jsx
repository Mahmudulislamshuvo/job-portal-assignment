import React from "react";

const CompanyFilterSidebar = () => {
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Filters</h3>
            <button className="text-sm text-[hsl(var(--color-primary))] hover:underline">
              Reset
            </button>
          </div>

          {/* <!-- Status Filter --> */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Application Status</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">New Applications</span>
                <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                  (8)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Shortlisted</span>
                <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                  (8)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Interviewed</span>
                <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                  (5)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Rejected</span>
                <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                  (3)
                </span>
              </label>
            </div>
          </div>

          {/* <!-- Experience Filter --> */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Experience Level</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Entry Level (0-2 years)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Mid Level (3-5 years)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Senior (5+ years)</span>
              </label>
            </div>
          </div>

          {/* <!-- Date Filter --> */}
          <div>
            <h4 className="text-sm font-medium mb-3">Applied Date</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  checked
                  className="border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Last 24 hours</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  className="border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Last 7 days</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  className="border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">Last 30 days</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  className="border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">All time</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CompanyFilterSidebar;
