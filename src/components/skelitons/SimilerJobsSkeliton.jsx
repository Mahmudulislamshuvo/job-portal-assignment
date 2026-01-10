const SimilerJobsSkeleton = () => {
  return (
    <div className="card p-6 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 w-32 bg-gray-200 rounded mb-4"></div>

      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border-b border-[hsl(var(--color-border))] pb-4 last:border-0 last:pb-0"
          >
            <div className="flex gap-4">
              {/* Logo Skeleton */}
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
              </div>

              {/* Text Content Skeleton */}
              <div className="flex-1 min-w-0">
                {/* Title line */}
                <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                {/* Subtitle line */}
                <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>

                {/* Bottom row (Salary & Link) */}
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilerJobsSkeleton;
