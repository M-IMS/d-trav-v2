import React from "react";

import d_trav_logo_white from "../assets/d-trav-logo-white.png";

const FooterSection = () => {
  return (
    <div className="bg-gray-800 w-auto h-auto py-20 sm:px-20 px-5 flex flex-col gap-20 sm:flex-row">
      <div className="w-auto sm:w-[20rem] flex flex-col gap-5">
        <img src={d_trav_logo_white} alt="D-Trav Logo" width={120} />
        <h1 className="text-5xl font-bold text-teal-600 leading-relaxed">
          Start Your Journey With Us
        </h1>
      </div>
      <div className="w-auto sm:w-[25rem] flex flex-col gap-2">
        <p className="text-2xl font-semibold text-white">Support</p>
        <div className="text-lg font-semibold text-white flex flex-col gap-2">
          <p>Customer services</p>
          <p>Email us</p>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">
          Stay up to date with our story
        </h1>
        <p className="text-lg font-normal text-white">
          Join and be the first to get the latest news about tips, promotions,
          and much more!
        </p>

        <form>
          <div class="relative w-[20rem] flex items-stretch mt-6 gap-3">
            <input
              type="text"
              class="block p-4 w-full text-base text-white bg-gray-800 border border-teal-600 border-transparent focus:outline-none focus:border-teal-300"
              placeholder="Email Address"
              required=""
            />
            <button class="text-white absolute right-2.5 bottom-2.5 bg-emtext-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-emtext-teal-600 font-medium text-base px-4 py-2">
              Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterSection;
