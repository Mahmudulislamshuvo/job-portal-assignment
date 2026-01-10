import React from "react";
import { Building2, Mail, Globe, Briefcase, Building } from "lucide-react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const CompanyInfoSection = ({ register, errors }) => {
  const industryOptions = [
    { value: "", label: "Select industry" },
    { value: "technology", label: "Technology" },
    { value: "finance", label: "Finance & Banking" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "consulting", label: "Consulting" },
    { value: "marketing", label: "Marketing & Advertising" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <Building className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Company Information</h2>
      </div>

      <InputField
        name="name"
        label="Company Name"
        placeholder="e.g., TechCorp Solutions"
        type="text"
        register={register}
        errors={errors}
        validation={{ required: "Company name is required" }}
        icon={Building2}
      />

      <InputField
        name="email"
        label="Email Address"
        placeholder="john.doe@company.com"
        type="email"
        register={register}
        errors={errors}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        icon={Mail}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          name="websiteUrl"
          label="Company Website"
          placeholder="https://example.com"
          type="url"
          register={register}
          errors={errors}
          validation={{
            required: "Website is required",
            pattern: {
              value: /^https?:\/\/.*/,
              message: "Must start with http:// or https://",
            },
          }}
          icon={Globe}
        />
        <SelectField
          name="industry"
          label="Industry"
          register={register}
          errors={errors}
          validation={{ required: "Please select an industry" }}
          options={industryOptions}
          icon={Briefcase}
        />
      </div>
    </div>
  );
};

export default CompanyInfoSection;
