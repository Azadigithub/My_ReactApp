import React from "react";
import { LuBed } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { CgDisplayFullwidth } from "react-icons/cg";
const Homeview = () => {
  return (
    <div className="w-[350px] h-[300px] bg-white rounded-2xl">
      <div className="flex h-[70%] items-start justify-start p-[15px] gap-[10px]">
        <button className="w-[88px] h-[33px] bg-My-green-100 !rounded-2xl text-white">
          For Sale
        </button>
        <button className="w-[88px] h-[33px] bg-My-yellow-100 !rounded-2xl">
          Featured
        </button>
      </div>
      <div className="flex flex-col items-start justify-center p-[10px]">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <h5 className="m-0">Eaton Garth Penthouse</h5>
            <div className="flex items-center">
              <IoLocationOutline />
              <p className="m-0">7722 18th Ave, Brooklyn</p>
            </div>
          </div>
          <div className="">
            <h6 className="!text-My-red-100">$180,000</h6>
          </div>
        </div>
        <div className="flex items-start justify-between w-[70%]">
          <div className="flex items-center justify-center text-[12px]">
            <LuBed />4 Beds
          </div>
          <div className="flex items-center justify-center text-[12px]">
            <PiBathtub />2 Baths
          </div>
          <div className="flex items-center justify-center text-[12px]">
            <CgDisplayFullwidth />
            400 sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeview;
