import { User, Camera, Upload, Trash2 } from "lucide-react";

const ProfilePhotoSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Profile Photo</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative flex-shrink-0">
          <div className="h-32 w-32 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
            <User className="h-16 w-16 text-[hsl(var(--color-primary))]" />
          </div>
          <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-[hsl(var(--color-primary))] flex items-center justify-center border-4 border-white cursor-pointer hover:bg-[hsl(var(--color-primary))]/90 transition-colors">
            <Camera className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-medium mb-2">Upload Profile Picture</h3>
          <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
            JPG, PNG or GIF. Max size of 5MB.
          </p>
          <div className="flex gap-2">
            <label className="btn btn-primary cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo
              <input type="file" className="hidden" accept="image/*" />
            </label>
            <button type="button" className="btn btn-outline">
              <Trash2 className="h-4 w-4 mr-2" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoSection;
