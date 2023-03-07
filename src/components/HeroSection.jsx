import React from "react";

import image_01 from "../assets/img-1.png";


const HeroSection = () => {
  return (
    <div className="my-10">
      <div className="hidden sm:flex justify-between">
        <div className="max-w-[50%] h-auto p-5">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-normal p-4">
            Start Your Journey With Us
          </h1>
          <p className="text-lg font-semibold text-gray-800 p-4">
            Discover All destiny around the world. There are many beautiful
            places with their own uniqueness. Choose the best destiny and
            programs for your journey.
          </p>
          <div className="absolute w-[48.31rem] h-[6.31rem] p-5 lg:mt-20 bg-white flex justify-between shadow-lg">
            <div>
              <h1 className="text-sm font-bold text-black">Location</h1>
              <p className="text-lg font-semibold text-gray-800">
                Bandung, Indonesia
              </p>
            </div>
            <div>
              <h1 className="text-sm font-bold text-black">Date</h1>
              <p className="text-lg font-semibold text-gray-800">
                Thu, 17 June 2021
              </p>
            </div>
            <button className="w-48 h-14 bg-teal-600 text-lg font-semibold text-white">
              Discover
            </button>
          </div>
        </div>

        {/* Hero Image Carousel */}
        <div className="w-[80%] h-auto">
          <h1 className="absolute w-32 h-12 bg-white opacity-50 text-sm font-semibold text-teal-900 text-center p-4 m-4">
            Pantal Selatan
          </h1>
          <img src={image_01} alt="" />
        </div>
      </div>

      {/* Mobile View */}

      <div className="sm:hidden">
        <h1 className="text-5xl lg:text-7xl font-bold text-black leading-normal p-4">
          Start Your Journey With Us
        </h1>
        <p className="text-lg font-semibold text-gray-800 p-4">
          Discover All destiny around the world. There are many beautiful places
          with their own uniqueness. Choose the best destiny and programs for
          your journey.
        </p>
        <div className="w-80 h-[34.75rem] m-auto">
          <div className="p-4">
            <h1 className="absolute w-32 h-12 bg-white opacity-50 text-sm font-semibold text-teal-900 text-center p-4 m-4">
              Pantal Selatan
            </h1>
            <div className="m-0 p-0">
              
            </div>
            <img
              src={image_01}
              alt="A Boat on Green See Water"
              className="h-[21.12rem]"
            />
          </div>
          <div className="absolute w-56 h-72 mx-12 mt-[-150px] p-5 bg-white flex flex-col justify-between shadow-lg">
            <div>
              <h1 className="text-sm font-bold text-black">Location</h1>
              <p className="text-lg font-semibold text-gray-800">
                Bandung, Indonesia
              </p>
            </div>
            <div>
              <h1 className="text-sm font-bold text-black">Date</h1>
              <p className="text-lg font-semibold text-gray-800">
                Thu, 17 June 2021
              </p>
            </div>
            <button className="w-48 h-14 bg-teal-600 text-lg font-semibold text-white">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
