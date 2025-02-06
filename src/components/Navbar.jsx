import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between">
      <div>{user && user.name}</div>

      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="career">Career</Link>
        <Link to="about">About</Link>
      </div>
      <div className="login flex gap-2">
        <img src={userIcon} alt="" />
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-noe">Log-Out</button>
        ) : (
          <Link to={"auth/login"} className="btn btn-neutral rounded-noe">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
