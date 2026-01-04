const LoadMoreButton = () => {
  return (
    <>
      <div className="mt-12 flex flex-col items-center gap-4">
        <button className="btn btn-outline">
          Load More Jobs
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <p className="text-sm text-muted-foreground">Showing 5 of 1,247 jobs</p>
      </div>
    </>
  );
};

export default LoadMoreButton;
