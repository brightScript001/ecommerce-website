import React, { useState } from "react";
import { FaPlus, FaTimes, FaSearch, FaAngleDown } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  const toggleBlog = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-100 p-4 shadow-lg z-50">
      {/* Close Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="search"
          className="w-full bg-white border border-gray-300 rounded-full py-2 px-3 pl-4 pr-10 focus:outline-none"
          placeholder="Search..."
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-2">
        <li>
          <a href="#home" className="block text-black hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#shop" className="block text-black hover:underline">
            Shop
          </a>
        </li>
        <li>
          <a href="#collection" className="block text-black hover:underline">
            Collection
          </a>
        </li>
        <li>
          <div className="flex justify-between items-center">
            <a href="#pages" className="block text-black hover:underline">
              Pages
            </a>
            <button onClick={togglePages} className="text-gray-500">
              <FaPlus />
            </button>
          </div>
          {isPagesOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <a href="#page1" className="block text-black hover:underline">
                  Page 1
                </a>
              </li>
              <li>
                <a href="#page2" className="block text-black hover:underline">
                  Page 2
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div className="flex justify-between items-center">
            <a href="#blog" className="block text-black hover:underline">
              Blog
            </a>
            <button onClick={toggleBlog} className="text-gray-500">
              <FaPlus />
            </button>
          </div>
          {isBlogOpen && (
            <ul className="pl-4 space-y-2">
              <li>
                <a href="#blog1" className="block text-black hover:underline">
                  Blog 1
                </a>
              </li>
              <li>
                <a href="#blog2" className="block text-black hover:underline">
                  Blog 2
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#contact-us" className="block text-black hover:underline">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Language & Currency */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Language & Currency</h3>
        <div className="mt-2">
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 rounded py-2 px-3 text-black">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <FaAngleDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
        <div className="mt-2">
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 rounded py-2 px-3 text-black">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <FaAngleDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Contact Information</h3>
        <div className="mt-2 flex space-x-4">
          <a href="tel:+1234567890" className="text-black hover:underline">
            +1 (234) 567-890
          </a>
          <span>|</span>
          <a
            href="mailto:info@example.com"
            className="text-black hover:underline"
          >
            info@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
