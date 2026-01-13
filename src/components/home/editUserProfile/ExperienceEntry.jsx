import { Trash2 } from "lucide-react";
import CustomInput from "../../commonComponents/CustomInput";

const ExperienceEntry = ({ experience }) => {
  return (
    <div className="p-4 border border-[hsl(var(--color-border))] rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium">{experience.title}</h3>
        <button
          type="button"
          className="btn-ghost p-1 text-red-600 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-2">Company</label>
          <CustomInput type="text" defaultValue={experience.company} />
        </div>
        <div>
          <label className="label block mb-2">Employment Type</label>
          {experience.employmentType === "Full-time" ? (
            <CustomInput type="text" defaultValue={experience.employmentType} />
          ) : (
            <select className="input" defaultValue={experience.employmentType}>
              <option value="">Select type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
              <option value="temporary">Temporary</option>
            </select>
          )}
        </div>
        <div>
          <label className="label block mb-2">Start Date</label>
          <CustomInput type="month" defaultValue={experience.startDate} />
        </div>
        <div>
          <label className="label block mb-2">End Date</label>
          <CustomInput
            type="month"
            placeholder="Present"
            defaultValue={experience.endDate}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
