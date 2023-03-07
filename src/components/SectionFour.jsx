import React from "react";

import image_04 from "../assets/img-4.png";
import image_05 from "../assets/img-5.png";
import image_06 from "../assets/img-6.png";
import image_07 from "../assets/img-7.png";

const SectionFour = () => {
  return (
    <div className="h-auto sm:h-auto my-32 bg-gray-100 flex flex-col gap-10 p-5 sm:p-10">
      <div className="sm:p-10 flex flex-col sm:flex-row gap-10 sm:gap-20">
        <h1 className="text-5xl font-bold text-gray-900">
          Provide best programs
        </h1>
        <p className="text-lg font-semibold text-gray-400 max-w-xs">
          We provide the best programs from us so you can enjoy your journey
          more
        </p>
      </div>

      {/* Carousel, Image for placeholding */}

      <div className="sm:flex justify-evenly items-center gap-4 px-2 sm:p-0">
        <div className="-space-y-24">
          <img src={image_04} alt="" className="w-[327px] h-[27rem]" />

          <div className="w-64 h-52 p-10 m-9 bg-black opacity-50">
            <h1 className="text-sm font-bold text-teal-600 opacity-100">Location</h1>
            <p className="text-lg font-semibold text-gray-400">
              Bandung, Indonesia
            </p>
            <h1 className="text-sm font-bold text-teal-600 mt-5">Fee</h1>
            <p className="text-lg font-semibold text-gray-400">$250/person</p>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={image_05} alt="" className="w-[250px] h-30 mb-8" />
          <h1 className="text-sm font-bold text-teal-600">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Tegal, Jordania
          </p>
        </div>
        <div className="hidden sm:block">
          <img src={image_06} alt="" className="w-[250px] h-30 mb-8" />
          <h1 className="text-sm font-bold text-teal-600">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Brebes, Alaska
          </p>
        </div>
        <div className="hidden sm:block">
          <img src={image_07} alt="" className="w-[250px] h-30 mb-8" />
          <h1 className="text-sm font-bold text-teal-600">Location</h1>
          <p className="text-lg font-semibold text-gray-400">
            Brebes, Alaska
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
