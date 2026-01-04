import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarPublic from "../components/public/NavbarPublic";
import AuthProvider from "../provider/AuthContext";

const PrivateRoutes = () => {
  return (
    <div>
      <NavbarPublic />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      <Footer />
    </div>
  );
};

export default PrivateRoutes;
