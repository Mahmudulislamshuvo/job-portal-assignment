import { Trash2 } from "lucide-react";
import CustomInput from "../../../commonComponents/CustomInput";

const EducationEntry = ({ register, errors, index, remove, field }) => {
  return (
    <div className="p-4 border border-[hsl(var(--color-border))] rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium">Education #{index + 1}</h3>
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
          <label className="label block mb-2">Institution *</label>
          <CustomInput
            type="text"
            placeholder="e.g. Stanford University"
            defaultValue={field.institution}
            {...register(`education.${index}.institution`, {
              required: "Institution is required",
            })}
          />
          {errors.education?.[index]?.institution && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education[index].institution.message}
            </p>
          )}
        </div>
        <div>
          <label className="label block mb-2">Degree *</label>
          <CustomInput
            type="text"
            placeholder="e.g. Bachelor of Science"
            defaultValue={field.degree}
            {...register(`education.${index}.degree`, {
              required: "Degree is required",
            })}
          />
          {errors.education?.[index]?.degree && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education[index].degree.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="startDate" className="label block mb-2">
            Start Year *
          </label>
          <CustomInput
            type="date"
            id="startDate"
            placeholder="e.g. 2016"
            defaultValue={field.startYear}
            {...register(`education.${index}.startDate`, {
              required: "Start year is required",
            })}
          />
          {errors.education?.[index]?.startYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education[index].startYear.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="endDate" className="label block mb-2">
            End Year *
          </label>
          <CustomInput
            type="date"
            id="endDate"
            placeholder="e.g. 2020"
            defaultValue={field.endYear}
            {...register(`education.${index}.endDate`, {
              required: "End year is required",
            })}
          />
          {errors.education?.[index]?.endYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education[index].endYear.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;
