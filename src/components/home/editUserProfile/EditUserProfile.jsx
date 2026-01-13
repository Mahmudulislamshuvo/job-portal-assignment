import PageHeader from "./PageHeader";
import ProfilePhotoSection from "./ProfilePhotoSection";
import BasicInformationSection from "./BasicInformationSection";
import LocationSection from "./LocationSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ResumeSection from "./ResumeSection";
import SocialLinksSection from "./SocialLinksSection";
import FormActions from "./FormActions";
import { useForm } from "react-hook-form";
import {
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} from "../../../features/api/apiSlice";
import { useEffect } from "react";

const EditUserProfile = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileInfoQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      reset(data.data);
    }
  }, [data, reset]);

  const handleEditSubmit = async (formData) => {
    try {
      const result = await updateProfile(formData).unwrap();
      console.log("Profile updated successfully:", result);
      // Optionally, show a success toast notification
    } catch (error) {
      console.error("Failed to update profile:", error);
      // Optionally, show an error toast notification
    }
  };

  if (isProfileLoading) return <p>Loading...</p>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader />
      <form className="space-y-6" onSubmit={handleSubmit(handleEditSubmit)}>
        <ProfilePhotoSection />
        <BasicInformationSection
          register={register}
          errors={errors}
          data={data?.data}
        />
        <LocationSection
          register={register}
          errors={errors}
          data={data?.data}
        />
        <AboutSection register={register} errors={errors} data={data?.data} />
        <SkillsSection
          register={register}
          data={data?.data}
          setValue={setValue}
        />
        <ExperienceSection
          register={register}
          errors={errors}
          data={data?.data}
          control={control}
        />
        <EducationSection
          register={register}
          errors={errors}
          data={data?.data}
          control={control}
        />
        <ResumeSection
          register={register}
          data={data?.data}
          setValue={setValue}
        />
        <SocialLinksSection
          register={register}
          errors={errors}
          data={data?.data}
        />
        <FormActions isSubmitting={isUpdating} />
      </form>
    </main>
  );
};

export default EditUserProfile;
