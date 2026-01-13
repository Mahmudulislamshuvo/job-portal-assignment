const Resume = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Resume</h3>
      <div className="space-y-4">
        <div className="p-4 bg-[hsl(var(--color-secondary))] rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <i
                data-lucide="file-text"
                className="h-6 w-6 text-[hsl(var(--color-primary))]"
              ></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">
                John_Doe_Resume.pdf
              </p>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                Updated Nov 28, 2025
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="#" className="btn btn-outline w-full text-xs h-9">
              <i data-lucide="download" className="h-3 w-3 mr-2"></i>
              Download
            </a>
          </div>
        </div>
        <a href="edit-user-profile.html" className="btn btn-outline w-full">
          <i data-lucide="upload" className="h-4 w-4 mr-2"></i>
          Update Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
