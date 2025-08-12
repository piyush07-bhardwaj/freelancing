import React from "react";
import { useNavigate } from "react-router-dom";

const FooterCards = () => {
  const navigate = useNavigate();
  const handleClearence = () => {
    navigate("/clearance");
  };
  const handleCollection = () => {
    navigate("/collections");
  };

  const handleContacts = () => {
    navigate("/contacts");
  };

  const content = (
    <>
      <div className="catalog-container border-b-[1px] mb-5 pb-3  ">
        <div className="catalog w-[75%] m-auto md:w-full">
          <div className="w-full bg-slate-300 flex  p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-3xl md:text-sm">
              Something on your mind?
            </p>
            <p className="m-2  align-middle">
              Contact us for special orders with various options
            </p>
            <button
              className="bg-black text-white m-2 p-2 align-middle md:text-[0.5rem]"
              onClick={handleContacts}
            >
              Get in touch now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col justify-between catalog w-[75%] m-auto md:flex-col md:m-0">
        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 product-container bg-white">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/Melis_38869_540x.jpg?v=1652345618"
              alt="#"
              className="bg-transparent h-[250px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-12">
            <div className="title font-bold pt-2 text-xl">Summer Savings</div>
            <div className="parent text-gray-600 pt-2">
              Clearing out! Shop now and save up to 40% off!
            </div>
            <button
              className="bg-black text-white border m-2 p-2 align-middle"
              onClick={handleClearence}
            >
              Shop Clearance
            </button>
          </div>
        </div>

        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 bg-[#acc6c3]">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/Gabba_Ornek_cadb45e1-cca6-4c9e-b8a9-62ba5f2b4d3b_540x.jpg?v=1651754126"
              alt="#"
              className="bg-transparent h-[250px] w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-12">
            <div className="title font-bold pt-2 text-xl">
              Luxury From Istanbul Furniture
            </div>
            <div className="parent text-gray-600 pt-2">
              Our luxury collection is ready to enchant your home.
            </div>
            <button
              className="bg-white text-[#acc6c3] border m-2 p-2 align-middle"
              onClick={handleCollection}
            >
              View Collections
            </button>
          </div>
        </div>

        <div className="border-[2px] flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2 mb-0 align-middle">
          <div className="m-6 mb-0">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/green-door-with-open-sign_540x.jpg?v=1652532193"
              alt="#"
              className="bg-transparent h-[250px] w-[350px] mb-0"
            />
          </div>
          <div className="flex flex-col items-center mt-0 mb-6">
            <div className="title font-bold pt-2 text-xl">Showroom Hours</div>
            <div className="parent text-gray-600 pt-2">
              Mon - Sat, 10:00am - 7:00pm
            </div>
            <div className="parent text-gray-600 pt-2">
              Sunday, 10:00am - 6:00pm
            </div>
            <button className="bg-white text-black border-[2px] m-2 p-2 align-middle">
              <a href="https://www.google.com/maps/place/Istanbul+Furniture+Turkish+Furniture+Istikbal+Furniture+Store/@40.1377605,-75.0074878,19z/data=!4m14!1m7!3m6!1s0x89c6b282326d4585:0xdd40a4e531ed8b47!2s87+Bustleton+Pike,+Feasterville-Trevose,+PA+19053,+USA!3b1!8m2!3d40.1376267!4d-75.0071498!3m5!1s0x89c6b341f89c3a61:0xc2eb898c94b551a4!8m2!3d40.1375653!4d-75.0071705!16s%2Fg%2F11r6vd_6pv?entry=ttu">
                View Locations
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="catalog-container border-b-[1px] border-t-[1px] mb-5 pb-3 mt-10 ">
        <div className="catalog w-[75%] m-auto ">
          <div className="w-full flex  p-3 text-center justify-center items-center">
            <p className="font-semibold m-2 text-xl md:text-[0.5rem]">
              Subscribe today and get 10% off your first purchase
            </p>
            <form className="flex flex-row items-center  p-6 align-middle ml-10 md:flex-col md:w-full">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full max-w-md p-2 border border-gray-300 focus:outline-none focus:ring-2"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="w-full max-w-md p-2 bg-black text-white font-bold focus:outline-none focus:ring-2 md:mt-2 ,d:text-[0.5rem] md:p-1 rounded-sm md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  return content;
};

export default FooterCards;
