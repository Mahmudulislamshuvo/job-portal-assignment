export const getFormatMonthYear = (dateString) => {
  if (!dateString) return "Present";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};
