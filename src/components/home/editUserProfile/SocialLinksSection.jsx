import { Linkedin, Github, Globe } from "lucide-react";
import CustomInput from "../../commonComponents/CustomInput";

const SocialLinksSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Social Profiles</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="linkedin" className="label block mb-2">
            <Linkedin className="h-4 w-4 inline mr-1" />
            LinkedIn
          </label>
          <CustomInput
            type="url"
            id="linkedin"
            placeholder="https://linkedin.com/in/username"
            defaultValue="https://linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <label htmlFor="github" className="label block mb-2">
            <Github className="h-4 w-4 inline mr-1" />
            GitHub
          </label>
          <CustomInput
            type="url"
            id="github"
            placeholder="https://github.com/username"
            defaultValue="https://github.com/johndoe"
          />
        </div>
        <div>
          <label htmlFor="portfolio" className="label block mb-2">
            <Globe className="h-4 w-4 inline mr-1" />
            Portfolio Website
          </label>
          <CustomInput
            type="url"
            id="portfolio"
            placeholder="https://yourwebsite.com"
            defaultValue="https://johndoe.dev"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinksSection;
