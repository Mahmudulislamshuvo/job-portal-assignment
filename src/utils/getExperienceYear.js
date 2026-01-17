export const getExperienceYear = (level) => {
  if (!level) return "";

  switch (level.toLowerCase()) {
    case "entry-level":
      return "0-2 years";
    case "mid-level":
      return "3-5 years";
    case "senior":
      return "6-10 years";
    case "expert":
      return "10+ years";
    default:
      return "0-2 years";
  }
};
