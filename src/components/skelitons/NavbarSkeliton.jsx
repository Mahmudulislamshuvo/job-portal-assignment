const NavbarSkeliton = ({ role = "public" }) => {
  const publicNavbar = (
    <div className="flex items-center justify-between h-16 px-4 bg-white shadow-sm">
      {/* Left section: Logo and general links */}
      <div className="flex items-center space-x-4">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>{" "}
        {/* Logo placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
      </div>
      {/* Right section: Auth buttons */}
      <div className="flex items-center space-x-4">
        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>{" "}
        {/* Login button */}
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>{" "}
        {/* Signup button */}
      </div>
    </div>
  );

  const userNavbar = (
    <div className="flex items-center justify-between h-16 px-4 bg-white shadow-sm">
      {/* Left section: Logo and user links */}
      <div className="flex items-center space-x-4">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>{" "}
        {/* Logo placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
      </div>
      {/* Right section: User avatar and dropdown */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>{" "}
        {/* Avatar placeholder */}
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Username/Dropdown */}
      </div>
    </div>
  );

  const companyNavbar = (
    <div className="flex items-center justify-between h-16 px-4 bg-white shadow-sm">
      {/* Left section: Logo and company links */}
      <div className="flex items-center space-x-4">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>{" "}
        {/* Logo placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
        <div className="h-6 w-28 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Link placeholder */}
      </div>
      {/* Right section: Company avatar and dropdown */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>{" "}
        {/* Avatar placeholder */}
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse hidden md:block"></div>{" "}
        {/* Company Name/Dropdown */}
      </div>
    </div>
  );

  switch (role) {
    case "user":
      return userNavbar;
    case "company":
      return companyNavbar;
    case "public":
    default:
      return publicNavbar;
  }
};

export default NavbarSkeliton;
