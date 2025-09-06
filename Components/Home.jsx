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
    // <div className=" ">
    //   {/* __Header */}
    //   <div className="w-full h-[50vh] relative bg-linear-to-b/decreasing  from-indigo-300 to-white z-[-2]">
    //     <div className="w-[600px] h-[600px]  bg-linear-to-b/srgb from-blue-300 to-blue-600 rounded-[90%] absolute right-[-100px] top-[-310px] z-[-1]"></div>
    //     <nav className="w-[90%] mx-auto  sticky top-0 ">
    //       <h1>Snnap Shop !</h1>
    //       <div className="flex items-center justify-between w-[50%]">
    //         <div className=" w-[50%]">
    //           <ul className=" flex items-center justify-evenly w-[100%] pt-[20px] ">
    //             <li className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white">

    //               Home
    //             </li>
    //             <li className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white">

    //               About us
    //             </li>
    //             <li className="px-[15px] py-[10px] bg-blue-500 rounded-[10px] text-white">

    //               Contact
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="flex gap-[10px]">
    //           <Link
    //             to="/Shop"
    //             className="px-[15px] py-[10px] bg-white rounded-[10px] text-blue-500 border-blue-500 border-2"
    //           >
    //             Shop
    //           </Link>
    //           <Link
    //             to="/Login"
    //             className="px-[15px] py-[10px] bg-white rounded-[10px] text-blue-500 border-blue-500 border-2"
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>

    //   <div className="grid grid-cols-[repeat(5,minmax(0,200px))] items-center justify-center gap-3 py-[60px]">
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100  z-[2]"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //     <div className="w-[200px] h-[300px] bg-amber-100"></div>
    //   </div>
    //   <div className="w-full h-[50vh] bg-linear-to-b/srgb from-white to-indigo-300 relative"></div>
    //   {/* <div className="w-[600px] h-[600px] bg-blue-600 rounded-[90%] absolute left-[-100px] top-[-310px] z-[1]"></div> */}
    //   {router}
    // </div>
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
      </main>
    </div>
  );
};

export default Home;
