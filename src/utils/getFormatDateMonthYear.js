export const getFormatDateMonthYear = (dateString) => {
  if (!dateString) return "Ongoing";

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
