import { Save, X } from "lucide-react";

const FormActions = () => {
  return (
    <div className="card p-6">
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <a href="user-profile.html" className="btn btn-outline">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </a>
        <button type="submit" className="btn btn-primary">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default FormActions;
