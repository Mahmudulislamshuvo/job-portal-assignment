import { Plus, X } from "lucide-react";
import CustomInput from "../../commonComponents/CustomInput";

const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Skills</h2>
      <div className="mb-4">
        <label htmlFor="skillInput" className="label block mb-2">
          Add Skills
        </label>
        <div className="flex gap-2">
          <CustomInput
            type="text"
            id="skillInput"
            css="flex-1"
            placeholder="Type a skill and press Enter"
          />
          <button type="button" className="btn btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </button>
        </div>
        <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
          Add skills relevant to your profession. Press Enter or click Add to
          add each skill.
        </p>
      </div>
      <div>
        <label className="label block mb-3">Current Skills</label>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge badge-secondary inline-flex items-center gap-1"
            >
              {skill}
              <button type="button" className="hover:text-red-600">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
