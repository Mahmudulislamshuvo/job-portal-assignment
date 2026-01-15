import { useNavigate } from "react-router-dom";
import { FiShieldOff, FiHome, FiArrowLeft } from "react-icons/fi";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Main Card */}
      <div className="max-w-md w-full bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
        {/* Icon Section */}
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <FiShieldOff className="w-8 h-8 text-red-500" />
        </div>

        {/* Heading & Description */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          Sorry, you don't have permission to access this page. It looks like
          you tried to visit a protected area without the necessary role.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Primary Button - Matches your Sign In button style */}
          <button
            onClick={() => navigate("/")}
            className="w-full inline-flex justify-center items-center px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
          >
            <FiHome className="mr-2 h-4 w-4" />
            Go to Homepage
          </button>

          {/* Secondary Button - Ghost/Outline style */}
          <button
            onClick={() => navigate(-1)}
            className="w-full inline-flex justify-center items-center px-4 py-3 bg-white text-slate-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <FiArrowLeft className="mr-2 h-4 w-4" />
            Go Back Previous Page
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-gray-400">Error Code: 403 Forbidden</p>
      </div>
    </div>
  );
};

export default Unauthorized;
