const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
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

export default PasswordInput;
