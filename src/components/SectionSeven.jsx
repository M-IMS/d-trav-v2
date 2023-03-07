import React from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SectionSeven = () => {
  return (
    <div className="w-auto h-auto py-5 mb-20 bg-gray-100 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 text-center p-5 mb-5">
          What they said
        </h1>
      </div>
      <div className="flex gap-10">
        <div className="w-[327px] h-[290px] bg-white shadow-sm p-10">
          <p className="text-lg font-semibold text-gray-400 text-center">
            “ very very spoiled with the place and service provided, I will go
            back to exploring other places with the same service “
          </p>
          <h1 className="text-2xl font-semibold text-gray-900 text-center mt-5">
            Yustiana, Azerbaizan
          </h1>
        </div>
        <div className="hidden sm:block w-[327px] h-[290px] bg-white shadow-sm p-10">
          <p className="text-lg font-semibold text-gray-400 text-center">
            “ very very spoiled with the place and service provided, I will go
            back to exploring other places with the same service “
          </p>
          <h1 className="text-2xl font-semibold text-gray-900 text-center mt-5">
            Yustiana, Zudan
          </h1>
        </div>
        <div className="hidden sm:block w-[327px] h-[290px] bg-white shadow-sm p-10">
          <p className="text-lg font-semibold text-gray-400 text-center">
            “ very very spoiled with the place and service provided, I will go
            back to exploring other places with the same service “
          </p>
          <h1 className="text-2xl font-semibold text-gray-900 text-center mt-5">
            Yustiana, Azerbaizan
          </h1>
        </div>
      </div>
      <div className="space-x-5 space-y-5 sm:hidden">
        <button className="w-10 h-10 bg-teal-600 text-white text-lg text-center p-2">
          <AiOutlineArrowLeft />
        </button>
        <button className="w-10 h-10 bg-teal-600 text-white text-lg text-center p-2">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SectionSeven;
