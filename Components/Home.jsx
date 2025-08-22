import React from "react";
import Login from "./Login";
import Shop from "./Shop";
import { Link, useRoutes } from "react-router-dom";
import Notfound from "./Notfound";
const routes = [
  { path: "/" },
  { path: "/Login", element: <Login /> },
  { path: "/ُShop", element: <Shop /> },
  { path: "*", element: <Notfound /> },
];
const Home = () => {
  const router = useRoutes(routes);
  return (
    <div className=" ">
      {/* __Header */}
      <div className="w-full h-[50vh] bg-linear-to-b/decreasing  from-indigo-300 to-white">
        <nav className="w-[90%] mx-auto  sticky top-0 ">
          <h1>Snnap Shop !</h1>
          <ul className=" flex items-center justify-evenly w-[50%] pt-[20px] ">
            <li  className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white"> Home</li>
            <li  className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white"> About us</li>
            <li  className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white"> Contact</li>
            <Link to="/Shop" className="px-[15px] py-[10px] bg-white rounded-[10px] text-blue-500 border-blue-500 border-2">Shop</Link>
            <Link to="/Login" className="px-[15px] py-[10px] bg-white rounded-[10px] text-blue-500 border-blue-500 border-2">Login</Link>
          </ul>
        </nav>
      </div>

      <div className="grid grid-cols-[repeat(5,minmax(0,200px))] items-center justify-center gap-3 py-[60px]">
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
        <div className="w-[200px] h-[300px] bg-amber-100"></div>
      </div>
      <div className="w-full h-[50vh] bg-linear-to-b/srgb from-white to-indigo-300"></div>
      {router}
    </div>
  );
};

export default Home;
