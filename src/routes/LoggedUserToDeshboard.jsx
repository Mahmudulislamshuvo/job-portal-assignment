import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const LoggedUserToDeshboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (user?.role === "USER") {
    navigate("/user-dashboard");
    return;
  } else if (user?.role === "COMPANY") {
    navigate("/company-dashboard");
    return;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default LoggedUserToDeshboard;
