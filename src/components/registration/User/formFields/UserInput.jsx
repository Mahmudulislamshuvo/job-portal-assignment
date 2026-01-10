import React from "react";

const ErrorMsg = ({ name, errors }) =>
  errors[name] && (
    <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>
  );

const UserInput = ({
  name,
  label,
  placeholder,
  type,
  register,
  errors,
  validation,
  icon: Icon,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="label text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <input
          type={type}
          id={name}
          className={`input pl-10 ${errors[name] ? "border-red-500" : ""}`}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </div>
      <ErrorMsg name={name} errors={errors} />
    </div>
  );
};

export default UserInput;
