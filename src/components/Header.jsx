import moment from "moment/moment"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
         <div className="logo">
            <img className="w-[300px]"  src={logo} alt="" />
         </div>
         <h2 className="text-stone-300">Journalism Without Fear or Favour</h2>
         <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Header