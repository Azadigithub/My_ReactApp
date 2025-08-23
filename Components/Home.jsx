import React, { useEffect, useState } from "react";
import Login from "./Login";
import Shop from "./Shop";
import { Link , useRoutes } from "react-router-dom";
import Notfound from "./Notfound";
const routes = [
  { path: "/", },
  { path: "/Login", element: <Login /> },
  { path: "/ُShop", element: <Shop /> },
    { path: "*", element: <Notfound /> },
];
const Home = () => {
  const router = useRoutes(routes);
  return (
    <div>
      Home
      <Link to="/Login">Login</Link>
      <Link to="/Shop">Shop</Link>
      {router}
    </div>
  );
};

export default Home;
