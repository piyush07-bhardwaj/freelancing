import React from "react";

const Dialog = ({ show, onClose, title, children, dialogDetails }) => {
  if (!show) {
    return null;
  }

  const dialogStyles = "bg-white rounded-lg shadow-lg p-6";
  const fullScreenStyles = "w-full h-3/5"; // 60% height
  const defaultStyles = "w-1/3";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center text-black">
      <div
        className={`${dialogStyles} ${defaultStyles} md:${fullScreenStyles}`}
      >
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">{title}</p>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 border rounded-sm border-black p-1 hover:bg-black"
          >
            X
          </button>
        </div>
        <div>{children}</div>
        <div className="flex justify-end pt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
