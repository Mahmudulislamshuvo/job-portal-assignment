import {
  Building2,
  CreditCard,
  Phone,
  Settings,
  Share2,
  Shield,
} from "lucide-react";

const SettingsNav = () => {
  return (
    <div className="card p-4">
      <nav className="space-y-1">
        <a
          href="#company-info"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-[hsl(var(--color-accent))] rounded-md"
        >
          <Building2 className="h-4 w-4" />
          Company Info
        </a>
        <a
          href="#contact"
          className="flex items-center gap-3 px-3 py-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-foreground))] rounded-md transition-colors"
        >
          <Phone className="h-4 w-4" />
          Contact Details
        </a>
        <a
          href="#social"
          className="flex items-center gap-3 px-3 py-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-foreground))] rounded-md transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Social Media
        </a>
        <a
          href="#preferences"
          className="flex items-center gap-3 px-3 py-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-foreground))] rounded-md transition-colors"
        >
          <Settings className="h-4 w-4" />
          Preferences
        </a>
        <a
          href="#billing"
          className="flex items-center gap-3 px-3 py-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-foreground))] rounded-md transition-colors"
        >
          <CreditCard className="h-4 w-4" />
          Billing
        </a>
        <a
          href="#account"
          className="flex items-center gap-3 px-3 py-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-foreground))] rounded-md transition-colors"
        >
          <Shield className="h-4 w-4" />
          Account Security
        </a>
      </nav>
    </div>
  );
};

export default SettingsNav;
