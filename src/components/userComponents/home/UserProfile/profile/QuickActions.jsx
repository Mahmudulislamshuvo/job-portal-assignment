import { Bookmark, FileText, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-2">
        <Link
          to="/user-dashboard"
          className="btn btn-outline w-full justify-start"
        >
          <LayoutDashboard className="h-4 w-4 mr-2" />
          View Dashboard
        </Link>
        <Link
          to="/my-applications"
          className="btn btn-outline w-full justify-start"
        >
          <FileText className="h-4 w-4 mr-2" />
          My Applications
        </Link>
        <Link to="/saved-jobs" className="btn btn-outline w-full justify-start">
          <Bookmark className="h-4 w-4 mr-2" />
          Saved Jobs
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
