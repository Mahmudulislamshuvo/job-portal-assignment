import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumbStatic = () => {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
        <Link to={"/"} className="hover:text-[hsl(var(--color-foreground))]">
          Jobs
        </Link>
        <IoIosArrowForward className="hover:text-[hsl(var(--color-foreground))]" />
        <span className="hover:text-[hsl(var(--color-foreground))]">
          Technology
        </span>
        <IoIosArrowForward className="hover:text-[hsl(var(--color-foreground))]" />
        <span className="text-[hsl(var(--color-foreground))]">
          Senior Full Stack Developer
        </span>
      </nav>
    </>
  );
};

export default BreadCrumbStatic;
