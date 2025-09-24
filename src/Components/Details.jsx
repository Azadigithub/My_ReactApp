import React from "react";
import { useParams } from "react-router-dom";
import { Homedata } from "./Home";
import Header from "./SubComponents/Header";

const Details = () => {
  const { id } = useParams();
  const product = Homedata.find((item) => item.id === Number(id));
  const similarHomes = Homedata.filter(
    (item) => item.bed === product.bed && item.id !== product.id
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        محصول پیدا نشد 😢
      </div>
    );
  }

  return (
    <div className="">
      <Header image="/Images/Header_images/element2.jpg" />
      <div className="">
        <div className="flex items-center justify-center max-w-[1200px] my-7 mx-auto ">
          <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Home details*/}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 mb-6">{product.location}</p>

                <div className="text-xl text-green-600 font-semibold mb-6">
                  {product.price}
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-gray-700">
                  <div>
                    <p className="text-lg font-medium">{product.bed}</p>
                    <p className="text-sm">Beds</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{product.bathroom}</p>
                    <p className="text-sm">Bath</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{product.sqft}m</p>
                    <p className="text-sm">Area</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Call
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Return
                </button>
              </div>
            </div>
            {/* بخش پایین: خانه‌های مشابه */}
          </div>
          <div>
            <div className="w-64 hidden lg:block">
              <div className="sticky top-24 bg-white border rounded-lg p-4 shadow-md ">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Filters
                </h2>

                {/* فیلتر تعداد خواب */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <label className="block text-sm font-medium mb-1">Beds</label>
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>All</option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
                    <option>4+</option>
                  </select>
                </div>
                <hr className="mb-4" />

                {/* فیلتر قیمت */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <label className="block text-sm font-medium mb-1">
                      from
                    </label>
                    <input
                      type="text"
                      className="w-full block font-medium mb-1 rounded px-3 text-sm border-2 border-gray-600"
                    />
                    <label className="block text-sm font-medium mb-1">to</label>
                    <input
                      type="text"
                      className="w-full block font-medium mb-1 rounded px-3 text-sm border-2 border-gray-600"
                    />
                  </div>
                </div>
                <hr className="mb-4" />

                {/* فیلتر موقعیت */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>All</option>
                    <option>Paris</option>
                    <option>Marseille</option>
                    <option>Lille</option>
                    <option>Rouen</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-10 transition">
                  Apply filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {similarHomes.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Similar Homes
            </h2>
            <div className="flex w-full p-[60px]">
              <div className="flex gap-6 w-max">
                {similarHomes.map((home) => (
                  <div
                    key={home.id}
                    className="min-w-[250px] bg-white border rounded-lg shadow-md hover:shadow-lg transition p-4"
                  >
                    <img
                      src={home.image}
                      alt={home.title}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-lg font-semibold text-gray-700">
                      {home.title}
                    </h3>
                    <p className="text-sm text-gray-500">{home.location}</p>
                    <p className="text-green-600 font-semibold mt-2">
                      {home.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
