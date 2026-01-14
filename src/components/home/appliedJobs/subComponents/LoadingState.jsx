const LoadingState = () => {
  return (
    <div className="hidden space-y-4" id="loadingState">
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
    </div>
  );
};
export default LoadingState;
