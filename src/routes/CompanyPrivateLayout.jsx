import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const CompanyPrivateLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (user?.role !== "COMPANY") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default CompanyPrivateLayout;
