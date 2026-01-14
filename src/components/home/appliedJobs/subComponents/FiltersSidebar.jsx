const FiltersSidebar = () => {
  return (
    <aside className="lg:col-span-1">
      <div className="card p-6 sticky top-20">
        <h2 className="font-semibold mb-4">Filters</h2>

        {/* <!-- Status Filter --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Application Status</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">All</span>
              <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                12
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Under Review</span>
              <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                5
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Shortlisted</span>
              <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                3
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Rejected</span>
              <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                2
              </span>
            </label>
          </div>
        </div>

        {/* <!-- Date Filter --> */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Application Date</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">All Time</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 7 Days</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 30 Days</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 3 Months</span>
            </label>
          </div>
        </div>

        <button className="btn btn-outline w-full">
          <i data-lucide="rotate-ccw" className="h-4 w-4 mr-2"></i>
          Reset Filters
        </button>
      </div>
    </aside>
  );
};
export default FiltersSidebar;
