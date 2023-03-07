import React from "react";

const SectionOne = () => {
  return (
    <div className="w-auto h-[55rem] mx-auto mt-28 bg-gray-100 sm:w-full sm:h-[22rem] p-5 sm:p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
          Provide best services
        </h1>
        <button className="hidden sm:block w-48 h-14 bg-teal-600 text-lg font-semibold text-white text-center p-4">
          Get started
        </button>
      </div>
      <div className="flex flex-col p-5 sm:flex-row justify-around items-center gap-16 bg-white shadow-sm">
        <div className="sm:w-[20rem]">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Guide Tour
          </h1>
          <p className="text-lg font-semibold text-gray-500">
            Our certified and knowledgeable guides make your journey more more
            fun and exciting
          </p>
        </div>
        <div className="sm:w-[20rem]">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Programs
          </h1>
          <p className="text-lg font-semibold text-gray-500">
            We provide the best programs from us so you can enjoy your journey
            more
          </p>
        </div>
        <div className="sm:w-[20rem]">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Best Hotel and resto
          </h1>
          <p className="text-lg font-semibold text-gray-500">
            provide the best place for you to stay and enjoy your food
          </p>
        </div>
      </div>
      <button className="sm:hidden w-48 h-14 bg-teal-600 text-lg font-semibold text-white text-center p-4 mx-20 my-20">
        Get started
      </button>
    </div>
  );
};

export default SectionOne;
