import { Link } from "react-router-dom"
import userIcon from "../assets/user.png"
import Login from "./Login"

const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div></div>
        <div className="nav space-x-5">
            
                <Link to="/">Home</Link>
                <Link to="career">Career</Link>
                <Link to="about">About</Link>
            
        </div>
        <div className="login flex gap-2">
            <img src={userIcon} alt="" />
            <Link to={"auth/login"} className="btn btn-neutral rounded-noe">Login</Link>
        </div>

    </div>
  )
}

export default Navbar