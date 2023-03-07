import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

import d_trav_logo_black from "../assets/d-trav-logo-black.png";
import d_trav_logo_white from "../assets/d-trav-logo-white.png";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4">
      <img src={d_trav_logo_black} alt="D-Trav Logo" />
      <ul className="hidden md:flex text-lg font-bold text-teal-600">
        <li className="p-4">Home</li>
        <li className="p-4">Programs</li>
        <li className="p-4">Blog</li>
        <li className="p-4">About Us</li>
        <button className="text-lg font-semibold text-white bg-teal-600 w-40 h-14 ml-20">
          Register
        </button>
      </ul>

      {/* Menu & close icon */}

      <div onClick={handleNav} className="block md:hidden cursor-pointer hover:bg-teal-100">
        {!nav ? <AiOutlineClose size={20} /> : <HiMenuAlt3 size={20} />}
      </div>

      {/* Menu Drawer */}

      <div
        className={
          !nav
            ? "z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-teal-200 bg-teal-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={d_trav_logo_white} alt="D-Trav Logo" className="m-8" />
        <ul className="px-5 uppercase text-lg font-bold text-black cursor-pointer">
          <li className="p-4 border-b border-teal-700 hover:bg-teal-700 ">Home</li>
          <li className="p-4 border-b border-teal-700 hover:bg-teal-700 ">Programs</li>
          <li className="p-4 border-b border-teal-700 hover:bg-teal-700">Blog</li>
          <li className="p-4 hover:bg-teal-700 ">About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
