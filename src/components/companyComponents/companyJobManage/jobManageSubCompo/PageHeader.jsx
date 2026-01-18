import { Plus, ChevronRight } from "lucide-react";

const PageHeader = () => {
  return (
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
          Manage Jobs
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Jobs</h1>
          <p className="text-[hsl(var(--color-muted-foreground))]">
            View and manage all your job postings
          </p>
        </div>
        <a href="create-job.html" className="btn btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Create New Job
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
