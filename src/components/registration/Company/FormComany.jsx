import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import CompanyInfoSection from "./formFields/CompanyInfoSection";
import CompanyDetailsSection from "./formFields/CompanyDetailsSection";
import AccountSecuritySection from "./formFields/AccountSecuritySection";
import AgreementFields from "./formFields/AgreementFields";
import SubmitButton from "./formFields/SubmitButton";
import RegistrationError from "./formFields/RegistrationError";

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

  return (
    <div className="card p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
        <CompanyInfoSection register={register} errors={errors} />
        <CompanyDetailsSection register={register} errors={errors} />
        <AccountSecuritySection
          register={register}
          errors={errors}
          watch={watch}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <AgreementFields register={register} errors={errors} />
        <RegistrationError error={error} />
        <SubmitButton isLoading={isLoading} />
      </form>
    </div>
  );
};

export default FormCompany;
