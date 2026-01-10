import React from "react";
import { AlertCircle } from "lucide-react";

const RegistrationError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="text-sm font-medium">
        <p>Registration Failed</p>
        <p className="text-red-500 font-normal mt-0.5">{error?.error}</p>
      </div>
    </div>
  );
};

export default RegistrationError;
