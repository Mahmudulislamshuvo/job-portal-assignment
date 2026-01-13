import { Trash2 } from "lucide-react";
import CustomInput from "../../commonComponents/CustomInput";

const ExperienceEntry = ({ register, errors, index, remove, field }) => {
  return (
    <div className="p-4 border border-[hsl(var(--color-border))] rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium">Experience #{index + 1}</h3>
        <button
          type="button"
          className="btn-ghost p-1 text-red-600 hover:bg-red-50"
          onClick={() => remove(index)}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-2">Title *</label>
          <CustomInput
            type="text"
            placeholder="e.g. Full Stack Developer"
            defaultValue={field.title}
            {...register(`experience.${index}.title`, {
              required: "Title is required",
            })}
          />
          {errors.experience?.[index]?.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].title.message}
            </p>
          )}
        </div>
        <div>
          <label className="label block mb-2">Company *</label>
          <CustomInput
            type="text"
            placeholder="e.g. Google"
            defaultValue={field.company}
            {...register(`experience.${index}.company`, {
              required: "Company is required",
            })}
          />
          {errors.experience?.[index]?.company && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].company.message}
            </p>
          )}
        </div>
        <div>
          <label className="label block mb-2">Employment Type *</label>
          <select
            className="input"
            defaultValue={field.employmentType}
            {...register(`experience.${index}.employmentType`, {
              required: "Employment type is required",
            })}
          >
            <option value="">Select type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
            <option value="temporary">Temporary</option>
          </select>
          {errors.experience?.[index]?.employmentType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].employmentType.message}
            </p>
          )}
        </div>
        <div>
          <label className="label block mb-2">Start Date *</label>
          <CustomInput
            type="month"
            defaultValue={field.startDate}
            {...register(`experience.${index}.startDate`, {
              required: "Start date is required",
            })}
          />
          {errors.experience?.[index]?.startDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].startDate.message}
            </p>
          )}
        </div>
        <div>
          <label className="label block mb-2">End Date</label>
          <CustomInput
            type="month"
            placeholder="Present"
            defaultValue={field.endDate}
            {...register(`experience.${index}.endDate`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
