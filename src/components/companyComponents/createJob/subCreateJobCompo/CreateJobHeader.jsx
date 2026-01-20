import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const CreateJobHeader = () => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
          <Link
            to={"/company-dashboard"}
            className="hover:text-[hsl(var(--color-primary))]"
          >
            Dashboard
          </Link>

          <ChevronRight className="h-4 w-4" />
          <span className="text-[hsl(var(--color-foreground))]">
            Create Job
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Fill in the details to create a new job posting
            </p>
          </div>
          <Link to={"/company-dashboard"} className="btn btn-outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateJobHeader;
