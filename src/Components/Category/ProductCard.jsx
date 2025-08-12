import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate("/products");
  };
  const content = (
    <div
      className="product-container flex flex-col justify-between h-[450px] w-[400px]  cursor-pointer m-2"
      onClick={handleProduct}
    >
      <div className="m-auto">
        <img
          src="https://www.istanbulfurniture.com/cdn/shop/collections/Cavalli-Black-Sofa_720x.jpg?v=1658408550"
          alt="#"
          className="bg-transparent h-[250px] w-[350px]"
        />
      </div>
      <div className="p-3 ">
        <div className="color ">
          <div className=" rounded-full border border-orange-200 flex justify-center items-center  w-[2rem] h-[2rem] ">
            <div className="rounded-full bg-orange-200 hover:border hover:border-black w-[1.5rem] h-[1.5rem]"></div>
          </div>
        </div>
        <div className="title font-bold pt-2">Product Title</div>
        <div className="parent text-gray-600 pt-2">Product Category</div>
        <div className="price font-bold pt-2">$9999</div>
      </div>
    </div>
  );
  return content;
};

export default ProductCard;
