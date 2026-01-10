import React from "react";
import { Shield, Lock, Eye, EyeOff } from "lucide-react";

const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

const PasswordInputField = ({
  name,
  label,
  placeholder,
  register,
  errors,
  validation,
  showPassword,
  setShowPassword,
  watch,
}) => {
  const validationWithWatch =
    name === "confirmPassword"
      ? {
          ...validation,
          validate: (val) => {
            if (watch("password") !== val) {
              return "Passwords do not match";
            }
          },
        }
      : validation;

  return (
    <div className="space-y-2">
      <label className="label text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type={showPassword ? "text" : "password"}
          className={`input pl-10 pr-10 ${
            errors[name] ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          {...register(name, validationWithWatch)}
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
      <ErrorMsg name={name} errors={errors} />
    </div>
  );
};

const AccountSecuritySection = ({
  register,
  errors,
  watch,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <Shield className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Account Security</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PasswordInputField
          name="password"
          label="Password"
          placeholder="Create a strong password"
          register={register}
          errors={errors}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters",
            },
          }}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <PasswordInputField
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter your password"
          register={register}
          errors={errors}
          validation={{ required: "Please confirm your password" }}
          watch={watch}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    </div>
  );
};

export default AccountSecuritySection;
