import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  BiBriefcaseAlt,
  BiPlus,
  BiUser,
  BiLogOut,
  BiChevronDown,
} from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";
import { useGetCompanyProfileQuery } from "../../features/api/apiSlice";
import { userLoggedOut } from "../../features/auth/authSlice";
import NavbarSkeliton from "../skelitons/NavbarSkeliton";

const Navbar = () => {
  const [showLogOutMenu, setShowLogOutMenu] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { data: loggedInCompanyData, isLoading: isLoadingLoggedCompanyData } =
    useGetCompanyProfileQuery(undefined, {
      skip: user?.role !== "COMPANY",
    });

  // Dropdown-এর বাইরে ক্লিক করলে মেনু বন্ধ করার জন্য
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogOutMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    setShowLogOutMenu(false);
    navigate("/login");
  };

  // Helper styles
  const iconStyle = "h-8 w-8 text-[hsl(var(--color-primary))]";
  const navLinkStyle =
    "text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]";
  const activeNavLinkStyle =
    "text-sm font-medium text-[hsl(var(--color-primary))]";

  // Dropdown Item Style
  const dropdownItemStyle =
    "flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors";

  if (isLoadingLoggedCompanyData) {
    return <NavbarSkeliton />;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* =============================================
            SCENARIO 1: USER IS LOGGED IN (ROLE: USER)
           ============================================= */}
        {user?.role === "USER" ? (
          <>
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <BiBriefcaseAlt className={iconStyle} />
                <span className="text-xl font-bold">LWS Job Portal</span>
              </Link>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className={navLinkStyle}>
                  Jobs
                </Link>
                <Link to="/user-dashboard" className={activeNavLinkStyle}>
                  Dashboard
                </Link>
                <Link to="/applied-jobs" className={navLinkStyle}>
                  My Applications
                </Link>
              </nav>
            </div>

            {/* Right Side: User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowLogOutMenu(!showLogOutMenu)}
                className="flex items-center gap-2 hover:bg-accent rounded-full p-1 pr-2 transition-colors border border-transparent hover:border-border focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <BiUser className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  {user?.name || "User"}
                </span>
                <BiChevronDown
                  className={`h-4 w-4 transition-transform ${showLogOutMenu ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {showLogOutMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500">
                      Account
                    </p>
                    <p className="text-sm font-medium truncate">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    to={`/user-profile/${user?.id}`}
                    className={dropdownItemStyle}
                    onClick={() => setShowLogOutMenu(false)}
                  >
                    <BiUser className="h-4 w-4" /> Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className={`${dropdownItemStyle} text-red-600 hover:bg-red-50 hover:text-red-700`}
                  >
                    <BiLogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : user?.role === "COMPANY" ? (
          /* =============================================
             SCENARIO 2: COMPANY IS LOGGED IN
             ============================================= */
          <>
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <BiBriefcaseAlt className={iconStyle} />
                <span className="text-xl font-bold">LWS Job Portal</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link to="/company-dashboard" className={activeNavLinkStyle}>
                  Dashboard
                </Link>
                <Link to="/company/job/manage" className={navLinkStyle}>
                  Manage Jobs
                </Link>
                <Link to="/company/applicants" className={navLinkStyle}>
                  Applicants
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/company/create-job"
                className="btn btn-primary flex items-center px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
              >
                <BiPlus className="h-4 w-4 mr-2" /> Post Job
              </Link>

              {/* Company Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowLogOutMenu(!showLogOutMenu)}
                  className="flex items-center gap-2 hover:bg-accent rounded-full p-1 pr-2 transition-colors border border-transparent hover:border-border focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                    <BsBuildingGear className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                  </div>
                  <span className="text-sm font-medium hidden md:inline">
                    {user?.name || "Company"}
                  </span>
                  <BiChevronDown
                    className={`h-4 w-4 transition-transform ${showLogOutMenu ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showLogOutMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500">
                        Company
                      </p>
                      <p className="text-sm font-medium truncate">
                        {user?.name}
                      </p>
                    </div>

                    {loggedInCompanyData?.data?.slug && (
                      <Link
                        to={`/company/profile/${loggedInCompanyData.data.slug}`}
                        className={dropdownItemStyle}
                        onClick={() => setShowLogOutMenu(false)}
                      >
                        <BsBuildingGear className="h-4 w-4" /> View Profile
                      </Link>
                    )}
                    <Link
                      to="/company-dashboard"
                      className={dropdownItemStyle}
                      onClick={() => setShowLogOutMenu(false)}
                    >
                      <BiBriefcaseAlt className="h-4 w-4" /> Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className={`${dropdownItemStyle} text-red-600 hover:bg-red-50 hover:text-red-700`}
                    >
                      <BiLogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          /* =============================================
             SCENARIO 3: NO ONE LOGGED IN (PUBLIC)
             ============================================= */
          <>
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <BiBriefcaseAlt className={iconStyle} />
                <span className="text-xl font-bold">LWS Job Portal</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Don't have an account?
              </span>
              <Link
                to="/register-user"
                className="text-sm font-medium hover:underline"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-sm font-medium bg-[hsl(var(--color-primary))] text-black px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
