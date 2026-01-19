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

const Settings = () => {
  const { data: companyData, isLoading: isCompanyLoading } =
    useGetCompanyProfileQuery();

  const [updateCompanyProfile, { isLoading: isUpdating }] =
    useUpdateCompanyProfileMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const handleonSubmit = async (data) => {
    try {
      const response = await updateCompanyProfile(data);

      if (response?.data?.success) {
        console.log("Company profile updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isCompanyLoading) {
    return <SettingsSkeliton />;
  }

  console.log(companyData);

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <SettingsHeader />

        <form onSubmit={handleSubmit(handleonSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <SettingsNav />
              <QuickInfoCard companyData={companyData} />
            </aside>
            <div className="lg:col-span-3 space-y-6">
              <CompanyInfoForm
                register={register}
                errors={errors}
                companyData={companyData}
              />
              <ContactInfoForm
                register={register}
                errors={errors}
                companyData={companyData}
              />
              <SocialMediaForm register={register} companyData={companyData} />
              <SettingsActions isUpdating={isUpdating} isDirty={isDirty} />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Settings;
