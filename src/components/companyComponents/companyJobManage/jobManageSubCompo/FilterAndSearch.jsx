import { Search, Filter, ArrowUpDown } from "lucide-react";

const FilterAndSearch = ({ setQuery, query }) => {
  //
  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuery((prev) => ({ ...prev, [name]: value, page: 1 }));
  };

  return (
    <div className="card p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* --- 1. Search Input --- */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="search"
              name="search"
              placeholder="Search jobs by title, location..."
              className="input pl-10 w-full"
              value={query.search || ""}
              onChange={(e) => setQuery({ ...query, search: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-2">
          {/* --- 2. Status Select --- */}
          <div className="relative">
            {/* Icon positioned absolutely over the select */}
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-[hsl(var(--color-muted-foreground))]" />

            <select
              name="status"
              value={query.status || ""}
              onChange={handleChange}
              className="select pl-8 min-w-35 appearance-none"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* --- 3. Sort Select --- */}
          <div className="relative">
            <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-[hsl(var(--color-muted-foreground))]" />

            <select
              name="sort"
              value={query.sort || ""}
              onChange={handleChange}
              className="select pl-8 min-w-37.5 appearance-none"
            >
              <option value="">Sort By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
