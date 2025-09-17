import React from "react";
import { LuPhone } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
// import Shop from "../Shop";
import { Link, useRoutes } from "react-router-dom";
const routes = [
  { path: "/" },
  //  { path: "/ُShop", element: <Shop /> },
];

const Header = (props) => {
  const router = useRoutes(routes);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1>Header</h1> */}
      <div className="w-full maxh-[858px] relative p-[20px]">
        <img src={props.image} alt="" className="w-full rounded-2xl" />
      </div>
      <div className="flex items-center justify-between w-full mt-[30px] absolute top-[30px] ">
        <div className="w-[15%] flex justify-center p-[30px]">
          <img src="../public/Images/logo-white.png" alt="" />
        </div>
        <nav className="w-[50%]">
          <ul className="Menu flex items-center justify-center gap-[30px] w-full m-0">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black!"
              >
                Home
              </Link>
              <Link
                to="/Details"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black!"
              >
                det
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black! "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black!"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black!"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="text-white hover:bg-white p-[10px] rounded-2xl  hover:text-black!"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="bg-white text-black p-[10px] rounded-2xl"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/Signin"
                className="bg-white text-black p-[10px] rounded-2xl"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center w-[30%] gap-[10px] text-white">
          <LuPhone />
          <h6 className="m-0">+68 685 88666</h6>
          <button className="border-white border-[1px] p-[5px] !rounded-[100px]">
            <IoPersonOutline />
          </button>
          <button className="border-white border-[1px] px-[10px] py-[5px] !rounded-[10px]">
            Add Property
          </button>
        </div>
      </div>
      <div className="absolute top-[200px] flex flex-col items-center justify-center gap-[20px]">
        <button className="border-white text-white border-[1px] p-[5px] px-[20px] py-[10px] hover:bg-white hover:text-black!">
          LET US GUIDE YOUR HOME
        </button>
        <h2 className="text-white">Discover a place you'll love to live</h2>
        <div className="flex w-[690px] h-[70px] mt-[150px] bg-white rounded-[50px] pl-[30px] p-[10px]">
          <input
            type="text"
            placeholder="Enter Name, Keywords..."
            className="w-full h-full outline-0 "
          />
          <button className="border-none bg-My-yellow-100 p-[5px] !rounded-[100px] px-[20px]">
            <CiSearch />
          </button>
        </div>
      </div>
      {router}
    </div>
  );
};

export default Header;
