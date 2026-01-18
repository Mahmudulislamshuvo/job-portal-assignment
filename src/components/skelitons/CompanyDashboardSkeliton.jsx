const CompanyDashboardSkeliton = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Welcome Section Skeleton */}
      <div className="card p-6 mb-8 animate-pulse">
        <div className="w-3/4 h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-4 animate-pulse">
            <div className="w-1/3 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-2/3 h-8 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Jobs Skeleton */}
          <div className="card p-6 animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="w-3/4 h-5 bg-gray-300 rounded mb-1"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-16 h-8 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applicants Skeleton */}
          <div className="card p-6 animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="w-3/4 h-5 bg-gray-300 rounded mb-1"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-16 h-8 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column Skeleton */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions Skeleton */}
          <div className="card p-6 animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>

          {/* Tips Card Skeleton */}
          <div className="card p-6 animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDashboardSkeliton;
