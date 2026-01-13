import { Camera, User } from "lucide-react";
import { useRef } from "react";
import { useUploadProfilePicMutation } from "../../../features/api/apiSlice";

const ProfilePic = ({ userData }) => {
  const fileInputRef = useRef(null);
  const [uploadProfilePic] = useUploadProfilePicMutation();

  // 1. USE THE SERVER URL (ROOT), NOT THE API URL
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:9000";

  const hasProfileImage = userData?.profilePictureUrl;

  const handleChnageProfilePic = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const imageData = new FormData();
      imageData.append("profilePicture", file);
      await uploadProfilePic(imageData);
    } catch (error) {
      console.log(error);
    }
  };

  let imageUrl = "";
  if (hasProfileImage) {
    try {
      // Create a URL object to handle both relative and absolute paths
      imageUrl = new URL(userData.profilePictureUrl, serverUrl).href;
    } catch (error) {
      console.error("Invalid profile picture URL:", error);
      imageUrl = ""; // Fallback to no image
    }
  }

  return (
    <div className="relative shrink-0">
      {!imageUrl ? (
        <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
          <User className="h-16 w-16 text-primary" />
        </div>
      ) : (
        <img
          src={imageUrl}
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover border-2 border-secondary"
        />
      )}

      {/* Inputs and Buttons... */}
      <input
        hidden
        type="file"
        accept=".jpg,.png,.jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div
        onClick={handleChnageProfilePic}
        className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white cursor-pointer hover:bg-opacity-90 transition"
      >
        <Camera className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default ProfilePic;
