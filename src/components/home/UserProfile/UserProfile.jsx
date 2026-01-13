import { useGetProfileInfoQuery } from "../../../features/api/apiSlice";
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
  const { data, isLoading, error } = useGetProfileInfoQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <main className="container mx-auto px-4 py-8">
      <ProfileHeader userData={data} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {data?.data?.bio && <About bio={data?.data?.bio} />}
          <ContactInfo userData={data?.data} />
          {data?.data?.skills.length > 0 && (
            <Skills skills={data?.data?.skills} />
          )}
          {/* Need functionality */}
          {data?.data?.experience?.length > 0 && (
            <Experience experiences={data?.data?.experience} />
          )}
          {/* Need functionality */}
          {data?.data?.education?.length > 0 && (
            <Education education={data?.data?.education} />
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Resume userData={data?.data} />
          <SocialLinks />
          <QuickActions />
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
