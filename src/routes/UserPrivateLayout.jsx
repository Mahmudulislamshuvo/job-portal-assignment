import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarPublic from "../components/NavbarPublic";
import { useSelector } from "react-redux";

const UserPrivateLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "USER") {
    return <Navigate to="/unauthorized" replace />;
  }
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

export default UserPrivateLayout;
