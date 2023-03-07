import React from "react";

import image_03 from "../assets/img-3.png";

const SectionTwo = () => {
  return (
    <div className="w-auto h-[55.19rem] sm:w-auto sm:h-auto mx-auto my-40 sm:flex justify-center gap-20 p-5">
      <div>
        <img
          src={image_03}
          alt=""
          className="w-[22rem] h-[20rem] sm:w-[37rem] sm:h-[30rem] bg-cover"
        />
        <h1 className="sm:hidden text-5xl font-bold text-gray-900 bg-gray-100 p-10 sm:max-w-[40rem]">
          Start your best journey with best agency
        </h1>
      </div>
      <div className="sm:flex sm:flex-col sm:items-center">
        <h1 className="hidden sm:block text-5xl font-bold text-gray-900 bg-gray-100 p-10">
          Start your best journey with best agency.
        </h1>

        <div className="grid grid-cols-2 gap-20 w-fit mt-10">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              10+ Years
            </h1>
            <p className="text-lg sm:text-sm font-bold text-teal-600">
              Experience
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              200k+
            </h1>
            <p className="text-lg sm:text-sm font-bold text-teal-600">
              Happy people
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              100+
            </h1>
            <p className="text-lg sm:text-sm font-bold text-teal-600">
              Beautiful destiny
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              50+
            </h1>
            <p className="text-lg sm:text-sm font-bold text-teal-600">
              Official partnert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
