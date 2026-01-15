export const getWorkDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end =
    !endDate || endDate.toString().toLowerCase() === "present"
      ? new Date()
      : new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Invalid Date";
  }

  // 1. Calculate difference in years and months normally first
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Adjust for negative month difference
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for days (if the end day is before the start day)
  if (end.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  // 2. Convert to Decimal Years
  // Formula: Full Years + (Remaining Months / 12)
  const totalDecimalYears = years + months / 12;

  // 3. Format to 1 decimal place (e.g., 1.4166 -> "1.4")
  const formattedString = totalDecimalYears.toFixed(1);

  // 4. Handle "year" vs "years"
  // Based on your example: > 1 is "years", <= 1 is "year"
  const label = Number(formattedString) > 1 ? "years" : "year";

  return `${formattedString} ${label}`;
};
