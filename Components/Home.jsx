import React, { useEffect, useState } from "react";
import Login from "./Login";
import Shop from "./Shop";
import { Link, useRoutes } from "react-router-dom";
import Notfound from "./Notfound";
import Header from "./SubComponents/Header";
import Homeview from "./SubComponents/Homeview";
import { FaRegDotCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";
import Mymap from "./SubComponents/Mymap";
import Footer from "./SubComponents/Footer";

const HomeInfows = [
  {
    id: 1,
    title: "Eaton Garth Penthouse",
    ForSale: true,
    image: "../../public/Images/Homes/Home_1.jpg",
    location: "7722 18th Ave, Brooklyn",
    price: "$180,000",
    bed: 4,
    bathroom: 2,
    sqft: 400,
  },
  {
    id: 2,
    title: "North Dillard Street",
    ForSale: true,
    image: "../../public/Images/Homes/Home_2.jpg",
    location: "4330 Bell Shoals Rd",
    price: "$250/month",
    bed: 4,
    bathroom: 3,
    sqft: 400,
  },
  {
    id: 3,
    title: "Eaton Garth Penthouse",
    image: "",
    location: "7722 18th Ave, Brooklyn",
    price: "$230,000",
    bed: 3,
    bathroom: 1,
    sqft: 400,
  },
];
const routes = [
  { path: "/" },
  { path: "/Login", element: <Login /> },
  { path: "/ُShop", element: <Shop /> },
  { path: "*", element: <Notfound /> },
];
const Home = () => {
  const router = useRoutes(routes);
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center">
          <h1>Homes For You</h1>
          <p>Based on your view history</p>
        </div>
        {/* Home views  */}
        <div className="">
          {/* {HomeInfows.map((HomeInfow) => {
            console.log('llll');
            
            <Homeview {...HomeInfow} />
          })} */}
          <div className="flex flex-col bg-My-gray-100 items-center justify-center p-[40px] m-[20px] rounded-2xl gap-[40px]">
            <div className="grid grid-cols-[repeat(3,minmax(350px,200px))]  gap-[20px] ">
              <Homeview {...HomeInfows[0]} />
              <Homeview {...HomeInfows[1]} />
              <Homeview {...HomeInfows[2]} />
            </div>
            <div className="flex items-center justify-center gap-[5px] ">
              <FaRegDotCircle />
              {/* <HiDotsHorizontal /> */}
              <RxDotFilled />
              <RxDotFilled />
              <RxDotFilled />
              <RxDotFilled />
            </div>
          </div>
        </div>
        {/* Find Properties in These Cities */}
                <div className="flex flex-col items-center justify-center">
          <h1>Find Properties in These Cities</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className=" grid grid-cols-4 items-center justify-center gap-4 m-[30px]">
            <div className=" h-[300px] col-span-2 rounded-[10px]">
              <img src="../public/Images/Cities/c1.jpg.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className="  h-[300px] rounded-[10px]">
              <img src="../public/Images/Cities/c2.jpg.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className="h-[300px] rounded-[10px]">
              <img src="../public/Images/Cities/c3.jpg.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className="h-[300px] rounded-[10px]">
              <img src="../public/Images/Cities/c4.jpg.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className=" h-[300px] rounded-[10px]">
              <img src="../public/Images/Cities/City_5.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className="h-[300px] col-span-2 rounded-[10px]">
              <img src="../public/Images/Cities/City_6.png" alt="" className="w-full h-full rounded-[10px]"/>
            </div>
          </div>
        </div>
        <div className="max-w-[90%] mx-auto">

        {/* <Mymap/> */}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
