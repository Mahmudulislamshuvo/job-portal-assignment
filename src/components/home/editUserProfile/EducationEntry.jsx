import { Trash2 } from "lucide-react";
import CustomInput from "../../commonComponents/CustomInput";

const EducationEntry = ({ education }) => {
  return (
    <div className="p-4 border border-[hsl(var(--color-border))] rounded-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium">{education.degree}</h3>
        <button
          type="button"
          className="btn-ghost p-1 text-red-600 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-2">Institution</label>
          <CustomInput type="text" defaultValue={education.institution} />
        </div>
        <div>
          <label className="label block mb-2">Degree</label>
          <CustomInput type="text" defaultValue={education.degree} />
        </div>
        <div>
          <label className="label block mb-2">Start Year</label>
          <CustomInput type="number" defaultValue={education.startYear} />
        </div>
        <div>
          <label className="label block mb-2">End Year</label>
          <CustomInput type="number" defaultValue={education.endYear} />
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;
