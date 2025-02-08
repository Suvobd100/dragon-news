import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  console.log('from nav clg:',user);
  return (
    <div className="flex justify-between">
      <div>{user && user?.email|| user?.displayName}</div>

      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="career">Career</Link>
        <Link to="about">About</Link>
      </div>
      <div className="login flex gap-2">
        {/* Display user login & register user info */}
        <div>
          {user && user?.displayName ? (
            <div>
              <img
                className="w-10 h-10 rounded-3xl"
                src={user?.photoURL}
                alt="user pic"
              />
              <p className="font-semibold">{user?.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>

        {user && user?.displayName ? (
          <button onClick={logOut} className="btn btn-neutral rounded-noe">
            Log-Out
          </button>
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
