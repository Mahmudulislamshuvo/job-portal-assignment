const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

import React from "react";

const AgreementFields = ({ register, errors }) => {
  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 h-4 w-4 rounded border-border text-primary"
          {...register("terms", { required: "You must accept the terms" })}
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      <ErrorMsg name="terms" errors={errors} />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="verified"
          className="mt-1 h-4 w-4 rounded border-border text-primary"
          {...register("verified", {
            required: "You must confirm you are authorized",
          })}
        />
        <label htmlFor="verified" className="text-sm text-muted-foreground">
          I confirm that I am an authorized representative of this company
        </label>
      </div>
      <ErrorMsg name="verified" errors={errors} />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="updates"
          className="mt-1 h-4 w-4 rounded border-border text-primary"
          {...register("updates")}
        />
        <label htmlFor="updates" className="text-sm text-muted-foreground">
          Send me product updates, hiring tips, and promotional offers
        </label>
      </div>
    </div>
  );
};

export default AgreementFields;
