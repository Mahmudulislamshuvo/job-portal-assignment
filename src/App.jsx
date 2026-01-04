import RegistrationCompany from "./components/registration/RegistrationCompany";
import { Route, Routes } from "react-router-dom";
import Login from "./components/public/login/Login";
import PublicRoute from "./routes/PublicRoute";
import RagistrationUser from "./components/registration/RagistrationUser";
import Home from "./components/home/Home";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register-company" element={<RegistrationCompany />} />
          <Route path="register" element={<RagistrationUser />} />
        </Route>
        <Route element={<PrivateRoutes />}>{/*  */}</Route>
      </Routes>
    </div>
  );
};

export default App;
