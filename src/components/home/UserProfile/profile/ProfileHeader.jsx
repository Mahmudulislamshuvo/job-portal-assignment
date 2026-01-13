import ProfileInfo from "../ProfileInfo";
import ProfilePic from "../ProfilePic";

const ProfileHeader = ({ userData }) => {
  return (
    <div className="card p-8 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <ProfilePic userData={userData} />
        <ProfileInfo userData={userData} />
      </div>
    </div>
  );
};

export default ProfileHeader;
