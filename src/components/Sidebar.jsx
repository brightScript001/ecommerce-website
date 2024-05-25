import React, { useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

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
    <>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-0 right-80 h-16 w-16 flex items-center justify-center bg-black text-white text-5xl z-50"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="fixed top-0 right-0 w-80 h-full bg-gray-100 shadow-lg z-40 overflow-y-auto">
        {/* Search Bar */}
        <div className="relative w-full h-16">
          <input
            type="search"
            className="w-full h-full bg-white border-none py-2 px-3 pl-4 pr-10 focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Menu Items */}
        <ul className="space-y-6 p-4 uppercase">
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
        <div className="px-4 mt-4">
          <h3 className="text-base font-normal">Choose Language</h3>
          <div className="mt-2">
            <div className="relative">
              <select className="w-full bg-white border border-gray-300 py-2 px-3 text-black">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4">
          <h3 className="text-base font-normal">Choose Currency</h3>
          <div className="mt-2">
            <div className="relative">
              <select className="w-full bg-white border border-gray-300 py-2 px-3 text-black">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-4 mt-8">
          <div className="mt-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-700" />
                <a
                  href="tel:+1234567890"
                  className="text-black hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-700" />
                <a
                  href="mailto:info@example.com"
                  className="text-black hover:underline"
                >
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="px-4 mt-4 flex space-x-4">
          <a href="#" className="text-black hover:text-gray-700">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
