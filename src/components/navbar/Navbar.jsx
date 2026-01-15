import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiBriefcaseAlt, BiPlus, BiUser } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  // Helper styles for cleaner JSX (Tailwind classes)
  const iconStyle = "h-8 w-8 text-[hsl(var(--color-primary))]"; // আপনার কাস্টম কালার
  const navLinkStyle =
    "text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]";
  const activeNavLinkStyle =
    "text-sm font-medium text-[hsl(var(--color-primary))]";

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

            {/* Right Side: User Profile */}
            <div className="flex items-center gap-4">
              <Link to={"/user-profile"} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <BiUser className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  {user?.name || "User"}
                </span>
              </Link>
            </div>
          </>
        ) : user?.role === "COMPANY" ? (
          /* =============================================
           SCENARIO 2: COMPANY IS LOGGED IN (ROLE: COMPANY)
           ============================================= */
          <>
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <BiBriefcaseAlt className={iconStyle} />
                <span className="text-xl font-bold">LWS Job Portal</span>
              </Link>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/company-dashboard" className={activeNavLinkStyle}>
                  Dashboard
                </Link>
                <Link to="/manage-jobs" className={navLinkStyle}>
                  Manage Jobs
                </Link>
                <Link to="/applicants" className={navLinkStyle}>
                  Applicants
                </Link>
              </nav>
            </div>

            {/* Right Side: Post Job & Profile */}
            <div className="flex items-center gap-4">
              <Link
                to="/post-job"
                className="btn btn-primary flex items-center px-4 py-2 bg-[hsl(var(--color-primary))] text-white rounded-md"
              >
                <BiPlus className="h-4 w-4 mr-2" />
                Post Job
              </Link>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <BsBuildingGear className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  {user?.name || "Company"}
                </span>
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
              {/* Login Button with style */}
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
