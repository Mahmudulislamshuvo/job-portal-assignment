import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return <div>UserDashboard</div>;
};

export default UserDashboard;
