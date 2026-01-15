const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div className="flex justify-center pt-6">
      <button className="btn btn-outline" onClick={onLoadMore}>
        <i data-lucide="loader-2" className="h-4 w-4 mr-2"></i>
        Load More Applications
      </button>
    </div>
  );
};

export default LoadMoreButton;
