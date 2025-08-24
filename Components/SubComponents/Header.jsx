import React from "react";
import { LuPhone } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      {/* <h1>Header</h1> */}
      <div className="w-full maxh-[858px] relative">
        <img
          src="../../public/Images/Header_images/elements.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-between w-full mt-[30px] absolute top-[30px] ">
        <div className="w-[15%] flex justify-center">
          <img src="../public/Images/logo-white.png" alt="" />
        </div>
        <nav className="w-[50%]">
          <ul className="Menu flex items-center justify-evenly w-full m-0">
            <li>
              <a href="/" className="text-white ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white ">
                Listings
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white ">
                Members
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white ">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white ">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white ">
                Pages
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white ">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center w-[30%] gap-[10px] text-white">
          <LuPhone />
          <h6 className="m-0">
          +68 685 88666
          </h6>
          <button className="border-white border-[1px] p-[5px] !rounded-[100px]">          <IoPersonOutline /></button>
          <button className="border-white border-[1px] px-[10px] py-[5px] !rounded-[10px]">Add Property</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
