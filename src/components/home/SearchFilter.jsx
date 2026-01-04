const SearchFilter = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
        {/* Label */}
        <span className="text-sm font-medium text-slate-500 mr-2">
          Filters:
        </span>

        {/* 1. Job Type Filter */}
        <select
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Job Type
          </option>
          <option value="all">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>

        {/* 2. Experience Level Filter */}
        <select
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Experience Level
          </option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
          <option value="lead">Lead/Principal</option>
        </select>

        {/* 3. Salary Range Filter */}
        <select
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Salary Range
          </option>
          <option value="0-50k">$0 - $50k</option>
          <option value="50k-100k">$50k - $100k</option>
          <option value="100k-150k">$100k - $150k</option>
          <option value="150k+">$150k+</option>
        </select>

        {/* 4. Skills Filter */}
        <select
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Skills
          </option>
          <option value="react">React</option>
          <option value="node">Node.js</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
        </select>

        {/* Clear Button */}
        <button className="px-3 py-2 text-sm text-slate-500 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
          Clear All
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
