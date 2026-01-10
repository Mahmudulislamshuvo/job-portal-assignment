import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Building2,
  Mail,
  Globe,
  Briefcase,
  Users,
  Calendar,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Building,
  AlertCircle,
} from "lucide-react";
import { useRegisterMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";

const FormCompany = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // API Hook
  const [registerCompany, { isLoading, error }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitForm = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { terms, verified, updates, confirmPassword, ...formData } = data;
    const needToSubmitData = { ...formData, role: "COMPANY" };

    try {
      const response = await registerCompany(needToSubmitData).unwrap();
      console.log(response);

      if (response?.success) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Company Registration Failed:", err);
    }
  };

  // Helper for cleaner error messages
  const ErrorMsg = ({ name }) =>
    errors[name] && (
      <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
    );

  return (
    <div className="card p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
        {/* Company Info Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Building className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Company Information</h2>
          </div>

          {/* Company Name (Updated to 'name') */}
          <div className="space-y-2">
            <label htmlFor="name" className="label text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                id="name"
                className={`input pl-10 ${errors.name ? "border-red-500" : ""}`}
                placeholder="e.g., TechCorp Solutions"
                {...register("name", {
                  required: "Company name is required",
                })}
              />
            </div>
            <ErrorMsg name="name" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="label text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                id="email"
                className={`input pl-10 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="john.doe@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            <ErrorMsg name="email" />
          </div>

          {/* Website (Updated to 'websiteUrl') and Industry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="websiteUrl" className="label text-sm font-medium">
                Company Website <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="url"
                  id="websiteUrl"
                  className={`input pl-10 ${
                    errors.websiteUrl ? "border-red-500" : ""
                  }`}
                  placeholder="https://example.com"
                  {...register("websiteUrl", {
                    required: "Website is required",
                    pattern: {
                      value: /^https?:\/\/.*/,
                      message: "Must start with http:// or https://",
                    },
                  })}
                />
              </div>
              <ErrorMsg name="websiteUrl" />
            </div>

            <div className="space-y-2">
              <label htmlFor="industry" className="label text-sm font-medium">
                Industry <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  id="industry"
                  className={`input pl-10 ${
                    errors.industry ? "border-red-500" : ""
                  }`}
                  {...register("industry", {
                    required: "Please select an industry",
                  })}
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="marketing">Marketing & Advertising</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <ErrorMsg name="industry" />
            </div>
          </div>

          {/* Size (Updated to 'employeeCount') and Founded Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="employeeCount"
                className="label text-sm font-medium"
              >
                Company Size
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  id="employeeCount"
                  className="input pl-10"
                  {...register("employeeCount")}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="foundedYear"
                className="label text-sm font-medium"
              >
                Founded Year
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="number"
                  id="foundedYear"
                  className={`input pl-10 ${
                    errors.foundedYear ? "border-red-500" : ""
                  }`}
                  placeholder="e.g., 2010"
                  {...register("foundedYear", {
                    min: { value: 1800, message: "Invalid year" },
                    max: {
                      value: new Date().getFullYear(),
                      message: "Cannot be in the future",
                    },
                  })}
                />
              </div>
              <ErrorMsg name="foundedYear" />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="label text-sm font-medium">
              Headquarters Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                id="location"
                className={`input pl-10 ${
                  errors.location ? "border-red-500" : ""
                }`}
                placeholder="City, Country"
                {...register("location", { required: "Location is required" })}
              />
            </div>
            <ErrorMsg name="location" />
          </div>

          {/* Description */}
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
              <ErrorMsg name="description" />
              {!errors.description && (
                <p className="text-xs text-muted-foreground">
                  Minimum 30 characters.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Account Security */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Account Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="password" className="label text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input pl-10 pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Create a strong password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <ErrorMsg name="password" />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="label text-sm font-medium"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input pl-10 pr-10 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Re-enter your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (val) => {
                      // eslint-disable-next-line react-hooks/incompatible-library
                      if (watch("password") !== val) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <ErrorMsg name="confirmPassword" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
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
          <ErrorMsg name="terms" />

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
          <ErrorMsg name="verified" />

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

        {/* 4. Use serverErrorMessage here, NOT error.error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">
              <p>Registration Failed</p>
              <p className="text-red-500 font-normal mt-0.5">{error?.error}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
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
      </form>
    </div>
  );
};

export default FormCompany;
