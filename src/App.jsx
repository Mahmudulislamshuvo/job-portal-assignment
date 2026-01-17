import RegistrationCompany from "./components/registration/Company/RegistrationCompany";
import { Route, Routes } from "react-router-dom";
import RagistrationUser from "./components/registration/User/RagistrationUser";
import Home from "./components/userComponents/home/Home";
import Login from "./components/public/login/Login";
import PublicLayout from "./routes/PublicLayout";
import LoggedUserToDeshboard from "./routes/LoggedUserToDeshboard";
import UserDashboard from "./components/userComponents/dashboard/UserDashboard";
import UserProfile from "./components/userComponents/home/UserProfile/UserProfile";
import EditUserProfile from "./components/userComponents/home/editUserProfile/EditUserProfile";
import AppliedJobs from "./components/userComponents/home/appliedJobs/AppliedJobs";
import Unauthorized from "./components/userComponents/UnAthorized";
import JobDetails from "./components/userComponents/home/JobDetails/JobDetails";
import UserPrivateLayout from "./routes/UserPrivateLayout";
import PrivateLayout from "./routes/PrivateLayout";
import CompanyPrivateLayout from "./routes/CompanyPrivateLayout";
import CompanyProfle from "./components/companyComponents/companyProfile/CompanyProfle";
import NotFound from "./components/commonComponents/NotFound";
import AllApplicants from "./components/companyComponents/applicants/AllApplicants";
import CompanyDashboard from "./components/companyComponents/conpanyDashboard/CompanyDashboard";
import CreateJob from "./components/companyComponents/createJob/CreateJob";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<LoggedUserToDeshboard />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register-company" element={<RegistrationCompany />} />
            <Route path="/register-user" element={<RagistrationUser />} />
          </Route>
          <Route path="/job-details/:id" element={<JobDetails />} />
        </Route>
        {/* Public Routes end */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<PrivateLayout />}>
          <Route element={<UserPrivateLayout />}>
            {/* Only for users */}
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/edit-user-profile" element={<EditUserProfile />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
          </Route>
          {/* Company and user both can access start */}
          <Route path="/company/profile/:slug" element={<CompanyProfle />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* Company and user both can access End */}
          <Route element={<CompanyPrivateLayout />}>
            {/* only for company */}
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/company/applicants" element={<AllApplicants />} />
            <Route path="/company/create-job" element={<CreateJob />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
