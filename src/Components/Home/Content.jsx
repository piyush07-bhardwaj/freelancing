import React from "react";
import ImageSlider from "../Content/ImageSlider.jsx";
import toast from "react-hot-toast";
import ProductSlider from "../ProductSlider.jsx";
import { useNavigate } from "react-router-dom";
import FooterCards from "../Category/FooterCards.jsx";
import { IoIosArrowForward } from "react-icons/io";

const Content = () => {
  const handleLogin = () => {
    toast.success("Login successfully.");
  };
  const handleClearence = () => {
    navigate("/clearance");
  };
  const handleShopNow = () => {
    navigate("/collections/Living Room");
  };
  const navigate = useNavigate();
  const handleProduct = (name) => {
    navigate(`/collections/${name}`);
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
    <div className="flex flex-col">
      {/* image slider */}
      <div className="slider-container flex flex-row justify-between mb-4 md:flex-col ">
        <div className="h-[500px] md:h-[250px] w-[60%] md:w-full">
          <ImageSlider imageUrls={imageUrls} />
        </div>
        <div className="w-[40%] md:w-full max-h-[500px] md:max-h-auto p-10 flex flex-col justify-evenly items-center ">
          <div>
            <h1 className="text-[4rem] md:text-[2rem] text-wrap text-center">
              Prizma MyL Collection
            </h1>
          </div>
          <div className="border p-3 text-wrap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            nisi minima soluta esse recusandae iusto mollitia, odit, veritatis
            animi in vero repudiandae accusantium.
          </div>
          <button className="bg-black text-white p-2" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </div>

      {/* catalog */}

      <div className="w-[70%] m-auto mb-[5rem] md:hidden">
        <div className="catalog" onClick={(e) => handleProduct("Brands")}>
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem]">Catalog</h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider1} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider1} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider1} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider1} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider1} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="new-arrivals" onClick={(e) => handleProduct("Brands")}>
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              New Arrivals
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="brands" onClick={(e) => handleProduct("Brands")}>
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Our Brands
            </h1>
          </div>
          <div className="border  flex justify-around p-1">
            <div className="h-[300px] w-[300px] hover:bg-neutral-50 hover:shadow-xl">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/bellona_logo_360x.png?v=1661181360" />
            </div>
            <div className="h-[300px] w-[300px] hover:bg-neutral-50 hover:shadow-xl">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/Cilek_Logo_Wiki-01_360x.png?v=1661180988" />
            </div>
            <div className="h-[300px] w-[300px] hover:bg-neutral-50 hover:shadow-xl">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/kilim-logo_360x.png?v=1661181566" />
            </div>
          </div>
        </div>

        <div
          className="collections mt-10 mb-10 "
          onClick={(e) => handleProduct("Luxary Collections")}
        >
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Luxary Collections
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider2} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>

        <div className="Combos" onClick={(e) => handleProduct("Brands")}>
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Furniture Combos
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Furniture Combos</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Furniture Combos</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Furniture Combos</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Furniture Combos</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Furniture Combos</p>
            </div>
          </div>
        </div>

        <div className="best-deals" onClick={(e) => handleProduct("Brands")}>
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Best Deals
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>
          </div>
        </div>

        {/* login */}
        <div className="login mt-20 opacity-90" onClick={handleLogin}>
          <h1 className="text-[2rem] pt-2">SignUp and Save</h1>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="ml-4 gap-2">
            <input type="email" className="login-input" />
            <button
              className="bg-emerald-500 p-3 rounded-xl"
              // onClick={toast.success("logged in successfully.")}
            >
              {" "}
              Email
            </button>
          </div>
        </div>
      </div>

      {/* slider responsive */}

      <div className="w-[70%] m-auto mb-[5rem] hidden md:block ">
        <div className="catalog">
          <div className="p-5 md:w-full md:flex md:justify-between md:items-center">
            <h1 className="text-[2rem] md:text-[1rem]">Catalog</h1>
            <button>
              <a href={`/final-deploy/collections/Catalog`}>
                <IoIosArrowForward />
              </a>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="relative  w-[100%] max-w-4xl h-80">
              <ProductSlider imageUrls={imageUrls} />
            </div>
          </div>
        </div>
        <div className="new-arrivals">
          <div className="p-5 md:w-full md:flex md:justify-between md:items-center ">
            <h1 className="text-[2rem] md:text-[1rem]">New Arrivals</h1>
            <button>
              <a href={`/final-deploy/collections/New Arrivals`}>
                <IoIosArrowForward />
              </a>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="relative  w-[100%] max-w-4xl h-80">
              <ProductSlider imageUrls={imageUrls} />
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="p-5 md:w-full md:flex md:justify-between md:items-center">
            <h1 className="text-[2rem] md:text-[1rem]">Luxary Collection</h1>
            <button>
              <a href={`/final-deploy/collections/Luxary Collections`}>
                <IoIosArrowForward />
              </a>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="relative  w-[100%] max-w-4xl h-80">
              <ProductSlider imageUrls={imageUrls} />
            </div>
          </div>
        </div>
        <div className="combo">
          <div className="p-5 md:w-full md:flex md:justify-between md:items-center">
            <h1 className="text-[2rem] md:text-[1rem]">Furniture Combos</h1>
            <button>
              <a href={`/final-deploy/collections/Furniture Combos`}>
                <IoIosArrowForward />
              </a>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="relative  w-[100%] max-w-4xl h-80">
              <ProductSlider imageUrls={imageUrls} />
            </div>
          </div>
        </div>
        <div className="best deal">
          <div className="p-5 md:w-full md:flex md:justify-between md:items-center">
            <h1 className="text-[2rem] md:text-[1rem]">Best Deal</h1>
            <button>
              <a href={`/final-deploy/collections/Best Deals`}>
                <IoIosArrowForward />
              </a>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="relative  w-[100%] max-w-4xl h-80">
              <ProductSlider imageUrls={imageUrls} />
            </div>
          </div>
        </div>

        {/* our brands */}

        <div className="brands">
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Our Brands
            </h1>
          </div>
          <div className="border md:flex-col flex justify-around items-center p-1">
            <div className="h-[300px] w-[300px] md:h-[250px] md:w-[250px]  ">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/bellona_logo_360x.png?v=1661181360" />
            </div>
            <div className="h-[300px] w-[300px] md:h-[250px] md:w-[250px]  ">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/Cilek_Logo_Wiki-01_360x.png?v=1661180988" />
            </div>
            <div className="h-[300px] w-[300px]  md:h-[250px] md:w-[250px] ">
              <img src="https://www.istanbulfurniture.com/cdn/shop/files/kilim-logo_360x.png?v=1661181566" />
            </div>
          </div>
        </div>

        <div className="luxary-collections mt-10 mb-10 md:hidden ">
          <div className="p-5">
            <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
              Luxary Collections
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2"> Best Deals</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[200px] w-[150px] bg-neutral-200 flex items-center justify-center hover:shadow-xl ">
                <img src={slider3} alt="#" className="h-[100px] w-[100px]" />
              </div>
              <p className="text-center font-bold pt-2">Living Room</p>
            </div>
          </div>
        </div>
      </div>

      {/* image slider-2 */}

      <div className="imageSlider w-[80%] m-auto md:h-[250px] md:w-full"></div>

      {/* Clearence */}

      {/* <div className="clearence mt-20 w-[80%] m-auto">
        <div className="p-5">
          <h1 className="text-[2rem] md:text-[1rem] md:mt-2 md:mb-2">
            Clearence
          </h1>
        </div>
        <div>
          <img src="src\assets\clearence.png" alt="#" />
        </div>
      </div> */}

      <div className="mt-10">
        <FooterCards />
      </div>
    </div>
  );
  return content;
};

export default Content;
