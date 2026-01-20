import { useRef } from "react";
import SettingsSkeliton from "../../skelitons/SettingsSkeliton";
import { useForm } from "react-hook-form";
import CompanyInfoForm from "./subSettingsCompo/CompanyInfoForm";
import ContactInfoForm from "./subSettingsCompo/ContactInfoForm";
import QuickInfoCard from "./subSettingsCompo/QuickInfoCard";
import SettingsActions from "./subSettingsCompo/SettingsActions";
import SettingsHeader from "./subSettingsCompo/SettingsHeader";
import SettingsNav from "./subSettingsCompo/SettingsNav";
import SocialMediaForm from "./subSettingsCompo/SocialMediaForm";
import {
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} from "../../../features/api/apiSlice";
import { ErrorToast, SuccessToast } from "../../../hooks/toastify";

const Settings = () => {
  const { data: companyData, isLoading: isCompanyLoading } =
    useGetCompanyProfileQuery();

  const [updateCompanyProfile, { isLoading: isUpdating }] =
    useUpdateCompanyProfileMutation();

  const companyInfoRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialMediaRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const handleonSubmit = async (data) => {
    try {
      const response = await updateCompanyProfile(data);

      if (response?.data?.success) {
        SuccessToast("Company Profile Updated Successfully");
      }
    } catch (error) {
      ErrorToast(
        error?.data?.message ||
          "Failed to update company profile. Please try again.",
      );
    }
  };

  if (isCompanyLoading) {
    return <SettingsSkeliton />;
  }

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <SettingsHeader />

        <form onSubmit={handleSubmit(handleonSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <SettingsNav
                companyInfoRef={companyInfoRef}
                contactInfoRef={contactInfoRef}
                socialMediaRef={socialMediaRef}
              />
              <QuickInfoCard companyData={companyData} />
            </aside>
            <div className="lg:col-span-3 space-y-6">
              <div ref={companyInfoRef}>
                <CompanyInfoForm
                  register={register}
                  errors={errors}
                  companyData={companyData}
                />
              </div>
              <div ref={contactInfoRef}>
                <ContactInfoForm
                  register={register}
                  errors={errors}
                  companyData={companyData}
                />
              </div>
              <div ref={socialMediaRef}>
                <SocialMediaForm
                  register={register}
                  companyData={companyData}
                />
              </div>
              <SettingsActions isUpdating={isUpdating} isDirty={isDirty} />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Settings;
