import { ChevronRight, X } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
        <a href="user-dashboard.html" className="hover:text-[hsl(var(--color-primary))]">
          Dashboard
        </a>
        <ChevronRight className="h-4 w-4" />
        <a href="user-profile.html" className="hover:text-[hsl(var(--color-primary))]">
          My Profile
        </a>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[hsl(var(--color-foreground))]">Edit Profile</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
          <p className="text-[hsl(var(--color-muted-foreground))]">
            Update your personal information and preferences
          </p>
        </div>
        <a href="user-profile.html" className="btn btn-outline">
          <X className="h-4 w-4 mr-2" />
          Cancel
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
