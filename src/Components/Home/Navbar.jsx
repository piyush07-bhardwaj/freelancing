import React, { useState } from "react";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import NavbarMenuItems from "../NavbarItems/NavbarMenuItems";
import Dialog from "./Dialog.jsx";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const [showDialog, setShowDialog] = useState(false);
  const [dialogDetails, setDialogDetails] = useState("");
  const [itemCount, setItemCount] = useState(1);
  const itemPrice = 5399.0;
  const [totalCost, setTotalCost] = useState(itemPrice);
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };
  const handleCheckout = () => {
    toast.success("Added to cart.");
  };

  const handleLogin = () => {
    toast.success("Login successfully.");
  };
  const openDialog = (title) => {
    setDialogDetails(title);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const increaseCount = () => {
    setItemCount((prevCount) => {
      const newCount = prevCount + 1;
      setTotalCost(newCount * itemPrice);
      return newCount;
    });
  };

  const decreaseCount = () => {
    setItemCount((prevCount) => {
      if (prevCount > 1) {
        const newCount = prevCount - 1;
        setTotalCost(newCount * itemPrice);
        return newCount;
      }
      return prevCount;
    });
  };

  const dialogContent = (
    <>
      {dialogDetails === "Accounts" ? (
        <>
          <form>
            <div className="text-sm mb-2">
              <label className="mb-2 block">Email:</label>
              <input
                type="text"
                className="bg-transparent outline-none border border-black p-2 mb-2 text-black w-full cursor-pointer"
                placeholder="akash@gmail.com"
                required
              />
            </div>
            <div className="mb-2">
              <label className="mb-2 block">Password:</label>
              <input
                type="password"
                className="bg-transparent outline-none border border-black p-2 mb-2 text-black w-full"
                required
              />
            </div>
            <div className="text-center">
              <button
                className="bg-black rounded-sm text-white p-3"
                onClick={handleLogin}
              >
                Login
                <Toaster position="top-center" reverseOrder={false} />
              </button>
            </div>
          </form>
        </>
      ) : dialogDetails === "Cart" ? (
        <>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://www.istanbulfurniture.com/cdn/shop/files/Massimo-Shawl-Turkish-Luxury-Furniture-Set-5_b856b289-db9c-465b-8787-b9a7e8bddffb_900x.jpg?v=1719919826"
                alt="Product"
                className="w-24 h-24 mr-4"
              />
              <div>
                <h2 className="font-bold text-lg">Elegances Living Room Set</h2>
                <p>Color: Cream</p>
                <p>Set: 2 Sofas & 2 Chairs</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={decreaseCount}
                    className="bg-gray-300 px-2 py-1"
                  >
                    -
                  </button>
                  <span className="mx-2">{itemCount}</span>
                  <button
                    onClick={increaseCount}
                    className="bg-gray-300 px-2 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ml-auto font-bold">${totalCost.toFixed(2)}</div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Subtotal</span>
              <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md"
              onClick={handleCheckout}
            >
              Check out
              <Toaster position="top-center" reverseOrder={false} />
            </button>
            <p className="text-center text-gray-600 mt-2">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
          </div>
        </>
      ) : null}
    </>
  );

  return (
    <div className="bg-black min-h-[5rem] w-full ">
      <div className="text-white flex justify-between w-[80%] md:w-[100%] m-auto">
        <div className="w-[60%] flex justify-between p-2 items-center gap-3 md:flex-col ">
          <div className=" flex justify-end md:w-full md:justify-start ">
            <img
              src="https://www.istanbulfurniture.com/cdn/shop/files/31_280x.png?v=1652868697"
              alt="#"
              className="pl-3 pb-3 cursor-pointer"
              onClick={handleLogo}
            />
          </div>
          <div className="w-[60%]  flex items-center gap-2 bg-white rounded-sm ml-3 p-2 md:w-full ">
            <input
              type="text"
              className="bg-transparent outline-none border-none text-black w-full"
              placeholder="Search..."
            />
            <BiSearch className="cursor-pointer hover:bg-slate-900 rounded-2xl hover:text-neutral-400 h-auto w-auto p-2 text-black border border-black hover:border-slate-900" />
          </div>
        </div>
        <div className="flex gap-3 items-center w-[40%] md:w-[30%] justify-end md:flex-col md:items-center md:justify-center ">
          <div
            className="inline-flex gap-2 items-center border p-2 rounded-sm mr-2 cursor-pointer hover:bg-slate-700 hover:text-wrap "
            onClick={() => openDialog("Accounts")}
          >
            <BiUser />
            ACCOUNTS
          </div>
          <div
            className="inline-flex gap-2 items-center border p-2 rounded-sm mr-2 cursor-pointer hover:bg-slate-700 md:w-[6.15rem]"
            onClick={() => openDialog("Cart")}
          >
            <BiCart />
            CART
          </div>

          <div className="hidden md:block" onClick={toggleOpen}>
            <div className="mt-1-0 p-0 w-7 h-0 border"></div>
            <div className="mt-1 p-0 w-7 h-0 border"></div>
            <div className="mt-1 p-0 w-7 h-0 border"></div>
          </div>
          <Dialog show={showDialog} onClose={closeDialog} title={dialogDetails}>
            {dialogContent}
          </Dialog>
        </div>
      </div>
      <div>
        <NavbarMenuItems open={open} />
      </div>
    </div>
  );
};

export default Navbar;
