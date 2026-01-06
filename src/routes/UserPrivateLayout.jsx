import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import UserNavbar from "../components/navbar/UserNavbar";

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
      <UserNavbar />
      {/* <AuthProvider> */}
      <Outlet />
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
};

export default UserPrivateLayout;
