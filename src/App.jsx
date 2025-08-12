import React from "react";
import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Wrapper";
import Category from "./Components/Category/Category";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import ShopClearence from "./Components/Home/ShopClearence.jsx";
import Contacts from "./Components/Category/Contacts.jsx";
import ScrollToTop from "./Components/Category/ScrollToTop.jsx";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" Component={Wrapper} />
        <Route exact path="/collections/:name" element={<Category />} />
        <Route exact path="/products" element={<ProductDetails />} />
        <Route exact path="/clearance" element={<ShopClearence />} />
        <Route exact path="/collections" element={<ShopClearence />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <div className="bottom-0 w-full h-[10rem]">
        <Footer />
      </div>
    </>
  );
};

export default App;
