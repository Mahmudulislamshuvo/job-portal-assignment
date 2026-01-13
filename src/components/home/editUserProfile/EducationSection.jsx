import { Plus } from "lucide-react";
import EducationEntry from "./EducationEntry";
import { useFieldArray } from "react-hook-form";

const EducationSection = ({ register, errors, data, control }) => {
  const { fields, append, remove } = useFieldArray({
    name: "education",
    control,
  });

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() =>
            append({
              institution: "",
              degree: "",
              startYear: "",
              endYear: "",
            })
          }
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </button>
      </div>
      <div className="space-y-6">
        {fields.map((field, index) => (
          <EducationEntry
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

export default EducationSection;
