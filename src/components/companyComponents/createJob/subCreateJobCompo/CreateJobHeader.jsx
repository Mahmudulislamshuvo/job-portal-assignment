import { ChevronRight, X } from "lucide-react";

const CreateJobHeader = () => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
          <a
            href="company-dashboard.html"
            className="hover:text-[hsl(var(--color-primary))]"
          >
            Dashboard
          </a>

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
          <a href="company-dashboard.html" className="btn btn-outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </a>
        </div>
      </div>
    </>
  );
};

export default CreateJobHeader;
