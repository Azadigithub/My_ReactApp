import Login from "./Login";
import Shop from "./Shop";
import { Link, useRoutes } from "react-router-dom";
import Notfound from "./Notfound";
import Header from "./SubComponents/Header";
import Homeview from "./SubComponents/Homeview";
import { FaRegDotCircle } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import Footer from "./SubComponents/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import Homedetails from "./SubComponents/Homedetails";
import { LineUtil } from "leaflet";

const routes = [
  { path: "/" },
  { path: "/Login", element: <Login /> },
  { path: "/Shop", element: <Shop /> },
  // { path: "/detials", element: <Homedetails/> },
  { path: "*", element: <Notfound /> },
];
const Home = () => {
  const Homedata = [
    {
      id: 1,
      title: "Eaton Garth Penthouse",
      ForSale: true,
      Featured: false,
      image: "/Images/Homes/Home_1.jpg",
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
      Featured: false,
      image: "/Images/Homes/Home_2.jpg",
      location: "4330 Bell Shoals Rd",
      price: "$250/month",
      bed: 4,
      bathroom: 3,
      sqft: 400,
    },
    {
      id: 3,
      title: "Luxury Family Home",
      ForSale: false,
      Featured: true,
      image: "/Images/Homes/Home_3.png",
      location: "1800-1818 79th St",
      price: "$395,000",
      bed: 4,
      bathroom: 4,
      sqft: 450,
    },
    {
      id: 4,
      title: "Diamond Manor Apartment",
      ForSale: true,
      Featured: true,
      image: "/Images/Homes/Home_4.png",
      location: "7802 20th Ave, Brooklyn",
      price: "$259,000",
      bed: 4,
      bathroom: 2,
      sqft: 400,
    },
    {
      id: 5,
      title: "New Apartment Nice Wiew",
      ForSale: true,
      Featured: false,
      image: "/Images/Homes/Home_5.png",
      location: "42 Avenue O, Brooklyn",
      price: "$850/month",
      bed: 3,
      bathroom: 1,
      sqft: 460,
    },
    {
      id: 6,
      title: "Eaton Garth Penthouse",
      ForSale: false,
      Featured: true,
      image: "/Images/Homes/Home_6.png",
      location: "7722 18th Ave, Brooklyn",
      price: "$140,000",
      bed: 4,
      bathroom: 3,
      sqft: 400,
    },
    {
      id: 7,
      title: "Eaton Garth Penthouse",
      ForSale: true,
      Featured: true,
      image: "/Images/Homes/Home_7.jpg",
      location: "7722 18th Ave, Brooklyn",
      price: "$480,000",
      bed: 4,
      bathroom: 3,
      sqft: 400,
    },
    {
      id: 8,
      title: "Eaton Garth Penthouse",
      ForSale: false,
      Featured: true,
      image: "/Images/Homes/Home_8.jpg",
      location: "7775 12th Ave, Brooklyn",
      price: "$140,000",
      bed: 3,
      bathroom: 3,
      sqft: 400,
    },
    {
      id: 9,
      title: "Eaton Garth Penthouse",
      ForSale: true,
      Featured: true,
      image: "/Images/Homes/Home_9.jpg",
      location: "7522 19th Ave, Brooklyn",
      price: "$175,000",
      bed: 2,
      bathroom: 3,
      sqft: 400,
    },
    {
      id: 10,
      title: "Penthouse",
      ForSale: false,
      Featured: true,
      image: "/Images/Homes/Home_10.jpg",
      location: "7222 19th Ave, Brooklyn",
      price: "$110,000",
      bed: 2,
      bathroom: 1,
      sqft: 400,
    },
    {
      id: 11,
      title: "Eaton Garth",
      ForSale: true,
      Featured: true,
      image: "/Images/Homes/Home_11.jpg",
      location: "7722 18th Ave, Brooklyn",
      price: "$950,000",
      bed: 4,
      bathroom: 2,
      sqft: 400,
    },
    {
      id: 12,
      title: "Eaton",
      ForSale: true,
      Featured: false,
      image: "/Images/Homes/Home_12.jpg",
      location: "7722 18th Ave, Brooklyn",
      price: "$70,000",
      bed: 1,
      bathroom: 1,
      sqft: 400,
    },
  ];
  const [allHomes] = useState(Homedata);
  const [homeInfows, setHomeInfows] = useState(Homedata);
  const [activebuttons, setActivebuttons] = useState("All");

  const ForSaleHandler = () => {
    const filtered = allHomes.filter((item) => item.ForSale);
    // console.log(filtered);
    setHomeInfows(filtered);
    // const preve = setHomeInfows((preveState)=>{
    //   console.log(preveState);
    //   return preveState
    // });
    // console.log(preve);

    setActivebuttons("sale");
  };
  const ForRentHandler = () => {
    const filtered = allHomes.filter((item) => item.Featured);
    // console.log(filtered);
    setHomeInfows(filtered);
    // console.log("Rent");
    setActivebuttons("Rent");
  };
  const AllHomesHandler = () => {
    setHomeInfows(allHomes);
    // console.log("All");
    setActivebuttons("All");
  };

  const router = useRoutes(routes);
  return (
    <div className="bg-white">
      <Header image="/Images/Header_images/elements.png" />
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
            <div className="flex w-[70%] items-center justify-between">
              <div className="flex flex-col ">
                <h1>Featured Properties</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center justify-center gap-[10px]">
                {/* <h6>View All Cities</h6>
                <FaArrowRight size={14} /> */}
                {/* bg-My-yellow-50 border-black border-1 rounded-2xl! */}
                <button
                  onClick={AllHomesHandler}
                  className={`hover:cursor-pointer ${
                    activebuttons === "All"
                      ? "bg-My-yellow-50 border-black border-1 rounded-2xl! p-2"
                      : "p-2"
                  }`}
                >
                  All Properties
                </button>
                <button
                  onClick={ForSaleHandler}
                  className={`hover:cursor-pointer ${
                    activebuttons === "sale"
                      ? "bg-My-yellow-50 border-black border-1 rounded-2xl! p-2"
                      : "p-2"
                  }`}
                >
                  For Sale
                </button>
                <button
                  onClick={ForRentHandler}
                  className={`hover:cursor-pointer ${
                    activebuttons === "Rent"
                      ? "bg-My-yellow-50 border-black border-1 rounded-2xl! p-2"
                      : "p-2"
                  }`}
                >
                  For Rent
                </button>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(3,minmax(350px,200px))]  gap-[20px] ">
              {homeInfows.map((item) => (
                <Link to={`/detials`} >
                  <Homeview key={item.id} {...item} />
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-[5px] ">
              <FaRegDotCircle />
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
              <img
                src="/Images/Cities/c1.jpg.png"
                alt=""
                className="w-full h-full rounded-[10px] "
              />
            </div>
            <div className="  h-[300px] rounded-[10px]">
              <img
                src="/Images/Cities/c2.jpg.png"
                alt=""
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div className="h-[300px] rounded-[10px]">
              <img
                src="/Images/Cities/c3.jpg.png"
                alt=""
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div className="h-[300px] rounded-[10px]">
              <img
                src="/Images/Cities/c4.jpg.png"
                alt=""
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div className=" h-[300px] rounded-[10px]">
              <img
                src="/Images/Cities/City_5.png"
                alt=""
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <div className="h-[300px] col-span-2 rounded-[10px]">
              <img
                src="/Images/Cities/City_6.png"
                alt=""
                className="w-full h-full rounded-[10px]  "
              />
            </div>
          </div>
        </div>
        <div className="max-w-[90%] mx-auto"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
