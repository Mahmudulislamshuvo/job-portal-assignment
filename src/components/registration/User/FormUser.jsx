import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  AlertCircle,
} from "lucide-react";
import { useRegisterMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";

const FormUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { isLoading, error: registrationError }] =
    useRegisterMutation();
  const navigate = useNavigate();
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
    const { terms, confirmPassword, ...formData } = data;
    const NeedtoSubmitData = { ...formData, role: "USER" };

    try {
      const response = await registerUser(NeedtoSubmitData);
      if (response?.data?.success === true) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Helper for cleaner error messages
  const ErrorMsg = ({ name }) =>
    errors[name] && (
      <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
    );

  console.log("ERROR wh", registrationError);

  return (
    <div className="card p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-5">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="label text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              id="name"
              className={`input pl-10 ${errors.name ? "border-red-500" : ""}`}
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          <ErrorMsg name="name" />
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="label text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                className={`input pl-10 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="john@example.com"
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

          <div className="space-y-2">
            <label className="label text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="tel"
                className={`input pl-10 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="+1 (555) 000-0000"
                {...register("phone", { required: "Phone is required" })}
              />
            </div>
            <ErrorMsg name="phone" />
          </div>
        </div>

        {/* Experience Dropdown */}
        <div className="space-y-2">
          <label className="label text-sm font-medium">
            Years of Experience
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <select className="input pl-10" {...register("experience")}>
              <option value="">Select experience level</option>
              <option value="entry">Entry Level (0-2 years)</option>
              <option value="mid">Mid Level (3-5 years)</option>
              <option value="senior">Senior (6-10 years)</option>
              <option value="expert">Expert (10+ years)</option>
            </select>
          </div>
        </div>

        {/* Password Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* PASSWORD INPUT */}
          <div className="space-y-2">
            <label className="label text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"} // Controlled by single state
                className={`input pl-10 pr-10 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="••••••••"
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

          {/* CONFIRM PASSWORD INPUT */}
          <div className="space-y-2">
            <label className="label text-sm font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"} // Controlled by same state
                className={`input pl-10 pr-10 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) => {
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

        {/* Terms Checkbox */}
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
              <span className="text-primary hover:underline">
                Terms of Service
              </span>
            </label>
          </div>
          <ErrorMsg name="terms" />
        </div>

        {registrationError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">
              <p>Registration Failed</p>
              <p className="text-red-500 font-normal mt-0.5">
                {registrationError.error}
              </p>
            </div>
          </div>
        )}
        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-base h-11 flex items-center justify-center"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          {isLoading ? <LoadingSpinner /> : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
