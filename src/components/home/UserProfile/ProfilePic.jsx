import { Camera, User } from "lucide-react";

const ProfilePic = () => {
  return (
    <>
      <div className="relative shrink-0">
        <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
          <User className="h-16 w-16 text-[hsl(var(--color-primary))]" />
        </div>
        <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white">
          <Camera className="h-5 w-5 text-white" />
        </div>
      </div>
    </>
  );
};

export default ProfilePic;
