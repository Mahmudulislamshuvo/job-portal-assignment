const AllApplicantsSkeliton = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page Header Skeleton */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="w-48 h-8 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="w-64 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar Skeleton */}
        <aside className="lg:col-span-1">
          <div className="card p-4">
            <div className="h-8 bg-gray-300 rounded animate-pulse mb-4"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </aside>

        {/* Applicants List Skeleton */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="card p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
                    <div>
                      <div className="w-40 h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
                      <div className="w-64 h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-24 h-8 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllApplicantsSkeliton;
