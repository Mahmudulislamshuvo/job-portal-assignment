import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";

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
      <Navbar />
      {/* <AuthProvider> */}
      <Outlet />
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
};

export default UserPrivateLayout;
