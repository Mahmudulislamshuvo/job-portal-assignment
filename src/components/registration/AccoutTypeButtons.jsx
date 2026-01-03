import { useState } from "react";

const AccoutTypeButtons = ({ user }) => {
  const [accountType, setAccountType] = useState("jobseeker");

  return (
    <div className="w-full text-center">
      <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
        <div className="grid grid-cols-2 gap-2 w-full">
          {/* Job Seeker */}
          <button
            onClick={() => setAccountType("jobseeker")}
            className={`btn text-center ${
              accountType === "jobseeker" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <i data-lucide="user" className="h-4 w-4 mr-2"></i>
            Job Seeker
          </button>

          {/* Employer */}
          <button
            onClick={() => setAccountType("employer")}
            className={`btn text-center ${
              accountType === "employer" ? "btn-primary" : "btn-ghost"
            }`}
          >
            <i data-lucide="building-2" className="h-4 w-4 mr-2"></i>
            Employer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccoutTypeButtons;
