import { Building2 } from "lucide-react";
import LoadingSpinner from "../../../commonComponents/LoadingSpinner";

const SubmitButton = ({ isLoading }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="btn btn-primary w-full text-base h-11 flex items-center justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Building2 className="h-4 w-4 mr-2" />
          Register Company
        </>
      )}
    </button>
  );
};

export default SubmitButton;
