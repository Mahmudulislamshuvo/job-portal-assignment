const JobDetailsSkeleton = () => {
  return (
    <main className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="h-5 w-48 bg-gray-200 rounded mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* */}
        <div className="lg:col-span-2 space-y-6">
          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="flex items-start gap-4">
              {/* Logo Box */}
              <div className="shrink-0">
                <div className="h-20 w-20 rounded-lg bg-gray-200"></div>
              </div>

              {/* Title & Meta Info */}
              <div className="flex-1 min-w-0 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-full space-y-3">
                    {/* Title */}
                    <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
                    {/* Company/Location Meta */}
                    <div className="flex gap-3">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  {/* Bookmark Button */}
                  <div className="h-10 w-10 bg-gray-200 rounded-lg shrink-0"></div>
                </div>

                {/* Badges */}
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-200 shrink-0"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>

            {/* List Skeleton */}
            <div className="mt-8 space-y-4">
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
              <div className="space-y-2 pl-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-3 w-3/4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>

          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-20 bg-gray-200 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* */}
        <div className="lg:col-span-1 space-y-6">
          {/* */}
          <div className="card p-6 border rounded-lg bg-white lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="text-center border-b pb-4 space-y-2">
                <div className="h-8 w-40 bg-gray-200 rounded mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto"></div>
              </div>

              <div className="h-12 w-full bg-gray-200 rounded-lg"></div>

              <div className="pt-4 border-t space-y-3">
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-3 mb-4">
              <div className="h-16 w-16 rounded-lg bg-gray-200 shrink-0"></div>
              <div className="space-y-2 w-full pt-1">
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="mt-4 h-10 w-full bg-gray-200 rounded-lg"></div>
          </div>

          {/* */}
          <div className="card p-6 border rounded-lg bg-white">
            <div className="h-5 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 flex-1 bg-gray-200 rounded-lg"
                ></div>
              ))}
            </div>
          </div>

          {/* */}
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsSkeleton;
