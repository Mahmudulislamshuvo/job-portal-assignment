const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

import React from "react";

const TermsCheckbox = ({ register, errors }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 h-4 w-4 rounded border-border text-primary"
          {...register("terms", { required: "You must accept the terms" })}
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <span className="text-primary hover:underline">Terms of Service</span>
        </label>
      </div>
      <ErrorMsg name="terms" errors={errors} />
    </div>
  );
};

export default TermsCheckbox;
