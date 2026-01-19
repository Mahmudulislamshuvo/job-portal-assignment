import { Save } from "lucide-react";

const SettingsActions = () => {
  return (
    <div className="flex items-center justify-between gap-4 pt-4">
      <div className="flex gap-2">
        <button className="btn btn-primary">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsActions;
