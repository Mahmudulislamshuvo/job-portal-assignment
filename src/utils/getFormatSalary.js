export const getFormatSalary = (min, max) => {
  if (!min || !max) return "Not specified";
  return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
};
