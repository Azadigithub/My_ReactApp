import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import { Link, useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import Notfound from "./Components/Notfound";
import Users from "./Users";
import Details from "./Components/Details";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Shop", element: <Shop /> },
  { path: "/Details", element: <Details /> },
  { path: "*", element: <Notfound /> },
];

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {/* <Users /> */}
      {/* <ReactBootstrap/> */}
      {router}
    </>
  );
}

export default App;
