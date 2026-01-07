import { FiLinkedin, FiTwitter, FiFacebook, FiLink } from "react-icons/fi";

const ShareJob = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Share this Job</h3>
      <div className="flex gap-2">
        <button className="btn btn-outline flex-1" title="Share on LinkedIn">
          <FiLinkedin className="h-4 w-4" />
        </button>
        <button className="btn btn-outline flex-1" title="Share on Twitter">
          <FiTwitter className="h-4 w-4" />
        </button>
        <button className="btn btn-outline flex-1" title="Share on Facebook">
          <FiFacebook className="h-4 w-4" />
        </button>
        <button className="btn btn-outline flex-1" title="Copy link">
          <FiLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ShareJob;
