const PageHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
        <a
          href="user-dashboard.html"
          className="hover:text-[hsl(var(--color-primary))]"
        >
          Dashboard
        </a>
        <i data-lucide="chevron-right" className="h-4 w-4"></i>
        <span className="text-[hsl(var(--color-foreground))]">
          Applied Jobs
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Applied Jobs</h1>
          <p className="text-[hsl(var(--color-muted-foreground))]">
            Track all your job applications in one place
          </p>
        </div>
        <div className="text-sm text-[hsl(var(--color-muted-foreground))]">
          <span className="font-medium text-[hsl(var(--color-foreground))]">
            12
          </span>
          applications
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
