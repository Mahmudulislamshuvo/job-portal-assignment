import { Save } from "lucide-react";

const SettingsActions = ({ isUpdating, isDirty }) => {
  return (
    <div className="flex items-center justify-between gap-4 pt-4">
      <div className="flex gap-2">
        <button className="btn btn-primary" disabled={isUpdating || !isDirty}>
          <Save className="h-4 w-4 mr-2" />
          {isUpdating ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default SettingsActions;
