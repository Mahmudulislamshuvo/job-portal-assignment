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

import { useEffect } from "react";
import {
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} from "../../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

import EditUserProfileSkeliton from "../../../skelitons/EditUserProfileSkeliton";

const EditUserProfile = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileInfoQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const navigate = useNavigate();

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
      if (result?.success === true) {
        navigate(`/user-profile/${data?.data?.id}`);
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  if (isProfileLoading) return <EditUserProfileSkeliton />;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader id={data?.data?.id} />
      <form className="space-y-6" onSubmit={handleSubmit(handleEditSubmit)}>
        <ProfilePhotoSection />
        <BasicInformationSection
          register={register}
          errors={errors}
          data={data?.data}
        />
        <LocationSection register={register} data={data?.data} />
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
