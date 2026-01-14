import { Save, X } from "lucide-react";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";
import { Link } from "react-router-dom";

const FormActions = ({ isSubmitting }) => {
  return (
    <div className="card p-6">
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <Link to={"/user-profile"} className="btn btn-outline">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Link>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size={4} />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FormActions;
