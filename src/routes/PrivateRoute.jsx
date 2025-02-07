import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const loacation = useLocation();
  // console.log(loacation);

  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={loacation.pathname} to={"/auth/login"} />;
};

export default PrivateRoute;
