import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header />
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
      <section className="w-11/12 mx-auto py-8">
        <Navbar />
      </section>
      {/* Main Content Layout (Grid) */}
      <div className="w-11/12 mx-auto py-8 grid md:grid-cols-12 gap-4">
        {/* Left Sidebar (25%) */}
        <aside className="col-span-3 p-4 ">
          
          <LeftNavbar/>
         
        </aside>

        {/* Main Content (50%) */}
        <main className="col-span-6 bg-white p-4 rounded-lg shadow-md">
          <Outlet />
        </main>

        {/* Right Sidebar (25%) */}
        <aside className="col-span-3 p-4 ">
          
          <RightNavbar/>
         
        </aside>
      </div>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
