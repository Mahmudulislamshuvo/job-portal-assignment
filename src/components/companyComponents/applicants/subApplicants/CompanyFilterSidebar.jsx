import React from "react";

const CompanyFilterSidebar = ({ query, setQuery }) => {
  // --- 1. Handle Multi-Select Checkboxes (Status & Experience) ---
  const handleCheckboxChange = (e, field) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setQuery((prev) => {
      const currentValues = prev[field] ? prev[field].split(",") : [];

      let newValues;
      if (isChecked) {
        // Add value if checked
        newValues = [...currentValues, value];
      } else {
        // Remove value if unchecked
        newValues = currentValues.filter((item) => item !== value);
      }

      return {
        ...prev,
        [field]: newValues.join(","),
        page: 1,
      };
    });
  };

  const handleDateChange = (e) => {
    setQuery((prev) => ({
      ...prev,
      date: e.target.value,
      page: 1,
    }));
  };

  // --- 3. Handle Reset ---
  const handleReset = () => {
    setQuery((prev) => ({
      ...prev,
      status: "",
      experienceLevel: "",
      date: "",
      page: 1,
    }));
  };

  // Helper to check if a value exists in the comma-separated string
  const isChecked = (field, value) => {
    return query[field]?.split(",").includes(value);
  };

  return (
    <aside className="lg:col-span-1">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Filters</h3>
          <button
            onClick={handleReset}
            className="text-sm text-[hsl(var(--color-primary))] hover:underline"
          >
            Reset
          </button>
        </div>

        {/* */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3">Application Status</h4>
          <div className="space-y-2">
            {[
              { label: "New Applications", value: "New" },
              { label: "Shortlisted", value: "Shortlisted" },
              { label: "Interviewed", value: "Interviewed" },
              { label: "Rejected", value: "Rejected" },
              { label: "Hired", value: "Hired" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={item.value}
                  checked={isChecked("status", item.value)}
                  onChange={(e) => handleCheckboxChange(e, "status")}
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3">Experience Level</h4>
          <div className="space-y-2">
            {[
              { label: "Entry Level (0-2 years)", value: "entry" },
              { label: "Mid Level (3-5 years)", value: "mid" },
              { label: "Senior (5+ years)", value: "senior" },
              { label: "Expert (10+ years)", value: "expert" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={item.value}
                  checked={isChecked("experienceLevel", item.value)}
                  onChange={(e) => handleCheckboxChange(e, "experienceLevel")}
                  className="rounded border-[hsl(var(--color-input))]"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* */}
        <div>
          <h4 className="text-sm font-medium mb-3">Applied Date</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="last 7 days" // Backend value
                checked={query.date === "last 7 days"}
                onChange={handleDateChange}
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 7 days</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="last 30 days" // Backend value
                checked={query.date === "last 30 days"}
                onChange={handleDateChange}
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 30 days</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="3 months" // Backend value
                checked={query.date === "3 months"}
                onChange={handleDateChange}
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">Last 3 Months</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                value="" // Empty string means "All time"
                checked={query.date === ""}
                onChange={handleDateChange}
                className="border-[hsl(var(--color-input))]"
              />
              <span className="text-sm">All time</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CompanyFilterSidebar;
