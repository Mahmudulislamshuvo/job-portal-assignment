import { useEffect, useState } from "react";
import { FiRotateCcw } from "react-icons/fi";

const FiltersSidebar = ({ setQuery, jobCounts }) => {
  const filterOptions = [
    { label: "Under Review", value: "New" },
    { label: "Shortlisted", value: "Shortlisted" },
    { label: "Interviewed", value: "Interviewed" },
    { label: "Rejected", value: "Rejected" },
    { label: "Hired", value: "Hired" },
  ];

  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilterChange = (value) => {
    let newStatuses = [...selectedStatuses];
    if (newStatuses.includes(value)) {
      newStatuses = newStatuses.filter((item) => item !== value);
    } else {
      newStatuses.push(value);
    }
    setSelectedStatuses(newStatuses);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleReset = () => {
    setSelectedStatuses([]);
    setSelectedDate("");
  };

  useEffect(() => {
    const statusString = selectedStatuses.join(",");

    setQuery((prev) => ({
      ...prev,
      status: statusString,
      date: selectedDate,
    }));
  }, [selectedStatuses, selectedDate, setQuery]);

  return (
    <aside className="lg:col-span-1">
      <div className="card p-6 sticky top-20">
        <h2 className="font-semibold mb-4">Filters</h2>

        {/* */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Application Status</h3>
          <div className="space-y-2">
            {/* "All" Checkbox (Resets only status) */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-[hsl(var(--color-input))]"
                checked={selectedStatuses.length === 0}
                onChange={() => setSelectedStatuses([])}
              />
              <span className="text-sm">All</span>
            </label>

            {/* Dynamic Checkboxes */}
            {filterOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="rounded border-[hsl(var(--color-input))]"
                  checked={selectedStatuses.includes(option.value)}
                  onChange={() => handleFilterChange(option.value)}
                />
                <span className="text-sm">{option.label}</span>
                <span className="ml-auto text-xs text-[hsl(var(--color-muted-foreground))]">
                  {jobCounts ? jobCounts[option.value] : 0}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Application Date</h3>
          <div className="space-y-2">
            {/* All Time Radio */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value=""
                className="border-[hsl(var(--color-input))]"
                checked={selectedDate === ""}
                onChange={handleDateChange}
              />
              <span className="text-sm">All Time</span>
            </label>

            {/* Last 7 Days */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="last 7 days"
                className="border-[hsl(var(--color-input))]"
                checked={selectedDate === "last 7 days"}
                onChange={handleDateChange}
              />
              <span className="text-sm">Last 7 Days</span>
            </label>

            {/* Last 30 Days */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="last 30 days"
                className="border-[hsl(var(--color-input))]"
                checked={selectedDate === "last 30 days"}
                onChange={handleDateChange}
              />
              <span className="text-sm">Last 30 Days</span>
            </label>

            {/* Last 3 Months */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="last 3 months"
                className="border-[hsl(var(--color-input))]"
                checked={selectedDate === "last 3 months"}
                onChange={handleDateChange}
              />
              <span className="text-sm">Last 3 Months</span>
            </label>
          </div>
        </div>

        {/* Global Reset Button */}
        <button
          onClick={handleReset}
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <FiRotateCcw className="h-4 w-4 mr-2" />
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
