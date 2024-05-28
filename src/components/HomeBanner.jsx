import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide1 from "../assets/single-slide-1.png";
import slide2 from "../assets/single-slide-2.png";

const banners = [
  {
    image: slide1,
    subheading1: "Smart Products",
    mainHeading: "Winter Offer 2024 Collection",
    subheading2: "Limited Time Offer",
    buttonText: "SHOP NOW",
  },
  {
    image: slide2,
    subheading1: "Smart Products",
    mainHeading: "Summer Offer 2024 Collection",
    subheading2: "Exclusive Deals",
    buttonText: "EXPLORE NOW",
  },
];

const HomeBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const handlePrevClick = () => {
    setCurrentBanner((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentBanner((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full lg:h-screen bg-[#E6E0FF] p-5 flex flex-col sm:flex-row items-center justify-between">
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-3xl z-10 opacity-10"
      >
        <FaArrowLeft />
      </button>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left lg:ml-10 p-8">
        <h2 className="text-2xl lg:text-4xl text-black mb-2">
          {banners[currentBanner].subheading1}
        </h2>
        <h1 className="text-3xl lg:text-6xl text-black mb-2">
          {banners[currentBanner].mainHeading}
        </h1>
        <h3 className="text-xl lg:text-3xl text-black mb-4">
          {banners[currentBanner].subheading2}
        </h3>
        <button className="bg-transparent text-black border-2 border-[#4B0082] py-2 px-4">
          {banners[currentBanner].buttonText}
        </button>
      </div>

      {/* Image of Woman with Shopping Bags */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={banners[currentBanner].image}
          alt="Woman with tattoos and glasses"
          className="w-full lg:w-[600px] object-cover"
        />
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-3xl z-10 opacity-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HomeBanner;
