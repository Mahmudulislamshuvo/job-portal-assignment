import RegistrationCompany from "./components/registration/RegistrationCompany";
import { Route, Routes } from "react-router-dom";
import RagistrationUser from "./components/registration/RagistrationUser";
import Home from "./components/home/Home";
import PublicLayout from "./routes/PublicLayout";
import PrivateLayout from "./routes/PrivateLayout";
import Login from "./components/public/login/UserLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register-company" element={<RegistrationCompany />} />
          <Route path="register" element={<RagistrationUser />} />
        </Route>
        <Route element={<PrivateLayout />}>{/*  */}</Route>
      </Routes>
    </div>
  );
};

export default App;
