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
        {/* TITLE */}
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
          <label className="label block mb-2">Company Name *</label>
          <CustomInput
            type="text"
            placeholder="e.g. Google"
            defaultValue={field.companyName}
            {...register(`experience.${index}.companyName`, {
              // CHANGED KEY
              required: "Company Name is required",
            })}
          />
          {errors.experience?.[index]?.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].companyName.message}
            </p>
          )}
        </div>

        {/* LOCATION (নতুন ফিল্ড) */}
        <div>
          <label className="label block mb-2">Location *</label>
          <CustomInput
            type="text"
            placeholder="e.g. New York, NY"
            defaultValue={field.location}
            {...register(`experience.${index}.location`, {
              required: "Location is required",
            })}
          />
          {errors.experience?.[index]?.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].location.message}
            </p>
          )}
        </div>

        {/* EMPLOYMENT TYPE */}
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
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.experience?.[index]?.employmentType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].employmentType.message}
            </p>
          )}
        </div>

        {/* START DATE */}
        <div>
          <label className="label block mb-2">Start Date *</label>
          <CustomInput
            type="date"
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

        {/* END DATE */}
        <div>
          <label className="label block mb-2">End Date</label>
          <CustomInput
            type="date"
            placeholder="Leave empty if current"
            defaultValue={field.endDate}
            {...register(`experience.${index}.endDate`)}
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave blank if currently working here
          </p>
        </div>

        {/* DESCRIPTION (নতুন ফিল্ড) */}
        <div className="md:col-span-2">
          <label className="label block mb-2">Description *</label>
          <textarea
            className="input w-full h-24 p-2"
            placeholder="Describe your responsibilities..."
            defaultValue={field.description}
            {...register(`experience.${index}.description`, {
              required: "Description is required",
            })}
          />
          {errors.experience?.[index]?.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience[index].description.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
