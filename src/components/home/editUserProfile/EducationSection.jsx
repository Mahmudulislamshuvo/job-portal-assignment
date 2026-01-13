import { Plus } from "lucide-react";
import EducationEntry from "./EducationEntry";

const EducationSection = () => {
  const educations = [
    {
      institution: "Stanford University",
      degree: "Bachelor of Science in Computer Science",
      startYear: "2016",
      endYear: "2020",
    },
  ];
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <button type="button" className="btn btn-outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </button>
      </div>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <EducationEntry key={index} education={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
