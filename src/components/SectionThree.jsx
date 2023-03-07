import React from "react";

import image_04 from "../assets/img-4.png";
import image_05 from "../assets/img-5.png";
import image_06 from "../assets/img-6.png";

const SectionThree = () => {
  return (
    <div className="mb-10 p-5 sm:p-0 flex flex-col sm:flex-row gap-20 sm:gap-0 sm:justify-around items-center">
      <div className="w-auto sm:w-[30rem] p-10 sm:p-0 flex flex-col gap-10 sm:gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Provide best detiny
        </h1>
        <p className="text-lg font-semibold text-gray-400">
          the place we chose was the best of all the best. and discover
          surprises you've never had before
        </p>
        <button className="w-48 min-h-14 bg-teal-600 text-white text-lg font-semibold text-center p-2">
          Get started
        </button>
      </div>

      {/* Carousel, Image for placeholding */}

      <div className="flex justify-between items-center gap-4 px-2 sm:p-0">
        <div>
          <img src={image_04} alt="" className="w-[250px] h-30 mb-8" />
          <h1 className="text-sm font-bold text-gray-900">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Bandung, Indonesia
          </p>
        </div>
        <div>
          <h1 className="text-sm font-bold text-gray-900">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Tegal, Jordania
          </p>
          <img src={image_05} alt="" className="w-[250px] h-30 mt-8" />
        </div>
        <div>
          <img src={image_06} alt="" className="w-[250px] h-30 mb-8" />
          <h1 className="text-sm font-bold text-gray-900">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Brebes, Alaska
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
