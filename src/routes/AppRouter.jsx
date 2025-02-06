import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../components/Home";
import News from "../components/News";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import CategoryNews from "../components/pages/CategoryNews";
import NewsDetails from "../components/NewsDetails";

// Define loader function for category id wise data
// const categoryLoader = async({params})=>{
//   const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`)
//   const data= await res.json()
//   console.log(data);
//   return data
// }

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* when webpage root its goes to redirect by help of Navigate to category/01 */}
          <Route index element={<Navigate to="/category/01" replace />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/" element={<Navigate to={"category/01"}/>} /> */}
          {/* Dynamic category  */}
          <Route path="category/:id" element={<CategoryNews />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        {/* new route alone */}
        <Route>
          <Route path="news/:id" element={<News />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
