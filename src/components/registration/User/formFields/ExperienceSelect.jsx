import React from "react";
import { Calendar } from "lucide-react";

const ExperienceSelect = ({ register }) => {
  return (
    <div className="space-y-2">
      <label className="label text-sm font-medium">Years of Experience</label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <select className="input pl-10" {...register("experience")}>
          <option value="">Select experience level</option>
          <option value="entry">Entry Level (0-2 years)</option>
          <option value="mid">Mid Level (3-5 years)</option>
          <option value="senior">Senior (6-10 years)</option>
          <option value="expert">Expert (10+ years)</option>
        </select>
      </div>
    </div>
  );
};

export default ExperienceSelect;
