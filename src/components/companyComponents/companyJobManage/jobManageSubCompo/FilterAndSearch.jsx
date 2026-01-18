import { Search, Filter, ChevronDown, ArrowUpDown } from "lucide-react";

const FilterAndSearch = () => {
  return (
    <div className="card p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="search"
              placeholder="Search jobs by title, location..."
              className="input pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <button
              className="btn btn-outline"
              // onClick={() => toggleDropdown("statusFilter")}
            >
              <Filter className="h-4 w-4 mr-2" />
              Status
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            <div
              id="statusFilter"
              className="hidden absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10"
            >
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                All Status
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                New
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                Hired
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                Shortlisted
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                Rejected
              </button>
            </div>
          </div>
          <div className="relative">
            <button
              className="btn btn-outline"
              // onClick={() => toggleDropdown("sortFilter")}
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            <div
              id="sortFilter"
              className="hidden absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10"
            >
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                Newest First
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[hsl(var(--color-accent))]">
                Oldest First
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
