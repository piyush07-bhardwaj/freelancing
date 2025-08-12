// Contacts.jsx
import React from "react";
import toast, { Toaster } from "react-hot-toast";
// import "./styles.css"; // Ensure this file contains your CSS

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sent successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center">
      <Toaster />
      <div className="w-full flex flex-col justify-center items-center border-b border-black py-8">
        <div className="w-full md:w-2/3 lg:w-1/2 px-4 py-8 flex flex-col justify-center items-center">
          <div className="font-bold text-2xl mb-3">
            <h1>Get In Touch</h1>
          </div>
          <p className="text-xl p-2 text-center">
            Questions? Our customer support team will get back to you in 1-2
            business hours.
          </p>
          <div className="mt-4 text-center">
            <p className="pt-3">📌 Feasterville-Trevose, PA</p>
            <p className="pt-1">
              83 Bustleton Pike Feasterville-Trevose, PA 19053 , +1
              (267)777-3737
            </p>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col items-center bg-neutral-200 py-8">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 md:w-1/2 lg:w-1/2 px-4 flex flex-col items-center text-xl"
        >
          <div className="font-bold text-3xl mb-4">
            <h1>Contact Us</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-4 mb-4">
            <label className="mb-2 md:mb-0" htmlFor="name">
              Name:
            </label>
            <input
              className="border border-black p-2 mb-2 md:mb-0 md:w-full"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-4 mb-4">
            <label className="mb-2 md:mb-0" htmlFor="email">
              Email:
            </label>
            <input
              className="border border-black p-2 mb-2 md:mb-0 md:w-[100%]"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label className="mb-2" htmlFor="phone">
              Phone number:
            </label>
            <input
              className="border border-black p-2"
              type="text"
              id="phone"
              name="phone"
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label className="mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border border-black p-2"
              id="message"
              name="message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-3 hover:bg-gray-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
