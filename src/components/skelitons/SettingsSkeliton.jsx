const SettingsSkeliton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header Skeleton */}
      <div className="mb-8">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-8 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation Skeleton */}
        <aside className="lg:col-span-1">
          <div className="p-4 space-y-4 border rounded-lg">
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
          </div>

          {/* Quick Info Card Skeleton */}
          <div className="p-6 mt-6 border rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-gray-200 mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="w-full space-y-2">
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Settings Content Skeleton */}
        <div className="lg:col-span-3 space-y-6">
          {/* Company Logo and Name Skeleton */}
          <div className="p-6 border rounded-lg">
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-6"></div>
            <div className="flex items-start gap-6 mb-6">
              <div className="h-24 w-24 rounded-lg bg-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mb-4">
              <div className="h-24 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>

          {/* Contact Information Skeleton */}
          <div className="p-6 border rounded-lg">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>

          {/* Social Media Links Skeleton */}
          <div className="p-6 border rounded-lg">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex items-center justify-between gap-4 pt-4">
            <div className="h-10 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSkeliton;
