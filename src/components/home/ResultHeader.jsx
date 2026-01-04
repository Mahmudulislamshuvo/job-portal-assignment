const ResultHeader = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing 1,247 results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>

          <select
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 bg-white cursor-pointer"
            defaultValue="recent"
          >
            <option value="recent">Most Recent</option>
            <option value="salary_high">Salary (High to Low)</option>
            <option value="salary_low">Salary (Low to High)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ResultHeader;
