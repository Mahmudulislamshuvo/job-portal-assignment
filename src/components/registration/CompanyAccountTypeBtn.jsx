import { Link } from "react-router-dom";

const CompanyAccountTypeBtn = () => {
  return (
    <>
      <div className="w-full text-center">
        <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
          <div className="grid grid-cols-2 gap-2 w-full">
            <Link to={"/register"} className="btn btn-ghost text-center">
              <i data-lucide="user" className="h-4 w-4 mr-2"></i>
              Job Seeker
            </Link>
            <button className="btn btn-primary text-center">
              <i data-lucide="building-2" className="h-4 w-4 mr-2"></i>
              Employer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyAccountTypeBtn;
