const AppliedJobsSkeliton = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page Header Skeleton */}
      <div className="mb-8">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar Skeleton */}
        <aside className="lg:col-span-1">
          <div className="card p-6 sticky top-20">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-1/3 my-4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </aside>

        {/* Applications List Skeleton */}
        <div className="lg:col-span-3 space-y-4">
          {/* Sort and View Options Skeleton */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="h-9 bg-gray-200 rounded w-1/4"></div>
          </div>

          {/* Application Card Skeleton */}
          <div className="card p-6">
            <div className="flex gap-6">
              <div className="skeleton h-16 w-16 rounded-lg"></div>
              <div className="flex-1 space-y-3">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex gap-6">
              <div className="skeleton h-16 w-16 rounded-lg"></div>
              <div className="flex-1 space-y-3">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex gap-6">
              <div className="skeleton h-16 w-16 rounded-lg"></div>
              <div className="flex-1 space-y-3">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-full">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppliedJobsSkeliton;
