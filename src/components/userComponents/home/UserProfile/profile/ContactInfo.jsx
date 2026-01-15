import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const ContactInfo = ({ userData }) => {
  // console.log(userData);

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Email
            </p>
            <p className="font-medium">
              {userData?.email || "john.doe@example.com"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Phone
            </p>
            <p className="font-medium">
              {userData?.phone || "+1 (415) 555-0123"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5 text-[hsl(var(--color-primary))]" />
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Location
            </p>
            <p className="font-medium">
              {userData?.location || "San Francisco, CA 94102"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            <LiaLinkedin className="h-5 w-5 text-[hsl(var(--color-primary))]" />
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              LinkedIn
            </p>
            <button className="font-medium text-[hsl(var(--color-primary))] hover:underline">
              {userData?.linkedinUrl || "linkedin.com/in/johndoe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
