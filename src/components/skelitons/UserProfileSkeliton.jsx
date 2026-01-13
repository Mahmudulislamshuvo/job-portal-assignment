const UserProfileSkeliton = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Profile Header Skeleton */}
      <div className="card p-8 mb-8 animate-pulse">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Pic Skeleton */}
          <div className="h-32 w-32 rounded-full bg-gray-300 shrink-0"></div>
          {/* Profile Info Skeleton */}
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

      {/* Main Content Layout Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column Skeletons (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>

          {/* Contact Info Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
          </div>

          {/* Skills Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-16 bg-gray-300 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Experience Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
          </div>

          {/* Education Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
          </div>
        </div>

        {/* Right Column Skeletons (lg:col-span-1) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Resume Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-4/5 rounded"></div>
          </div>

          {/* Social Links Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-4/5 rounded"></div>
          </div>

          {/* Quick Actions Section Skeleton */}
          <div className="card p-6 animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 w-1/2 rounded"></div>
            <div className="h-10 bg-gray-300 w-full rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfileSkeliton;
