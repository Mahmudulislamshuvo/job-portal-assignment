import { Plus } from "lucide-react";
import ExperienceEntry from "./ExperienceEntry";
import { useFieldArray } from "react-hook-form";

const ExperienceSection = ({ register, errors, data, control }) => {
  const { fields, append, remove } = useFieldArray({
    name: "experience",
    control,
  });

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() =>
            append({
              title: "",
              company: "",
              employmentType: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>
      <div className="space-y-6">
        {fields.map((field, index) => (
          <ExperienceEntry
            key={field.id}
            register={register}
            errors={errors}
            index={index}
            remove={remove}
            field={field}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
