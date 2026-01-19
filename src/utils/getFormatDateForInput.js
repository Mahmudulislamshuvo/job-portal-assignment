export const getFormatDateForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  // Check if date is valid
  if (isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
};
