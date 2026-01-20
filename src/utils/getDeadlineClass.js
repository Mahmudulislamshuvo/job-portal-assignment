export const getDeadlineClass = (dateString) => {
  if (!dateString) return "text-green-600";

  const deadline = new Date(dateString).getTime();
  const now = new Date().getTime();
  const diffInMs = deadline - now;

  const oneDayInMs = 24 * 60 * 60 * 1000;

  if (diffInMs < 0) {
    return "text-red-500 font-semibold";
  } else if (diffInMs <= oneDayInMs) {
    return "text-yellow-600 font-bold";
  } else {
    return "text-[hsl(var(--color-muted-foreground))]";
  }
};
