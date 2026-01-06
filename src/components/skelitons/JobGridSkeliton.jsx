const JobCardSkeleton = () => {
  return (
    <div className="card p-6 border border-gray-100 rounded-xl animate-pulse">
      <div className="flex flex-col md:flex-row gap-4">
        {/* */}
        <div className="shrink-0">
          <div className="h-16 w-16 rounded-lg bg-gray-200"></div>
        </div>

        {/* */}
        <div className="flex-1 space-y-4">
          {/* Header (Title + Company Info) */}
          <div>
            <div className="h-6 w-3/4 md:w-1/3 bg-gray-200 rounded mb-2"></div>
            <div className="flex gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Description Lines */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
          </div>

          {/* Footer (Salary + Buttons) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {/* Salary & Applicants */}
            <div className="flex items-center gap-4">
              <div className="h-5 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <div className="h-9 w-24 bg-gray-200 rounded-md"></div>
              <div className="h-9 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
