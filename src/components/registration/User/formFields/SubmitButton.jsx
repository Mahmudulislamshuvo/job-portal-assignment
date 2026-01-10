import React from "react";
import { UserPlus } from "lucide-react";
import LoadingSpinner from "../../../commonComponents/LoadingSpinner";

const SubmitButton = ({ isLoading }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full text-base h-11 flex items-center justify-center"
    >
      <UserPlus className="h-4 w-4 mr-2" />
      {isLoading ? <LoadingSpinner /> : "Create Account"}
    </button>
  );
};

export default SubmitButton;
