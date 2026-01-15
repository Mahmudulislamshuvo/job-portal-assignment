import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/userComponents/Footer";

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
