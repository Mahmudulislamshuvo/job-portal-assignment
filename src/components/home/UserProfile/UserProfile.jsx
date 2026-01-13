import About from "./profile/About";
import ContactInfo from "./profile/ContactInfo";
import Education from "./profile/Education";
import Experience from "./profile/Experience";
import ProfileHeader from "./profile/ProfileHeader";
import QuickActions from "./profile/QuickActions";
import Resume from "./profile/Resume";
import Skills from "./profile/Skills";
import SocialLinks from "./profile/SocialLinks";

const UserProfile = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProfileHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <About />
          <ContactInfo />
          <Skills />
          <Experience />
          <Education />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Resume />
          <SocialLinks />
          <QuickActions />
        </div>
      </div>
    </main>
  );
};

export default UserProfile;