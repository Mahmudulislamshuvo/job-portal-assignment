import { Plus } from "lucide-react";
import ExperienceEntry from "./ExperienceEntry";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      employmentType: "Full-time",
      startDate: "2022-01",
      endDate: "",
    },
    {
      title: "Full Stack Developer",
      company: "WebTech Industries",
      employmentType: "Full-time",
      startDate: "2020-06",
      endDate: "2021-12",
    },
  ];
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button type="button" className="btn btn-outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceEntry key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
