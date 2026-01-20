const EditUserProfileSkeliton = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl animate-pulse">
      {/* Page Header */}
      <div className="h-8 bg-gray-300 rounded-md w-1/4 mb-8"></div>

      <div className="space-y-6">
        {/* Profile Photo Section */}
        <div className="flex items-center space-x-4">
          <div className="h-24 w-24 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded-md w-32 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded-md w-48"></div>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Location Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="h-24 bg-gray-300 rounded-md"></div>
        </div>

        {/* Skills Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-8 bg-gray-300 rounded-full w-20"></div>
            <div className="h-8 bg-gray-300 rounded-full w-24"></div>
            <div className="h-8 bg-gray-300 rounded-full w-16"></div>
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="space-y-4">
            <div className="h-20 bg-gray-300 rounded-md"></div>
            <div className="h-20 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded-md"></div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-6">
          <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-24 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </main>
  );
};

export default EditUserProfileSkeliton;
