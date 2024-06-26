import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white h-16 shadow-md py-4 px-8 flex justify-between items-center md:h-16 ">
        {/* Left Side */}
        <div className="text-4xl font-bold sm:text-3xl ">Flone.</div>

        {/* Center Links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {["Home", "Shop", "Collection", "Pages", "Blog", "Contact Us"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-gray-600 transition-colors"
                >
                  <a href={`#${item.replace(/\s+/g, "-")}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <button className="text-xl hidden lg:block">
            <FaSearch />
          </button>
          {/* User Icon - Hidden on Mobile and Tablet Views */}
          <button className="text-xl hidden lg:block">
            <FaUserCircle />
          </button>
          <button className="relative">
            <FaBell className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="relative">
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </button>
          <button className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>

          <button className="lg:hidden text-xl" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </>
  );
};

export default Navbar;
