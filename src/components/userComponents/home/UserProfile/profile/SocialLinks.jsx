import { Globe } from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = ({ data, title = "Social Profiles" }) => {
  const linkedin = data?.linkedinUrl;
  const github = data?.githubUrl;
  const portfolio = data?.portfolioUrl;
  const twitter = data?.twitterUrl;
  const facebook = data?.facebookUrl;
  const instagram = data?.instagramUrl;

  const hasSocials =
    linkedin || github || portfolio || twitter || facebook || instagram;

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {!hasSocials ? (
        // FALLBACK
        <div className="text-sm text-muted-foreground italic">
          No social profiles available.
        </div>
      ) : (
        <div className="space-y-2">
          {/* LinkedIn */}
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

          {/* Twitter */}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <BsTwitter className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-[#1DA1F2]" />
              <span className="text-sm font-medium">Twitter</span>
            </a>
          )}

          {/* Facebook  */}
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <FaFacebook className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-[#1877F2]" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          )}

          {/* Instagram  */}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors group"
            >
              <BsInstagram className="h-5 w-5 text-[hsl(var(--color-muted-foreground))] group-hover:text-[#E4405F]" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          )}

          {/* GitHub */}
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

          {/* Portfolio */}
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
