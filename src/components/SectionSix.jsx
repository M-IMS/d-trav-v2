import React from "react";

import vid_1 from "../assets/vid_1.mp4";

const SectionSix = () => {
  return (
    <div className="w-auto h-auto flex flex-col sm:flex-row justify-center items-center my-40">
      <div className="w-full sm:w-[36.87rem] sm:h-[30rem] sm:py-20">
        <div className="w-full h-full p-2">
          <iframe
            src={vid_1}
            title="Go on the most memorable trip"
            alt="Video by Yaroslav Shuraev"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full aspect-w-16 aspect-h-9"
          ></iframe>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-gray-100 w-[22rem] h-[16rem] sm:w-full"></div>
        <div className="relative flex flex-col justify-center items-center gap-10 p-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Go on the most memorable trip
          </h1>
          <p className="text-lg font-semibold text-gray-500">
            make your trip with loved ones the most memorable trip of your life
          </p>
          <button className="w-48 min-h-14 bg-teal-600 text-white text-lg font-semibold text-center p-2">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
