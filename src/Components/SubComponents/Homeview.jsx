import React from "react";
import { LuBed } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { CgDisplayFullwidth } from "react-icons/cg";

const Homeview = ({
  id,
  title,
  price,
  image,
  location,
  bed,
  bathroom,
  sqft,
  ForSale,
  Featured,
}) => {
  const HomeDetailsViewer = (Id) => {
    console.log(Id);
  };
  // let {title , price , image , location} = props
  return (
    <div
      onClick={() => HomeDetailsViewer(id)}
      className="relative w-[350px] h-[300px] bg-white rounded-2xl hover:cursor-pointer"
      key={id}
    >
      <div className="flex h-[70%] items-start justify-start p-[15px] gap-[10px] ">
        {ForSale && (
          <button className="w-[88px] h-[33px] bg-My-green-100 z-2 !rounded-2xl text-white">
            For Sale
          </button>
        )}
        {Featured && (
          <button className="w-[88px] h-[33px] z-2 bg-My-yellow-100 !rounded-2xl">
            Featured
          </button>
        )}
        <div className="absolute top-0 left-0 w-full h-[75%] p-[10px]">
          <img
            src={image}
            loading="lazy"
            alt=""
            className="w-full h-full rounded-2xl "
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-[10px]">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <h6 className="m-0">{title}</h6>
            <div className="flex items-center">
              <IoLocationOutline />
              <p className="m-0">{location}</p>
            </div>
          </div>
          <div className="">
            <h6 className="!text-My-red-100">{price}</h6>
          </div>
        </div>
        <div className="flex items-start justify-between w-[70%]">
          <div className="flex items-center justify-center text-[12px] gap-[10px]">
            <LuBed />
            {bed}
          </div>
          <div className="flex items-center justify-center text-[12px] gap-[5px]">
            <PiBathtub />
            {bathroom}
          </div>
          <div className="flex items-center justify-center text-[12px] gap-[5px]">
            <CgDisplayFullwidth />
            {sqft}
          </div>
        </div>
      </div>
    </div>
  );
};

Homeview.defaultProps = {
  image: "/Images/Homes/Home_2.jpg",
};

export default Homeview;
