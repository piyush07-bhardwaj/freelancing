import React from "react";
import Sidebar from "../Category/Sidebar";
import ProductCard from "../Category/ProductCard";
import { useNavigate } from "react-router-dom";

const ShopClearence = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="catalog-container border border-b-[1px] mb-5 pb-3 ">
        <div className="catalog w-[75%] sm:w-full m-auto ">
          <div className="p-5">
            <h1 className="text-[2rem]">Clearence.</h1>
            <hr />
          </div>
          <div className="w-full bg-slate-300 flex  sm:flex-col p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-3xl">
              0% Interest For 12 Months
            </p>
            <p className="m-2  align-middle">Instant credit decision</p>
            <button className="bg-black text-white m-2 p-2 align-middle">
              <a href="/final-deploy/contacts">Apply Now</a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[75%] m-auto mb-[5rem] sm:w-full">
        <div className="flex ">
          <div id="sidebar" className="w-[40%] sm:hidden sticky top-0">
            <Sidebar />
          </div>

          <div className="flex-grow md:w-full">
            <div className="flex flex-wrap justify-center mt-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="items-center text-center m-5 product-container hover:bg-slate-200 cursor-pointer transition-transform transform hover:-translate-y-2"
                >
                  <img
                    src={
                      "https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
                    }
                    alt="image"
                    className="h-[150px] w-[150px] md:h-[100px] md:w-[100px] m-4"
                  />
                  <span className="font-semibold text-lg">{name}</span>
                </div>
              ))}
            </div>

            <div className="ml-8 mt-10 border-t-[1px] p-5">
              <p className="font-bold text-3xl ">Products</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 m-5">
              <ProductCard />

              <ProductCard />

              <ProductCard />

              <ProductCard />
            </div>
          </div>
        </div>

        <div className="text-xl items-center mt-5 border-t-[1px]">
          <p className="ml-2 p-5">Recently viewed</p>
          <div className="product-container flex flex-col justify-between h-[300px] w-[250px]  cursor-pointer m-2">
            <div className="m-auto">
              <img
                src="https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
                alt="#"
                className="bg-transparent h-[100px] w-[150px] mt-2"
              />
            </div>
            <div className="p-3 ">
              <div className="color ">
                <div className=" rounded-full border border-orange-200 flex justify-center items-center  w-[2rem] h-[2rem] ">
                  <div className="rounded-full bg-orange-200 hover:border hover:border-black w-[1.5rem] h-[1.5rem]"></div>
                </div>
              </div>
              <div className="title font-semibold pt-2 text-sm">
                Product Title
              </div>
              <div className="parent text-gray-600 pt-2 text-sm">
                Product Category
              </div>
              <div className="price font-semibold pt-2 text-sm">$9999</div>
            </div>
          </div>
        </div>
        <div className="login mt-20 opacity-90" onClick={handleHome}>
          <h1 className="text-[2rem] pt-2">Back to Shopping</h1>
          <div>
            <button className="bg-black text-white p-3 rounded-sm hover:border border-none cursor-pointer">
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopClearence;
