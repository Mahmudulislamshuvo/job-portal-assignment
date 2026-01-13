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

const EditUserProfile = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader />
      <form className="space-y-6">
        <ProfilePhotoSection />
        <BasicInformationSection />
        <LocationSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ResumeSection />
        <SocialLinksSection />
        <FormActions />
      </form>
    </main>
  );
};

export default EditUserProfile;
