import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialMediaForm = () => {
  return (
    <div id="social" className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Social Media Links</h2>

      <div className="space-y-4">
        <div>
          <label className="label mb-2" htmlFor="linkedin">
            LinkedIn Profile
          </label>
          <div className="relative">
            <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="linkedin"
              className="input pl-10"
              defaultValue="https://linkedin.com/company/techcorp"
              placeholder="https://linkedin.com/company/yourcompany"
            />
          </div>
        </div>

        <div>
          <label className="label mb-2" htmlFor="twitter">
            Twitter/X Profile
          </label>
          <div className="relative">
            <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="twitter"
              className="input pl-10"
              defaultValue="https://twitter.com/techcorp"
              placeholder="https://twitter.com/yourcompany"
            />
          </div>
        </div>

        <div>
          <label className="label mb-2" htmlFor="facebook">
            Facebook Page
          </label>
          <div className="relative">
            <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="facebook"
              className="input pl-10"
              defaultValue="https://facebook.com/techcorp"
              placeholder="https://facebook.com/yourcompany"
            />
          </div>
        </div>

        <div>
          <label className="label mb-2" htmlFor="instagram">
            Instagram Profile
          </label>
          <div className="relative">
            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="instagram"
              className="input pl-10"
              defaultValue="https://instagram.com/techcorp"
              placeholder="https://instagram.com/yourcompany"
            />
          </div>
        </div>

        <div>
          <label className="label mb-2" htmlFor="github">
            GitHub Organization
          </label>
          <div className="relative">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="github"
              className="input pl-10"
              defaultValue="https://github.com/techcorp"
              placeholder="https://github.com/yourcompany"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaForm;
