import { ChevronRight } from "lucide-react";

const SettingsHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
        <a
          href="company-dashboard.html"
          className="hover:text-[hsl(var(--color-primary))]"
        >
          Dashboard
        </a>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Company Settings</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">Company Settings</h1>
        <p className="text-[hsl(var(--color-muted-foreground))]">
          Manage your company profile and preferences
        </p>
      </div>
    </div>
  );
};

export default SettingsHeader;
