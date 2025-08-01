import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactBootstrap from "../Components/ReactBootstrap";
import Login from "../Components/Login";
import Shop from "../Components/Shop";
import { Link, useRoutes } from "react-router-dom";

import Home from "../Components/Home";
import Notfound from "../Components/Notfound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Shop", element: <Shop /> },
    { path: "*", element: <Notfound /> },

];

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {/* <ReactBootstrap/> */}
      {router}
    </>
  );
}

export default App;
