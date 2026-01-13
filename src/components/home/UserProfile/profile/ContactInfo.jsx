const ContactInfo = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center flex-shrink-0">
            <i
              data-lucide="mail"
              className="h-5 w-5 text-[hsl(var(--color-primary))]"
            ></i>
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Email
            </p>
            <p className="font-medium">john.doe@example.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center flex-shrink-0">
            <i
              data-lucide="phone"
              className="h-5 w-5 text-[hsl(var(--color-primary))]"
            ></i>
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Phone
            </p>
            <p className="font-medium">+1 (415) 555-0123</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center flex-shrink-0">
            <i
              data-lucide="map-pin"
              className="h-5 w-5 text-[hsl(var(--color-primary))]"
            ></i>
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Location
            </p>
            <p className="font-medium">San Francisco, CA 94102</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center flex-shrink-0">
            <i
              data-lucide="linkedin"
              className="h-5 w-5 text-[hsl(var(--color-primary))]"
            ></i>
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              LinkedIn
            </p>
            <a
              href="#"
              className="font-medium text-[hsl(var(--color-primary))] hover:underline"
            >
              linkedin.com/in/johndoe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
