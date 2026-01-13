import { User, Camera, Upload, Trash2 } from "lucide-react";
import { useRef } from "react";
import {
  useGetProfileInfoQuery,
  useUploadProfilePicMutation,
} from "../../../features/api/apiSlice";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";

const ProfilePhotoSection = () => {
  const fileInputRef = useRef(null);
  const [uploadProfilePic, { isLoading: uploadingProfileLoading }] =
    useUploadProfilePicMutation();

  const { data, isLoading } = useGetProfileInfoQuery();

  const hasProfileImage = data?.data?.profilePictureUrl;

  const handleFireFileInput = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No Selected File");
      return;
    }
    console.log("Selected File:", file);
    const formData = new FormData();
    formData.append("profilePicture", file);
    const response = await uploadProfilePic(formData);

    if (response?.data?.success === true) {
      console.log("Profile picture uploaded successfully");
    }
  };

  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:9000";

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let imageUrl = "";
  if (hasProfileImage) {
    try {
      // Create a URL object to handle both relative and absolute paths
      imageUrl = new URL(data?.data?.profilePictureUrl, serverUrl).href;
    } catch (error) {
      console.error("Invalid profile picture URL:", error);
      imageUrl = ""; // Fallback to no image
    }
  }

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Profile Photo</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative shrink-0">
          <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
            {!data?.data?.profilePictureUrl ? (
              <User className="h-16 w-16 text-primary" />
            ) : (
              <img
                src={imageUrl}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover border-2 border-secondary"
              />
            )}
          </div>
          <button
            onClick={handleFireFileInput}
            className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white cursor-pointer hover:bg-primary/90 transition-colors"
          >
            <Camera className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="flex-1">
          <h3 className="font-medium mb-2">Upload Profile Picture</h3>
          <p className="text-sm text-foreground mb-4">
            JPG, PNG or GIF. Max size of 5MB.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn btn-primary cursor-pointer"
              onClick={handleFireFileInput}
            >
              <Upload className="h-4 w-4 mr-2" />
              {uploadingProfileLoading ? <LoadingSpinner /> : "Upload Photo"}
            </button>

            <button type="button" className="btn btn-outline">
              <Trash2 className="h-4 w-4 mr-2" />
              Remove
            </button>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoSection;
