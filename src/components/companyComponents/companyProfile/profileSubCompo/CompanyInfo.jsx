import { Building, MapPin, Share2, Users } from "lucide-react";

const CompanyInfo = ({ data }) => {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <>
      <div className="flex-1 h-full items-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">TechCorp Solutions</h1>
            <div className="flex flex-wrap items-center gap-3 text-[hsl(var(--color-muted-foreground))]">
              <span className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                {data?.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {data?.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {data?.employeeCount}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleCopyLink} className="btn btn-outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
