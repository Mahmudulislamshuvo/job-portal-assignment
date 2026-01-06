export const getTimeFromNow = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  // Define time units in seconds
  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "week", seconds: 604800 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = diffInSeconds / unit.seconds;

    if (Math.abs(interval) >= 1) {
      // Negative value because we want "X time ago"
      return rtf.format(-Math.floor(interval), unit.name);
    }
  }

  return "just now";
};
