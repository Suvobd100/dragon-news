import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AuthLayout = () => {
  return (
    <div className="font-Poppins bg-stone-100">
        <header className=" py-8 w-11/12 mx-auto">
          <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>Auth Footer</footer>
    </div>
  )
}

export default AuthLayout