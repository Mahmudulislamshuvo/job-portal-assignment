import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarPublic from "../components/NavbarPublic";

const PrivateLayout = () => {
  return (
    <div>
      <NavbarPublic />
      {/* <AuthProvider> */}
      <Outlet />
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
};

export default PrivateLayout;
