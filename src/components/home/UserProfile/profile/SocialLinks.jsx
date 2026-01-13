import { Github, Linkedin, Globe } from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";

const SocialLinks = ({ userData }) => {
  const linkedin = userData?.linkedinUrl;
  const github = userData?.githubUrl;
  const portfolio = userData?.portfolioUrl;

  const hasSocials = linkedin || github || portfolio;

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>

      {!hasSocials ? (
        // FALLBACK: Show this if no social links exist
        <div className="text-sm text-muted-foreground italic">
          No social profiles available.
        </div>
      ) : (
        // SHOW LINKS: Only render the ones that exist
        <div className="space-y-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <LiaLinkedin className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-[#0077b5]" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <GiThunderBlade className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-black" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}

          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <Globe className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-blue-500" />
              <span className="text-sm font-medium">Portfolio</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
