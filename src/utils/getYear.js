export const getYear = (dateString) => {
  if (!dateString) return "Present";
  return new Date(dateString).getFullYear();
};
