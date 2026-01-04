import RegistrationCompany from "./components/registration/RegistrationCompany";
import { Route, Routes } from "react-router-dom";
import Login from "./components/public/login/Login";
import PublicRoute from "./routes/PublicRoute";
import RagistrationUser from "./components/registration/RagistrationUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="register-company" element={<RegistrationCompany />} />
          <Route path="register" element={<RagistrationUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
