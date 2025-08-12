import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import SmallProductCard from "../Category/SmallProductCard.jsx";
import Slider from "./Slider.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const ProductDetails = () => {
  const { name } = useParams();
  const [dropDown, setDropdown] = useState(false);
  const [title, setTitle] = useState(false);
  const toggleDropdown = (title) => {
    setTitle(title);
    setDropdown(!dropDown);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleLinks = () => {
    navigate("/collections/Living Room");
  };

  const handleCart = () => {
    toast.success("Added to cart.");
  };
  const slider1 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Massimo-Shawl-Turkish-Luxury-Furniture-Set-5_b856b289-db9c-465b-8787-b9a7e8bddffb_900x.jpg?v=1719919826";

  const slider2 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Vavilion-Turkish-Furniture-Sectional-3_a9d9b235-4452-49fa-9e8a-db9d7641f44e_900x.jpg?v=1719922023";

  const slider3 =
    "https://www.istanbulfurniture.com/cdn/shop/files/Ist-Showroom_900x.jpg?v=1685460202";

  const slider4 =
    "https://www.istanbulfurniture.com/cdn/shop/files/financing2_-_Copy_-_Copy_900x.png?v=1661184724";
  const imageUrls = [slider1, slider2, slider3, slider4];

  const content = (
    <>
      <div className="flex flex-col w-[75%]  m-auto mt-5">
        <div className="flex gap-3 w-full items-center md:flex-col sm:flex-col ">
          <div className=" md:w-full">
            <div className="w-[660px] h-[495px] md:w-full  ">
              <Slider imageUrls={imageUrls} />
            </div>
          </div>
          <div className=" p-3 w-full h-[600px] md:w-full">
            <div className=" mb-3">
              <h1 className="text-2xl">Title of product</h1>
            </div>
            <div>
              <p className="text-gray-500 underline">Category of product</p>
            </div>
            <div>
              <p className="font-bold mt-5 mb-5"> Colors</p>
              <div className="flex gap-2 ">
                <div className="rounded-full flex justify-center items-center h-[30px] w-[30px] border border-emerald-600 ">
                  <div className="rounded-full bg-emerald-600 h-[25px] w-[25px]  cursor-pointer"></div>
                </div>
                <div className="rounded-full flex justify-center items-center h-[30px] w-[30px] border border-blue-600 ">
                  <div className="rounded-full bg-blue-600 h-[25px] w-[25px]  cursor-pointer"></div>
                </div>
                <div className="rounded-full flex justify-center items-center h-[30px] w-[30px] border border-orange-200 ">
                  <div className="rounded-full bg-orange-200 h-[25px] w-[25px]  cursor-pointer"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mt-5 mb-5">Set</p>
              <div className="flex flex-wrap gap-3">
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
              </div>

              <div>
                <p className="font-bold mt-5 mb-5">Price</p>
                <p className="font-bold mt-5 mb-5">$1,999</p>
              </div>
              <div>
                <div>
                  <p className="text-gray-500">Carbon Neutral</p>
                </div>
                <div>
                  <p className="text-gray-500">Secure Payments</p>
                </div>
              </div>

              <div className="w-full mt-5 text-center ">
                <button
                  className="border w-full border-black p-2 rounded-sm hover:bg-black hover:text-white text-black"
                  onClick={handleCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="description mt-10  mb-10 md:mb-5 md:mt-5 flex justify-center items-center text-center p-3 h-[10%] w-full ">
          <ul className=" w-[50%] md:w-full ">
            <li
              onClick={(e) => toggleDropdown("Description")}
              className="cursor-pointer text-xl md:text-sm p-3 border-b-[1px]  flex justify-between  hover:bg-neutral-200 "
            >
              Description
              <span
                className={
                  dropDown && title === "Description"
                    ? "transform: rotate-180 ease-out duration-75"
                    : null
                }
              >
                <IoIosArrowDown />
              </span>
            </li>
            {dropDown && title === "Description" ? (
              <div className="p-3 ease-in-out duration-300 ">
                <p className="text-start mb-2 mt-1 ">
                  Sofa (Gray) Overall Dimensions 31.5" H x 102" W x 39"D
                </p>
                <p className="text-start mb-2 mt-1 ">
                  Sofa (Brown) Overall Dimensions 32" H x 89" W x 39"D
                </p>
                <p className="text-start mb-2 mt-1 ">
                  Chair Overall Dimensions 30" H x 31.5" W x 32" D
                </p>
                <p className="text-start mb-2 mt-1 ">
                  Coffee Table Overall Dimensions 17" H x 59" W x 35" D
                </p>
                <p className="text-start mb-2 mt-1 ">
                  Side Table Overall Dimensions 23" H x 18" W x 19.6"D
                </p>
                <p className="text-start mb-2 mt-1 ">
                  <span className="font-bold">Please Note:</span> Sizes and
                  weights are approximate and may vary slightly from the ones
                  given above. Due to differences in monitors, we cannot be
                  responsible for variations in color between the actual item
                  and your screen. Please be advised that we display the
                  standard shape and/or size in some cases; the shapes, sizes,
                  patterns and colors may vary.
                </p>
              </div>
            ) : null}
            <li
              onClick={(e) => toggleDropdown("Shipping")}
              className="cursor-pointer text-xl p-3  md:text-sm border-b-[1px]  flex justify-between hover:bg-neutral-200"
            >
              Shipping Information
              <span
                className={
                  dropDown && title === "Shipping"
                    ? "transform: rotate-180 ease-out duration-75 "
                    : null
                }
              >
                <IoIosArrowDown />
              </span>
            </li>
            {dropDown && title === "Shipping" ? (
              <div>
                <p className="p-3 ">Shipping Informations.</p>
              </div>
            ) : null}
            <li
              onClick={(e) => toggleDropdown("Question")}
              className="cursor-pointer text-xl p-3  md:text-sm border-b-[1px]  flex justify-between hover:bg-neutral-200 "
            >
              Ask a question
              <span
                className={
                  dropDown && title === "Question"
                    ? "transform: rotate-180"
                    : null
                }
              >
                <IoIosArrowDown />
              </span>
            </li>
            {dropDown && title === "Question" ? (
              <div>
                <p className="p-3">Ask a question</p>
              </div>
            ) : null}
          </ul>
        </div>

        <div className=" mb-[5rem] md:hidden">
          <div className="more-from-prod" onClick={handleLinks}>
            <div className="p-5">
              <h1 className="text-[2rem] md:text-[1rem]">More from Product</h1>
            </div>
            <div className="flex justify-between flex-wrap p-5">
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
            </div>
          </div>

          <div className="recently-viewed" onClick={handleLinks}>
            <div className="p-5">
              <h1 className="text-[2rem] md:text-[1rem]">Recently viewed</h1>
            </div>
            <div className="flex justify-between flex-wrap p-5">
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
            </div>
          </div>

          <div className="also-like" onClick={handleLinks}>
            <div className="p-5">
              <h1 className="text-[2rem] md:text-[1rem]">You May Also Like</h1>
            </div>
            <div className="flex justify-between flex-wrap p-5">
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
              <SmallProductCard />
            </div>
          </div>
        </div>

        <div className="w-[70%] m-auto mb-[5rem] hidden md:block md:m-0 md:w-full">
          <div className="more">
            <div className="p-5 flex justify-between">
              <h1 className="text-[2rem] md:text-[1rem]">More from product</h1>
              <button>
                <a href={`/final-deploy/collections/More`}>
                  <IoIosArrowForward />
                </a>
              </button>
            </div>
            <div className="flex justify-between ">
              <div className="relative  ">
                <Slider imageUrls={imageUrls} />
              </div>
            </div>
          </div>
          <div className="recent">
            <div className="p-5 flex justify-between">
              <h1 className="text-[2rem] md:text-[1rem]">Recently viewed</h1>
              <button>
                <a href={`/final-deploy/collections/Recent`}>
                  <IoIosArrowForward />
                </a>
              </button>
            </div>
            <div className="flex justify-between ">
              <div className="relative  ">
                <Slider imageUrls={imageUrls} />
              </div>
            </div>
          </div>
          <div className="like">
            <div className="p-5 flex justify-between">
              <h1 className="text-[2rem] md:text-[1rem]">You May Also Like</h1>
              <button>
                <a href={`/final-deploy/collections/You May Also Like`}>
                  <IoIosArrowForward />
                </a>
              </button>
            </div>
            <div className="flex justify-between ">
              <div className="relative  ">
                <Slider imageUrls={imageUrls} />
              </div>
            </div>
          </div>

          {/* <div className="catalog">
            <div className="p-5">
              <h1 className="text-[2rem] md:text-[1rem]">Recently viewed</h1>
            </div>
            <div className="flex justify-between ">
              <div className="relative  w-[100%] max-w-4xl h-80">
                <ProductSlider imageUrls={imageUrls} />
              </div>
            </div>
          </div>

          <div className="catalog">
            <div className="p-5">
              <h1 className="text-[2rem] md:text-[1rem]">You May Also Like </h1>
            </div>
            <div className="flex justify-between ">
              <div className="relative  w-[100%] max-w-4xl h-80">
                <ProductSlider imageUrls={imageUrls} />
              </div>
            </div>
          </div> */}
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

      <div className="mt-10 mb-10">
        <div className="imageSlider w-[80%] m-auto md:h-[250px] md:w-full"></div>
      </div>
    </>
  );
  return content;
};

export default ProductDetails;
