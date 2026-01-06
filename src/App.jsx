import RegistrationCompany from "./components/registration/RegistrationCompany";
import { Route, Routes } from "react-router-dom";
import RagistrationUser from "./components/registration/RagistrationUser";
import Home from "./components/home/Home";
import PrivateLayout from "./routes/UserPrivateLayout";
import Login from "./components/public/login/Login";
import UserDashboard from "./components/dashboard/UserDashboard";
import Unauthorized from "./components/UnAthorized";
import PublicLayout from "./routes/PublicLayout";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-company" element={<RegistrationCompany />} />
          <Route path="/register" element={<RagistrationUser />} />
        </Route>
        {/* Public Routes end */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<PrivateLayout />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
