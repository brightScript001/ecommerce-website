import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  return (
    <button
      className="fixed bottom-10 right-10 z-50 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:ring focus:ring-purple-300"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IoIosArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
