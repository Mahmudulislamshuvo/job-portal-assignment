import { FiLinkedin, FiTwitter, FiFacebook, FiLink } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const ShareJob = () => {
  const location = useLocation();
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.origin + location.pathname);
    alert("Job link copied to clipboard!");
  };
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Share this Job</h3>
      <div className="flex gap-2">
        <button
          onClick={handleCopyUrl}
          className="btn btn-outline flex-1"
          title="Share on LinkedIn"
        >
          <FiLinkedin className="h-4 w-4" />
        </button>
        <button
          onClick={handleCopyUrl}
          className="btn btn-outline flex-1"
          title="Share on Twitter"
        >
          <FiTwitter className="h-4 w-4" />
        </button>
        <button
          onClick={handleCopyUrl}
          className="btn btn-outline flex-1"
          title="Share on Facebook"
        >
          <FiFacebook className="h-4 w-4" />
        </button>
        <button
          onClick={handleCopyUrl}
          className="btn btn-outline flex-1"
          title="Copy link"
        >
          <FiLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ShareJob;
