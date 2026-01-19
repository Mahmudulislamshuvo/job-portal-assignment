import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialMediaForm = ({ register, companyData }) => {
  const socialMedia = companyData?.data?.socialLinks;

  return (
    <div id="social" className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Social Media Links</h2>

      <div className="space-y-4">
        {/* LinkedIn */}
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
              placeholder="https://linkedin.com/company/yourcompany"
              defaultValue={socialMedia?.linkedin || ""}
              {...register("socialLinks.linkedin")}
            />
          </div>
        </div>

        {/* Twitter */}
        <div>
          <label className="label mb-2" htmlFor="twitter">
            Twitter / X Profile
          </label>
          <div className="relative">
            <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="url"
              id="twitter"
              className="input pl-10"
              placeholder="https://twitter.com/yourcompany"
              defaultValue={socialMedia?.twitter || ""}
              {...register("socialLinks.twitter")}
            />
          </div>
        </div>

        {/* Facebook */}
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
              placeholder="https://facebook.com/yourcompany"
              defaultValue={socialMedia?.facebook || ""}
              {...register("socialLinks.facebook")}
            />
          </div>
        </div>

        {/* Instagram */}
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
              placeholder="https://instagram.com/yourcompany"
              defaultValue={socialMedia?.instagram || ""}
              {...register("socialLinks.instagram")}
            />
          </div>
        </div>

        {/* GitHub */}
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
              placeholder="https://github.com/yourcompany"
              defaultValue={socialMedia?.github || ""}
              {...register("socialLinks.github")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaForm;
