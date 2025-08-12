import React from "react";

const SmallProductCard = () => {
  return (
    <div className="flex flex-col h-[240px] w-[150px]  bg-neutral-200 hover:shadow-xl md:ml-2">
      <div className=" flex items-center justify-center p-3  ">
        <img
          src="https://www.istanbulfurniture.com/cdn/shop/files/Royals-NewSectional-Gray-1_1080x.jpg?v=1701976939"
          alt="#"
          className="h-[100px] w-[100px] "
        />
      </div>
      <div className="p-2 ">
        <div className="color ">
          <div className=" rounded-full border border-blue-950 flex justify-center items-center  w-[1rem] h-[1rem] ">
            <div className="rounded-full bg-blue-950 p-[0.35rem] hover:border hover:border-black w-[0.5rem] h-[0.5rem]"></div>
          </div>
        </div>
        <div className="title font-bold pt-1 ">Product Title</div>
        <div className="parent text-gray-600 pt-1 ">Product Category</div>
        <div className="price font-bold pt-1  ">$9999</div>
      </div>
    </div>
  );
};

export default SmallProductCard;
