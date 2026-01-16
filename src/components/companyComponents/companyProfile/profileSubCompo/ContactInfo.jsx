import { Globe, Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          {/* Website */}
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">
                Website
              </p>
              <a
                href="https://www.techcorp.com"
                className="text-sm font-medium text-[hsl(var(--color-primary))] hover:underline"
              >
                www.techcorp.com
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">
                Email
              </p>
              <a
                href="mailto:careers@techcorp.com"
                className="text-sm font-medium text-[hsl(var(--color-primary))] hover:underline"
              >
                careers@techcorp.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">
                Phone
              </p>
              <a href="tel:+14155551234" className="text-sm font-medium">
                +1 (415) 555-1234
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">
                Headquarters
              </p>
              <p className="text-sm font-medium">
                123 Tech Street
                <br />
                San Francisco, CA 94102
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
