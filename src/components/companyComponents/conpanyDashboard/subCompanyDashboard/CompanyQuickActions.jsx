import { List, Plus, Settings, Users } from "lucide-react";

import { Link } from "react-router-dom";

const CompanyQuickActions = () => {
  return (
    <>
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Link
            to={"/company/create-job"}
            className="btn btn-primary w-full justify-start"
          >
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Link>
          <Link
            to={"/company/job/manage"}
            className="btn btn-outline w-full justify-start"
          >
            <List className="h-4 w-4 mr-2" />
            Manage Jobs
          </Link>
          <Link
            to={"/company/applicants"}
            className="btn btn-outline w-full justify-start"
          >
            <Users className="h-4 w-4 mr-2" />
            View Applicants
          </Link>
          <a href="#" className="btn btn-outline w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Company Settings
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanyQuickActions;
