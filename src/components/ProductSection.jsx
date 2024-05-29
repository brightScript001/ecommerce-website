import React, { useState } from "react";
import FemaleTop from "../assets/female-top.jpg";
import FashionJacket from "../assets/fashion-jacket.jpg";
import KidsEight from "../assets/kids-eight.jpg";
import Jacket from "../assets/jacket.jpg";
import KidsSix from "../assets/kid-six.jpg";
import FemaleCoat from "../assets/female-coat.jpg";
import KidsSeven from "../assets/kid-seven.jpg";
import Jacket2 from "../assets/jacket2.jpg";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Lorem ipsum fashion female top",
      description: "A stylish and comfortable top for women",
      image: FemaleTop,
      price: "€35.6",
    },
    {
      id: 2,
      name: "Lorem ipsum fashion jacket",
      description: "A trendy and warm jacket for men and women",
      image: FashionJacket,
      price: "€26.87 - €29.85",
    },
    {
      id: 3,
      name: "Lorem ipsum kids eight",
      description: "A cute and durable jacket for kids",
      image: KidsEight,
      price: "€26.87 - €29.85",
    },
    {
      id: 4,
      name: "Lorem ipsum jacket",
      description: "A classic and versatile jacket for everyday wear",
      image: Jacket,
      price: "€19.85",
    },
    {
      id: 5,
      name: "Lorem ipsum kids six",
      description: "A stylish and comfortable top for women",
      image: KidsSix,
      price: "€35.6",
    },
    {
      id: 6,
      name: "Lorem ipsum fashion female coat",
      description: "A trendy and warm jacket for men and women",
      image: FemaleCoat,
      price: "€26.87 - €29.85",
    },
    {
      id: 7,
      name: "Lorem ipsum kids seven",
      description: "A cute and durable jacket for kids",
      image: KidsSeven,
      price: "€26.87 - €29.85",
    },
    {
      id: 8,
      name: "Lorem ipsum jacket",
      description: "A classic and versatile jacket for everyday wear",
      image: Jacket2,
      price: "€19.85",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("New Arrivals");

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "New Arrivals") {
      return true;
    } else if (selectedCategory === "Best Sellers") {
      return product.sold > 100;
    } else if (selectedCategory === "Sale Items") {
      return product.price < 20;
    } else {
      return true;
    }
  });

  return (
    <div className="">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-medium text-center mb-8 ">DAILY DEALS!</h2>
        <div className="flex justify-center mb-8 ">
      {/* make a component on it own */}
          <ul className="flex space-x-8"> 
            <li
              className={`text-gray-600 hover:text-gray-900 cursor-pointer ${
                selectedCategory === "New Arrivals" && "text-gray-900"
              }`}
              onClick={() => setSelectedCategory("New Arrivals")}
            >
              New Arrivals
            </li>
            <li
              className={`text-gray-600 hover:text-gray-900 cursor-pointer ${
                selectedCategory === "Best Sellers" && "text-gray-900"
              }`}
              onClick={() => setSelectedCategory("Best Sellers")}
            >
              Best Sellers
            </li>
            <li
              className={`text-gray-600 hover:text-gray-900 cursor-pointer ${
                selectedCategory === "Sale Items" && "text-gray-900"
              }`}
              onClick={() => setSelectedCategory("Sale Items")}
            >
              Sale Items
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white group relative w-full p-[20px] lg:w-[300px] lg:h-[550px]"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center absolute bottom-0 left-0 w-full transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button
                  className="flex-[0.2] text-center bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 border-r"
                  onClick={() => console.log("Love button clicked")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button
                  className="flex-1 text-center bg-purple-500 hover:bg-purple-800 text-white font-bold py-2"
                  onClick={() => console.log("Buy Now button clicked")}
                >
                  Buy Now
                </button>
                <button
                  className="flex-[0.2] text-center bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 border-l"
                  onClick={() => console.log("View button clicked")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <h3 className="mb-2 text-center text-sm">{product.name}</h3>
            <div className="flex items-center mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 text-yellow-500 ${
                    i < product.rating && "fill-current"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.605.602l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.027-2.22a1 1 0 00-1.049 0l-3.029 2.22c-.783.57-1.838-.197-1.538-1.118l1.518-4.674c.234-.342.636-.602 1.605-.602h4.915a1 1 0 00.95-.69l1.519-4.674c.3-.921-.755-1.688-1.538-1.118l-3.027 2.22a1 1 0 00-1.049 0l-3.029-2.22z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-center">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
