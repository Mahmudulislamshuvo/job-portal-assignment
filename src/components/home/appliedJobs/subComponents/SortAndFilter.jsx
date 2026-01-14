import { ChevronDown } from "lucide-react";

const SortAndFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
          Sort by:
        </span>
        <div className="relative">
          <button
            className="btn btn-outline text-sm h-9"
            // onClick="toggleDropdown('sortDropdown')"
          >
            <span>Newest First</span>

            <ChevronDown className="h-4 w-4 ml-2" />
          </button>
          <div
            id="sortDropdown"
            className="hidden absolute top-full left-0 mt-2 w-48 card p-2 shadow-lg z-10"
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
  );
};

export default SortAndFilter;
