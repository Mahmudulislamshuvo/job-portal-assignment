import { ChevronDown } from "lucide-react";

const SortAndFilter = ({ setQuery, query }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
          Sort by:
        </span>
        <div className="relative inline-block w-40">
          <select
            value={query.sort}
            onChange={(e) =>
              setQuery((prev) => ({ ...prev, sort: e.target.value }))
            }
            className="appearance-none w-full h-9 pl-3 pr-8 text-sm font-medium transition-colors rounded-md border border-[hsl(var(--color-input))] bg-transparent hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-accent-foreground))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--color-ring))] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <option
              value="Newest First"
              className="bg-[hsl(var(--color-card))]"
            >
              Newest First
            </option>
            <option
              value="Oldest First"
              className="bg-[hsl(var(--color-card))]"
            >
              Oldest First
            </option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[hsl(var(--color-foreground))] opacity-50">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortAndFilter;
