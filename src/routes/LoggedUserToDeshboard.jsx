import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoggedUserToDeshboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "USER") {
      navigate("/user-dashboard");
    } else if (user?.role === "COMPANY") {
      navigate("/company-dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default LoggedUserToDeshboard;
