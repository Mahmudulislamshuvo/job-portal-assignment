import { useState, useEffect, useRef } from "react";

const SearchFilter = ({ setQuery }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const filterRef = useRef(null);

  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    experienceLevel: [],
    salary: [],
    skills: [],
  });

  const filterOptions = [
    {
      key: "type",
      label: "Job Type",
      options: [
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship",
      ],
    },
    {
      key: "experienceLevel",
      label: "Experience Level",
      options: ["Entry", "Mid", "Senior", "Expert", "Lead"],
    },
    {
      key: "salary",
      label: "Salary Range",
      options: ["$0-$50k", "$50k-$100k", "$100k-$150k", "$150k+"],
    },
    {
      key: "skills",
      label: "Skills",
      options: ["React", "Node.js", "Python", "TypeScript", "SQL"],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle selection of filter options
  const toggleOption = (key, value) => {
    setSelectedFilters((prev) => {
      const currentList = prev[key];
      const isSelected = currentList.includes(value);
      return {
        ...prev,
        [key]: isSelected
          ? currentList.filter((item) => item !== value)
          : [...currentList, value],
      };
    });
  };

  const clearAll = () => {
    setSelectedFilters({
      type: [],
      experienceLevel: [],
      salary: [],
      skills: [],
    });
  };

  // Update query whenever selectedFilters change
  useEffect(() => {
    if (setQuery) {
      let minSalary = "";
      let maxSalary = "";

      if (selectedFilters.salary.length > 0) {
        let calculatedMin = Infinity;
        let calculatedMax = -Infinity;

        selectedFilters.salary.forEach((range) => {
          let min, max;
          if (range === "$150k+") {
            min = 150000;
            max = 1000000;
          } else {
            const matches = range.match(/\$(\d+)k-\$(\d+)k/);
            if (matches) {
              min = parseInt(matches[1]) * 1000;
              max = parseInt(matches[2]) * 1000;
            }
          }
          if (min < calculatedMin) calculatedMin = min;
          if (max > calculatedMax) calculatedMax = max;
        });

        minSalary = calculatedMin === Infinity ? "" : calculatedMin;
        maxSalary = calculatedMax === -Infinity ? "" : calculatedMax;
      }

      setQuery((prev) => ({
        ...prev,
        type: selectedFilters.type.join(","),
        experienceLevel: selectedFilters.experienceLevel.join(","),
        skills: selectedFilters.skills.join(","),
        minSalary: minSalary,
        maxSalary: maxSalary,
      }));
    }
  }, [selectedFilters, setQuery]);

  return (
    <div
      className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200"
      ref={filterRef}
    >
      <span className="text-sm font-medium text-slate-500 mr-2">Filters:</span>

      {filterOptions.map((filter) => {
        const hasSelection = selectedFilters[filter.key].length > 0;
        const isOpen = openDropdown === filter.key;

        return (
          <div key={filter.key} className="relative">
            <button
              onClick={() => setOpenDropdown(isOpen ? null : filter.key)}
              className={`px-3 py-2 border rounded-lg text-sm flex items-center gap-2 transition-all duration-200 ${
                hasSelection
                  ? "bg-slate-900 text-white border-slate-900"
                  : isOpen
                  ? "border-slate-900 ring-2 ring-slate-100 bg-white text-slate-900"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter.label}
              {hasSelection && (
                <span className="bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {selectedFilters[filter.key].length}
                </span>
              )}
              <svg
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                } ${hasSelection ? "text-white/70" : "text-slate-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-full mt-2 left-0 z-50 w-52 bg-white border border-slate-200 rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="max-h-60 overflow-y-auto custom-scrollbar space-y-0.5">
                  {filter.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer transition-colors"
                        checked={selectedFilters[filter.key].includes(option)}
                        onChange={() => toggleOption(filter.key, option)}
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <button
        onClick={clearAll}
        className="px-3 py-2 text-sm text-slate-500 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors ml-auto md:ml-0"
      >
        Clear All
      </button>
    </div>
  );
};

export default SearchFilter;
