const CompanyProfileSkeleton = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Company Header Skeleton */}
      <div className="card p-8 mb-8 animate-pulse">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Company Logo Skeleton */}
          <div className="h-24 w-24 rounded-full bg-gray-300 shrink-0"></div>
          {/* Company Info Skeleton */}
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-300 w-3/4 rounded"></div>
            <div className="h-5 bg-gray-300 w-1/2 rounded"></div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
              <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Company Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>

          {/* Company Culture & Values Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
          </div>

          {/* Open Positions Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            {/* Simulating a list of job items */}
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="h-5 bg-gray-300 w-1/2 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="h-5 bg-gray-300 w-1/2 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
            </div>
          </div>
        </div>

        {/* Sidebar Column Skeleton */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Information Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-4/5 rounded"></div>
          </div>

          {/* Social Media Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/2 rounded mb-4"></div>
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyProfileSkeleton;
