const QuickActions = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-2">
        <a
          href="user-dashboard.html"
          className="btn btn-outline w-full justify-start"
        >
          <i data-lucide="layout-dashboard" className="h-4 w-4 mr-2"></i>
          View Dashboard
        </a>
        <a href="#" className="btn btn-outline w-full justify-start">
          <i data-lucide="file-text" className="h-4 w-4 mr-2"></i>
          My Applications
        </a>
        <a href="#" className="btn btn-outline w-full justify-start">
          <i data-lucide="bookmark" className="h-4 w-4 mr-2"></i>
          Saved Jobs
        </a>
      </div>
    </div>
  );
};

export default QuickActions;
