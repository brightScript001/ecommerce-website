import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Flone.</h3>
            <p className="text-gray-600">© 2024 Flone. All Rights Reserved</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">ABOUT US</h3>
            <ul className="list-none text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Store location
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Orders tracking
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              USEFUL LINKS
            </h3>
            <ul className="list-none text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Size guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">FOLLOW US</h3>
            <ul className="list-none text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">SUBSCRIBE</h3>
            <p className="text-gray-600 mb-4">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="flex">
              <button
                className="text-gray-500 hover:text-purple-400 font-bold py-2 px-4 ml-2 uppercase underline"
                type="button"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
