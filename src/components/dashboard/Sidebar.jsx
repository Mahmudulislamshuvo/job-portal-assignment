const Sidebar = () => {
  return (
    <>
      <div className="lg:col-span-1 space-y-6">
        {/* <!-- Quick Actions --> */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <a
              href="user-profile.html"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
            >
              <i
                data-lucide="user"
                className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
              ></i>
              <span className="text-sm font-medium">View Profile</span>
            </a>
            <a
              href="edit-user-profile.html"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
            >
              <i
                data-lucide="edit"
                className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
              ></i>
              <span className="text-sm font-medium">Edit Profile</span>
            </a>
            <a
              href="applied-jobs.html"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
            >
              <i
                data-lucide="file-text"
                className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
              ></i>
              <span className="text-sm font-medium">My Applications</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
            >
              <i
                data-lucide="bookmark"
                className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
              ></i>
              <span className="text-sm font-medium">Saved Jobs</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
            >
              <i
                data-lucide="settings"
                className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
              ></i>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </div>
        </div>

        {/* <!-- Tips --> */}
        <div className="card p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3 mb-3">
            <i
              data-lucide="lightbulb"
              className="h-5 w-5 text-blue-600 shrink-0"
            ></i>
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-1">
                Pro Tip
              </h3>
              <p className="text-xs text-blue-700">
                Applications submitted within 24 hours of posting have a 3x
                higher response rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
