const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

import React from "react";
import { Users, Calendar, MapPin } from "lucide-react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const CompanyDetailsSection = ({ register, errors }) => {
  const sizeOptions = [
    { value: "", label: "Select company size" },
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          name="employeeCount"
          label="Company Size"
          register={register}
          errors={errors}
          options={sizeOptions}
          icon={Users}
        />
        <InputField
          name="foundedYear"
          label="Founded Year"
          placeholder="e.g., 2010"
          type="number"
          register={register}
          errors={errors}
          validation={{
            min: { value: 1800, message: "Invalid year" },
            max: {
              value: new Date().getFullYear(),
              message: "Cannot be in the future",
            },
          }}
          icon={Calendar}
        />
      </div>

      <InputField
        name="location"
        label="Headquarters Location"
        placeholder="City, Country"
        type="text"
        register={register}
        errors={errors}
        validation={{ required: "Location is required" }}
        icon={MapPin}
      />

      <div className="space-y-2">
        <label htmlFor="description" className="label text-sm font-medium">
          Company Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          className={`textarea min-h-30 ${
            errors.description ? "border-red-500" : ""
          } w-full px-2`}
          placeholder="Tell us about your company..."
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 30,
              message: "Description must be at least 30 characters",
            },
          })}
        ></textarea>
        <div className="flex justify-between items-start">
          <ErrorMsg name="description" errors={errors} />
          {!errors.description && (
            <p className="text-xs text-muted-foreground">
              Minimum 30 characters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsSection;
