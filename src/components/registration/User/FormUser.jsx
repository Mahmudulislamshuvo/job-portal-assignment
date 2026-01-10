import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone } from "lucide-react";
import { useRegisterMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import UserInput from "./formFields/UserInput";
import PasswordInput from "./formFields/PasswordInput";
import ExperienceSelect from "./formFields/ExperienceSelect";
import TermsCheckbox from "./formFields/TermsCheckbox";
import SubmitButton from "./formFields/SubmitButton";
import RegistrationError from "./formFields/RegistrationError";

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

  return (
    <div className="card p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-5">
        <UserInput
          name="name"
          label="Name"
          placeholder="John Doe"
          type="text"
          register={register}
          errors={errors}
          validation={{ required: "Name is required" }}
          icon={User}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <UserInput
            name="email"
            label="Email Address"
            placeholder="john@example.com"
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
          <UserInput
            name="phone"
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            type="tel"
            register={register}
            errors={errors}
            validation={{ required: "Phone is required" }}
            icon={Phone}
          />
        </div>

        <ExperienceSelect register={register} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PasswordInput
            name="password"
            label="Password"
            placeholder="••••••••"
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
          <PasswordInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="••••••••"
            register={register}
            errors={errors}
            validation={{
              required: "Please confirm your password",
            }}
            watch={watch}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>

        <TermsCheckbox register={register} errors={errors} />

        <RegistrationError error={registrationError} />
        
        <SubmitButton isLoading={isLoading} />
      </form>
    </div>
  );
};

export default FormUser;
